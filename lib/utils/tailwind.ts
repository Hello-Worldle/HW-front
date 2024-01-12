import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ObjectWithTags {
  name: string
  tags: string[]
}

export const filterArrayByTerm = (
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
// const data: ObjectWithTags[] = [
//   { name: 'Tony Lima', tags: ['gordo'] },
//   { name: 'Will Luigi', tags: ['gordo'] },
// ]
