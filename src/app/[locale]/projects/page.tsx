'use client'
import React from 'react'
import { getProjects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'

export default function ProjectsPage({ params }: { params: { locale: 'en' | 'fr' | 'ru' } }) {
  // Для будущей версии Next.js: params может быть Promise
  const unwrappedParams = (typeof params.then === 'function' ? React.use(params) : params) as {
    locale: 'en' | 'fr' | 'ru'
  }
  const allProjects = getProjects(unwrappedParams.locale)
  const tags = Array.from(
    new Set(
      allProjects
        .map((item) => item.category)
        .filter((tag): tag is string => typeof tag === 'string')
    )
  )
  const [activeTag, setActiveTag] = React.useState<string>('all')
  const featured = allProjects.filter((item) => item.featured)
  const nonFeatured = allProjects.filter((item) => !item.featured)
  const sortedProjects = [...featured, ...nonFeatured]
  const filteredProjects =
    activeTag === 'all'
      ? sortedProjects
      : activeTag === 'featured'
      ? featured
      : allProjects.filter((item) => item.category === activeTag)

  return (
    <section className='-mt-24 pt-44 pb-20 relative overflow-hidden'>
      {/* Flipped Background Image как в Portfolio */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url('/images/hero/hero.svg')`, transform: 'scaleX(-1)' }}
      />
      {/* Flipped gradient background */}
      <div className='absolute inset-0 bg-gradient-to-bl from-white via-blue-50/30 to-indigo-50/20'></div>
      {/* Pattern overlay (not flipped) */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50'></div>
      <div className='container mx-auto px-4 relative'>
        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight'>
          Все проекты
        </h1>
        {/* Filter Hashtags */}
        <div className='flex flex-wrap gap-2.5 mb-12'>
          <button
            onClick={() => setActiveTag('all')}
            className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0 ${
              activeTag === 'all'
                ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
                : 'text-black border border-black hover:bg-black hover:text-white'
            }`}
            tabIndex={0}>
            #all
          </button>
          <button
            onClick={() => setActiveTag('featured')}
            className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0 ${
              activeTag === 'featured'
                ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
                : 'text-black border border-black hover:bg-black hover:text-white'
            }`}
            tabIndex={0}>
            #featured
          </button>
          {tags.map((tag, idx) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0
                ${idx === 0 ? 'ml-30px' : ''}
                ${idx === tags.length - 1 ? 'mr-30px' : ''}
                ${
                  activeTag === tag
                    ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
                    : 'text-black border border-black hover:bg-black hover:text-white'
                }
              `}
              tabIndex={0}>
              #{tag}
            </button>
          ))}
        </div>
        <div className='grid lg:grid-cols-2 gap-5 sm:gap-[30px] lg:gap-16'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={unwrappedParams.locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
