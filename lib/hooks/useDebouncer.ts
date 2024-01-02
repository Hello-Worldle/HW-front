import { useRef, useEffect } from 'react'

const useDebounce = (
  fn: Function,
  timeout: number,
  cleanUpOnUnmount = false
) => {
  const debounce = useRef<NodeJS.Timeout | number | null>(null)

  useEffect(() => {
    return () => {
      if (cleanUpOnUnmount && debounce.current) {
        clearTimeout(debounce.current)
      }
    }
  }, [cleanUpOnUnmount])

  const invoke = (...params: any[]) => {
    if (debounce.current) {
      clearTimeout(debounce.current)
    }
    debounce.current = setTimeout(() => fn(...params), timeout)
  }

  return invoke
}

export default useDebounce
