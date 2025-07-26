import React from 'react'
import { getProjects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr' | 'ru'; id: string }>
}) {
  const { locale, id } = await params
  const projects = getProjects(locale)
  const project = projects.find((p) => p.id === id)
  if (!project) return notFound()

  return (
    <section className='min-h-screen pb-20 relative overflow-hidden px-4 sm:px-6 lg:px-8'>
      {/* Background как в Contact */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero/hero.svg'
          alt='Project Background'
          fill
          className='object-cover w-full h-full pointer-events-none select-none'
          priority={false}
          sizes='100vw'
        />
      </div>
      <div className='absolute inset-0 z-10 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20'></div>
      <div className='absolute inset-0 z-20 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50'></div>
      <div className='container mx-auto px-4 relative z-30 mt-32 md:mt-44'>
        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          <div className='w-full lg:w-1/2 flex justify-center items-start'>
            <div className='relative w-full max-w-2xl h-[400px] md:h-[600px] lg:h-[800px] rounded-3xl overflow-hidden border border-gray-200 shadow-sm'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='w-full h-full object-cover'
                sizes='(max-width: 1024px) 100vw, 50vw'
                style={{ objectPosition: 'top left' }}
              />
            </div>
          </div>
          <div className='w-full lg:w-1/2 flex flex-col justify-between items-start min-h-[480px]'>
            <div>
              <h1 className='text-5xl lg:text-6xl 3xl:text-7xl font-bold text-black mb-8'>
                {project.title}
              </h1>
              <p className='text-2xl lg:text-3xl 3xl:text-4xl text-gray-700 mb-6'>
                {project.description}
              </p>
              {project.longDescription && (
                <p className='text-xl lg:text-2xl 3xl:text-3xl text-gray-600 mb-10'>
                  {project.longDescription}
                </p>
              )}
            </div>
            <div>
              <div className='flex flex-wrap gap-3 mb-8'>
                <span className='h-11 bg-blue-50 rounded-xl px-4 text-lg lg:text-xl 3xl:text-2xl text-slate-500 font-semibold flex items-center'>
                  {project.category}
                </span>
                {project.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className='h-11 bg-blue-50 rounded-xl px-4 text-lg lg:text-xl 3xl:text-2xl text-slate-500 font-semibold flex items-center'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href={`/${locale}/contact`}
                  className='group relative bg-black hover:bg-transparent text-white hover:text-black border border-black transition-all duration-300 h-16 lg:h-[77px] 3xl:h-[98px] w-full sm:w-auto 3xl:w-1/2 text-lg 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8 cursor-pointer items-center justify-center flex'>
                  Start Your Project
                </Link>
                {project.link && (
                  <Link
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group relative bg-black hover:bg-transparent text-white hover:text-black border border-black transition-all duration-300 h-16 lg:h-[77px] 3xl:h-[98px] w-full sm:w-auto 3xl:w-1/2 text-lg 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8 cursor-pointer items-center justify-center flex'>
                    Visit Project
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
