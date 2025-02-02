---
sidebar_label: Find AWS IAM Policies with Full Administrative Privileges
---

# How to Find AWS IAM Policies with Full Administrative Privileges

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

IAM policies are the means by which privileges are granted to users, groups, or roles. It is recommended and considered a standard security advice to grant only the permissions required.

Determine what users need to do and then craft policies for them that let the users perform only those tasks instead of allowing full administrative privileges. Providing full administrative privileges instead of restricting to the minimum set of permissions that the user is required to do exposes the resources to potentially unwanted actions.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **medium**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_policy) and policy_document.document.Statement[*].{Effect=Allow and (Action="*" and Resource="*")} and policy_attachment_count>0
   # highlight-start
   ​kind=aws_iam_policy, ..., region=resoto-poweruser
   ​kind=aws_iam_policy, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_policy) and policy_document.document.Statement[*].{Effect=Allow and (Action="*" and Resource="*")} and policy_attachment_count>0 | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_iam_policy
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_iam_policy` resources](../../../reference/data-models/aws/index.md#aws_iam_policy).

## Remediation

- Start with a minimum set of permissions and grant additional permissions as necessary, rather than starting with permissions that are too lenient and then trying to tighten them later.
- List policies to analyze if permissions are the least possible to conduct business activities.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_iam_policy` Resource Data Model](../../../reference/data-models/aws/index.md#aws_iam_policy)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
