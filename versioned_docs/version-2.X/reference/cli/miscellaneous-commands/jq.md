---
sidebar_label: jq
---

# `jq` Command

The `jq` command filters and processes JSON input.

This command uses the well-known [`jq` JSON processor](https://stedolan.github.io/jq) to manipulate incoming JSON. Please refer to the [`jq` manual](https://stedolan.github.io/jq/manual) for details.

## Usage

```bash
jq <filter>
```

### Options

| Option         | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `--no-rewrite` | When this option is enabled, the jq filter is not preprocessed by Resoto and given as is to jq. |

By default, a `jq` filter expression is rewritten to match the currently defined section (see [Property Path](../../search/filters.md#property-path)). A filter expression like `.foo.bar` will be rewritten to `.reported.foo.bar`. In order to access a property via an absolute path like `/metadata.protected`, you would need to write `./metadata.protected`.

It is possible to use the `--no-rewrite` option to turn off this rewriting. Resoto will not rewrite the filter expression, sou you would need to pass: `{bar: .reported.foo.bar, protected: .metadata.protected}`.

### Parameters

| Parameter | Description                                                      | Required? | Default Value |
| --------- | ---------------------------------------------------------------- | --------- | ------------- |
| `filter`  | [`jq` filter](https://stedolan.github.io/jq/manual#Basicfilters) | ✔️        | N/A           |

## Examples

```bash title="Query EC2 instances and extract only the name property"
> search is(aws_ec2_instance) limit 2 | jq .name
# highlight-start
​build-node-1
​prod-23
# highlight-end
```

```bash title="Query EC2 instances and create a new JSON object for each entry with name and owner"
> search is(aws_ec2_instance) limit 2 | jq {name: .name, owner: .tags.owner}
# highlight-start
​name: build-node-1
​owner: frosty
​---
​name: prod-23
​owner: bog-team
# highlight-end
```

## Related Commands

- [`dump`](../format-commands/dump.md)
- [`format`](../format-commands/format.md)
- [`list`](../format-commands/list.md)
