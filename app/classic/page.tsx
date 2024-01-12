'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchInput from '@/components/classic/SearchInput'
import { useState } from 'react'

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
          <SearchInput
            options={['Elixir', 'Ruby', 'JavaScript', 'Java', 'Python']}
            onSelect={console.log}
          />
        </div>
      </main>
    </QueryClientProvider>
  )
}
