'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/data/projects'






interface PortfolioNewProps {
  locale: 'en' | 'fr' | 'ru';
  dictionary?: any;
}

export default function PortfolioNew({ locale }: PortfolioNewProps) {
  const [activeTag, setActiveTag] = useState<string>('featured');
  const projects = getProjects(locale);

  const tags = Array.from(
    new Set(
      projects.map((item) => item.category).filter((tag): tag is string => typeof tag === 'string')
    )
  );

  const filteredProjects =
    activeTag === 'featured'
      ? projects.filter((item) => item.featured).slice(0, 2)
      : projects.filter((item) => item.category === activeTag).slice(0, 2);

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
                    ? 'text-white bg-black border border-transparent hover:bg-white hover:text-black hover:border-black'
                    : 'text-black border border-black hover:bg-black hover:text-white'
                }
              `}
              tabIndex={0}>
              #{tag}
            </button>
          ))}
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
                  {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>
                      {tech}
                    </span>
                  ))}
                  {project.technologies && project.technologies.length > 3 && (
                    <span className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className='flex gap-3'>
                  {project.link && (
                    <Link
                      href={project.link}
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
            className='bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300'>
            Показать все проекты
          </Link>
        </div>
      </div>
    </section>
  )
}
