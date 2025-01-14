---
sidebar_label: Find AWS Account Root Users Without Hardware MFA Enabled
---

# How to Find AWS Account Root Users Without Hardware MFA Enabled

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

The root account is the most privileged user in an AWS account. Multi-factor authentication (MFA) adds an extra layer of protection on top of a username and password.

When <abbr title="multi-factor authentication">MFA</abbr> is enabled, a user is prompted for an authentication code from their configured MFA device in addition to their username and password.

For Level 2, it is recommended that the root account be protected with hardware MFA.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **critical**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_root_user) and user_virtual_mfa_devices!=null and user_virtual_mfa_devices!=[]
   # highlight-start
   ​kind=aws_root_user, ..., region=resoto-poweruser
   ​kind=aws_root_user, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_root_user) and user_virtual_mfa_devices!=null and user_virtual_mfa_devices!=[] | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_root_user
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_root_user` resources](../../../reference/data-models/aws/index.md#aws_root_user).

## Remediation

- Go to IAM console.
- Navigate to Dashboard.
- Activate MFA on your root account.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user_manage_mfa) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_root_user` Resource Data Model](../../../reference/data-models/aws/index.md#aws_root_user)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html#id_root-user_manage_mfa)
