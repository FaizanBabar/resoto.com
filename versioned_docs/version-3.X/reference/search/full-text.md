---
sidebar_position: 1
---

# Full-Text Search

Each resource property value is indexed and searchable by Resoto. Full-text search criteria is always enclosed in double quotes.

```bash
> search "167.123.13.102"
​kind=digitalocean_load_balancer, name=abc, age=1mo, cloud=do, account=10225, region=Amsterdam 3
```

This command will search for above IP address in all properties of all resources. It splits the search term into tokens and matches those against the index.

## Combining Different Search Terms

It is possible to combine different search criteria with `and` and `or`. Above search could also be expressed like this:

```bash
> search "167" and "123" and "13" and "102"
​kind=digitalocean_load_balancer, name=abc, age=1mo, cloud=do, account=10225, region=Amsterdam 3
```

but allows for any other combination.

```bash
> search ("167.123" or "192.168") and "13.102"
​kind=digitalocean_load_balancer, name=abc, age=1mo, cloud=do, account=10225, region=Amsterdam 3
```

## Combining Other Filters

Full-text search queries can be combined with other [filters](./filters.md) to narrow down the search results. Take following example as inspiration, that uses a [kind filter](./filters.md#selecting-nodes-by-kind) and [predicates](./filters.md#selecting-nodes-by-predicate) in combination with a full-text search term.

```bash
> search "167.123.13.102" and is(load_balancer) and age>3w and nr_nodes>0
​kind=digitalocean_load_balancer, name=abc, age=1mo, cloud=do, account=10225, region=Amsterdam 3
```
