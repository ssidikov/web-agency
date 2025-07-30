// Локальная SEO конфигурация для SIDIKOFF DIGITAL
export interface LocalBusiness {
  name: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
    addressRegion: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  phone: string
  email: string
  openingHours: string[]
  priceRange: string
  description: string
}

// Офисы SIDIKOFF DIGITAL
export const businessLocations: LocalBusiness[] = [
  {
    name: 'SIDIKOFF DIGITAL - Paris',
    address: {
      streetAddress: '75 Avenue des Champs-Élysées',
      addressLocality: 'Paris',
      postalCode: '75008',
      addressCountry: 'FR',
      addressRegion: 'Île-de-France',
    },
    geo: {
      latitude: 48.8704,
      longitude: 2.3042,
    },
    phone: '+33 6 26 93 27 34',
    email: 's.sidikoff@gmail.com',
    openingHours: [
      'Monday 09:00-18:00',
      'Tuesday 09:00-18:00',
      'Wednesday 09:00-18:00',
      'Thursday 09:00-18:00',
      'Friday 09:00-18:00',
      'Saturday 09:00-18:00',
      'Sunday 09:00-18:00',
    ],
    priceRange: '€€',
    description:
      'Agence web premium à Paris spécialisée dans la création de sites web sur mesure, e-commerce et stratégies digitales innovantes.',
  },
  {
    name: 'SIDIKOFF DIGITAL - Toulouse',
    address: {
      streetAddress: '15 Place du Capitole',
      addressLocality: 'Toulouse',
      postalCode: '31000',
      addressCountry: 'FR',
      addressRegion: 'Occitanie',
    },
    geo: {
      latitude: 48.8528,
      longitude: 2.3499,
    },
    phone: '+33 6 26 93 27 34',
    email: 'toulouse@sidikoff.com',
    openingHours: [
      'Monday 09:00-18:00',
      'Tuesday 09:00-18:00',
      'Wednesday 09:00-18:00',
      'Thursday 09:00-18:00',
      'Friday 09:00-18:00',
      'Saturday 09:00-18:00',
      'Sunday 09:00-18:00',
    ],
    priceRange: '€€',
    description:
      "Studio de création web à Toulouse expert en développement d'applications web modernes et solutions digitales performantes.",
  },
]

// Mots-clés locaux français pour le SEO
export const frenchLocalKeywords = [
  // Paris
  'création site web Paris',
  'agence web Paris',
  'développeur web Paris',
  'site internet Paris',
  'e-commerce Paris',
  'refonte site web Paris',
  'développement web Paris',
  'agence digitale Paris',
  'création site vitrine Paris',
  'site responsive Paris',

  // Toulouse
  'création site web Toulouse',
  'agence web Toulouse',
  'développeur web Toulouse',
  'site internet Toulouse',
  'e-commerce Toulouse',
  'refonte site web Toulouse',
  'développement web Toulouse',
  'agence digitale Toulouse',
  'création site vitrine Toulouse',
  'site responsive Toulouse',

  // Génériques français
  'création site web sur mesure',
  'développement web professionnel',
  'agence web premium France',
  'site internet haute qualité',
  'développeur React Next.js',
  'optimisation SEO France',
  'design web moderne',
  'expérience utilisateur UX/UI',
  'site web rapide performant',
  'maintenance site web',
]

// Services principaux pour SEO
export const mainServices = [
  {
    name: 'Création de sites web',
    slug: 'creation-sites-web',
    description: 'Développement de sites web sur mesure avec les dernières technologies',
    keywords: ['création site web', 'développement web', 'site sur mesure', 'React', 'Next.js'],
  },
  {
    name: 'E-commerce',
    slug: 'e-commerce',
    description: 'Boutiques en ligne performantes et solutions de vente digitale',
    keywords: [
      'e-commerce',
      'boutique en ligne',
      'vente en ligne',
      'shop',
      'commerce électronique',
    ],
  },
  {
    name: 'Refonte de sites',
    slug: 'refonte-sites-web',
    description: 'Modernisation et optimisation de sites web existants',
    keywords: ['refonte site web', 'modernisation', 'optimisation', 'amélioration site'],
  },
  {
    name: 'SEO & Marketing',
    slug: 'seo-marketing-digital',
    description: 'Référencement naturel et stratégies marketing digitales',
    keywords: ['SEO', 'référencement', 'marketing digital', 'visibilité', 'Google'],
  },
  {
    name: 'Maintenance & Support',
    slug: 'maintenance-support',
    description: 'Maintenance technique et support continu pour votre site web',
    keywords: ['maintenance', 'support', 'mise à jour', 'sécurité', 'sauvegarde'],
  },
]

// Générer JSON-LD pour Local Business
export function generateLocalBusinessSchema(location: LocalBusiness) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://sidikoff.com/#business-${location.address.addressLocality.toLowerCase()}`,
    name: location.name,
    alternateName: 'SIDIKOFF DIGITAL',
    description: location.description,
    url: 'https://sidikoff.com',
    logo: 'https://sidikoff.com/images/logo-sidikoff.svg',
    image: [
      'https://sidikoff.com/images/about/team-workspace.jpg',
      'https://sidikoff.com/images/about/innovation.jpg',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.streetAddress,
      addressLocality: location.address.addressLocality,
      postalCode: location.address.postalCode,
      addressCountry: location.address.addressCountry,
      addressRegion: location.address.addressRegion,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    telephone: location.phone,
    email: location.email,
    priceRange: location.priceRange,
    openingHours: location.openingHours,
    sameAs: [
      'https://www.linkedin.com/in/sardorbeksidikov/',
      'https://github.com/ssidikov',
      'https://www.facebook.com/sidikoff.digital/',
      'https://twitter.com/sidikoffdigital',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: location.phone,
      contactType: 'customer service',
      availableLanguage: ['French', 'English'],
      areaServed: ['FR', 'EU'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services de développement web',
      itemListElement: mainServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
        },
      })),
    },
  }
}

// Organisation schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sidikoff.com/#organization',
  name: 'SIDIKOFF DIGITAL',
  alternateName: 'SIDIKOFF DIGITALDigital',
  description:
    'Agence web premium spécialisée dans la création de sites web modernes, applications React/Next.js et stratégies digitales innovantes en France.',
  url: 'https://sidikoff.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sidikoff.com/images/logo-sidikoff.svg',
    width: 300,
    height: 100,
  },
  image: 'https://sidikoff.com/images/about/team-workspace.jpg',
  founder: {
    '@type': 'Person',
    name: 'SIDIKOFF DIGITAL Team',
  },
  foundingDate: '2020',
  numberOfEmployees: '5-10',
  slogan: 'Votre vision, notre expertise technique',
  knowsAbout: [
    'Développement web',
    'React',
    'Next.js',
    'E-commerce',
    'SEO',
    'UX/UI Design',
    'TypeScript',
    'Node.js',
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Paris',
      addressCountry: 'FR',
    },
    {
      '@type': 'City',
      name: 'Toulouse',
      addressCountry: 'FR',
    },
    {
      '@type': 'Country',
      name: 'France',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services SIDIKOFF DIGITAL',
    itemListElement: mainServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'SIDIKOFF DIGITAL',
        },
        areaServed: 'France',
      },
    })),
  },
}
