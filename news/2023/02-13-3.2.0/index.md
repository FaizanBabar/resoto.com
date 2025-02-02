---
tags: [release notes]
---

# 3.2.0

## What's Changed

### Features

- [`354756ae`](https://github.com/someengineering/resoto/commit/354756ae) <span class="badge badge--secondary">resoto</span> edges for database resources (#1429)
- [`701af437`](https://github.com/someengineering/resoto/commit/701af437) <span class="badge badge--secondary">resotocore</span> Add pagerduty notification command (#1428)
- [`8e73ac64`](https://github.com/someengineering/resoto/commit/8e73ac64) <span class="badge badge--secondary">gcp</span> Add edges to container resource models in next gen collector (#1426)
- [`c0f2557c`](https://github.com/someengineering/resoto/commit/c0f2557c) <span class="badge badge--secondary">gcp</span> Add edges to compute resource models in next gen collector pt. 2 (#1418)
- [`570ca682`](https://github.com/someengineering/resoto/commit/570ca682) <span class="badge badge--secondary">resotocore</span> AWS CIS Benchmark section 4 Monitoring (#1417)
- [`9decf6eb`](https://github.com/someengineering/resoto/commit/9decf6eb) <span class="badge badge--secondary">resoto</span> Test valid successor types (#1422)
- [`defd0a3a`](https://github.com/someengineering/resoto/commit/defd0a3a) <span class="badge badge--secondary">resotolib</span> Support RDS Clusters (#1420)
- [`b4c1b78e`](https://github.com/someengineering/resoto/commit/b4c1b78e) <span class="badge badge--secondary">resoto</span> Bump cryptography from 39.0.0 to 39.0.1 in /resotolib (#1419)
- [`0520665a`](https://github.com/someengineering/resoto/commit/0520665a) <span class="badge badge--secondary">aws</span> AWS CIS Section 3 Logging (#1410)
- [`27d1e285`](https://github.com/someengineering/resoto/commit/27d1e285) <span class="badge badge--secondary">resoto</span> downgrade to tox 3.28.0 (#1411)
- [`4f3b6511`](https://github.com/someengineering/resoto/commit/4f3b6511) <span class="badge badge--secondary">aws</span> Collect CloudTrail resources (#1407)
- [`3cbaba1a`](https://github.com/someengineering/resoto/commit/3cbaba1a) <span class="badge badge--secondary">plugins/aws</span> Automatic AWS policy and CF template generator (#1404)
- [`7bc1c228`](https://github.com/someengineering/resoto/commit/7bc1c228) <span class="badge badge--secondary">gcp</span> Add edges to resource models in next gen collector pt. 1 (#1394)
- [`d36bc1e5`](https://github.com/someengineering/resoto/commit/d36bc1e5) <span class="badge badge--secondary">resotocore</span> Hold and collect progress updates emitted to the event bus (#1399)
- [`c27107c9`](https://github.com/someengineering/resoto/commit/c27107c9) <span class="badge badge--secondary">gcp</span> Support testing edges (#1396)
- [`6087fc78`](https://github.com/someengineering/resoto/commit/6087fc78) <span class="badge badge--secondary">aws</span> CIS 1.5 report: Section 1 Access Management and Section 2 Storage (#1392)
- [`975987b8`](https://github.com/someengineering/resoto/commit/975987b8) <span class="badge badge--secondary">resotocore</span> Make regexp search case-insensitive (#1395)
- [`ab07b601`](https://github.com/someengineering/resoto/commit/ab07b601) <span class="badge badge--secondary">gcp</span> Google cloud collector with complete model (#1366)

### Fixes

- [`cae677c3`](https://github.com/someengineering/resoto/commit/cae677c3) <span class="badge badge--secondary">resotolib</span> Use latest networkx by unsetting cached properties (#1434)
- [`624568e1`](https://github.com/someengineering/resoto/commit/624568e1) <span class="badge badge--secondary">resotoworker</span> Do not collect multiple times for the same task id. (#1432)
- [`9ab84a84`](https://github.com/someengineering/resoto/commit/9ab84a84) <span class="badge badge--secondary">aws</span> Complete the list of retryable errors (#1433)
- [`e8ecd7f1`](https://github.com/someengineering/resoto/commit/e8ecd7f1) <span class="badge badge--secondary">aws</span> Fix cyclic dependency and log the cycle (#1430)
- [`3bbe582b`](https://github.com/someengineering/resoto/commit/3bbe582b) <span class="badge badge--secondary">resotocore</span> Fix predefined custom commands and make them available in existing configurations (#1425)
- [`477c6bb1`](https://github.com/someengineering/resoto/commit/477c6bb1) <span class="badge badge--secondary">plugins/vsphere</span> Update VSphere Client to use new Config syntax (#1427)
- [`887f7ebd`](https://github.com/someengineering/resoto/commit/887f7ebd) <span class="badge badge--secondary">aws</span> Fix duplicate instance types (#1424)
- [`8bf66250`](https://github.com/someengineering/resoto/commit/8bf66250) <span class="badge badge--secondary">aws</span> Fix jq expression (#1416)
- [`51052ce3`](https://github.com/someengineering/resoto/commit/51052ce3) <span class="badge badge--secondary">aws</span> AWS operation and parameter names (#1421)
- [`c11dae6e`](https://github.com/someengineering/resoto/commit/c11dae6e) <span class="badge badge--secondary">aws</span> Only collect trail in home account and region (#1415)
- [`3ab87c4a`](https://github.com/someengineering/resoto/commit/3ab87c4a) <span class="badge badge--secondary">aws</span> EKS reference to autoscaling group, EFS delete and multi region Cloud Trails (#1413)
- [`6536a95d`](https://github.com/someengineering/resoto/commit/6536a95d) <span class="badge badge--secondary">plugins/aws</span> Fix inline policy length (#1414)
- [`c7bd4f74`](https://github.com/someengineering/resoto/commit/c7bd4f74) <span class="badge badge--secondary">plugin/aws</span> Fix E713 in awspolicygen (#1412)
- [`d7532839`](https://github.com/someengineering/resoto/commit/d7532839) <span class="badge badge--secondary">aws</span> add missing edges (#1409)
- [`c97dac85`](https://github.com/someengineering/resoto/commit/c97dac85) <span class="badge badge--secondary">aws</span> fix deletion dependencies with EC2 Subnets and EC2 Security Groups (#1403)
- [`25e2a4ce`](https://github.com/someengineering/resoto/commit/25e2a4ce) <span class="badge badge--secondary">aws</span> CloudTrail: last commit (#1408)
- [`bc5219fe`](https://github.com/someengineering/resoto/commit/bc5219fe) <span class="badge badge--secondary">plugins/onprem</span> Fix log formating in forked onprem collector (#1406)
- [`284a5212`](https://github.com/someengineering/resoto/commit/284a5212) <span class="badge badge--secondary">resotocore</span> Fix merge conflict (#1402)
- [`b0986525`](https://github.com/someengineering/resoto/commit/b0986525) <span class="badge badge--secondary">aws</span> Fix IAM permissions (#1401)
- [`f6aadab7`](https://github.com/someengineering/resoto/commit/f6aadab7) <span class="badge badge--secondary">aws</span> List all accounts and all regions in progress update (#1398)
- [`0ed7106b`](https://github.com/someengineering/resoto/commit/0ed7106b) <span class="badge badge--secondary">resotolib</span> Ignore race between process list and kill (#1397)
- [`6cf89f15`](https://github.com/someengineering/resoto/commit/6cf89f15) <span class="badge badge--secondary">gcp</span> Make gcp_next work again (#1393)

### Chores

- [`00cc6d53`](https://github.com/someengineering/resoto/commit/00cc6d53) <span class="badge badge--secondary">resoto</span> Upgrade to tox 4 (#1438)
- [`7c1c8fbd`](https://github.com/someengineering/resoto/commit/7c1c8fbd) <span class="badge badge--secondary">resoto</span> Bump 3.2.0 (#1436)
- [`3f554b97`](https://github.com/someengineering/resoto/commit/3f554b97) <span class="badge badge--secondary">resotocore</span> Remove Query event (#1437)
- [`cb512f26`](https://github.com/someengineering/resoto/commit/cb512f26) <span class="badge badge--secondary">resoto</span> Bump libs (#1435)
- [`125e1dbc`](https://github.com/someengineering/resoto/commit/125e1dbc) <span class="badge badge--secondary">resotolib</span> Remove unused code (#1431)
- [`15f33bf4`](https://github.com/someengineering/resoto/commit/15f33bf4) <span class="badge badge--secondary">resotolib</span> Add better debug output (#1423)
- [`5103347e`](https://github.com/someengineering/resoto/commit/5103347e) <span class="badge badge--secondary">github</span> update CODEOWNERS (#1405)
- [`e8d6df07`](https://github.com/someengineering/resoto/commit/e8d6df07) <span class="badge badge--secondary">resoto</span> Bump libs (#1400)
- [`852d7ce2`](https://github.com/someengineering/resoto/commit/852d7ce2) <span class="badge badge--secondary">ci</span> Use GitHub CLI with access token instead of curl (#1391)
- [`ccf4d422`](https://github.com/someengineering/resoto/commit/ccf4d422) <span class="badge badge--secondary">resoto</span> Bump 3.1.1 (#1390)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.2.0`
- `somecr.io/someengineering/resotoworker:3.2.0`
- `somecr.io/someengineering/resotoshell:3.2.0`
- `somecr.io/someengineering/resotometrics:3.2.0`
