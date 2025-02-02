---
sidebar_label: run
---

# `jobs run` Command

The `jobs run` command runs a job.

## Usage

```bash
jobs run <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

## Examples

```bash title="Run a job directly without waiting for its triggers"
> jobs run say-hello
# highlight-next-line
​Job say-hello started with id a4bb64cc-7385-11ec-b2cb-dad780437c53.
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
