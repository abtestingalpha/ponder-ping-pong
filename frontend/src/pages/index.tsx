import { Inter } from 'next/font/google'

import { type PingPongEvent, useDeposits } from '../hooks/useDeposits'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pingPongEvents = useDeposits()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between pt-24 ${inter.className}`}
    >
      <div className="w-full max-w-2xl flex flex-col p-4 gap-6">
        <h1 className="font-bold text-2xl">latest ping pong events</h1>

        <div className="w-full flex gap-1 flex-col justify-between items-center">
          {pingPongEvents.status === 'pending' ? (
            <p className="font-semibold">Loading...</p>
          ) : pingPongEvents.status === 'error' ? (
            <p className="font-semibold text-red-500">Error fetching</p>
          ) : (
            <Table pingPongs={pingPongEvents.data} />
          )}
        </div>
      </div>
    </main>
  )
}

const MAP: any = {
  '11155111': {
    name: 'Eth Sepolia',
    explorerUrl: 'https://sepolia.etherscan.io',
  },
  '11155420': {
    name: 'Optimism Sepolia',
    explorerUrl: 'https://sepolia-optimism.etherscan.io',
  },
}

function Table({ pingPongs }: { pingPongs: PingPongEvent[] }) {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="font-semibold text-lg">
          <th>Chain</th>
          <th>Event</th>
          <th>Address</th>
          <th>Txn hash</th>
          <th>Block number</th>
        </tr>
      </thead>
      <tbody>
        {pingPongs.map(
          ({ id, address, chainId, transactionHash, blockNumber, name }) => (
            <tr className="py-2" key={id}>
              <td>{MAP[chainId].name}</td>
              <td>{name}</td>
              <td>
                <a
                  className="text-blue-500 text-sm  underline"
                  href={`${MAP[chainId].explorerUrl}/address/${address}`}
                  target="_blank"
                >
                  {address.slice(0, 6)}...{address.slice(-4)}
                </a>
              </td>
              <td>
                <a
                  className="text-blue-500 text-sm  underline"
                  href={`${MAP[chainId].explorerUrl}/tx/${transactionHash}`}
                  target="_blank"
                >
                  {transactionHash.slice(0, 6)}...{transactionHash.slice(-4)}
                </a>
              </td>
              <td>{blockNumber}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}
