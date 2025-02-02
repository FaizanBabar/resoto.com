---
tags: [release notes]
---

# 3.1.0

## What's Changed

### Features

- [`ac620786`](https://github.com/someengineering/resoto/commit/ac620786) <span class="badge badge--secondary">aws</span> Do not unregister during shutdown (#1388)
- [`9fcd094c`](https://github.com/someengineering/resoto/commit/9fcd094c) <span class="badge badge--secondary">resotocore</span> Use UI as dependency (#1384)
- [`882d563c`](https://github.com/someengineering/resoto/commit/882d563c) <span class="badge badge--secondary">plugins/aws</span> Support for Aws SageMaker (#1372)
- [`16b3aa5e`](https://github.com/someengineering/resoto/commit/16b3aa5e) <span class="badge badge--secondary">resoto</span> Security and compliance Checks (#1371)

### Fixes

- [`4fc338f1`](https://github.com/someengineering/resoto/commit/4fc338f1) <span class="badge badge--secondary">plugins/gcp</span> Fix the GCP collection issues (#1389)
- [`40395ff9`](https://github.com/someengineering/resoto/commit/40395ff9) <span class="badge badge--secondary">aws</span> Accumulate same errors and report them combined (#1385)
- [`79ab19cd`](https://github.com/someengineering/resoto/commit/79ab19cd) <span class="badge badge--secondary">aws</span> Fix handling of ecs, beanstalk and sns (#1386)
- [`3b3242fc`](https://github.com/someengineering/resoto/commit/3b3242fc) <span class="badge badge--secondary">aws</span> Fix predelete was not called (#1387)
- [`cedab1d3`](https://github.com/someengineering/resoto/commit/cedab1d3) <span class="badge badge--secondary">aws</span> Fix SQS handling (#1382)
- [`2b6f2c79`](https://github.com/someengineering/resoto/commit/2b6f2c79) <span class="badge badge--secondary">aws</span> Define optional properties as optional (#1383)
- [`c02e4b3c`](https://github.com/someengineering/resoto/commit/c02e4b3c) <span class="badge badge--secondary">docker</span> set `provenance: false` on docker/build-push-action (#1381)
- [`5e5abebc`](https://github.com/someengineering/resoto/commit/5e5abebc) <span class="badge badge--secondary">resotocore</span> Load checks and benchmarks from static folder (#1380)

### Chores

- [`8094ee96`](https://github.com/someengineering/resoto/commit/8094ee96) <span class="badge badge--secondary">resoto</span> Next release (#1377)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.1.0`
- `somecr.io/someengineering/resotoworker:3.1.0`
- `somecr.io/someengineering/resotoshell:3.1.0`
- `somecr.io/someengineering/resotometrics:3.1.0`
