---
tags: [release notes]
---

# 3.2.7

## What's Changed

### Features

- [`ba11c7fa`](https://github.com/someengineering/resoto/commit/ba11c7fa) <span class="badge badge--secondary">resotoshell</span> Also complete command aliases (#1507)
- [`7404a478`](https://github.com/someengineering/resoto/commit/7404a478) <span class="badge badge--secondary">plugins/github</span> Add repository statistics (#1513)
- [`db888a17`](https://github.com/someengineering/resoto/commit/db888a17) <span class="badge badge--secondary">resotocore</span> Allow metadata for kinds. (#1505)
- [`184e3a63`](https://github.com/someengineering/resoto/commit/184e3a63) <span class="badge badge--secondary">resoto</span> Operation needs database instance as query param (#1510)
- [`d4a827fb`](https://github.com/someengineering/resoto/commit/d4a827fb) <span class="badge badge--secondary">gcp</span> OnDemand cost data for GcpMachineTypes (#1500)
- [`a09f9b9c`](https://github.com/someengineering/resoto/commit/a09f9b9c) <span class="badge badge--secondary">resotolib</span> Add exported_at timestamp to account nodes (#1502)
- [`68e96411`](https://github.com/someengineering/resoto/commit/68e96411) <span class="badge badge--secondary">resotocore</span> Support json schema as model specification (#1504)

### Fixes

- [`ef9e5e21`](https://github.com/someengineering/resoto/commit/ef9e5e21) <span class="badge badge--secondary">resotocore</span> Wait for the same list of subscribers (#1511)
- [`fbe27260`](https://github.com/someengineering/resoto/commit/fbe27260) <span class="badge badge--secondary">resotocore</span> Do not remove nulls from the config when reading (#1512)
- [`298e7d20`](https://github.com/someengineering/resoto/commit/298e7d20) <span class="badge badge--secondary">resotoshell</span> urldecode the file name (#1508)
- [`916ca07e`](https://github.com/someengineering/resoto/commit/916ca07e) <span class="badge badge--secondary">aws</span> CloudWatch LogGroup Delete (#1506)
- [`cfbe53f5`](https://github.com/someengineering/resoto/commit/cfbe53f5) <span class="badge badge--secondary">resotocore</span> Benchmark id is defined by the file name (#1503)
- [`d684376d`](https://github.com/someengineering/resoto/commit/d684376d) <span class="badge badge--secondary">k8s</span> Use json instead of string (#1501)

### Chores

- [`0de5cf72`](https://github.com/someengineering/resoto/commit/0de5cf72) <span class="badge badge--secondary">resotolib</span> Refactor node json generation (#1514)
- [`0bad9931`](https://github.com/someengineering/resoto/commit/0bad9931) <span class="badge badge--secondary">resoto</span> Bump 3.2.7 (#1499)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.2.7`
- `somecr.io/someengineering/resotoworker:3.2.7`
- `somecr.io/someengineering/resotoshell:3.2.7`
- `somecr.io/someengineering/resotometrics:3.2.7`
