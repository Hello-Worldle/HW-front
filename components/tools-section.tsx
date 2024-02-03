'use client'

import { useTheme } from 'next-themes'
import Button from './ui/button'

import { MoonIcon, SunIcon, GearIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function ToolsSection() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <div className='flex items-center justify-between rounded p-2'>
      <Button
        icon={GearIcon}
        onClick={() => alert('Implement this')}
        variant='transparent'
      />

      <Link href='/'>
        <h1 className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-700 via-teal-200 to-neutral-700 bg-clip-text text-center text-4xl font-bold text-transparent'>
          Hello Worldle
        </h1>
      </Link>
      {/* Wrapper for UI consistency */}
      <Button
        icon={isDark ? SunIcon : MoonIcon}
        variant='transparent'
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      />
    </div>
  )
}
