import { useQuery } from '@tanstack/react-query'
import { GraphQLClient, gql } from 'graphql-request'

const client = new GraphQLClient('http://localhost:42069')

export type PingPongEvent = {
  id: string
  name: string
  address: string
  blockNumber: number
  transactionHash: string
  chainId: number
}

type PingPongEventsResponse = {
  pingPongEvents: {
    items: PingPongEvent[]
  }
}

export const useDeposits = () => {
  return useQuery<PingPongEvent[]>({
    queryKey: ['ping pong events'],
    queryFn: async () => {
      try {
        const r = (await client.request(gql`
          {
            pingPongEvents {
              items {
                id
                name
                address
                blockNumber
                transactionHash
                chainId
              }
            }
          }
        `)) as PingPongEventsResponse

        return r.pingPongEvents.items.map((d) => ({
          id: d.id,
          name: d.name,
          address: d.address,
          blockNumber: d.blockNumber,
          transactionHash: d.transactionHash,
          chainId: d.chainId,
        }))
      } catch (error) {
        console.error('Error fetching deposits:', error)
        throw error
      }
    },
    staleTime: 60_000, // 1 minute
    refetchInterval: 5_000, // 5 seconds
  })
}
