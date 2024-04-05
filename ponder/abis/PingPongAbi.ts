export const PingPongAbi = [
  {
    inputs: [{ internalType: 'address', name: 'admin', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { inputs: [], name: 'AccessControlBadConfirmation', type: 'error' },
  {
    inputs: [
      { internalType: 'address', name: 'account', type: 'address' },
      { internalType: 'bytes32', name: 'neededRole', type: 'bytes32' },
    ],
    name: 'AccessControlUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  { inputs: [], name: 'FailedInnerCall', type: 'error' },
  {
    inputs: [{ internalType: 'address', name: 'client', type: 'address' }],
    name: 'InterchainApp__AlreadyLatestClient',
    type: 'error',
  },
  { inputs: [], name: 'InterchainApp__AppZeroAddress', type: 'error' },
  {
    inputs: [
      { internalType: 'uint256', name: 'actual', type: 'uint256' },
      { internalType: 'uint256', name: 'required', type: 'uint256' },
    ],
    name: 'InterchainApp__BalanceTooLow',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'client', type: 'address' }],
    name: 'InterchainApp__ClientAlreadyAdded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InterchainApp__InterchainClientZeroAddress',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'requiredResponses', type: 'uint256' },
      { internalType: 'uint256', name: 'optimisticPeriod', type: 'uint256' },
    ],
    name: 'InterchainApp__InvalidAppConfig',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
    name: 'InterchainApp__ModuleAlreadyAdded',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
    name: 'InterchainApp__ModuleNotAdded',
    type: 'error',
  },
  { inputs: [], name: 'InterchainApp__ModuleZeroAddress', type: 'error' },
  {
    inputs: [{ internalType: 'bytes32', name: 'linkedApp', type: 'bytes32' }],
    name: 'InterchainApp__NotEVMLinkedApp',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
    name: 'InterchainApp__NotInterchainClient',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'chainId', type: 'uint256' }],
    name: 'InterchainApp__ReceiverNotSet',
    type: 'error',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'chainId', type: 'uint256' }],
    name: 'InterchainApp__SameChainId',
    type: 'error',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'srcChainId', type: 'uint256' },
      { internalType: 'bytes32', name: 'sender', type: 'bytes32' },
    ],
    name: 'InterchainApp__SenderNotAllowed',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requiredResponses',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'optimisticPeriod',
        type: 'uint256',
      },
    ],
    name: 'AppConfigV1Set',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'remoteApp',
        type: 'bytes32',
      },
    ],
    name: 'AppLinked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'executionService',
        type: 'address',
      },
    ],
    name: 'ExecutionServiceSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'gasLimit',
        type: 'uint256',
      },
    ],
    name: 'GasLimitSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'client',
        type: 'address',
      },
    ],
    name: 'InterchainClientAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'client',
        type: 'address',
      },
    ],
    name: 'InterchainClientRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'client',
        type: 'address',
      },
    ],
    name: 'LatestClientSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'counter',
        type: 'uint256',
      },
    ],
    name: 'PingDisrupted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'counter',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'dbNonce',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'entryIndex',
        type: 'uint64',
      },
    ],
    name: 'PingReceived',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'counter',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'dbNonce',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint64',
        name: 'entryIndex',
        type: 'uint64',
      },
    ],
    name: 'PingSent',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32' },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'module',
        type: 'address',
      },
    ],
    name: 'TrustedModuleAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'module',
        type: 'address',
      },
    ],
    name: 'TrustedModuleRemoved',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'IC_GOVERNOR_ROLE',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'client', type: 'address' },
      { internalType: 'bool', name: 'updateLatest', type: 'bool' },
    ],
    name: 'addInterchainClient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
    name: 'addTrustedModule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'srcChainId', type: 'uint256' },
      { internalType: 'bytes32', name: 'sender', type: 'bytes32' },
      { internalType: 'uint256', name: 'dbNonce', type: 'uint256' },
      { internalType: 'uint64', name: 'entryIndex', type: 'uint64' },
      { internalType: 'bytes', name: 'message', type: 'bytes' },
    ],
    name: 'appReceive',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasLimit',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAppConfigV1',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'requiredResponses',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'optimisticPeriod',
            type: 'uint256',
          },
        ],
        internalType: 'struct AppConfigV1',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getExecutionService',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInterchainClients',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestInterchainClient',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'chainId', type: 'uint256' }],
    name: 'getLinkedApp',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'chainId', type: 'uint256' }],
    name: 'getLinkedAppEVM',
    outputs: [
      { internalType: 'address', name: 'linkedAppEVM', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getModules',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'dstChainId', type: 'uint256' }],
    name: 'getPingFee',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getReceivingConfig',
    outputs: [
      { internalType: 'bytes', name: 'appConfig', type: 'bytes' },
      { internalType: 'address[]', name: 'modules', type: 'address[]' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'uint256', name: 'index', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { internalType: 'bytes32', name: 'remoteApp', type: 'bytes32' },
    ],
    name: 'linkRemoteApp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'chainId', type: 'uint256' },
      { internalType: 'address', name: 'remoteApp', type: 'address' },
    ],
    name: 'linkRemoteAppEVM',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'client', type: 'address' }],
    name: 'removeInterchainClient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'module', type: 'address' }],
    name: 'removeTrustedModule',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'callerConfirmation', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'role', type: 'bytes32' },
      { internalType: 'address', name: 'account', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'requiredResponses',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'optimisticPeriod',
            type: 'uint256',
          },
        ],
        internalType: 'struct AppConfigV1',
        name: 'appConfig',
        type: 'tuple',
      },
    ],
    name: 'setAppConfigV1',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'executionService', type: 'address' },
    ],
    name: 'setExecutionService',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'gasLimit_', type: 'uint256' }],
    name: 'setGasLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'client', type: 'address' }],
    name: 'setLatestInterchainClient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'dstChainId', type: 'uint256' },
      { internalType: 'uint256', name: 'counter', type: 'uint256' },
    ],
    name: 'startPingPong',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
] as const
