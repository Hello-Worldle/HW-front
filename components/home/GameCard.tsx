import Image from 'next/image'
import { Card, CardContent } from '../ui/Card'
import { cn } from '@/lib/utils/tailwind'
import Link from 'next/link'

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

const ClassicContent = () => (
  <CardContent className='group relative flex h-full items-center justify-center overflow-hidden bg-black pt-6'>
    <p className='text-2xl'>Classic</p>
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
  <CardContent className='group relative flex h-full flex-col items-center justify-center overflow-hidden bg-black pt-6'>
    <div className='z-10 blur-xl transition-all ease-in group-hover:blur-none'>
      <CardLogo className='size-32' src='/images/technologies/ruby-logo.png' />
    </div>
    <p className='absolute inset-x-auto z-20 text-2xl transition-all group-hover:static '>
      Picture
    </p>
  </CardContent>
)

const Contents = {
  classic: { component: ClassicContent, url: '/classic' },
  picture: { component: PictureContent, url: '/classic' },
  'hello-world': { component: ClassicContent, url: '/classic' },
  quote: { component: ClassicContent, url: '/classic' },
}

interface GameCardProps {
  mode: 'classic' | 'picture' | 'hello-world' | 'quote'
}

export default function GameCard({ mode }: GameCardProps) {
  const { component: Component, url } = Contents[mode]
  return (
    <Link href={url}>
      <Card className='card-loading-border border-1 lg:size-68 group relative size-32 overflow-hidden border-4 shadow-xl transition-all hover:scale-110 hover:p-1 active:scale-75 md:size-60 dark:border-black '>
        <i className='opacity-0 group-hover:opacity-100' />
        <Component />
      </Card>
    </Link>
  )
}
