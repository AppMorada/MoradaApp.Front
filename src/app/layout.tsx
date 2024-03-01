import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const nevermind = localFont({
  src: [
    {
      path: './_fonts/nevermind-rounded/NeverMindDisplay-Bold-BF6501204d66b5c.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './_fonts/nevermind-rounded/NeverMindDisplay-Extrabold-BF65012052803af.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './_fonts/nevermind-rounded/NeverMindDisplay-Medium-BF6501205310ee9.ttf',
      weight: '500',
      style: 'normal'
    }
  ],

  variable: '--font-nevermind'
})

export const metadata: Metadata = {
  title: 'MoradaApp',
  description: 'A melhor maneira de gerenciar seu condomínio!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${nevermind.variable}`}>
        {children}
      </body>
    </html>
  )
}
