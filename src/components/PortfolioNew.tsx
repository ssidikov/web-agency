'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { portfolioItems } from '@/data/portfolio'

interface PortfolioProps {
  dictionary: {
    portfolio: {
      title: string
      subtitle: string
      filter: {
        all: string
        web: string
        mobile: string
        design: string
      }
      projects: {
        [key: string]: {
          title: string
          description: string
          category: string
        }
      }
      view_project: string
      live_demo: string
    }
  }
}

export function Portfolio({ dictionary }: PortfolioProps) {
  const [activeTag, setActiveTag] = useState<string>('featured')

  const portfolioData = dictionary?.portfolio

  if (!portfolioData) {
    return <div>Portfolio data not available</div>
  }

  // Категории из portfolioItems
  const tags = Array.from(
    new Set(
      portfolioItems.flatMap((item) =>
        [item.featured ? 'featured' : undefined, item.category].filter(
          (tag): tag is string => typeof tag === 'string'
        )
      )
    )
  );

  const filteredProjects =
    activeTag === 'featured'
      ? portfolioItems.filter((item) => item.featured).slice(0, 2)
      : portfolioItems.filter((item) => item.category === activeTag).slice(0, 2)

  return (
    <section id='portfolio' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-left mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
            Nos réalisations
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
            Explorez nos derniers projets mettant en valeur des techniques de développement web
            modernes et des solutions innovantes.
          </p>
        </motion.div>

        {/* Filter Hashtags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center mb-12'>
          <div className='flex flex-wrap gap-2 bg-white rounded-full p-2 shadow-lg'>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTag === tag
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}>
                #{tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='relative overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
              </div>

              <div className='p-6'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800'>
                    #{project.category}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                  {project.title}
                </h3>

                <p className='text-gray-600 mb-4 line-clamp-2'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className='flex gap-3'>
                  {project.url && (
                    <Link
                      href={project.url}
                      className='flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold cursor-pointer'>
                      Voir le projet
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center mt-10'>
          <Link
            href='/projects'
            className='bg-brand-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-brand-primary hover:border hover:border-brand-primary transition-all duration-300'>
            Показать все проекты
          </Link>
        </div>
      </div>
    </section>
  )
}
