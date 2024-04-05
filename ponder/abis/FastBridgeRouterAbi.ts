export const FastBridgeRouterAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: 'owner_',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'receive',
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'GAS_REBATE_FLAG',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes1',
        internalType: 'bytes1',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'adapterSwap',
    inputs: [
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'tokenIn',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amountIn',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'tokenOut',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'rawParams',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [
      {
        name: 'amountOut',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'bridge',
    inputs: [
      {
        name: 'recipient',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'chainId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'originQuery',
        type: 'tuple',
        internalType: 'struct SwapQuery',
        components: [
          {
            name: 'routerAdapter',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'tokenOut',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'minAmountOut',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'rawParams',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
      {
        name: 'destQuery',
        type: 'tuple',
        internalType: 'struct SwapQuery',
        components: [
          {
            name: 'routerAdapter',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'tokenOut',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'minAmountOut',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'rawParams',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'fastBridge',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getOriginAmountOut',
    inputs: [
      {
        name: 'tokenIn',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'rfqTokens',
        type: 'address[]',
        internalType: 'address[]',
      },
      {
        name: 'amountIn',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'originQueries',
        type: 'tuple[]',
        internalType: 'struct SwapQuery[]',
        components: [
          {
            name: 'routerAdapter',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'tokenOut',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'minAmountOut',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'rawParams',
            type: 'bytes',
            internalType: 'bytes',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'owner',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'renounceOwnership',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setFastBridge',
    inputs: [
      {
        name: 'fastBridge_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setSwapQuoter',
    inputs: [
      {
        name: 'swapQuoter_',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'swapQuoter',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'transferOwnership',
    inputs: [
      {
        name: 'newOwner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'FastBridgeSet',
    inputs: [
      {
        name: 'newFastBridge',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        name: 'previousOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'newOwner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SwapQuoterSet',
    inputs: [
      {
        name: 'newSwapQuoter',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'DeadlineExceeded',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InsufficientOutputAmount',
    inputs: [],
  },
  {
    type: 'error',
    name: 'MsgValueIncorrect',
    inputs: [],
  },
  {
    type: 'error',
    name: 'PoolNotFound',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TokenAddressMismatch',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TokenNotContract',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TokenNotETH',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TokensIdentical',
    inputs: [],
  },
]
