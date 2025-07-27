import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Analytics from '@/components/analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'),
  title: 'Sidikoff - Agence Web & Développement',
  description:
    'Agence web spécialisée dans la création de sites internet, applications web et mobiles. Expertise en React, Next.js, et développement sur mesure.',
  keywords:
    'agence web, développement web, création site internet, React, Next.js, applications mobiles',
  authors: [{ name: 'Sidikoff' }],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://sidikoff.com',
    siteName: 'Sidikoff',
    title: 'Sidikoff - Agence Web & Développement',
    description:
      'Agence web spécialisée dans la création de sites internet, applications web et mobiles.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidikoff - Agence Web & Développement',
    description:
      'Agence web spécialisée dans la création de sites internet, applications web et mobiles.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='fr'>
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
