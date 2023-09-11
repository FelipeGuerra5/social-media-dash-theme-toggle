import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social Media Dash Theme Toggle',
  description: 'FrontEnd Mentor project to make a social media usage Dash Baord with dark and light theme.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html
      lang="en"
      // className='light'
      // style={{ colorScheme: 'light' }}
      suppressHydrationWarning //-> Not recommended to use mindlessly
    >
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
