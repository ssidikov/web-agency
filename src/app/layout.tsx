import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agency - Professional Web Development',
  description: 'Creating exceptional digital experiences that drive growth and engagement through innovative design and cutting-edge technology.',
  keywords: ['web development', 'design', 'digital agency', 'UI/UX'],
  authors: [{ name: 'Agency Team' }],
  openGraph: {
    title: 'Agency - Professional Web Development',
    description: 'Creating exceptional digital experiences that drive growth and engagement through innovative design and cutting-edge technology.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agency - Professional Web Development',
    description: 'Creating exceptional digital experiences that drive growth and engagement through innovative design and cutting-edge technology.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#F9F7F7] text-[#112D4E] antialiased`}>
        {children}
      </body>
    </html>
  )
}
