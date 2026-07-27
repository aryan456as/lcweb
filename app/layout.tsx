import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import FloatingButtons from '../components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LiverCure - Homeopathy Health Centre for Liver',
  description: 'Your trusted healthcare provider for liver care through homeopathy',
  icons: {
    icon: '/favicon-32x32.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#800000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
