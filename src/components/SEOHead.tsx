'use client'

import { businessLocations, generateLocalBusinessSchema, organizationSchema } from '@/lib/local-seo'

interface SEOHeadProps {
  city?: 'Paris' | 'Toulouse'
  pageType?: 'homepage' | 'services' | 'contact' | 'blog' | 'portfolio'
  structuredData?: Record<string, unknown>
}

export default function SEOHead({ city, pageType = 'homepage', structuredData }: SEOHeadProps) {
  // Données structurées par défaut
  const defaultSchemas = []

  // Toujours inclure l'organisation
  defaultSchemas.push(organizationSchema)

  // Ajouter les données de localisation si spécifiées
  if (city) {
    const location = businessLocations.find((loc) => loc.address.addressLocality === city)
    if (location) {
      defaultSchemas.push(generateLocalBusinessSchema(location))
    }
  } else {
    // Ajouter toutes les localisations pour la page d'accueil
    businessLocations.forEach((location) => {
      defaultSchemas.push(generateLocalBusinessSchema(location))
    })
  }

  // FAQ Schema pour certaines pages
  if (pageType === 'services' || pageType === 'contact') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Combien coûte la création d'un site web ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix varie selon le projet : site vitrine (2000-5000€), e-commerce (5000-15000€), application sur mesure (10000€+). Devis gratuit disponible.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quels sont les délais de développement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '2-4 semaines pour un site vitrine, 4-8 semaines pour un e-commerce, 8-16 semaines pour une application complexe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Proposez-vous le SEO ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, optimisation SEO incluse dans tous nos projets + services SEO avancés pour améliorer votre positionnement Google.',
          },
        },
      ],
    }
    defaultSchemas.push(faqSchema)
  }

  // WebSite Schema avec recherche interne
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sidikoff.com/#website',
    name: 'SIDIKOFF DIGITAL',
    alternateName: 'Sidikoff Digital',
    url: 'https://sidikoff.com',
    description:
      'Agence web premium spécialisée dans la création de sites web modernes à Paris et Toulouse',
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
  defaultSchemas.push(websiteSchema)

  // Breadcrumb Schema
  if (pageType !== 'homepage') {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://sidikoff.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name:
            pageType === 'services'
              ? 'Services'
              : pageType === 'contact'
                ? 'Contact'
                : pageType === 'blog'
                  ? 'Blog'
                  : pageType === 'portfolio'
                    ? 'Portfolio'
                    : 'Page',
          item: `https://sidikoff.com/${pageType}`,
        },
      ],
    }
    if (city) {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: 3,
        name: city,
        item: `https://sidikoff.com/${city.toLowerCase()}`,
      })
    }
    defaultSchemas.push(breadcrumbSchema)
  }

  // Fusionner avec les données personnalisées
  const allSchemas = structuredData ? [...defaultSchemas, structuredData] : defaultSchemas

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0),
          }}
        />
      ))}

      {/* Informations géographiques pour les moteurs de recherche */}
      <meta name='geo.region' content='FR' />
      <meta name='geo.placename' content='Paris, Toulouse, France' />
      <meta name='geo.position' content='48.8566;2.3522' />
      <meta name='ICBM' content='48.8566, 2.3522' />

      {/* Dublin Core pour l'indexation */}
      <meta name='DC.title' content='SIDIKOFF DIGITAL - Agence Web Paris Toulouse' />
      <meta name='DC.creator' content='SIDIKOFF DIGITAL' />
      <meta
        name='DC.subject'
        content='développement web, création sites internet, agence digitale'
      />
      <meta
        name='DC.description'
        content='Agence web premium Paris Toulouse, création sites internet sur mesure'
      />
      <meta name='DC.publisher' content='SIDIKOFF DIGITAL' />
      <meta name='DC.contributor' content='SIDIKOFF DIGITAL Team' />
      <meta name='DC.date' content={new Date().toISOString()} />
      <meta name='DC.type' content='Text' />
      <meta name='DC.format' content='text/html' />
      <meta name='DC.identifier' content='https://sidikoff.com' />
      <meta name='DC.source' content='https://sidikoff.com' />
      <meta name='DC.language' content='fr' />
      <meta name='DC.coverage' content='France, Paris, Toulouse' />
      <meta name='DC.rights' content='Copyright SIDIKOFF DIGITAL' />

      {/* Métadonnées supplémentaires pour l'indexation locale */}
      <meta name='locality' content={city || 'Paris, Toulouse'} />
      <meta name='region' content='Île-de-France, Occitanie' />
      <meta name='country' content='France' />
      <meta name='zipcode' content='75008, 31000' />
      <meta name='distribution' content='local' />
      <meta name='coverage' content='France' />
      <meta name='target' content='all' />
      <meta name='HandheldFriendly' content='True' />
      <meta name='MobileOptimized' content='320' />
    </>
  )
}
