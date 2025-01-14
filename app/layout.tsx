import './globals.css'
import { Inter } from 'next/font/google'
import FloatingButtons from '../components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LiverCure - Homeopathy Health Centre for Liver',
  description: 'Your trusted healthcare provider for liver care through homeopathy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#800000" />

        {/* Favicon */}
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body className={inter.className}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
