---
sidebar_position: 4
---

# Automation

Maintaining a sound cloud infrastructure includes tasks that need to be performed regularly. Resoto can help you automate many of these tasks by defining **jobs**.

Examples of these tasks include:

- enforcing company policies (e.g., [tagging](../../how-to-guides/cleanup/clean-up-untagged-resources.md)),
- sending notifications about critical infrastructure changes (e.g., to [Slack](../../how-to-guides/alerting/send-slack-notifications/index.md), [Discord](../../how-to-guides/alerting/send-discord-notifications/index.md), or [PagerDuty](../../how-to-guides/alerting/create-pagerduty-alerts/index.md)), and
- cleaning up unused resources in your development accounts.

## Jobs

**A job is a sequence of commands executed by Resoto at a specific time interval or when a specific event is emitted.**

Jobs in Resoto are similar to Unix cron jobs. However, while cron jobs run only on a specific schedule, Resoto jobs can also be triggered based by events.

![Job Overview](./img/resoto-jobs-intro.png)

The typical structure of a job has three parts: a [trigger](#job-trigger), an optional [filter](#job-filters), and an [action](#job-actions).

### Job Trigger

**The job trigger defines when a job is executed.**

There are three types of job triggers: [schedule triggers](#schedule-trigger), [event triggers](#event-trigger), and [combined triggers](#combined-trigger).

#### Schedule Trigger

**A schedule trigger executes a job at a specific time interval described by a [cron expression](https://crontab.guru).**

<details>
<summary>Examples</summary>
<div>

- Every 5 minutes
  ```bash
  --schedule "*/5 * * * *"
  ```
- Every day at 3:00am
  ```bash
  --schedule "0 3 * * *"
  ```
- Every Monday at 4:00am
  ```bash
  --schedule "0 4 * * MON"
  ```
- Every New Year's Eve at 11:59pm
  ```bash
  --schedule "59 23 31 12 *"
  ```

</div>
</details>

:::tip

See [How to Create a Scheduled Job](../../how-to-guides/automation/create-a-scheduled-job.md) for step-by-step instructions describing how to create a job with a schedule trigger.

:::

#### Event Trigger

**An event trigger executes a job when a specific event is emitted by Resoto.**

Resoto updates the state of resources in the four steps of the [`collect_and_cleanup` workflow](../../reference/workflows/index.md#collect_and_cleanup-workflow): [`collect`](../../reference/workflows/index.md#collect), [`cleanup_plan`](../../reference/workflows/index.md#cleanup_plan), [`cleanup`](../../reference/workflows/index.md#cleanup), and [`generate_metrics`](../../reference/workflows/index.md#generate_metrics).

Each of these steps emits [events](../../reference/events/index.md) that can be used to trigger jobs.

<details>
<summary>Examples</summary>
<div>

- When resource collection is complete and the database reflects the latest state of your resources
  ```bash
  --wait-for-event collect_done
  ```
- When the cleanup planning process has started to mark resources for cleanup
  ```bash
  --wait-for-event cleanup_plan
  ```

</div>
</details>

:::info

See [Events](../../reference/events/index.md) for a list of events emitted by Resoto.

:::

:::tip

See [How to Create an Event-Based Job](../../how-to-guides/automation/create-an-event-based-job.md) for step-by-step instructions describing how to create a job with an event trigger.

:::

#### Combined Trigger

**A combined trigger combines a schedule trigger with an event trigger, and executes a job when a specific event is emitted after a schedule trigger is fired.**

Combined triggers are useful if you want to perform an action on a specific schedule, but only after a specific event is fired.

<details>
<summary>Example</summary>
<div>

Let's say you want to clean up development accounts at the end of each week.

To do so, you could define a [schedule trigger](#schedule-trigger) in addition to specifying the `cleanup_plan` [event trigger](#event-trigger):

```bash
--schedule "0 22 * * FRI" --wait-for-event cleanup_plan
```

The above combined trigger executes the job based on the latest state of resources after 10pm every Friday evening.

</div>
</details>

:::tip

See [How to Create a Scheduled Event-Based Job](../../how-to-guides/automation/create-a-scheduled-event-based-job.md) for step-by-step instructions describing how to create a job with a combined trigger.

:::

### Job Filters & Actions

The scope and functionality of a job is defined by [filters](#job-filters) and [actions](#job-actions), respectively.

To perform more complex automations, it is possible to define multiple sets of filters and actions delimited by a semicolon. Each set of filters and actions is executed sequentially when the job is triggered.

#### Job Filters

**A job filter is an optional [search](../../reference/search/index.md) that returns the resources of interest.** Only resources matching the filter will be processed by the job.

<details>
<summary>Example</summary>
<div>

- Instances without an owner tag in the dev or playground accounts
  ```bash
  search is(instance) and tag.owner==null and /ancestors.account.reported.name in ["dev", "playground"]
  ```

</div>
</details>

The result of a job filter is a list of resources that is piped as input to [job actions](#job-actions).

#### Job Actions

**A job action is an [action command](../../reference/cli/action-commands/index.md) performed on resources matching the optional [filter](#job-filters).**

<details>
<summary>Examples</summary>
<div>

- Update resource tags using the [`tag update` command](../../reference/cli/action-commands/tag/update.md)
  ```bash
  search ... | tag update owner=team-cumulus
  ```
- Delete resource tags using the [`tag delete` command](../../reference/cli/action-commands/tag/delete.md)
  ```bash
  search ... | tag delete costcenter
  ```
- Mark resources for cleanup using the [`clean` command](../../reference/cli/action-commands/clean.md)
  ```bash
  search ... | clean "Reason for cleanup"
  ```
- [Create PagerDuty alerts](../../how-to-guides/alerting/create-pagerduty-alerts/index.md) using the `pagerduty` [custom command](../../reference/cli/index.md#custom-commands)
  ```bash
  search ... | pagerduty summary="Reason for the alert" dedup_key="xyz"
  ```
- [Send Prometheus Alertmanager alerts](../../how-to-guides/alerting/send-prometheus-alertmanager-alerts/index.md) using the `alertmanager` [custom command](../../reference/cli/index.md#custom-commands)
  ```bash
  search ... | alertmanager name="Description of the alert"
  ```
- [Send Slack notifications](../../how-to-guides/alerting/send-slack-notifications/index.md) the `slack` [custom command](../../reference/cli/index.md#custom-commands)
  ```bash
  search ... | slack title="Description of the alert"
  ```
- [Send Discord notifications](../../how-to-guides/alerting/send-discord-notifications/index.md) the `discord` [custom command](../../reference/cli/index.md#custom-commands)
  ```bash
  search ... | discord title="Description of the alert"
  ```
- Stop running AWS EC2 instances using the `aws` command
  ```bash
  search is(aws_ec2_instance) and instance_status=running and ... | aws ec2 stop-instances --instance-ids {id}
  ```
- Start stopped AWS EC2 instances using the `aws` command
  ```bash
  search is(aws_ec2_instance) and instance_status=stopped and ... | aws ec2 start-instances --instance-ids {id}
  ```
- Send chunked data to a webhook server using the [`http` command](../../reference/cli/action-commands/http.md)
  ```bash
  search ... | chunk 50 | http POST my.node.org/handle
  ```
- Protect resources from cleanup using the [`protect` command](../../reference/cli/action-commands/protect.md)
  ```bash
  search ... | protect
  ```
- Edit resource metadata using the [`set_metadata` command](../../reference/cli/action-commands/set_metadata.md)
  ```bash
  search ... | set_metadata owner=team-cumulus
  ```

</div>
</details>

### Job Management

Jobs are persisted in the Resoto database. The [`jobs` command](../../reference/cli/action-commands/jobs/index.md) allows you to [add](../../reference/cli/action-commands/jobs/add.md), [update](../../reference/cli/action-commands/jobs/update.md), [delete](../../reference/cli/action-commands/jobs/delete.md), and [list](../../reference/cli/action-commands/jobs/list.md) jobs.

:::tip

See [Related How-To Guides](#related-how-to-guides) below for step-by-step instructions to create jobs.

:::

<details>
<summary>Examples</summary>
<div>

- Add a job that sends a Discord notification when compute instances without an `owner` tag are detected
  ```bash
  > jobs add --id no_owner_tag_in_dev --wait-for-event collect_done 'search is(instance) and tag.owner==null and /ancestors.account.reported.name in ["dev", "playground"] | discord --title "[DEV] Compute instances without owner tag" --message "There are compute instances in the dev accounts without owner tag:"'
  ```
- Add a job that marks compute instances without an `owner` tag for cleanup every Friday evening
  ```bash
  > jobs add --id no_owner_mark_cleanup --schedule "0 22 * * FRI" --wait-for-event cleanup_plan 'search is(instance) and tag.owner==null and /ancestors.account.reported.name in ["dev", "playground"] | clean "Compute instances without owner tag"'
  ```
- List all jobs
  ```bash
  > jobs list
  # highlight-start
  ​id: no_owner_tag_in_dev
  ​command: search is(instance) and tag.owner==null and /ancestors.account.reported.name
  ​  in ["dev", "playground"] | discord --title "[DEV] Compute instances without owner tag"
  ​  --message "There are compute instances in the dev accounts without owner tag:"
  ​active: true
  ​trigger:
  ​  message_type: collect_done
  ​
  ​---
  ​id: no_owner_mark_cleanup
  ​command: search is(instance) and tag.owner==null and /ancestors.account.reported.name
  ​  in ["dev", "playground"] | clean "Compute instances without owner tag"
  ​active: true
  ​trigger:
  ​  cron_expression: 0 22 * * FRI
  ​wait:
  ​  message_type: cleanup_plan
  # highlight-end
  ```

</div>
</details>

## Related How-To Guides

- [How to Create a Scheduled Event-Based Job](../../how-to-guides/automation/create-a-scheduled-event-based-job.md)
- [How to Create a Scheduled Job](../../how-to-guides/automation/create-a-scheduled-job.md)
- [How to Create an Event-Based Job](../../how-to-guides/automation/create-an-event-based-job.md)

## Further Reading

- [Cloud Data Sync](../cloud-data-sync/index.md)
- [`jobs` Command](../../reference/cli/action-commands/jobs/index.md)
- [Command-Line Interface](../../reference/cli/index.md)
- [Events](../../reference/events/index.md)
- [Workflows](../../reference/workflows/index.md)
