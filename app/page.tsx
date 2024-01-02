'use client'

import SearchInput from '@/components/classic/SearchInput'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-between p-24'>
      <div className='align-center flex'>
        <SearchInput
          options={['Elixir', 'Ruby', 'JavaScript', 'Java', 'Python']}
          onSelect={console.log}
        />
      </div>
    </main>
  )
}
