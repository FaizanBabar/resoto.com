---
sidebar_label: deactivate
---

# `jobs deactivate` Command

The `jobs deactivate` command deactivates the triggers of a job, so that the job is not started if the triggers are fired.

## Usage

```bash
jobs deactivate <id>
```

### Parameters

| Parameter | Description    | Required? | Default Value |
| --------- | -------------- | --------- | ------------- |
| `id`      | Job identifier | ✔️        | N/A           |

## Examples

```bash
> jobs deactivate say-hello
# highlight-start
​id: say-hello
​command: echo hello world
​active: false
​trigger:
​  cron_expression: '* * * * *'
# highlight-end
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
