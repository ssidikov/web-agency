// Services principaux pour le sitemap et SEO
export const mainServices = [
  {
    slug: 'creation-site-web',
    title: 'Création de site web',
    description: 'Développement de sites web modernes et responsives'
  },
  {
    slug: 'e-commerce',
    title: 'E-commerce',
    description: 'Création de boutiques en ligne performantes'
  },
  {
    slug: 'application-web',
    title: 'Application web',
    description: 'Développement d\'applications web sur mesure'
  },
  {
    slug: 'seo',
    title: 'Référencement SEO',
    description: 'Optimisation pour les moteurs de recherche'
  },
  {
    slug: 'maintenance',
    title: 'Maintenance',
    description: 'Maintenance et support technique'
  },
  {
    slug: 'consulting',
    title: 'Conseil digital',
    description: 'Conseil en stratégie digitale'
  }
]

// URLs canoniques pour différentes pages
export const generateCanonicalUrl = (path: string, locale?: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  
  if (!locale || locale === 'fr') {
    return path === '' ? baseUrl : `${baseUrl}/${path}`
  }
  
  return path === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${path}`
}

// Génération des alternates hreflang
export const generateAlternates = (path: string = '') => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  const locales = ['fr', 'en', 'ru']
  
  const alternates: Record<string, string> = {}
  
  locales.forEach(locale => {
    if (locale === 'fr') {
      alternates[locale] = path === '' ? baseUrl : `${baseUrl}/${path}`
    } else {
      alternates[locale] = path === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${path}`
    }
  })
  
  // URL par défaut (français)
  alternates['x-default'] = path === '' ? baseUrl : `${baseUrl}/${path}`
  
  return alternates
}

// Priorités SEO pour différents types de pages
export const pagePriorities = {
  home: 1.0,
  services: 0.9,
  portfolio: 0.8,
  projects: 0.8,
  blog: 0.8,
  contact: 0.9,
  serviceDetail: 0.7,
  projectDetail: 0.6,
  blogPost: 0.6,
  legal: 0.3,
  faq: 0.6,
  localSEO: 0.9
} as const

// Fréquences de changement pour le sitemap
export const changeFrequencies = {
  home: 'weekly',
  services: 'weekly', 
  portfolio: 'weekly',
  projects: 'weekly',
  blog: 'daily',
  contact: 'monthly',
  serviceDetail: 'monthly',
  projectDetail: 'monthly',
  blogPost: 'weekly',
  legal: 'yearly',
  faq: 'monthly',
  localSEO: 'weekly'
} as const
