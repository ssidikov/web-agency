import { Metadata } from 'next'

import { Locale } from '@/lib/i18n'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  locale: Locale
  alternateLanguages?: Record<Locale, string>
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  noIndex?: boolean
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  tags?: string[]
}

export const DEFAULT_SEO = {
  siteName: 'Sardorbek SIDIKOV - Développeur Web Full Stack',
  siteUrl: 'https://sidikoff.com',
  defaultImage: '/images/og-default.jpg',
  twitterHandle: '@sidikoff',
  locale: 'fr' as Locale,
  keywords: [
    'développeur web',
    'full stack',
    'React',
    'Next.js',
    'TypeScript',
    'développement frontend',
    'développement backend',
    'freelance',
    'consultant',
  ],
}

interface LegacySEOConfig {
  title: string
  description: string
  locale: Locale
  canonical?: string
  images?: string[]
}

export function generatePageMetadata(config: LegacySEOConfig): Metadata {
  const { title, description, locale, canonical, images = [] } = config

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'ru_RU',
      type: 'website',
      images: images.length > 0 ? images : ['/images/hero/hero.svg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.length > 0 ? images : ['/images/hero/hero.svg'],
    },
    alternates: {
      canonical,
      languages: {
        fr: canonical ? canonical.replace(`/${locale}`, '') : '/',
        en: canonical ? canonical.replace(`/${locale}`, '/en') : '/en',
        ru: canonical ? canonical.replace(`/${locale}`, '/ru') : '/ru',
      },
    },
  }
}

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    locale,
    alternateLanguages,
    ogImage = DEFAULT_SEO.defaultImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noIndex = false,
    publishedTime,
    modifiedTime,
    authors,
    tags,
  } = config

  const fullTitle = title.includes(DEFAULT_SEO.siteName)
    ? title
    : `${title} | ${DEFAULT_SEO.siteName}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [...DEFAULT_SEO.keywords, ...keywords].join(', '),
    authors: authors?.map((name) => ({ name })),

    // Robots
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: DEFAULT_SEO.siteName,
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_US' : 'ru_RU',
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
      tags,
    },

    // Twitter
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      creator: DEFAULT_SEO.twitterHandle,
      images: [ogImage],
    },

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },

    // Additional meta tags
    other: {
      'theme-color': '#000000',
      'color-scheme': 'light dark',
      'format-detection': 'telephone=no',
    },
  }

  return metadata
}

// Утилита для генерации JSON-LD структурированных данных
export interface JSONLDData {
  [key: string]: unknown
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateJSONLD(
  type: 'WebSite' | 'Person' | 'Organization' | 'Article' | 'BreadcrumbList',
  data: JSONLDData
) {
  const baseContext = 'https://schema.org'

  const schemas = {
    WebSite: {
      '@context': baseContext,
      '@type': 'WebSite',
      name: DEFAULT_SEO.siteName,
      url: DEFAULT_SEO.siteUrl,
      description: data.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${DEFAULT_SEO.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      ...data,
    },
    Person: {
      '@context': baseContext,
      '@type': 'Person',
      name: 'Sardorbek SIDIKOV',
      jobTitle: 'Développeur Web Full Stack',
      url: DEFAULT_SEO.siteUrl,
      sameAs: [
        'https://github.com/ssidikov',
        'https://linkedin.com/in/sardorbeksidikov',
        'https://twitter.com/sidikoffdigital',
      ],
      ...data,
    },
    Organization: {
      '@context': baseContext,
      '@type': 'Organization',
      name: DEFAULT_SEO.siteName,
      url: DEFAULT_SEO.siteUrl,
      logo: `${DEFAULT_SEO.siteUrl}/images/logo-sidikoff.svg`,
      ...data,
    },
    Article: {
      '@context': baseContext,
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      author: {
        '@type': 'Person',
        name: 'Sardorbek SIDIKOV',
      },
      publisher: {
        '@type': 'Organization',
        name: DEFAULT_SEO.siteName,
        logo: {
          '@type': 'ImageObject',
          url: `${DEFAULT_SEO.siteUrl}/images/logo-sidikoff.svg`,
        },
      },
      ...data,
    },
    BreadcrumbList: {
      '@context': baseContext,
      '@type': 'BreadcrumbList',
      itemListElement: (data.items as BreadcrumbItem[])?.map(
        (item: BreadcrumbItem, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })
      ),
      ...data,
    },
  }

  return schemas[type]
}

// Утилита для генерации хлебных крошек
export function generateBreadcrumbs(items: BreadcrumbItem[]) {
  return generateJSONLD('BreadcrumbList', { items })
}

// Утилита для генерации мета-тегов языков
export function generateLanguageAlternates(
  baseUrl: string,
  locales: Locale[]
): Record<Locale, string> {
  const alternates: Record<string, string> = {}

  locales.forEach((locale) => {
    if (locale === 'fr') {
      alternates[locale] = baseUrl
    } else {
      alternates[locale] = `${baseUrl}/${locale}`
    }
  })

  return alternates
}

// Утилита для создания канонических URL
export function createCanonicalUrl(path: string, locale: Locale): string {
  const basePath = locale === 'fr' ? '' : `/${locale}`
  return `${DEFAULT_SEO.siteUrl}${basePath}${path}`
}

export function generateStructuredData(type: 'homepage' | 'contact' | 'page', locale: Locale) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'

  const common = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/${locale === 'fr' ? '' : locale}#webpage`,
    url: `${baseUrl}/${locale === 'fr' ? '' : locale}`,
    inLanguage: locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : 'ru-RU',
  }

  switch (type) {
    case 'homepage':
      return {
        ...common,
        '@type': 'WebSite',
        name: 'SIDIKOFF DIGITAL',
        description: 'Agence web premium spécialisée dans la création de sites web modernes',
      }
    case 'contact':
      return {
        ...common,
        name: 'Contact - SIDIKOFF DIGITAL',
        description: 'Contactez notre agence web pour votre projet digital',
      }
    default:
      return common
  }
}
