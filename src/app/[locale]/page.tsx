import { getDictionary, type Locale } from '@/lib/i18n'
import { Hero, Services, Portfolio, FAQ } from '@/components'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  // Await params before using its properties
  const { locale } = await params
  const dict = await getDictionary(locale)

  // Debug: Check if dictionary is loaded properly
  if (!dict || !dict.about || !dict.about.title) {
    console.error('Dictionary not loaded properly:', dict)
    return <div>Error: Dictionary not loaded</div>
  }

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <About dictionary={dict} />
      <Services dictionary={dict} />
      <Portfolio dictionary={dict} />
      <FAQ dictionary={dict} />
      <Contact dictionary={dict} />
    </>
  )
}
