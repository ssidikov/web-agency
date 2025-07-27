import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import { FAQ } from '@/components/FAQ'
import Contact from '@/components/Contact'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import LocaleProvider from '@/components/LocaleProvider'
import { getDictionary } from '@/lib/dictionaries'
import { generateFrenchSEOMetadata } from '@/lib/french-seo'
import { defaultLocale } from '@/lib/i18n'
import Script from 'next/script'
import { businessLocations, generateLocalBusinessSchema, organizationSchema } from '@/lib/local-seo'

export async function generateMetadata() {
  return generateFrenchSEOMetadata('homePage', {
    locale: defaultLocale,
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  })
}

export default async function HomePage() {
  // Serve French content directly at root
  const dict = await getDictionary(defaultLocale)

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
    <LocaleProvider locale={defaultLocale}>
      <div className='min-h-screen'>
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
        
        <Header locale={defaultLocale} dictionary={dict} />
        <main className='m-0 p-0'>
          <Hero dict={dict.hero} common={dict.common} locale={defaultLocale} />
          <Services dictionary={dict.services} locale={defaultLocale} />
          <Pricing locale={defaultLocale} />
          <Portfolio dictionary={dict.portfolio} locale={defaultLocale} />
          <FAQ dictionary={dict.faq} />
          <Contact dictionary={dict.contact} locale={defaultLocale} />
        </main>
        <Footer dictionary={dict} locale={defaultLocale} />
      </div>
    </LocaleProvider>
  )
}
