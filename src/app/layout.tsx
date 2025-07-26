import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agency - Professional Web Development',
  description:
    'Creating exceptional digital experiences that drive growth and engagement through innovative design and cutting-edge technology.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
