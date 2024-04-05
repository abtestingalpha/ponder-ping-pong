import { createConfig } from '@ponder/core'
import { http } from 'viem'

import { PingPongAbi } from './abis/PingPongAbi'

const ethSepoliaTransport = http(process.env.PONDER_RPC_URL_0)
const opSepoliaTransport = http(process.env.PONDER_RPC_URL_1)

export default createConfig({
  networks: {
    ethSepolia: {
      chainId: 11155111,
      transport: ethSepoliaTransport,
    },
    opSepolia: {
      chainId: 11155420,
      transport: opSepoliaTransport,
    },
  },
  contracts: {
    PingPong: {
      network: {
        ethSepolia: {
          address: '0xe60609A91C613c1ca4E91f2f992a5bF40ACedb34',
          startBlock: 5560235,
        },
        opSepolia: {
          address: '0xC6c3C734C1322556685A36D090d5ec1ef5f7A4a7',
          startBlock: 9962122,
        },
      },
      abi: PingPongAbi,
    },
  },
})
