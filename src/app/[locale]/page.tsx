import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import { FAQ } from '@/components/FAQ'
import Contact from '@/components/Contact'
import { getDictionary } from '@/lib/dictionaries'
import { generateFrenchSEOMetadata } from '@/lib/french-seo'
import SEOHead from '@/components/SEOHead'
import { Locale } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return generateFrenchSEOMetadata('homePage', {
    locale,
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}`,
  })
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  const dict = await getDictionary(locale)

  return (
    <>
      <SEOHead pageType='homepage' />
      <Hero dict={dict.hero} common={dict.common} locale={locale} />
      <Services dictionary={dict.services} locale={locale} />
      <Portfolio dictionary={dict.portfolio} locale={locale} />
      <FAQ dictionary={dict.faq} />
      <Contact dictionary={dict.contact} locale={locale} />
    </>
  )
}
