'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/data/projects'

interface PortfolioNewProps {
  locale: 'en' | 'fr' | 'ru'
  dictionary?: Record<string, string>
}

export default function PortfolioNew({ locale }: PortfolioNewProps) {
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
        <div className='grid lg:grid-cols-2 gap-5 sm:gap-[30px] lg:gap-16'>
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link || '/'}
              className='group flex flex-col sm:flex-row lg:flex-col items-stretch bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px p-5 lg:p-2.5 3xl:p-4'>
              <div className='relative w-full sm:w-[260px] h-56 md:h-96 lg:w-auto shrink-0 rounded-2xl lg:rounded-[22px] 3xl:rounded-[30px] overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={584}
                  height={384}
                  className='w-full h-full object-cover object-top group-hover:scale-125 transition-all duration-300'
                />
              </div>
              <div className='flex flex-col gap-y-3.5 lg:gap-y-5 pt-5 sm:pl-[30px] lg:py-10 lg:px-6'>
                <h3 className='text-xl lg:text-[22px] 3xl:text-3xl font-bold text-black mb-2'>
                  {project.title}
                </h3>
                <p className='text-base xs:text-lg sm:text-base lg:text-lg 3xl:text-[22px] leading-6 sm:leading-6 3xl:leading-8 text-black mb-4 line-clamp-2'>
                  {project.description}
                </p>
                <div className='flex items-center gap-2.5 text-sm lg:text-lg'>
                  <button className='h-9 bg-black/5 rounded-lg px-2.5 text-black font-semibold'>
                    {project.category}
                  </button>
                  {project.technologies?.slice(0, 2).map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className='h-9 bg-black/5 rounded-lg px-2.5 text-black font-semibold'>
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </Link>
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
