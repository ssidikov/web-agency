import Contact from '@/components/Contact'
import { getDictionary } from '@/lib/dictionaries'
import { generateFrenchSEOMetadata } from '@/lib/french-seo'
import SEOHead from '@/components/SEOHead'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr' | 'ru' }>
}) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)
  return <Contact dictionary={dictionary.contact} locale={locale} className='pt-[140px]' />
}
