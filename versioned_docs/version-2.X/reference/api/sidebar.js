module.exports = [
  {
    type: 'category',
    label: 'graph_search',
    link: { type: 'doc', id: 'version-2.X/reference/api/graph-search' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/search-the-graph-and-return-all-nodes-as-list-this-will-not-contain-any-edges',
        label:
          'Search the graph and return all nodes as list (this will not contain any edges)',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/search-the-graph-and-return-the-resulting-graph',
        label: 'Search the graph and return the resulting graph.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/search-the-aggregate-function-on-the-specified-graph-and-return-the-aggregation-result',
        label:
          'Search the aggregate function on the specified graph and return the aggregation result.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/explain-the-search-execution-plan',
        label: 'Explain the search execution plan',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'graph_management',
    link: { type: 'doc', id: 'version-2.X/reference/api/graph-management' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/list-all-graphs',
        label: 'List all graphs',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-root-of-a-specific-graph',
        label: 'Get root of a specific graph',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/create-a-new-graph',
        label: 'Create a new graph',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/delete-an-existing-graph',
        label: 'Delete an existing graph',
        className: 'api-method delete',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/merge-a-given-graph-with-the-existing-graph-under-marked-merge-nodes',
        label:
          'Merge a given graph with the existing graph under marked merge nodes.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/merge-a-given-graph-with-the-existing-graph-under-marked-merge-nodes-as-batch-update',
        label:
          'Merge a given graph with the existing graph under marked merge nodes as batch update.',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-a-list-of-all-running-batch-updates',
        label: 'Get a list of all running batch updates',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/commit-a-batch-update',
        label: 'Commit a batch update',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/abort-a-batch-update',
        label: 'Abort a batch update',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'node_management',
    link: { type: 'doc', id: 'version-2.X/reference/api/node-management' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/patch-a-list-of-nodes',
        label: 'Patch a list of nodes.',
        className: 'api-method patch',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/create-a-new-node-under-the-given-parent-node',
        label: 'Create a new node under the given parent node',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-a-node-with-the-given-node-id',
        label: 'Get a node with the given node id',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/update-a-node-with-the-given-node-id',
        label: 'Update a node with the given node id',
        className: 'api-method patch',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/delete-a-node-with-the-given-node-id',
        label: 'Delete a node with the given node id.',
        className: 'api-method delete',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/patch-a-node-with-the-given-node-id-in-given-section',
        label: 'Patch a node with the given node id in given section',
        className: 'api-method patch',
      },
    ],
  },
  {
    type: 'category',
    label: 'model',
    link: { type: 'doc', id: 'version-2.X/reference/api/model' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-the-currently-defined-model',
        label: 'Get the currently defined model.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/add-or-update-the-current-defined-model',
        label: 'Add or update the current defined model.',
        className: 'api-method patch',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-the-currently-defined-model-as-svg-uml-image',
        label: 'Get the currently defined model as svg uml image.',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'config',
    link: { type: 'doc', id: 'version-2.X/reference/api/config' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-all-configuration-keys',
        label: 'Get all configuration keys',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-a-configuration-by-its-id',
        label: 'Get a configuration by its id',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/replace-a-configuration-with-given-id',
        label: 'Replace a configuration with given id',
        className: 'api-method put',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/patch-a-configuration-by-its-id',
        label: 'Patch a configuration by its id',
        className: 'api-method patch',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/delete-a-configuration-by-its-id',
        label: 'Delete a configuration by its id',
        className: 'api-method delete',
      },
    ],
  },
  {
    type: 'category',
    label: 'config_validation',
    link: { type: 'doc', id: 'version-2.X/reference/api/config-validation' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-the-currently-defined-configuration-model',
        label: 'Get the currently defined configuration model.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/add-or-update-the-current-defined-configuration-model',
        label: 'Add or update the current defined configuration model.',
        className: 'api-method patch',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-all-configuration-keys-that-have-a-model-defined',
        label: 'Get all configuration keys that have a model defined.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-a-configuration-by-its-id',
        label: 'Get a configuration by its id',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/replace-a-configuration-model-with-given-id',
        label: 'Replace a configuration model with given id',
        className: 'api-method put',
      },
    ],
  },
  {
    type: 'category',
    label: 'cli',
    link: { type: 'doc', id: 'version-2.X/reference/api/cli' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/evaluate-a-cli-command',
        label: 'Evaluate a cli command',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/execute-a-cli-command',
        label: 'Execute a cli command',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-information-about-cli',
        label: 'Get information about CLI',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'subscriptions',
    link: { type: 'doc', id: 'version-2.X/reference/api/subscriptions' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/list-all-subscriptions',
        label: 'List all subscriptions',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/list-all-subscribers-for-a-given-event-type',
        label: 'List all subscribers for a given event type',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/get-subscriber-by-id',
        label: 'Get subscriber by id',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/define-subscriber-with-all-subscriptions',
        label: 'Define subscriber with all subscriptions',
        className: 'api-method put',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/delete-by-id',
        label: 'Delete by id',
        className: 'api-method delete',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/add-subscription-to-subscriber',
        label: 'Add subscription to subscriber',
        className: 'api-method post',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/delete-a-specific-subscription-from-the-subscriber',
        label: 'Delete a specific subscription from the subscriber.',
        className: 'api-method delete',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/web-socket-listen-to-registered-events-of-given-subscriber',
        label: '[WebSocket] Listen to registered events of given subscriber',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'work_queue',
    link: { type: 'doc', id: 'version-2.X/reference/api/work-queue' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/web-socket-attach-to-the-working-queue',
        label: '[WebSocket] Attach to the working queue',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/list-all-outstanding-work-items',
        label: 'List all outstanding work items',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'certificate',
    link: { type: 'doc', id: 'version-2.X/reference/api/certificate' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/retrieve-the-certificate-authorities-public-certificate',
        label: 'Retrieve the certificate authorities public certificate.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/sign-a-certificate-request',
        label: 'Sign a certificate request.',
        className: 'api-method post',
      },
    ],
  },
  {
    type: 'category',
    label: 'system',
    link: { type: 'doc', id: 'version-2.X/reference/api/system' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/web-socket-register-as-event-listener-and-receive-all-events',
        label: '[WebSocket] Register as event listener and receive all events.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/this-endpoint-signals-if-the-system-is-ready-to-serve-traffic',
        label: 'This endpoint signals if the system is ready to serve traffic.',
        className: 'api-method get',
      },
      {
        type: 'doc',
        id: 'version-2.X/reference/api/send-a-ping-to-the-system-and-expect-a-pong',
        label: 'Send a ping to the system and expect a pong.',
        className: 'api-method get',
      },
    ],
  },
  {
    type: 'category',
    label: 'debug',
    link: { type: 'doc', id: 'version-2.X/reference/api/debug' },
    items: [
      {
        type: 'doc',
        id: 'version-2.X/reference/api/transform-the-search-into-the-raw-database-search',
        label: 'Transform the search into the raw database search',
        className: 'api-method post',
      },
    ],
  },
];
