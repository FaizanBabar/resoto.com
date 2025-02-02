---
sidebar_label: Worker
---

# Resoto Worker Configuration

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

## Configuration Files

You may need make your AWS `credentials` file, GCP service account JSON files, Kubernetes kubeconfig files, etc. available to Resoto Worker so that it can collect your resources.

### Writing Configuration Files at Startup

The Resoto Worker `write_files_to_home_dir` configuration option allows you to write files to the Resoto Worker home directory.

Resoto Worker generates files at defined `path` with the specified `content` at startup.

```yaml title="Resoto Worker configuration"
resotoworker:
# highlight-start
  write_files_to_home_dir:
    - path: ~/.aws/config
      content: |
        [default]
        aws_access_key_id=AKIAIOSFODNN7EXAMPLE
        aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
        region = us-east-1
        output=json

        [profile user1]
        region=us-west-1
        output=text
# highlight-end
```

:::note

Resoto Worker can only write files to its home directory.

:::

:::caution

Resoto Worker will overwrite any existing files with the defined filenames.

:::

### Mounting Configuration Files to Container-Based Installations

For [Docker](../../getting-started/install-resoto/docker.md) and [Kubernetes](../../getting-started/install-resoto/kubernetes.md) installations, you can mount configuration files within the `resotoworker` container instead of defining them in the configuration.

<Tabs groupId="install-method">
<TabItem value="docker" label="Docker">

1. Add the desired volume definition to the `resotoworker` service in `docker-compose.yaml`:

   ```yaml title="docker-compose.yaml"
   services:
     ...
     resotoworker:
       image: somecr.io/someengineering/resotoworker:{{imageTag}}
       container_name: resotoworker
       ...
   # highlight-start
       volumes:
         - $HOME/.aws:/home/resoto/.aws
   # highlight-end
     ...
   ...
   ```

2. Recreate the `resotoworker` container with the updated service definition:

   ```bash
   $ docker-compose up -d
   ```

   :::note

   [Docker Compose V2 integrated compose functions in to the Docker platform.](https://docs.docker.com/compose/#compose-v2-and-the-new-docker-compose-command)

   In Docker Compose V2, the command is `docker compose` (no hyphen) instead of `docker-compose`.

   :::

</TabItem>
<TabItem value="k8s" label="Kubernetes">

1. Create a secret with the path to the configuration file:

   ```bash
   $ kubectl -n resoto create secret generic resoto-home --from-file=credentials=$HOME/.aws/credentials
   ```

2. Update `resoto-values.yaml` with `resotoworker` volume mounts and volumes:

   ```yaml title="resoto-values.yaml"
   ...
   resotoworker:
     ...
   # highlight-start
     volumeMounts:
       - mountPath: /home/resoto/.aws
         name: aws-credentials
     volumes:
       - name: aws-credentials
         secret:
           secretName: resoto-home
   # highlight-end
   ...
   ```

3. Deploy the changes with Helm:

   ```bash
   $ helm upgrade resoto resoto/resoto --set image.tag={{imageTag}} -f resoto-values.yaml
   ```

</TabItem>
</Tabs>

## Multi-Core Machines

Resoto resource collection speed depends heavily on the number of CPU cores available to the worker. When collecting hundreds of accounts, [Resoto Worker](../components/worker.md) can easily saturate 64 cores or more.

The amount of RAM required depends on the number of resources in each account. As a rule of thumb, estimate 512 MB of RAM and 0.5 CPU cores per account concurrently collected, with a minimum of 4 cores and 16 GB for a production setup.

The following settings specify how many [Worker](../components/worker.md) threads Resoto starts:

```yaml
resotoworker:
  ...
# highlight-start
  # How many cleanup threads to run in parallel
  cleanup_pool_size: 16
  # Collector thread/process pool size
  pool_size: 5
# highlight-end
aws:
  ...
# highlight-start
  # Account thread/process pool size
  account_pool_size: 32
  # Region thread pool size
  region_pool_size: 20
# highlight-end
gcp:
  ...
# highlight-start
  # GCP project thread/process pool size
  project_pool_size: 32
# highlight-end
...
```

- The `resotoworker.pool_size` setting determines how many collectors (Amazon Web Services, Google Cloud Platform, DigitalOcean, Kubernetes, etc.) are run concurrently.
- `aws.account_pool_size` and `gcp.project_pool_size` are used to determine how many accounts or projects respectively are collected concurrently.
- Within Amazon Web Services, `aws.region_pool_size` is used to determine how many regions per account are collected concurrently.

:::caution

At peak, Resoto creates concurrent network connections for each region in every account. With a single cloud with 32 accounts and 20 regions per account, for example, there will be a maximum of 32 × 20 = 640 connections.

This is not a problem in a data center or with a <abbr title="small office / home office">SOHO</abbr> router, where hundreds of thousands (or even millions) of new connections per second are supported. However, if you are testing Resoto at home using a consumer-grade router, you should be conservative when configuring thread pool sizes.

:::
