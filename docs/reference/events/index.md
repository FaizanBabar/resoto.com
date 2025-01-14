# Events

Various events are emitted to the Resoto event bus.

It is possible to create custom automations that react to these events by defining [jobs](../../concepts/automation/index.md#jobs).

External components can also subscribe to the event bus via the [websocket API](../api/web-socket-register-as-event-listener-and-receive-all-events.api.mdx).

## Cloud Data Sync Events

[Resoto continuously synchronizes cloud data](../../concepts/cloud-data-sync/index.md) to ensure that you always have the latest information about your cloud resources.

### `collect_and_cleanup` Workflow Events

The [`collect_and_cleanup` workflow](../workflows/index.md#collect_and_cleanup-workflow) is triggered every hour by default.

![`collect_and_cleanup` phases](./img/collect_and_cleanup.png)

#### `collect` Events

In the `collect` phase, resources are collected from all configured cloud provider and synchronized with the internal graph. At the conclusion of this phase, the graph database contains the latest state of all resources.

| Event Name          | Event Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pre_collect`       | This event is emitted before collection is started.                                                                                                     |
| `collect`           | Resource collectors listen on this event to begin resource collection.                                                                                  |
| `merge_outer_edges` | This event is emitted after collection is done.                                                                                                         |
| `post_collect`      | This event is emitted after all outer edges have been merged.<br />_Custom logic to react to resource changes should define this event as the trigger._ |

### `cleanup_plan` Events

During the `cleanup_plan` phase, Resoto computes which resources should be cleaned up, and marks them for deletion during the subsequent `cleanup` phase.

:::note

Resoto ships with [built-in cleanup plugins](../components/plugins/index.md) that can be enabled in the `resoto.worker` configuration.

:::

| Event Name          | Event Description                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------- |
| `pre_cleanup_plan`  | This event is emitted before the cleanup is planned.                                        |
| `cleanup_plan`      | Cleanup [plugins](../components/plugins/index.md) bundled with Resoto listen on this event. |
| `post_cleanup_plan` | This event is emitted after the cleanup is planned.                                         |

### `cleanup` Events

In the `cleanup` phase, all resources marked for cleanup are deleted if [cleanup is enabled](../../concepts/resource-management/cleanup.md#enabling-cleanup).

Resources are deleted in the order mandated by their dependencies and relationships to other resources.

| Event Name     | Event Description                                                                |
| -------------- | -------------------------------------------------------------------------------- |
| `pre_cleanup`  | This event is emitted before the cleanup is performed.                           |
| `cleanup`      | Resource collectors listen on this event to delete resources marked for cleanup. |
| `post_cleanup` | This event is emitted after the cleanup is performed.                            |

### `generate_metrics` Events

As its name suggests, metrics are generated and provided to the time-series database during the `generate_metrics` phase.

In this phase, Resoto performs several queries to get updated metrics. Since the incoming data will only change during the next collect run, metrics are generated here and cached until the next collection.

| Event Name              | Event Description                                     |
| ----------------------- | ----------------------------------------------------- |
| `pre_generate_metrics`  | This event is emitted before metrics are generated.   |
| `generate_metrics`      | Metrics generation begins when this event is emitted. |
| `post_generate_metrics` | This event is emitted after metrics are generated.    |

## Resoto internal events

Resoto also has a set of internal events that are emitted.

### Web Socket Connection Events

| Event Name                      | Event Description                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------- |
| `message-listener-connected`    | Whenever a new listener attaches to the event bus, this event is emitted.                   |
| `message-listener-disconnected` | Whenever an existing listener drops the connection to the event bus, this event is emitted. |

### Configuration Events

| Event Name       | Event Description                                                          |
| ---------------- | -------------------------------------------------------------------------- |
| `config-updated` | Any config that is updated via the config service will emit such an event. |
| `config-deleted` | Any config that is deleted via the config service will emit such an event. |

### Task Events

When [jobs](../cli/action-commands/jobs/index.md) or [workflows](../cli/action-commands/workflows/index.md) are executed, they run as tasks inside Resoto. A task can produce the following events:

| Event Name     | Event Description                                        |
| -------------- | -------------------------------------------------------- |
| `task_started` | The task has been started.                               |
| `progress`     | Longer running tasks may produce progress update events. |
| `task_end`     | The task has ended.                                      |

## Further Reading

- [Cloud Data Sync](../../concepts/cloud-data-sync/index.md)
- [Automation](../../concepts/automation/index.md)
- [Workflows](../workflows/index.md)
