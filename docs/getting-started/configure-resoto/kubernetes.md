---
sidebar_label: Kubernetes
---

# Configure Kubernetes Resource Collection

```mdx-code-block
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
```

The [Kubernetes](../../reference/data-models/kubernetes/index.md) collector is configured within the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs/index.md) in [Resoto Shell](../../reference/components/shell.md).

## Enabling the Collector

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Add `k8s` to the list of collectors by modifying the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
     # List of collectors to run
     collector:
   # highlight-next-line
       - 'k8s'
       ...
   ...
   ```

## Authentication

**You can authenticate with Kubernetes via kubeconfig files, manual configuration, or both.**

<Tabs>
<TabItem value="kubeconfig-files" label="kubeconfig Files">

**The easiest way to configure access to Kubernetes is via [kubeconfig files](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig).**

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Add the content of kubeconfig file(s) to the `resotoworker` section as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   # highlight-start
     write_files_to_home_dir:
       - path: ~/.kube/config_1
         content: |
           apiVersion: v1
           clusters:
           - cluster:
               certificate-authority-data: <ca_data>
               server: https://k8s.example.com
             name: example-cluster
           contexts:
           - context:
               cluster: example-cluster
               user: k8s-admin
             name: context1
           current-context: context1
           kind: Config
           preferences: {}
           users:
           - name: k8s-admin
             user:
               token: <token>
       - path: ~/.kube/config_2
         content: ...
   # highlight-end
     ...
   ...
   ```

   :::note

   If you do not wish to save the contents of your kubeconfig file(s) to Resoto's database, you can alternatively [mount the directory containing your kubeconfig file(s) to the `resotoworker` container](../../reference/configuration/worker#mounting-configuration-files-to-container-based-installations).

   :::

   :::info

   For [pip installs](../install-resoto/pip.md), you can simply move or copy your kubeconfig file(s) to the `~/.kube` directory. (Since Resoto is running on your local machine, it can access the file(s) directly.)

   :::

3. Modify the `k8s` section of the configuration as follows, defining `path` and `contexts` for each file:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   k8s:
   # highlight-start
     config_files:
       - path: "/home/resoto/.kube/config_1"
         all_contexts: false
         contexts: ["context1", "context2"]
       - path: "/home/resoto/.kube/config_2"
         all_contexts: true
   # highlight-end
   ```

   :::note

   The above example assumes that your kubeconfig file(s) are named `config_1`, `config_2`, etc.

   :::

   :::info

   If a single [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) holds multiple contexts, it is possible to restrict the contexts to be used by defining them explicitly. Setting `all_contexts` to `true` will not filter, resulting in taking all found contexts.

   :::

</TabItem>
<TabItem value="manual-configuration" label="Manual Configuration">

**Instead of exposing a [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig) to Resoto Worker, you can alternatively supply credentials manually.**

The required values can be found in the [kubeconfig file](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig):

| Option                       | kubeconfig Property                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `server`                     | `clusters.cluster.server`                                                                                           |
| `token`                      | `users.user.token`                                                                                                  |
| `certificate_authority_data` | `clusters.cluster.certificate-authority-data`<br />(only required if the server is using a self-signed certificate) |

1. Open the [Resoto Worker configuration](../../reference/configuration/index.md) via the [`config` command](../../reference/cli/setup-commands/configs) in [Resoto Shell](../../reference/components/shell):

   ```bash
   > config edit resoto.worker
   ```

2. Modify the `k8s` section of the configuration as follows:

   ```yaml title="Resoto Worker configuration"
   resotoworker:
     ...
   ...
   k8s:
   # highlight-start
     configs:
       - name: 'dev'
         certificate_authority_data: 'xxx'
         server: 'https://k8s-cluster-server.example.com'
         token: 'token'
   # highlight-end
   ```

   :::info

   Multiple k8s clusters can be defined by adding multiple sets of values.

   :::

</TabItem>
</Tabs>

## Resource Collection

By default, Resoto performs resource collection each hour. To immediately trigger a collect run, use the [`workflow run` command](../../reference/cli/action-commands/workflows/run.md) in [Resoto Shell](../../reference/components/shell):

```bash
> workflow run collect
```

Once the collect run completes, you can view a summary of collected Kubernetes resources using the following search:

```bash
> search is(kubernetes_resource) | count kind
```
