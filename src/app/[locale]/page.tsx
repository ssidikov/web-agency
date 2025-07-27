
import Script from 'next/script'
import { businessLocations, generateLocalBusinessSchema, organizationSchema } from '@/lib/local-seo'
import { generateFrenchSEOMetadata } from '@/lib/french-seo'
import { getDictionary } from '@/lib/dictionaries'
import { Hero, Services, Pricing, Portfolio, FAQ, Contact } from '@/sections'

import { Locale } from '@/lib/i18n'

interface HomePageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params
  return generateFrenchSEOMetadata(locale)
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  const localBusiness = businessLocations[0] // Use first location (Paris)
  const localBusinessSchema = generateLocalBusinessSchema(localBusiness)

  return (
    <>
      <Script
        id="structured-data-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="structured-data-local"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <main>
        <Hero dict={dict.hero} common={dict.common} locale={locale} />
        <Services dictionary={dict.services} locale={locale} />
        <Portfolio locale={locale} dictionary={dict.portfolio} />
        <Pricing locale={locale} />
        <FAQ locale={locale} dictionary={dict.faq} />
        <Contact dictionary={dict.contact} locale={locale} className="" />
      </main>
    </>
  )
}

