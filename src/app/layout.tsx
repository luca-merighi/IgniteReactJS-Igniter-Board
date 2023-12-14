import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import './globals.css'

import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Igniter Board',
  authors: [{ name: 'Luca Merighi' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html
        lang="pt-BR"
        className="antialiased"
      >
        <head>
          <link rel="shortcut icon" href="/ignite.svg" type="image/x-icon" />
        </head>

        <body className={inter.className}>
          <div className="min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
            <Sidebar />
            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </body>
      </html>
  )
}