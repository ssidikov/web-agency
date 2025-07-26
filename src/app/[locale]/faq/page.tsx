import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { FAQ } from '@/components/FAQ'
import { ErrorBoundary } from '@/components/ErrorBoundary'

interface FAQPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return (
    <ErrorBoundary>
      <FAQ dictionary={dictionary.faq} />
    </ErrorBoundary>
  )
}
