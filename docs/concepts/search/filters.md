---
sidebar_position: 1
sidebar_label: Filters
---

# Search Filters

## Selecting Nodes by ID

Nodes can be selected by their id via the `id(xyz)` function. This function can be used globally no matter which section is used.

## Selecting Nodes by [Kind](../graph/node.md#kind)

In order to select nodes by a specific type, the query language supports the `is(kind)` function. The term `is(instance)` would select the EC2 instance above, but also all other instances, e.g. Google Cloud instances.

The term `is(aws_ec2_instance)` would select only EC2 instances from AWS.

## Selecting Nodes by Predicate

In order to filter for specific attributes of a node, it is possible to define predicates. A predicate always has the syntax: `<property_path> <operation> <value>` (e.g. `answer!=42`).

### `property_path`

The `property_path` is the path to the property in the JSON structure.

A nested attribute is accessed via the dot (`.`). A nested property could be accessed via `some.deeply.nested.property`.

Since most of the properties in question are defined in the reported section, the CLI interprets all defined property paths relative to the reported section by default (behaviour can be configured and adjusted). Thus, the path to property `reported.name` can simply be written as `name`.

If all relative paths are interpreted relative to `reported`, we need a way to target properties not in the reported section. This is possible by using the root syntax via the `/` (slash).

A property path that starts with a slash is always interpreted absolute.

In order to access properties outside of the reported section, use the `/` syntax:

```bash title="Find nodes where reported.cpu_count is greater than 3, and desired.clean is true"
cpu_count>3 and /desired.clean==true
```

The section that is used to interpret the property paths is defined by the environment parameter `section`. As stated earlier, this variable defaults to `reported`.

Since the CLI allows to define environment variables as part of the CLI command, this behaviour can be adjusted easily:

```bash
section=reported query cpu_count>3 and /desired.clean==true
```

is semantically the same as this query, which interprets all paths from the root

```
section=/ query reported.cpu_count>3 and desired.clean==true
```

is semantically the same as this query, which interprets all paths relative to the desired section

```
section=desired query /reported.cpu_count>3 and clean==true
```

The examples above only illustrate the mechanics of property paths. We suggest to keep the default, as the examples below assume the default setting.

#### Array Elements

A property inside an array is accessed via `[position]`. So to access the first element of an array we can write `[0]`.

If the position is not known or does not matter we can write `[*]`.

### `operation`

The `operation` is one of the following options:

| Operation   | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| `=` or `==` | Property is equal to the provided value.                                   |
| `!=`        | Property is not equal to the provided value.                               |
| `<=`        | Property is less than or equal to the provided value.                      |
| `>=`        | Property is greater than or equal to the provided value.                   |
| `>`         | Property is greater than the provided value.                               |
| `<`         | Property is less than the provided value.                                  |
| `~` or `=~` | Property conforms to the given regexp. Only applicable to strings.         |
| `!~`        | Property is not conform to the given regexp. Only applicable to strings.   |
| `in`        | Property is one of the following values. The value has to be an array.     |
| `not in`    | Property is not one of the following values. The value has to be an array. |

### `value`

The `value` can be any JSON literal or JSON conform value.

A JSON conform value is:

- `string`

  **Examples:** `"hello world"`, `"test"`

  :::note

  The query parser is gracious with quotes. If there are no white space and no special characters, it is possible to omit quotes. In case you see parse errors, try adding quotes to your strings.

  :::

- `number` (integers and floating-point numbers)

  **Examples:** `23`, `12.123`

  The model itself clearly defines if a number is `int32`, `int64`, `float` or `double`. From the query point of view, all numbers are treated the same way.

- `boolean`

  **Examples:** `true`, `false`

- `array`

  **Example:** `[1, true, "test"]`

- `object`

  **Example:** `{"a": 1, "b": 2}`

- `null`

  This can be useful to query for properties that are unset or do not exist.

### Arrays

If the filtered property is an array, it is also possible to define a criteria based on elements of the array using one of the operator modifier: `all`, `any` or `none` in front of the operation.

Let us assume following document: `{"reported": { "test": [1, 2, 3, 4]}}`, we could define a query like `test all >= 1` or `test any > 2` or `test none > 100`, which would match the document.

:::tip Example Predicates

```bash title="Select nodes with names exactly matching "sunset""
name == "sunset"
```

```bash title="Same as previous; parentheses are optional if the string is not a number and does not contain special characters"
name == sunset
```

```bash title="Select nodes with more than 2 instance_cores"
instance_cores > 2
```

```bash title="Select nodes where the name matches the regular expression sun.*"
`name =~ "sun.*"`
```

```bash title="Select nodes where the name is either "sunset" or "sunrise""
`name in ["sunset", "sunrise"]`
```

:::

## Combining Selections

All listed selections can be combined with `and` and `or` clauses.

In order to define precedence, simply enclose terms with parentheses.

:::tip Examples

```bash title="Select nodes where reported.name is either sunrise or sunset"
> query name == sunset or name == sunrise
```

```bash title="Select aws_ec2_instance nodes where reported.name is sunrise"
> query is(aws_ec2_instance) and name==sunrise
```

```bash title="Select aws_ec2_instance nodes of specific type or more than 2 cores"
> query is(aws_ec2_instance) and (instance_type=="m5a.large" or instance_cores>2)
```

:::