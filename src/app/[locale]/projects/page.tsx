'use client'
import React from 'react'
import { getProjects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage({ params }: { params: { locale: 'en' | 'fr' | 'ru' } }) {
  const allProjects = getProjects(params.locale)
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
    <section className='py-20 relative overflow-hidden'>
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
            <Link
              key={project.id}
              href={project.link || '/'}
              className='group flex flex-col sm:flex-row lg:flex-col items-stretch bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 p-6 lg:p-4 3xl:p-6 focus-visible:ring-2 focus-visible:ring-black outline-none'>
              <div className='relative w-full sm:w-[260px] h-56 md:h-96 lg:w-auto shrink-0 rounded-2xl lg:rounded-2xl 3xl:rounded-3xl overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={584}
                  height={384}
                  className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300 ease-in-out'
                />
                <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-40'></div>
              </div>
              <div className='flex flex-col justify-between min-h-[220px] lg:min-h-[260px] 3xl:min-h-[320px] gap-y-4 lg:gap-y-6 pt-6 sm:pl-8 lg:py-10 lg:px-8'>
                <div>
                  <h3 className='text-2xl lg:text-2xl 3xl:text-3xl font-bold text-black mb-2 transition-colors duration-200'>
                    {project.title}
                  </h3>
                  <p className='text-base xs:text-lg sm:text-base lg:text-lg 3xl:text-xl leading-6 sm:leading-6 3xl:leading-8 text-gray-700 mb-4 line-clamp-2'>
                    {project.description}
                  </p>
                </div>
                <div className='flex flex-wrap gap-2.5 text-sm lg:text-lg'>
                  <span className='h-9 bg-blue-50 rounded-lg px-3 text-slate-500 font-semibold flex items-center'>
                    {project.category}
                  </span>
                  {project.technologies?.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='h-9 bg-blue-50 rounded-lg px-3 text-slate-500 font-semibold flex items-center'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
