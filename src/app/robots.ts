import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sidikoff.digital'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '*.json',
          '/studio/',
          '/.env',
          '/node_modules/',
        ],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/', '/studio/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/', '/studio/'],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  }
}
