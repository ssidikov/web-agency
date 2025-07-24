'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { getProjects } from '@/data/projects'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Dictionary } from '@/lib/dictionaries'

interface PortfolioNewProps {
  locale: 'en' | 'fr' | 'ru'
  dictionary: Dictionary['portfolio']
}

export default function PortfolioNew({ locale, dictionary }: PortfolioNewProps) {
  const [activeTag, setActiveTag] = useState<string>('featured')
  const projects = getProjects(locale)

  const tags = Array.from(
    new Set(
      projects.map((item) => item.category).filter((tag): tag is string => typeof tag === 'string')
    )
  )

  const filteredProjects =
    activeTag === 'featured'
      ? projects.filter((item) => item.featured).slice(0, 2)
      : projects.filter((item) => item.category === activeTag).slice(0, 2)

  return (
    <section id='portfolio' className='py-20 relative overflow-hidden'>
      {/* Flipped Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url('/images/hero/hero.svg')`, transform: 'scaleX(-1)' }}
      />
      {/* Flipped gradient background */}
      <div className='absolute inset-0 bg-gradient-to-bl from-white via-blue-50/30 to-indigo-50/20'></div>
      {/* Pattern overlay (not flipped) */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50'></div>
      <div className='container mx-auto px-4 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-left mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
            {dictionary?.title || 'Portfolio'}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
            {dictionary?.subtitle || ''}
          </p>
        </motion.div>

        {/* Filter Hashtags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap gap-2.5 mb-12'>
          {tags.map((tag, idx) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0
                ${idx === 0 ? 'ml-30px' : ''}
                ${idx === tags.length - 1 ? 'mr-30px' : ''}
                ${
                  activeTag === tag
                    ? 'text-white bg-black border border-transparent hover:bg-transparent hover:text-black hover:border-black'
                    : 'text-black border border-black hover:bg-black hover:text-white'
                }
              `}
              tabIndex={0}>
              #{tag}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className='grid lg:grid-cols-2 gap-5 sm:gap-[30px] lg:gap-16'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale={locale} />
          ))}
        </div>

        <div className='flex items-center justify-center mt-12'>
          <Link
            href={`/${locale}/projects`}
            className='inline-flex items-center justify-center h-16 lg:h-[77px] 3xl:h-[98px] px-6 lg:px-16 text-lg 3xl:text-22 font-medium whitespace-nowrap text-white bg-black rounded-full border border-transparent transition-all duration-300 hover:bg-transparent hover:text-black hover:border-black'>
            {dictionary?.view_project || 'View All Projects'}
          </Link>
        </div>
      </div>
    </section>
  )
}
