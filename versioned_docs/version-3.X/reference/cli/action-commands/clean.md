---
sidebar_label: clean
---

# `clean` Command

The `clean` command marks resources for cleaning by setting `desired.clean=true` to the resources. Resources marked as such will be removed during the [`cleanup` phase](../../../reference/workflows/index.md#cleanup) of the next [`collect_and_cleanup` workflow](../../../reference/workflows/index.md#collect_and_cleanup-workflow) run.

The `clean` command expects query results (objects) or an array of object IDs to be piped as input. Optionally, you can provide a reason for marking the matched resources to be pruned during the next cleanup run. The reason is logged and can be useful in reviewing why a particular resource was deleted.

:::info

It is also possible to mark resources as protected using the [`protect` command](./protect.md). Protected resources will never be cleaned up.

:::

## Usage

```bash
clean <reason>
```

### Parameters

| Parameter | Description                      | Required? | Default Value |
| --------- | -------------------------------- | --------- | ------------- |
| `reason`  | Reason for marking to be cleaned | ❌        | N/A           |

## Examples

```bash title="Mark volumes that have not been accessed in the last month for cleanup, and list the ID and desired section for each"
> search is(volume) and last_access>1month | clean "Volume not accessed for longer than 1 month" | list id, /desired
# highlight-next-line
​id=vol-123, clean=true
```

```bash title="Manually mark specific resources for cleanup"
> json ["vol-123"] | clean | list id, /desired
# highlight-next-line
​id=vol-123, clean=true
```

```bash title="Mark all unused EBS volume older than 30 days that had no I/O during the past 7 days for cleaning"
> search is(volume) and ctime < -30d and atime < -7d and mtime < -7d and volume_status = available | clean "older than 30d with more then 7d of not beeing used"
```
