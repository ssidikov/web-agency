import { Metadata } from 'next';
import { SeoMetadata } from '@/types';
import { Locale } from './i18n';

const defaultMetadata: SeoMetadata = {
  title: 'Agency - Digital Innovation & Design',
  description: 'A modern digital agency creating exceptional web experiences through innovative design and development. Get started with your next project today.',
  keywords: ['digital agency', 'web design', 'web development', 'ui/ux design', 'branding', 'next.js', 'react', 'tailwind css'],
  image: '/og-image.jpg',
  url: 'https://sidikoff.com',
  type: 'website',
};

export function generateMetadata(
  customMeta?: Partial<SeoMetadata>, 
  locale?: Locale,
  pathname?: string
): Metadata {
  const meta = { ...defaultMetadata, ...customMeta };
  const baseUrl = 'https://sidikoff.com';
  
  // Generate alternate language URLs  
  const cleanPath = pathname?.replace(/^\/(fr|en|ru)/, '') || '/';
  const alternateLanguages: Record<string, string> = {
    'fr-FR': `${baseUrl}/fr${cleanPath}`,
    'en-US': `${baseUrl}/en${cleanPath}`, 
    'ru-RU': `${baseUrl}/ru${cleanPath}`,
    'x-default': `${baseUrl}/fr${cleanPath}`, // x-default points to French (default)
  };
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Agency Team', url: baseUrl }],
    creator: 'Agency',
    publisher: 'Agency',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: meta.url,
      languages: alternateLanguages,
    },
    
    openGraph: {
      type: (meta.type || 'website') as 'website' | 'article',
      locale: 'en_US',
      url: meta.url,
      title: meta.title,
      description: meta.description,
      siteName: 'Agency',
      images: [
        {
          url: meta.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [meta.image || '/og-image.jpg'],
      creator: '@agency',
      site: '@agency',
    },
    
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    
    category: 'technology',
  };
}

export function generateStructuredData(type: string, data: Record<string, unknown>) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
  
  return {
    __html: JSON.stringify(baseData),
  };
}

// Page-specific metadata generators
export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
  customMeta?: Partial<SeoMetadata>
): Metadata {
  return generateMetadata({
    title: `${title} | Agency`,
    description,
    url: `https://your-domain.com${path}`,
    ...customMeta,
  });
}

// Structured data for different page types
export const organizationStructuredData = generateStructuredData('Organization', {
  name: 'Agency',
  url: 'https://your-domain.com',
  logo: 'https://your-domain.com/logo.png',
  description: 'A modern digital agency creating exceptional web experiences',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Avenue',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'customer service',
  },
  sameAs: [
    'https://twitter.com/agency',
    'https://linkedin.com/company/agency',
    'https://github.com/agency',
  ],
});

export const websiteStructuredData = generateStructuredData('WebSite', {
  name: 'Agency',
  url: 'https://your-domain.com',
  description: 'A modern digital agency creating exceptional web experiences',
  publisher: {
    '@type': 'Organization',
    name: 'Agency',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://your-domain.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
});
