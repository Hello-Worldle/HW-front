import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/lib/theme'
import ToolsSection from '@/components/tools-section'
import GameBackground from '@/components/game-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hello Worldle',
  description: 'Guess the technology of the day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <div className='relative flex min-h-screen flex-col justify-between'>
            <ToolsSection />
            {children}
            <GameBackground />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
