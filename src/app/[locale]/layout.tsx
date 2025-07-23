import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

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

export default async function LocaleLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale}>
      <body className={`${inter.className} text-[#112D4E] antialiased`}>
        <div className='min-h-screen'>
          <Header locale={locale} dictionary={dict} />
          <main className='m-0 p-0'>{children}</main>
          <Footer dictionary={dict} />
        </div>
      </body>
    </html>
  )
}
