import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import ErrorBoundary from './ErrorBoundary'
import Error from './notes/[id]/error'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ErrorBoundary fallback={<Error />}> */}
          <nav className="text-white font-bold space-x-5 text-xl">
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        {/* </ErrorBoundary> */}
      </body>
    </html>
  )
}
