---
sidebar_label: history
---

# `workflows history` Command

The `workflows history` command shows the history of workflows based on the filter criteria. If no workflow id is provided, it shows the aggregated history of all workflows.

## Usage

```bash
workflows history
```

```bash
workflows history <id> --started-before <date> --started-after <date> --has-errors --limit <num>
```

### Parameters

| Parameter | Description          | Required? | Default Value |
| --------- | -------------------- | --------- | ------------- |
| `id`      | Workflows identifier | ❌        | N/A           |

### Options

| Option                    | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `--id <id>`               | [optional]: The identifier of this workflow.                        |
| `--started-before <date>` | [optional]: Filter for workflow runs that started before this date. |
| `--started-after <date>`  | [optional]: Filter for workflow runs that started after this date.  |
| `--has-errors`            | [optional]: Filter for workflow runs that have errors.              |
| `--limit <num>`           | [optional]: Limit the number of workflow runs to show.              |

## Examples

```bash
# show the history of all workflows
> workflows history
# highlight-start
collect:
  count: 264
  last_run: '2022-11-04T12:33:32Z'
  runs_with_errors: 1
  average_duration: 18s
collect_and_cleanup:
  count: 3416
  last_run: '2022-11-04T12:00:00Z'
  runs_with_errors: 0
  average_duration: 34s

# show the history of a specific workflow
> workflows history collect --started-after 2022-11-03 --started-before 2022-11-05 --has-errors --limit 10
id: 037f23c6-5c1b-11ed-bb8b-dad780437c53
task_started_at: '2022-11-04T08:31:01Z'
duration: 87.786464
errors: 19
# highlight-end
```

## Further Reading

- [Cloud Data Sync](../../../../concepts/cloud-data-sync/index.md)
- [Automation](../../../../concepts/automation/index.md)
- [Events](../../../events/index.md)
- [Workflows](../../../workflows/index.md)
