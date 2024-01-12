'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import GameModelSelector from '@/components/home/GameModeSelector'

export default function Home() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          staleTime: 60 * 1000,
        },
      },
    })
  )
  return (
    <QueryClientProvider client={queryClient}>
      <main className='p-4 md:p-24'>
        <div className='align-center flex'>
          <GameModelSelector />
        </div>
      </main>
    </QueryClientProvider>
  )
}
