import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PerformanceMonitor, CookieConsent } from '@/components/analytics'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Web Agency - Digital Innovation & Design',
  description:
    'A modern digital agency creating exceptional web experiences through innovative design and development.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#667eea',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/apple-icon.png' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Web Agency' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#667eea' />
        <meta name='msapplication-tap-highlight' content='no' />
      </head>
      <body
        className={`min-h-screen bg-background text-foreground font-sans antialiased ${inter.className}`}>
        {children}
        <PerformanceMonitor />
        <CookieConsent />
      </body>
    </html>
  )
}
