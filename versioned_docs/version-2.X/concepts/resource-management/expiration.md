---
sidebar_label: Expiration
---

# Resource Expiration

Resoto calculates the expiration time of a resource based on its expiration tag and stores the result as the value of the `metadata.expires` property.

Cleanup can be performed manually in [Resoto Shell](../../reference/components/shell.md), automatically using the [`cleanup_expired` plugin](../../reference/components/plugins/cleanup_expired.md), or via a scheduled [job](../automation/job.md).

## Supported Expiration Tags

A resource's expiration time can be defined either with an [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp or time delta:

| Tag Name                            | Description                                                                  | Example                     |
| ----------------------------------- | ---------------------------------------------------------------------------- | --------------------------- |
| `resoto:expires`                    | [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) timestamp | `2022-09-21T10:40:11+00:00` |
| `resoto:expiration` or `expiration` | Time delta from resource creation time                                       | `24h`                       |

Time deltas can be specified in the following units:

| Unit      | Abbreviations        |
| --------- | -------------------- |
| `years`   | `year`, `yr`, `y`    |
| `months`  | `month`, `mo`, `M`   |
| `days`    | `day`, `d`           |
| `weeks`   | `week`, `w`          |
| `hours`   | `hour`, `h`          |
| `minutes` | `minute`, `min`, `m` |
| `seconds` | `second`, `s`        |

Spaces within time delta strings are optional (e.g., `7d4h` and `7 days 4 hours` are equivalent).

## Related How-To Guides

- [How to Find Expired Resources](../../how-to-guides/search/find-expired-resources.md)
- [How to Clean Up Expired Resources](../../how-to-guides/cleanup/clean-up-expired-resources.md)
