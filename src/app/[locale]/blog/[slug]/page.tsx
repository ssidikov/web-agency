import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { BlogPostContent } from '@/components/BlogPostContent'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { getBlogPostBySlug, getBlogPosts, urlFor } from '@/lib/sanity'

interface BlogPostPageProps {
  params: Promise<{ locale: Locale; slug: string }>
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt || ''
  const imageUrl = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined

  return {
    title: `${title} | SIDIKOFF DIGITAL Blog`,
    description,
    keywords: post.seo?.keywords,
    openGraph: {
      title,
      description,
      type: 'article',
      locale: locale,
      publishedTime: post.publishedAt,
      authors: ['SIDIKOFF DIGITAL'],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  const [post, dictionary] = await Promise.all([getBlogPostBySlug(slug), getDictionary(locale)])

  if (!post) {
    notFound()
  }

  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    image: post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : '',
    author: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SIDIKOFF DIGITAL',
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/${locale}/blog/${slug}`,
    },
  }

  return (
    <ErrorBoundary>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPostContent post={post} dictionary={dictionary.blog} locale={locale} />
    </ErrorBoundary>
  )
}
