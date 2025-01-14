---
sidebar_label: Find AWS IAM Policies Not Attached to Groups or Roles
---

# How to Find AWS IAM Policies Not Attached to Groups or Roles

```mdx-code-block
import IconExternalLink from '@theme/Icon/ExternalLink';
```

By default, IAM users, groups, and roles have no access to AWS resources. IAM policies are the means by which privileges are granted to users, groups, or roles.

It is recommended that IAM policies be applied directly to groups and roles but not users. Assigning privileges at the group or role level reduces the complexity of access management as the number of users grow. Reducing access management complexity may in turn reduce opportunity for a principal to inadvertently receive or retain excessive privileges.

:::info

This security check is part of the [CIS Amazon Web Services Benchmarks](https://cisecurity.org/benchmark/amazon_web_services) and is rated severity **low**.

:::

## Prerequisites

This guide assumes that you have already [installed](../../../getting-started/install-resoto/index.md) and configured Resoto to [collect your AWS cloud resources](../../../getting-started/configure-resoto/aws.md).

## Directions

1. Execute the following [`search` command](../../../reference/cli/search-commands/search.md) in [Resoto Shell](../../../reference/components/shell.md) or Resoto UI:

   ```bash
   > search is(aws_iam_user) {attached_policy: --> is(aws_iam_policy)} user_policies!=[] or attached_policy!=null
   # highlight-start
   ​kind=aws_iam_access_key, ..., region=resoto-poweruser
   ​kind=aws_iam_access_key, ..., account=poweruser-team
   # highlight-end
   ```

2. Pipe the `search` command into the [`dump` command](../../../reference/cli/format-commands/dump.md):

   ```bash
   > search is(aws_iam_user) {attached_policy: --> is(aws_iam_policy)} user_policies!=[] or attached_policy!=null | dump
   # highlight-start
   ​reported:
   ​  id: /aws/iam/123
   ​  name: some-name
   ​  ctime: '2022-12-05T22:53:14Z'
   ​  kind: aws_iam_access_key
   ​  age: 2mo28d
   # highlight-end
   ```

   The command output will list the details of all non-compliant [`aws_iam_access_key` resources](../../../reference/data-models/aws/index.md#aws_iam_access_key).

## Remediation

- Remove any policy attached directly to the user.
- You can find all policies by dumping the user and look for all `user_policies` and `attached_policy`.
- Use groups or roles instead.

:::note

Please refer to the [AWS IAM documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html) for details.

:::

## Further Reading

- [Search](../../../reference/search/index.md)
- [Command-Line Interface](../../../reference/cli/index.md)
- [`aws_iam_access_key` Resource Data Model](../../../reference/data-models/aws/index.md#aws_iam_access_key)

## External Links

- [CIS Amazon Web Services Benchmarks <span class="badge badge--secondary">cisecurity.org <IconExternalLink width="10" height="10" /></span>](https://cisecurity.org/benchmark/amazon_web_services)
- [AWS Documentation <span class="badge badge--secondary">docs.aws.amazon.com <IconExternalLink width="10" height="10" /></span>](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
