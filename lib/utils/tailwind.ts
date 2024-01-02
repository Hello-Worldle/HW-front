import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ObjectWithTags {
  name: string
  tags: string[]
}

const filterArrayByTerm = (
  array: ObjectWithTags[],
  term: string
): ObjectWithTags[] => {
  const filteredArray = array.filter((item) => {
    const foundInName = item.name.toLowerCase().includes(term.toLowerCase())
    const foundInTags = item.tags.some((tag) =>
      tag.toLowerCase().includes(term.toLowerCase())
    )
    return foundInName || foundInTags
  })

  return filteredArray
}

// Example usage:
const data: ObjectWithTags[] = [
  { name: 'Tony Lima', tags: ['gordo'] },
  { name: 'Will Luigi', tags: ['gordo'] },
]

const searchTerm = 'Li'
const result = filterArrayByTerm(data, searchTerm)
console.log(result)
