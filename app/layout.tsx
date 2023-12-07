import type { Metadata } from 'next'
import './globals.css'
import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'NEXTJS WITH NO STATES!',
  description: 'NEXTJS WITH NO STATES!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
