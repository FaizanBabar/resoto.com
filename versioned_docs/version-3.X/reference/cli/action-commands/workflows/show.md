---
sidebar_label: show
---

# `workflows show` Command

The `workflows show` command shows the definition of a workflow.

## Usage

```bash
workflows show <id>
```

### Parameters

| Parameter | Description          | Required? | Default Value |
| --------- | -------------------- | --------- | ------------- |
| `id`      | Workflows identifier | ✔️        | N/A           |

## Examples

```bash
> workflows show collect_and_cleanup
# highlight-start
id: collect_and_cleanup
name: collect_and_cleanup
steps:
- action:
    message_type: pre_collect
  name: pre_collect
  on_error: Continue
  timeout: 10.0
- action:
    message_type: collect
  name: collect
  on_error: Continue
  timeout: 10.0
- action:
    message_type: post_collect
  name: post_collect
  on_error: Continue
  timeout: 10.0
- action:
    message_type: pre_cleanup_plan
  name: pre_cleanup_plan
  on_error: Continue
  timeout: 10.0
- action:
    message_type: cleanup_plan
  name: cleanup_plan
  on_error: Continue
  timeout: 10.0
- action:
    message_type: post_cleanup_plan
  name: post_cleanup_plan
  on_error: Continue
  timeout: 10.0
- action:
    message_type: pre_cleanup
  name: pre_cleanup
  on_error: Continue
  timeout: 10.0
- action:
    message_type: cleanup
  name: cleanup
  on_error: Continue
  timeout: 10.0
- action:
    message_type: post_cleanup
  name: post_cleanup
  on_error: Continue
  timeout: 10.0
- action:
    message_type: pre_generate_metrics
  name: pre_generate_metrics
  on_error: Continue
  timeout: 10.0
- action:
    message_type: generate_metrics
  name: generate_metrics
  on_error: Continue
  timeout: 10.0
- action:
    message_type: post_generate_metrics
  name: post_generate_metrics
  on_error: Continue
  timeout: 10.0
triggers:
- filter_data: null
  message_type: start_collect_and_cleanup_workflow
- cron_expression: 0 * * * *
on_surpass: Wait
# highlight-end
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
