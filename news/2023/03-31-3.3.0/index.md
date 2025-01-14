---
tags: [release notes]
---

# 3.3.0

## What's Changed

### Features

- [`e86665ab`](https://github.com/someengineering/resoto/commit/e86665ab) <span class="badge badge--secondary">resotocore</span> Define a search via command line (#1526)
- [`165d46b3`](https://github.com/someengineering/resoto/commit/165d46b3) <span class="badge badge--secondary">resotocore</span> Infrastructure apps - app manifest (#1525)
- [`6f65c14b`](https://github.com/someengineering/resoto/commit/6f65c14b) <span class="badge badge--secondary">resoto</span> remove unreferenced nodes (#1522)
- [`1ebec4d2`](https://github.com/someengineering/resoto/commit/1ebec4d2) <span class="badge badge--secondary">resoto</span> auto enablement of collector plugins (#1518)
- [`7731176c`](https://github.com/someengineering/resoto/commit/7731176c) <span class="badge badge--secondary">resotoworker</span> Save files to home dir via config (#1520)
- [`a4fbdb08`](https://github.com/someengineering/resoto/commit/a4fbdb08) <span class="badge badge--secondary">resotocore</span> Compute derived properties in metadata section (#1517)

### Fixes

- [`6d148cc0`](https://github.com/someengineering/resoto/commit/6d148cc0) <span class="badge badge--secondary">resotocore</span> Retry with backoff on empty BadRequest (#1529)
- [`b9fff137`](https://github.com/someengineering/resoto/commit/b9fff137) <span class="badge badge--secondary">resotocore</span> Keep connections only for 5 seconds (#1527)
- [`831a03e2`](https://github.com/someengineering/resoto/commit/831a03e2) <span class="badge badge--secondary">gcp</span> Ensure proper handling of region and zone for all resources (#1519)
- [`b37504f5`](https://github.com/someengineering/resoto/commit/b37504f5) <span class="badge badge--secondary">resotocore</span> Strip request specific headers and retry (#1524)

### Documentation

- [`1f0bf25b`](https://github.com/someengineering/resoto/commit/1f0bf25b) <span class="badge badge--secondary">fix</span> Links in overview (#1516)

### Chores

- [`30367d87`](https://github.com/someengineering/resoto/commit/30367d87) <span class="badge badge--secondary">resotocore</span> Bump UI 3.3.0 (#1530)
- [`bad8670b`](https://github.com/someengineering/resoto/commit/bad8670b) <span class="badge badge--secondary">resoto</span> Bump 3.3.0 (#1515)

<!--truncate-->

## Docker Images

- `somecr.io/someengineering/resotocore:3.3.0`
- `somecr.io/someengineering/resotoworker:3.3.0`
- `somecr.io/someengineering/resotoshell:3.3.0`
- `somecr.io/someengineering/resotometrics:3.3.0`
