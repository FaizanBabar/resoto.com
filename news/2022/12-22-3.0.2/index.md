---
tags: [release notes]
---

# 3.0.2

## What's Changed

### Features

- [`01b0d52b`](https://github.com/someengineering/resoto/commit/01b0d52b) <span class="badge badge--secondary">k8s</span> Allow defining access as kubernetes config (#1354)
- [`7a790dd8`](https://github.com/someengineering/resoto/commit/7a790dd8) <span class="badge badge--secondary">resotocore</span> Allow to search nested complex objects inside arrays (#1355)
- [`e484f809`](https://github.com/someengineering/resoto/commit/e484f809) <span class="badge badge--secondary">plugins/aws</span> Support CloudFront Service (#1350)

### Fixes

- [`bfda0808`](https://github.com/someengineering/resoto/commit/bfda0808) <span class="badge badge--secondary">aws</span> Fix CloudFront collection (#1359)
- [`8423e996`](https://github.com/someengineering/resoto/commit/8423e996) <span class="badge badge--secondary">resotocore</span> Ignore predicates in context for list rendering (#1357)
- [`5ef20b72`](https://github.com/someengineering/resoto/commit/5ef20b72) <span class="badge badge--secondary">resotocore</span> Read search arguments more gracefully (#1356)
- [`fea141c0`](https://github.com/someengineering/resoto/commit/fea141c0) <span class="badge badge--secondary">plugins/aws</span> Add AwsCloudwatchMetricData API calls to collect api call list (#1353)

### Chores

- [`d9b86b84`](https://github.com/someengineering/resoto/commit/d9b86b84) <span class="badge badge--secondary">resoto</span> Bump 3.0.2 (#1352)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.0.2`
- `somecr.io/someengineering/resotoworker:3.0.2`
- `somecr.io/someengineering/resotoshell:3.0.2`
- `somecr.io/someengineering/resotometrics:3.0.2`
