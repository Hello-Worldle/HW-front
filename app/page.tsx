'use client'

import SearchInput from '@/components/classic/SearchInput'

export default function Home() {
  return (
    <main className='p-4 md:p-24'>
      <div className='align-center flex'>
        <SearchInput
          options={['Elixir', 'Ruby', 'JavaScript', 'Java', 'Python']}
          onSelect={console.log}
        />
      </div>
    </main>
  )
}
