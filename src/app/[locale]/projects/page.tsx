import Image from 'next/image'

import { getProjects } from '@/data/projects'
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import { ProjectsClient } from './projects-client'

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const allProjects = getProjects(locale)

  return (
    <section className='pt-32 md:pt-40 pb-20 relative overflow-hidden'>
      {/* Flipped Background Image как в Portfolio */}
      <div className='absolute inset-0 z-0' style={{ transform: 'scaleX(-1)' }}>
        <Image
          src='/images/hero/hero.svg'
          alt='Projects Background'
          fill
          className='object-cover w-full h-full pointer-events-none select-none'
          priority={false}
          sizes='100vw'
        />
      </div>
      {/* Flipped gradient background */}
      <div className='absolute inset-0 z-10 bg-gradient-to-bl from-white via-blue-50/30 to-indigo-50/20'></div>
      {/* Pattern overlay (not flipped) */}
      <div className='absolute inset-0 z-20 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50'></div>
      <div className='container mx-auto px-4 relative z-30'>
        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight'>
          {dict?.projects?.title || 'All Projects'}
        </h1>
        <ProjectsClient allProjects={allProjects} locale={locale} dict={dict} />
      </div>
    </section>
  )
}
