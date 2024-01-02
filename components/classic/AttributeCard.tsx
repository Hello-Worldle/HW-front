'use client'

import styled from 'styled-components'
import { Card } from '../ui/Card'
import { cn } from '@/lib/utils/tailwind'
import { useEffect, useState } from 'react'

const RotationWrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform: rotateZ(180deg);
`
RotationWrapper.displayName = 'RotationWrapper'

interface AttributeCardProps {
  content: string
  type: 'correct' | 'partially-correct' | 'incorrect'
}

const getBackgroundColorByType = (type: AttributeCardProps['type']) => {
  if (type === 'correct') {
    return 'bg-green-500'
  }
  if (type === 'incorrect') {
    return 'bg-red-500'
  }
  if (type === 'partially-correct') {
    return 'bg-yellow-500'
  }

  throw new Error('Invalid Type')
}

export default function AttributeCard({ content, type }: AttributeCardProps) {
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    setFlipped(true)
  }, [])

  return (
    <div className='group h-40 w-40 [perspective:1000px]'>
      <Card
        className={cn(
          `relative h-full w-full rounded-lg shadow-xl transition-all duration-1000 [transform-style:preserve-3d] ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`,
          getBackgroundColorByType(type)
        )}
      >
        <div className='absolute inset-0 flex items-center justify-center rounded-lg bg-yellow-50'>
          Back Content
        </div>
        <div
          className={cn(
            'absolute inset-0 flex h-full w-full items-center justify-center rounded-lg px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]',
            getBackgroundColorByType(type)
          )}
        >
          <span className='text-xl'>{content}</span>
        </div>
      </Card>
    </div>
  )
}
