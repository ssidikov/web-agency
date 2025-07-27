import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import { FAQ } from '@/components/FAQ'
import Contact from '@/components/Contact'
import { getDictionary } from '@/lib/dictionaries'
import { generateFrenchSEOMetadata } from '@/lib/french-seo'
import { Locale } from '@/lib/i18n'
import Script from 'next/script'
import { businessLocations, generateLocalBusinessSchema, organizationSchema } from '@/lib/local-seo'

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

  // Generate structured data for homepage
  const schemas = [
    organizationSchema,
    ...businessLocations.map(location => generateLocalBusinessSchema(location)),
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://sidikoff.com/#website',
      name: 'SIDIKOFF DIGITAL',
      alternateName: 'Sidikoff Digital',
      url: 'https://sidikoff.com',
      description: 'Agence web premium spécialisée dans la création de sites web modernes à Paris et Toulouse',
      inLanguage: ['fr-FR', 'en-US', 'ru-RU'],
      isPartOf: {
        '@type': 'Organization',
        '@id': 'https://sidikoff.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://sidikoff.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
      copyrightYear: new Date().getFullYear(),
      copyrightHolder: {
        '@type': 'Organization',
        '@id': 'https://sidikoff.com/#organization',
      },
    }
  ]

  return (
    <>
      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}
      
      <Hero dict={dict.hero} common={dict.common} locale={locale} />
      <Services dictionary={dict.services} locale={locale} />
      <Portfolio dictionary={dict.portfolio} locale={locale} />
      <FAQ dictionary={dict.faq} />
      <Contact dictionary={dict.contact} locale={locale} />
    </>
  )
}
