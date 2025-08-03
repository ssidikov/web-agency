import type { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  locale: string
  canonical: string
  alternates?: {
    [key: string]: string
  }
  openGraph?: {
    title: string
    description: string
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
}

export const generateMetadata = (config: SEOConfig): Metadata => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  
  return {
    metadataBase: new URL(baseUrl),
    title: config.title,
    description: config.description,
    keywords: config.keywords,
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
    alternates: {
      canonical: config.canonical,
      languages: config.alternates || {
        'fr': `${baseUrl}/fr`,
        'en': `${baseUrl}/en`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/fr`
      }
    },
    openGraph: {
      type: 'website',
      locale: config.locale === 'fr' ? 'fr_FR' : config.locale === 'en' ? 'en_US' : 'ru_RU',
      url: config.canonical,
      siteName: 'SIDIKOFF DIGITAL',
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      images: config.openGraph?.images || [
        {
          url: '/images/og-homepage.jpg',
          width: 1200,
          height: 630,
          alt: 'SIDIKOFF DIGITAL - Agence Web & Développement'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sidikoff',
      creator: '@sidikoff',
      title: config.title,
      description: config.description,
      images: [config.openGraph?.images?.[0]?.url || '/images/og-homepage.jpg']
    }
  }
}

export const localeConfigs = {
  fr: {
    locale: 'fr_FR',
    language: 'fr',
    direction: 'ltr',
    title: 'SIDIKOFF DIGITAL - Agence Web & Développement',
    description: 'Agence web spécialisée dans la création de sites internet, applications web et mobiles. Expertise en React, Next.js, et développement sur mesure.',
    keywords: [
      'agence web',
      'développement web',
      'création site internet',
      'React',
      'Next.js',
      'applications mobiles',
      'SEO',
      'optimisation web',
      'développeur fullstack',
      'agence digitale France'
    ]
  },
  en: {
    locale: 'en_US',
    language: 'en',
    direction: 'ltr',
    title: 'SIDIKOFF DIGITAL - Web Agency & Development',
    description: 'Web agency specialized in website creation, web and mobile applications. Expertise in React, Next.js, and custom development.',
    keywords: [
      'web agency',
      'web development',
      'website creation',
      'React',
      'Next.js',
      'mobile applications',
      'SEO',
      'web optimization',
      'fullstack developer',
      'digital agency'
    ]
  },
  ru: {
    locale: 'ru_RU',
    language: 'ru',
    direction: 'ltr',
    title: 'SIDIKOFF DIGITAL - Веб-агентство и разработка',
    description: 'Веб-агентство, специализирующееся на создании сайтов, веб и мобильных приложений. Экспертиза в React, Next.js и индивидуальной разработке.',
    keywords: [
      'веб-агентство',
      'веб-разработка',
      'создание сайтов',
      'React',
      'Next.js',
      'мобильные приложения',
      'SEO',
      'оптимизация сайтов',
      'fullstack разработчик',
      'цифровое агентство'
    ]
  }
} as const
