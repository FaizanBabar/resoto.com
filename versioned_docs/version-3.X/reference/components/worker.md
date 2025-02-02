---
sidebar_position: 2
sidebar_label: Worker
---

# Resoto Worker

[Resoto Worker (`resotoworker`)](https://github.com/someengineering/resoto/tree/main/resotoworker) performs all of the collection and cleanup work in Resoto.

A worker is connected to [Resoto Core](./core.md) over a websocket connection and simply awaits instructions. By default, it subscribes to the `collect` and `cleanup` actions as well as `tag` tasks.

Resoto Worker loads collector plugins like AWS, GCP, Slack, Onelogin, etc. Only those plugins have knowledge about how to communicate with each cloud, how to collect resources, and how to clean them up.

There can be one or more workers in a Resoto deployment. A single worker can collect many clouds, or you could have multiple workers each collecting one cloud or account.

Once a worker is started, you do not need to interact with it at all. It will simply wait for work and do its job.

```bash title="Resoto Worker Docker image"
somecr.io/someengineering/resotoworker:{{imageTag}}
```

## Usage

### Options

| Option                                               | Description                         | Default                  |
| ---------------------------------------------------- | ----------------------------------- | ------------------------ |
| `--subscriber-id <SUBSCRIBER_ID>`                    | Unique subscriber ID                | `resoto.worker`          |
| `--psk <PSK>`                                        | Pre-shared key                      |                          |
| `--verbose`, `-v`                                    | Verbose logging                     |                          |
| `--quiet`                                            | Only log errors                     |                          |
| `--resotocore-uri <RESOTOCORE_URI>`                  | [Resoto Core](./core.md) URI        | `https://localhost:8900` |
| `--override CONFIG_OVERRIDE [<CONFIG_OVERRIDE> ...]` | Override config attribute(s)        |                          |
| `--ca-cert <CA_CERT>`                                | Path to custom CA certificate file  |                          |
| `--cert <CERT>`                                      | Path to custom certificate file     |                          |
| `--cert-key <CERT_KEY>`                              | Path to custom certificate key file |                          |
| `--cert-key-pass <CERT_KEY_PASS>`                    | Passphrase for certificate key file |                          |
| `--no-verify-certs`                                  | Turn off certificate verification   |                          |

### Environment Variables

CLI options can also be set via environment variables. The environment variable name is the same as the option name, but in uppercase with the prefix `RESOTOWORKER_` and dashes replaced by underscores.

For example, `--fork` would become `RESOTOWORKER_FORK=true`.

## Details

The following are details on how Resoto Worker works internally and how it integrates with [Resoto Core](./core.md).

### Plugins

Upon start up, Resoto Worker discovers and loads all of the available [plugins](./plugins/index.md). There are two types of plugins. The first are collector plugins, which are responsible for collecting resources from a cloud. The second are action plugins, which wait for a certain action to occur and are responsible for things like flagging resources for cleanup, tagging or protecting them.

### Actions and Tasks

Think of actions and tasks like topics and queues in a messaging system. Actions are broadcast to everyone subscribed for that action. A task is always given to exactly one worker that knows how to handle it.

### Actions

When the collect workflow within resotocore is triggered (by either an event or a schedule or because the user manually triggered it), resotocore will broadcast a "start collecting all the cloud accounts you know about" message to all the subscribed workers. Once all the workers finish collecting and sent their graph to the core, the workflow will proceed to the next step which would be plan_cleanup. This one tells anyone interested to start planing their cleanup based on the just collected graph data. Once everyone has planed their cleanup and flagged resources that should get cleaned up with the desired.clean = true flag, the workflow proceeds to the cleanup step which again notifies anyone subscribed to now perform cleanup of those flagged resources. Because the cleaner within Resoto Worker has knowledge of all dependencies in the graph, it will ensure that resources are cleaned up in the right order.

### Tasks

When a plugin or a user decides that a resource tag should be added, changed or removed, e.g. by running

```
> search id = i-039e06bb2539e5484 | tag update owner lukas
```

[Resoto Core](./core.md) will put this tagging task onto a task queue. This task is then consumed by a Resoto Worker that knows how to perform tagging for that particular resource and its particular cloud and account. In our example above where we are setting the tag `owner: lukas` for an AWS EC2 instance with ID `i-039e06bb2539e5484` the task would be given to a Resoto Worker that knows how to update AWS EC2 instance tags in that resources account.
