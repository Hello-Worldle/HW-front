'use client'

import { useTheme } from 'next-themes'
import Button from './ui/Button'

import { MoonIcon, SunIcon, GearIcon } from '@radix-ui/react-icons'

export default function ToolsSection() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <div className='flex items-center justify-between rounded p-2'>
      <Button
        icon={GearIcon}
        variant='icon'
        onClick={() => alert('Implement this')}
      />

      <p className='rounded bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-700 via-teal-200 to-neutral-700 bg-clip-text p-2 text-center text-3xl font-bold text-transparent '>
        Hello Worldle
      </p>
      <Button
        icon={isDark ? MoonIcon : SunIcon}
        variant='icon'
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      />
    </div>
  )
}
