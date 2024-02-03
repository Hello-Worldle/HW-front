import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils/tailwind'
import Link from 'next/link'
import { CheckCircledIcon, CodeIcon, QuoteIcon } from '@radix-ui/react-icons'
import { ComponentType, Fragment } from 'react'

interface GameLogoProps {
  src: string
  className?: string
}

const CardLogo = ({ className, src }: GameLogoProps) => {
  return (
    <div className={cn('relative size-20', className)}>
      <Image
        fill
        src={src}
        alt='Technolgy logo'
        className='static  drop-shadow-sm'
      />
    </div>
  )
}

interface ContentProps {
  title: string
  description: string
  icon?: ComponentType<{ className?: string }>
}

const Content = ({ title, icon, description }: ContentProps) => {
  const IconComponent = icon ?? Fragment

  return (
    <div className='flex flex-col items-center justify-between'>
      {icon ? <IconComponent className='size-24 md:size-32' /> : null}

      <p className='inset-x-auto z-20 text-sm md:text-2xl'>{title}</p>
      <p className='mt-2 hidden text-sm text-gray-500 md:block dark:text-gray-400'>
        {description}
      </p>
    </div>
  )
}

const ClassicContent = () => (
  <CardContent className='bg-background group relative flex h-full items-center justify-center overflow-hidden pt-6'>
    <Content
      title='Content'
      description='Guess the technology using clues which comes on every try.'
      icon={CheckCircledIcon}
    />
    <div className='absolute -bottom-10 right-5 size-20 transition-all  ease-in group-hover:origin-right group-hover:rotate-45'>
      <CardLogo src='/images/technologies/ruby-logo.png' />
    </div>
    <div className='absolute -bottom-10 transition-all  ease-in group-hover:origin-right group-hover:rotate-45'>
      <CardLogo src='/images/technologies/logo-go.png' />
    </div>
    <div className='absolute -bottom-10 left-5 size-20 transition-all  ease-in group-hover:origin-left group-hover:-rotate-45'>
      <CardLogo src='/images/technologies/logo-postgres.png' />
    </div>
  </CardContent>
)

const PictureContent = () => (
  <CardContent className='bg-background group relative flex h-full flex-col items-center justify-center overflow-hidden pt-6 '>
    <Content
      title='Picture'
      description='Guess the technology from a blured image.'
      icon={() => (
        <div className='z-10 transition-all ease-in group-hover:blur-none md:blur-xl'>
          <CardLogo
            className='size-24 md:size-32'
            src='/images/technologies/ruby-logo.png'
          />
        </div>
      )}
    />
  </CardContent>
)

const CodeContent = () => (
  <CardContent className='bg-background flex h-full flex-1 flex-col items-center justify-center'>
    <Content
      title='Hello World'
      description='Guess the technology by checking'
      icon={CodeIcon}
    />
  </CardContent>
)

const QuoteContent = () => (
  <CardContent className='bg-background flex h-full flex-1 flex-col items-center justify-center'>
    <Content
      title='Quote'
      description='Guess the technology from a blured image.'
      icon={QuoteIcon}
    />
  </CardContent>
)

const Contents = {
  classic: { component: ClassicContent, url: '/classic' },
  picture: { component: PictureContent, url: '/picture' },
  code: { component: CodeContent, url: '/code' },
  quote: { component: QuoteContent, url: '/quote' },
}

interface GameCardProps {
  mode: 'classic' | 'picture' | 'code' | 'quote'
}

export default function GameCard({ mode }: GameCardProps) {
  const { component: Component, url } = Contents[mode]
  return (
    <Link href={url}>
      <Card className='card-loading-border border-1 lg:size-68 group relative size-40 overflow-hidden border-4 shadow-xl transition-all duration-100 hover:scale-110 hover:border-transparent hover:p-1 active:scale-75 md:size-80'>
        <i className='opacity-0 group-hover:opacity-100' />
        <Component />
      </Card>
    </Link>
  )
}
