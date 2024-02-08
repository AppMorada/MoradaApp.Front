import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@/styles/globals.css'

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
            <body className={inter.variable}>{children}</body>
        </html>
    )
}
