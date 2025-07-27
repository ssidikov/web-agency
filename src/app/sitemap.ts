
import { MetadataRoute } from 'next'

import { mainServices } from '@/lib/local-seo'



export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.com'
  const locales = ['fr', 'en', 'ru']
  const lastModified = new Date()

  // Pages principales avec toutes les langues
  const mainPages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/portfolio', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFreq: 'yearly' as const },
    { path: '/faq', priority: 0.6, changeFreq: 'monthly' as const },
  ]

  // Pages de services détaillées (français prioritaire)
  const servicePages = mainServices.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFreq: 'monthly' as const,
  }))

  // Pages locales SEO (français uniquement)
  const localPages = [
    { path: '/paris', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/toulouse', priority: 0.9, changeFreq: 'weekly' as const },
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Ajouter pages principales multilingues
  mainPages.forEach((page) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFreq,
        priority: locale === 'fr' ? page.priority : page.priority * 0.8, // Priorité française
        alternates: {
          languages: locales.reduce(
            (acc, loc) => {
              acc[loc] = `${baseUrl}/${loc}${page.path}`
              return acc
            },
            {} as Record<string, string>
          ),
        },
      })
    })
  })

  // Ajouter pages de services (multilingues)
  servicePages.forEach((page) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified,
        changeFrequency: page.changeFreq,
        priority: locale === 'fr' ? page.priority : page.priority * 0.7,
      })
    })
  })

  // Ajouter pages locales (français uniquement)
  localPages.forEach((page) => {
    sitemap.push({
      url: `${baseUrl}/fr${page.path}`,
      lastModified,
      changeFrequency: page.changeFreq,
      priority: page.priority,
    })
  })

  // Page racine avec redirection vers français
  sitemap.push({
    url: baseUrl,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: locales.reduce(
        (acc, locale) => {
          acc[locale] = `${baseUrl}/${locale}`
          return acc
        },
        {} as Record<string, string>
      ),
    },
  })

  return sitemap.sort((a, b) => (b.priority || 0) - (a.priority || 0))
}
