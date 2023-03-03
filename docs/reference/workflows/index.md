# Workflows

Resoto's resource collection and automated jobs are triggered as part of a series of steps called a **workflow**. It is possible to create your own [automations](../../concepts/automation/index.md) that hook into the events emitted by workflows.

:::info

The [`workflows` command](../cli/action-commands/workflows/index.md) can be used to inspect and run workflows on demand.

:::

## `collect_and_cleanup` Workflow

**By default, Resoto triggers the `collect_and_cleanup` workflow every hour.**

The `collect_and_cleanup` workflow has four steps: [`collect`](#collect), [`cleanup_plan`](#cleanup_plan), [`cleanup`](#cleanup), and [`generate_metrics`](#generate_metrics).

:::info

See [Events](../events/index.md#collect_and_cleanup-workflow-events) for a list of events emitted by the `collect_and_cleanup` workflow.

:::

:::tip

See [Workflow Schedules](../configuration/index.md#workflow-schedules) for details on how to configure the schedule of the `collect_and_cleanup` workflow.

:::

### `collect`

In the `collect` phase, resources are collected from all configured cloud provider and synchronized with the internal graph.

At the conclusion of this phase, the graph database contains the latest state of all resources.

### `cleanup_plan`

During the `cleanup_plan` phase, Resoto computes which resources should be cleaned up, and marks them for deletion during the subsequent `cleanup` phase.

:::tip

Resoto ships with built-in cleanup [plugins](../components/plugins/index.md) that can be enabled in the `resoto.worker` configuration.

:::

### `cleanup`

In the `cleanup` phase, all resources marked for cleanup are deleted if [cleanup is enabled](../../concepts/resource-management/cleanup.md#enabling-cleanup).

Resources are deleted in the order mandated by their dependencies and relationships to other resources.

:::note

Cleanup is disabled by default. Please refer to [Resource Cleanup](../../concepts/resource-management/cleanup.md) for details.

:::

### `generate_metrics`

As its name suggests, metrics are generated and provided to the time-series database during the `generate_metrics` phase.

In this phase, Resoto performs several queries to get updated metrics. Since the incoming data will only change during the next collect run, metrics are generated here and cached until the next collection.

:::tip

You can adjust the metrics that should be generated by editing the Resoto Metrics [configuration](../configuration/index.md).

:::

## Further Reading

- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Automation](../../concepts/automation/index.md)
- [Events](../events/index.md)
- [`workflows` Command](../cli/action-commands/workflows/index.md)