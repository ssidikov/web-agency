import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/FooterNew'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Web Agency - Professional Web Development',
    description: 'Professional web development services for modern businesses',
    other: {
      'google-site-verification': 'your-verification-code',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-[#F9F7F7] text-[#112D4E] antialiased`}>
        <div className='min-h-screen bg-[#F9F7F7]'>
          <Header locale={locale} dictionary={dict} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
