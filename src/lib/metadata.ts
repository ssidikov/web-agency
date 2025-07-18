import { Metadata } from 'next';
import { SeoMetadata } from '@/types';

const defaultMetadata: SeoMetadata = {
  title: 'Agency - Digital Innovation & Design',
  description: 'A modern digital agency creating exceptional web experiences through innovative design and development.',
  keywords: ['digital agency', 'web design', 'web development', 'ui/ux design', 'branding'],
  image: '/og-image.jpg',
  url: 'https://your-domain.com',
  type: 'website',
};

export function generateMetadata(customMeta?: Partial<SeoMetadata>): Metadata {
  const meta = { ...defaultMetadata, ...customMeta };
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'Agency' }],
    creator: 'Agency',
    publisher: 'Agency',
    
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
    },
    
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
    
    verification: {
      google: 'your-google-verification-code',
    },
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
