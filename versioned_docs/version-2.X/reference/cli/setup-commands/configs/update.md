---
sidebar_label: update
---

# `configs update` Command

The `configs update` command updates the specified configuration, creating it if it does not already exist.

## Usage

```bash
configs update <id> <file_path>
```

### Parameters

| Parameter   | Description                                              | Required? | Default Value |
| ----------- | -------------------------------------------------------- | --------- | ------------- |
| `id`        | Cpnfiguration identifier                                 | ✔️        | N/A           |
| `file_path` | Path to file containing desired configuration definition | ✔️        | N/A           |

## Examples

```bash
> configs update test /path/to/my/config.yaml
```
