import os
import os.path
import time
from collections import defaultdict
from itertools import takewhile
from typing import Any, Dict, List

import requests
import urllib3
from requests import Response
from requests.adapters import HTTPAdapter
from urllib3.exceptions import InsecureRequestWarning
from urllib3.util import Retry

urllib3.disable_warnings(InsecureRequestWarning)

core = "https://localhost:8900"


def get_url(url: str, params: dict = None) -> Response:
    session = requests.Session()
    adapter = HTTPAdapter(
        max_retries=Retry(
            total=3,
            backoff_factor=0.1,
        )
    )
    session.mount("https://", adapter)
    return session.get(url, params=params, verify=False)


service_names = {
    "rds": "RDS",
    "iam": "IAM",
    "cloudtrail": "CloudTrail",
    "s3": "S3",
    "ec2": "EC2",
    "apigateway": "API Gateway",
    "config": "Config",
    "efs": "EFS",
    "kms": "KMS",
    "lambda": "Lambda",
}


def howto_from_command(check: dict, command: str) -> None:
    provider = check["provider"].upper()
    service = service_names[check["service"]]
    name = f"fix-" + check["id"].replace("_", "-")
    title = check["title"].strip(".")
    risk = check["risk"].replace(";", ",")
    result_kind = check["result_kind"]
    result_kind_short = result_kind.split("_", 2)[-1]
    remediation = check["remediation"]["text"].strip(".").replace(";", ",")
    remediation_url = check["remediation"]["url"]
    severity = check["severity"]

    text = f"""---
sidebar_label: Fix {provider} {service} {title.replace(":", "")}
---
# How to Fix {provider} {service} {result_kind_short} with {title}

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

{risk}

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **{severity}**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../reference/cli/search-commands/search.md) in [Resoto Shell](../../reference/components/shell.md) or Resoto UI:

   ```bash
   > {command}
   # highlight-start
   ​kind={result_kind}, ..., region=resoto-poweruser
   ​kind={result_kind}, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../reference/cli/format-commands/dump.md):

   ```bash
   > {command} | dump
   # highlight-start
   ​reported:
   ​  id: /aws/{check['service']}/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: {result_kind}
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`{result_kind}` resources](../../reference/data-models/aws/index.md#{result_kind}).

3. Fix detected issues by following the [remediation steps](#remediation):

     - {remediation}.

   :::note

   Please refer to the [AWS {service} documentation]({remediation_url}) for details.

   :::

## Further Reading

- [Search](../../reference/search/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [`{result_kind}` Resource Data Model](../../reference/data-models/aws/index.md#{result_kind})

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>]({remediation_url})
"""
    with open(f"../docs/how-to-guides/security/{name}.md", "w") as f:
        f.write(text)


if __name__ == "__main__":
    for check_json in get_url("https://localhost:8900/report/checks", params={"category": "security"}).json():
        detect = check_json["detect"]
        if detect.get("resoto"):
            howto_from_command(check_json, "search " + detect["resoto"].strip())
        elif detect.get("resoto_cmd"):
            howto_from_command(check_json, detect["resoto_cmd"].strip())
