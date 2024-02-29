import type { Metadata } from 'next'

import '@/styles/globals.css'

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
      <body className="font-nevermind-regular">{children}</body>
    </html>
  )
}
