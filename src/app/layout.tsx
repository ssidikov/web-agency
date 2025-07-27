import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SIDIKOFF DIGITAL - Agence Web Premium Paris & Toulouse',
  description:
    'Agence web premium spécialisée dans la création de sites web modernes à Paris et Toulouse. Développement sur mesure, e-commerce, SEO.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} text-[#112D4E] antialiased`}
        suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
