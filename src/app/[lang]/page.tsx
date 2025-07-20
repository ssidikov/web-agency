import { type Locale } from '@/lib/i18n'
import { getDictionary } from '@/lib/dictionaries'
import { Hero, Services, Portfolio, FAQ } from '@/components'
import Contact from '@/components/Contact'

export default async function LocalePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  // Await params before using its properties
  const { lang } = await params
  const dict = await getDictionary(lang)

  // Debug: Check if dictionary is loaded properly
  if (!dict) {
    console.error('Dictionary not loaded properly:', dict)
    return <div>Error: Dictionary not loaded</div>
  }

  return (
    <>
      <Hero dict={dict} locale={lang} />
      <Services />
      <Portfolio dictionary={dict} />
      <FAQ dictionary={dict} />
      <Contact dictionary={dict} />
    </>
  )
}
