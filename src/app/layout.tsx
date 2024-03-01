import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import '@/styles/globals.css'

const neverMind = localFont({
  src: [
    {
      path: './_styles/fonts/nevermind/NeverMindRounded-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './_styles/fonts/nevermind/NeverMindRounded-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './_styles/fonts/nevermind/NeverMindRounded-ExtraBold.ttf',
      weight: '800',
      style: 'normal'
    }
  ],
  variable: '--nevermind-font'
})

const inter = Inter({ subsets: ['latin'], variable: '--inter-font' })

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
      <body className={`${inter.variable} ${neverMind.variable}`}>
        {children}
      </body>
    </html>
  )
}
