import { Header, Footer } from '@/components'
import { type Locale, locales, getDictionary } from '@/lib/i18n'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}) {
  // Await params before using its properties
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  const dict = await getDictionary(locale)

  return (
    <>
      <Header dictionary={dict} locale={locale} />
      <main className='pt-16'>{children}</main>
      <Footer />
    </>
  )
}
