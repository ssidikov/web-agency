import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { fallbackDictionary } from '@/lib/fallback-dictionary'

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

  try {
    const dict = await getDictionary(locale)

    // Ensure dict is an object and navigation exists, provide fallback if needed
    if (typeof dict !== 'object' || dict === null) {
      return (
        <html lang={locale}>
          <body className={`${inter.className} text-[#112D4E] antialiased`}>
            <div className='min-h-screen'>
              <Header locale={locale} dictionary={fallbackDictionary} />
              <main className='m-0 p-0'>
                <div className='p-4'>
                  <h1>Loading Error</h1>
                  <p>There was an error loading the page. Please refresh.</p>
                </div>
              </main>
              <Footer dictionary={fallbackDictionary} locale={locale} />
            </div>
          </body>
        </html>
      )
    }

    if (!('navigation' in dict)) {
      // Add navigation object to dictionary with proper typing
      Object.assign(dict, {
        navigation: {
          home: 'Home',
          services: 'Services',
          portfolio: 'Portfolio',
          faq: 'FAQ',
          contact: 'Contact',
          language: 'Language',
        },
      })
    }

    return (
      <html lang={locale}>
        <body className={`${inter.className} text-[#112D4E] antialiased`}>
          <div className='min-h-screen'>
            <Header locale={locale} dictionary={dict} />
            <main className='m-0 p-0'>{children}</main>
            <Footer dictionary={dict} locale={locale} />
          </div>
        </body>
      </html>
    )
  } catch {
    return (
      <html lang={locale}>
        <body className={`${inter.className} text-[#112D4E] antialiased`}>
          <div className='min-h-screen'>
            <Header locale={locale} dictionary={fallbackDictionary} />
            <main className='m-0 p-0'>
              <div className='p-4'>
                <h1>Loading Error</h1>
                <p>There was an error loading the page. Please refresh.</p>
              </div>
            </main>
            <Footer dictionary={fallbackDictionary} locale={locale} />
          </div>
        </body>
      </html>
    )
  }
}
