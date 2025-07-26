import { Suspense } from 'react'
import { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { BlogPageContent } from '@/components/BlogPageContent'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { getBlogPosts, getBlogCategories } from '@/lib/sanity'

interface BlogPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  return {
    title: `${dictionary.blog.title} | SIDIKOFF DIGITAL`,
    description: dictionary.blog.subtitle,
    openGraph: {
      title: `${dictionary.blog.title} | SIDIKOFF DIGITAL`,
      description: dictionary.blog.subtitle,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dictionary.blog.title} | SIDIKOFF DIGITAL`,
      description: dictionary.blog.subtitle,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

function BlogPageSkeleton() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>
      <div className='container mx-auto px-4 py-20'>
        {/* Header Skeleton */}
        <div className='text-center mb-16'>
          <div className='h-12 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse' />
          <div className='h-6 bg-gray-200 rounded-lg w-96 mx-auto animate-pulse' />
        </div>

        {/* Filter Skeleton */}
        <div className='flex flex-wrap gap-3 justify-center mb-12'>
          {[...Array(5)].map((_, i) => (
            <div key={i} className='h-12 bg-gray-200 rounded-full w-32 animate-pulse' />
          ))}
        </div>

        {/* Cards Skeleton */}
        <div className='grid lg:grid-cols-2 gap-8 mb-12'>
          {[...Array(2)].map((_, i) => (
            <div key={i} className='bg-white rounded-3xl overflow-hidden shadow-lg'>
              <div className='h-80 bg-gray-200 animate-pulse' />
              <div className='p-8 space-y-4'>
                <div className='h-4 bg-gray-200 rounded w-24 animate-pulse' />
                <div className='h-8 bg-gray-200 rounded w-full animate-pulse' />
                <div className='h-20 bg-gray-200 rounded w-full animate-pulse' />
              </div>
            </div>
          ))}
        </div>

        <div className='grid lg:grid-cols-3 gap-8'>
          {[...Array(6)].map((_, i) => (
            <div key={i} className='bg-white rounded-3xl overflow-hidden shadow-lg'>
              <div className='h-64 bg-gray-200 animate-pulse' />
              <div className='p-6 space-y-4'>
                <div className='h-4 bg-gray-200 rounded w-20 animate-pulse' />
                <div className='h-6 bg-gray-200 rounded w-full animate-pulse' />
                <div className='h-16 bg-gray-200 rounded w-full animate-pulse' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const dictionary = await getDictionary(locale)

  // Fetch blog data
  const [posts, categories] = await Promise.all([getBlogPosts(), getBlogCategories()])

  return (
    <ErrorBoundary>
      <Suspense fallback={<BlogPageSkeleton />}>
        <BlogPageContent
          posts={posts}
          categories={categories}
          dictionary={dictionary.blog}
          locale={locale}
        />
      </Suspense>
    </ErrorBoundary>
  )
}
