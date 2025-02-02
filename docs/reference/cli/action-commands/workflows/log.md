---
sidebar_label: log
---

# `workflows log` Command

The `workflows log` command shows the logs of a workflow run.

## Usage

```bash
workflows log <workflow-run-id>
```

### Parameters

| Parameter         | Description             | Required? | Default Value |
| ----------------- | ----------------------- | --------- | ------------- |
| `workflow-run-id` | Workflow run identifier | ✔️        | N/A           |

## Examples

```bash
> workflows log 037f23c6-5c1b-11ed-bb8b-dad780437c53
# highlight-start
2022-11-04T08:31:01Z: collect: collect: aws: 882347060974: collect-global: in progress
[aws:123456789] Access Denied to aws_account 123456789
[aws:234567890] An AWS UnauthorizedOperation error occurred while collecting account test
# highlight-end
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
