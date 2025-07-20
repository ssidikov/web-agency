import { Header, Footer } from '@/components'
import { type Locale, locales } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { notFound } from 'next/navigation'
import { generateMetadata as generateSeoMetadata } from '@/lib/metadata'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params
  const pathname = `/${lang}`
  
  return generateSeoMetadata({}, lang, pathname)
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}) {
  // Await params before using its properties
  const { lang } = await params

  // Validate locale
  if (!locales.includes(lang)) {
    notFound()
  }

  const dict = await getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.className} bg-[#F9F7F7] text-[#112D4E] antialiased`}>
        <div className='min-h-screen bg-[#F9F7F7]'>
          <Header dictionary={dict} locale={lang} />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
