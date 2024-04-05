import { createSchema } from '@ponder/core'

export default createSchema((p) => ({
  PingPongEvent: p.createTable({
    id: p.string(),
    name: p.string(),
    chainId: p.int(),
    address: p.string(),
    transactionHash: p.string(),
    blockNumber: p.int(),
  }),
}))
