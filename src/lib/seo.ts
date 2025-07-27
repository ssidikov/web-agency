

// SEO utilities for better Lighthouse scores

// Generate breadcrumb structured data
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

// Generate FAQ structured data
export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate article structured data
export function generateArticleStructuredData(article: {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified: string
  image: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image,
    url: article.url,
  }
}

// Generate service structured data
export function generateServiceStructuredData(service: {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: service.areaServed,
    serviceType: service.serviceType,
  }
}

// Generate review structured data
export function generateReviewStructuredData(review: {
  itemName: string
  rating: number
  reviewBody: string
  author: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Thing',
      name: review.itemName,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.reviewBody,
    author: {
      '@type': 'Person',
      name: review.author,
    },
    datePublished: review.datePublished,
  }
}

// Validate and optimize meta tags
export function validateMetaTags() {
  if (process.env.NODE_ENV === 'development') {
    const title = document.querySelector('title')
    const metaDescription = document.querySelector('meta[name="description"]')
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    
    // Title validation
    if (!title || !title.textContent) {
      console.warn('Missing page title')
    } else if (title.textContent.length > 60) {
      console.warn('Title too long (>60 chars):', title.textContent.length)
    } else if (title.textContent.length < 30) {
      console.warn('Title too short (<30 chars):', title.textContent.length)
    }
    
    // Meta description validation
    if (!metaDescription) {
      console.warn('Missing meta description')
    } else {
      const content = metaDescription.getAttribute('content')
      if (!content) {
        console.warn('Empty meta description')
      } else if (content.length > 160) {
        console.warn('Meta description too long (>160 chars):', content.length)
      } else if (content.length < 120) {
        console.warn('Meta description too short (<120 chars):', content.length)
      }
    }
    
    // Canonical link validation
    if (!canonicalLink) {
      console.warn('Missing canonical link')
    }
    
    // Keywords check
    if (!metaKeywords) {
      console.info('No meta keywords (not required but can be helpful)')
    }
  }
}

// Generate sitemap data
export function generateSitemapData(pages: Array<{
  url: string
  lastModified: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}>) {
  return {
    pages: pages.map(page => ({
      url: page.url,
      lastModified: new Date(page.lastModified).toISOString(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  }
}

// Social media meta tags generator
export function generateSocialMetaTags(data: {
  title: string
  description: string
  image: string
  url: string
  type?: string
  siteName?: string
  twitterCard?: string
}) {
  const metaTags = [
    // Open Graph
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:image', content: data.image },
    { property: 'og:url', content: data.url },
    { property: 'og:type', content: data.type || 'website' },
    { property: 'og:site_name', content: data.siteName || 'Your Company' },
    
    // Twitter
    { name: 'twitter:card', content: data.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: data.title },
    { name: 'twitter:description', content: data.description },
    { name: 'twitter:image', content: data.image },
  ]
  
  return metaTags
}

// Check for duplicate content
export function checkDuplicateContent() {
  if (process.env.NODE_ENV === 'development') {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const headingTexts = new Set()
    
    headings.forEach(heading => {
      const text = heading.textContent?.trim()
      if (text) {
        if (headingTexts.has(text)) {
          console.warn('Duplicate heading found:', text)
        }
        headingTexts.add(text)
      }
    })
  }
}

// Internal linking suggestions
export function analyzeInternalLinks() {
  if (process.env.NODE_ENV === 'development') {
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]')
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="your-domain.com"])')
    
    console.log('Internal links count:', internalLinks.length)
    console.log('External links count:', externalLinks.length)
    
    // Check for external links without nofollow
    externalLinks.forEach(link => {
      if (!link.getAttribute('rel')?.includes('nofollow')) {
        console.info('Consider adding rel="nofollow" to external link:', link.getAttribute('href'))
      }
    })
  }
}
