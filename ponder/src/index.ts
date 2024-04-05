import { ponder } from '@/generated'

ponder.on(
  'PingPong:PingSent',
  async ({ event, context }: { event: any; context: any }) => {
    const { PingPongEvent } = context.db

    const {
      network: { chainId },
    } = context
    const { name } = event
    const { address, id, blockNumber, transactionHash } = event.log

    console.log(`context`, context)
    console.log(event)

    await PingPongEvent.create({
      id,
      data: {
        name,
        chainId,
        address,
        transactionHash,
        blockNumber: Number(blockNumber),
      },
    })
  }
)

ponder.on(
  'PingPong:PingReceived',
  async ({ event, context }: { event: any; context: any }) => {
    const { PingPongEvent } = context.db

    const {
      network: { chainId },
    } = context
    const { name } = event
    const { address, id, blockNumber, transactionHash } = event.log

    console.log(`context`, context)
    console.log(event)

    await PingPongEvent.create({
      id,
      data: {
        name,
        chainId,
        address,
        transactionHash,
        blockNumber: Number(blockNumber),
      },
    })
  }
)
