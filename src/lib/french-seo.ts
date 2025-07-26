import { Metadata } from 'next'
import { frenchLocalKeywords, mainServices } from './local-seo'

// Французские SEO заголовки и описания
export const frenchSEOContent = {
  homePage: {
    title: 'Création Site Web Paris & Toulouse | Agence Web Premium SIDIKOFF DIGITAL',
    description:
      '🥇 Agence web #1 à Paris & Toulouse ✨ Création sites web sur mesure, e-commerce, React/Next.js. Devis gratuit ☎️ +33 1 42 56 78 90',
    keywords:
      'création site web Paris, agence web Toulouse, développement web France, site internet sur mesure, React Next.js, e-commerce professionnel',
  },

  services: {
    title: 'Services Web Premium | Développement, E-commerce, SEO | SIDIKOFF DIGITAL',
    description:
      'Services web complets : création sites, e-commerce, refonte, SEO, maintenance. Technologies modernes React/Next.js. Paris & Toulouse.',
    keywords:
      'services web, développement site internet, e-commerce, SEO France, refonte site web, maintenance web',
  },

  portfolio: {
    title: 'Portfolio Projets Web | Réalisations SIDIKOFF DIGITAL Paris Toulouse',
    description:
      'Découvrez nos réalisations web : sites vitrine, e-commerce, applications. Portfolio de projets modernes React/Next.js à Paris et Toulouse.',
    keywords:
      'portfolio web, réalisations sites internet, projets développement web, exemples sites React',
  },

  blog: {
    title: 'Blog Développement Web | Actualités & Conseils | SIDIKOFF DIGITAL',
    description:
      'Blog expert en développement web : tutoriels React/Next.js, conseils SEO, tendances web design. Expertise technique Paris & Toulouse.',
    keywords:
      'blog développement web, actualités web, conseils SEO, tutoriels React, tendances design',
  },

  contact: {
    title: 'Contact Agence Web Paris Toulouse | Devis Gratuit | SIDIKOFF DIGITAL',
    description:
      'Contactez notre agence web à Paris ou Toulouse. Devis gratuit pour votre projet web. ☎️ Paris: +33 1 42 56 78 90 | Toulouse: +33 5 61 23 45 67',
    keywords:
      'contact agence web, devis site internet, développeur web Paris Toulouse, consultation gratuite',
  },
}

// Génération de métadonnées SEO optimisées
export function generateFrenchSEOMetadata(
  page: keyof typeof frenchSEOContent,
  customData?: {
    title?: string
    description?: string
    keywords?: string
    canonical?: string
    locale?: string
  }
): Metadata {
  const seoData = frenchSEOContent[page]
  const title = customData?.title || seoData.title
  const description = customData?.description || seoData.description
  const keywords = customData?.keywords || seoData.keywords
  const locale = customData?.locale || 'fr'

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.digital'
  const canonical = customData?.canonical || baseUrl

  return {
    title,
    description,
    keywords,

    // Open Graph pour Facebook/LinkedIn
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'ru_RU',
      url: canonical,
      title,
      description,
      siteName: 'SIDIKOFF DIGITAL',
      images: [
        {
          url: `${baseUrl}/images/hero/hero-bg1.webp`,
          width: 1200,
          height: 630,
          alt: 'SIDIKOFF DIGITAL - Agence Web Premium Paris Toulouse',
        },
        {
          url: `${baseUrl}/images/about/team-workspace.jpg`,
          width: 800,
          height: 600,
          alt: 'Équipe SIDIKOFF DIGITAL au travail',
        },
      ],
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      site: '@sidikoffdigital',
      creator: '@sidikoffdigital',
      title,
      description,
      images: [`${baseUrl}/images/hero/hero-bg1.webp`],
    },

    // Liens canoniques et alternatives
    alternates: {
      canonical,
      languages: {
        fr: `${baseUrl}/fr`,
        en: `${baseUrl}/en`,
        ru: `${baseUrl}/ru`,
        'x-default': `${baseUrl}/fr`,
      },
    },

    // Métadonnées robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Informations supplémentaires
    authors: [{ name: 'SIDIKOFF DIGITAL', url: baseUrl }],
    creator: 'SIDIKOFF DIGITAL',
    publisher: 'SIDIKOFF DIGITAL',

    // Métadonnées techniques
    category: 'technology',
    classification: 'Business',

    // Géolocalisation
    other: {
      'geo.region': 'FR',
      'geo.placename': locale === 'fr' ? 'Paris, Toulouse' : 'Paris, Toulouse',
      'geo.position': '48.8566;2.3522', // Coordonnées Paris
      ICBM: '48.8566, 2.3522',
    },
  }
}

// Mots-clés par page pour le contenu français
export const frenchPageKeywords = {
  creation: [
    'création site web',
    'développement site internet',
    'site web sur mesure',
    'agence web Paris',
    'développeur React',
    'Next.js France',
  ],

  ecommerce: [
    'création boutique en ligne',
    'e-commerce professionnel',
    'site marchand',
    'vente en ligne',
    'shop online France',
  ],

  refonte: [
    'refonte site web',
    'modernisation site internet',
    'amélioration performance web',
    'optimisation site existant',
  ],

  seo: [
    'référencement naturel',
    'SEO France',
    'optimisation Google',
    'visibilité web',
    'positionnement moteurs recherche',
  ],

  maintenance: [
    'maintenance site web',
    'support technique',
    'mise à jour sécurité',
    'sauvegarde site internet',
  ],
}

// Génération de contenu local pour SEO
export function generateLocalContent(city: 'Paris' | 'Toulouse') {
  const cityData = {
    Paris: {
      region: 'Île-de-France',
      description: 'la capitale française et centre économique majeur',
      landmarks: ['Champs-Élysées', 'Tour Eiffel', 'Louvre', 'La Défense'],
      businessDistricts: ['8ème arrondissement', 'La Défense', 'Marais', 'Saint-Germain'],
      phone: '+33 1 42 56 78 90',
      zipCodes: ['75001', '75008', '75016', '75017'],
    },
    Toulouse: {
      region: 'Occitanie',
      description: 'la ville rose et pôle technologique du sud-ouest',
      landmarks: ['Place du Capitole', "Cité de l'espace", 'Basilique Saint-Sernin'],
      businessDistricts: ['Centre-ville', 'Compans-Caffarelli', 'Rangueil'],
      phone: '+33 5 61 23 45 67',
      zipCodes: ['31000', '31100', '31200', '31300'],
    },
  }

  const data = cityData[city]

  return {
    title: `Agence Web ${city} | Création Sites Internet | SIDIKOFF DIGITAL`,
    description: `Agence web premium à ${city} (${data.region}). Création sites internet, e-commerce, applications React/Next.js. Expert développement web ${city}. ☎️ ${data.phone}`,
    content: {
      heading: `Votre Agence Web de Confiance à ${city}`,
      intro: `SIDIKOFF DIGITAL accompagne les entreprises de ${city} et de ${data.region} dans leur transformation digitale. Notre équipe d'experts développe des solutions web modernes et performantes adaptées au marché local.`,
      localAdvantages: [
        `Connaissance approfondie du marché ${city}`,
        `Proximité avec nos clients en ${data.region}`,
        `Support technique réactif sur ${city}`,
        `Réseautage local actif dans ${data.region}`,
      ],
      nearbyAreas: data.businessDistricts,
      contactInfo: {
        phone: data.phone,
        email: `${city.toLowerCase()}@sidikoff.digital`,
        address:
          city === 'Paris'
            ? '75 Avenue des Champs-Élysées, 75008 Paris'
            : '15 Place du Capitole, 31000 Toulouse',
      },
    },
  }
}

// FAQ pour SEO local français
export const frenchLocalFAQ = [
  {
    question: "Combien coûte la création d'un site web à Paris ou Toulouse ?",
    answer:
      "Le prix d'un site web varie selon vos besoins : site vitrine (2000-5000€), e-commerce (5000-15000€), application web sur mesure (10000€+). Nous proposons un devis gratuit adapté à votre projet.",
  },
  {
    question: 'Quels sont les délais pour créer un site internet ?',
    answer:
      'Généralement 2-4 semaines pour un site vitrine, 4-8 semaines pour un e-commerce, et 8-16 semaines pour une application complexe. Nous nous adaptons à vos urgences.',
  },
  {
    question: 'Proposez-vous la maintenance de sites web ?',
    answer:
      'Oui, nous offrons des contrats de maintenance incluant mises à jour sécurité, sauvegardes, optimisations performance, et support technique continu.',
  },
  {
    question: 'Vos sites sont-ils optimisés pour le référencement Google ?',
    answer:
      'Absolument ! Tous nos sites incluent une optimisation SEO technique de base. Nous proposons aussi des services SEO avancés pour améliorer votre visibilité sur Google France.',
  },
  {
    question: 'Travaillez-vous avec des clients en dehors de Paris et Toulouse ?',
    answer:
      'Bien sûr ! Bien que nos bureaux soient à Paris et Toulouse, nous accompagnons des clients dans toute la France grâce au télétravail et déplacements.',
  },
  {
    question: 'Quelles technologies utilisez-vous pour le développement ?',
    answer:
      'Nous utilisons des technologies modernes : React, Next.js, TypeScript, Node.js pour des sites rapides, sécurisés et évolutifs. Notre stack technique garantit performance et durabilité.',
  },
]
