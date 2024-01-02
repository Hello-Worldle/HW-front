'use client'

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/Command'
import { useState } from 'react'

interface SearchInputProps {
  options: Array<string>
  // eslint-disable-next-line no-unused-vars
  onSelect: (selectedOption: string) => void
}
export default function SearchInput({ options, onSelect }: SearchInputProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Command className='rounded-lg border shadow-md'>
      <CommandInput
        placeholder={`Type a technology name...`}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      <CommandList
        className={`${isOpen ? 'initial' : 'hidden'} transition-all`}
      >
        <CommandEmpty>No results found.</CommandEmpty>
        {options.map((option) => (
          <CommandItem key={option} onSelect={onSelect}>
            <span>{option}</span>
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}
