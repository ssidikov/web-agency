import React from 'react'
import { getProjects } from '@/data/projects'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function ProjectDetailsPage({ params }: { params: { locale: 'en' | 'fr' | 'ru', id: string } }) {
  const projects = getProjects(params.locale)
  const project = projects.find((p) => p.id === params.id)
  if (!project) return notFound()

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-4 relative'>
        <div className='flex flex-col lg:flex-row gap-10 items-start'>
          <div className='relative w-full lg:w-1/2 h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-lg'>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={480}
              className='w-full h-full object-cover object-top'
            />
            <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-40'></div>
          </div>
          <div className='flex-1 flex flex-col gap-8'>
            <h1 className='text-4xl lg:text-5xl font-bold text-black mb-4'>{project.title}</h1>
            <p className='text-lg lg:text-xl text-gray-700 mb-6'>{project.description}</p>
            <div className='flex flex-wrap gap-3 mb-6'>
              <span className='h-9 bg-blue-50 rounded-lg px-3 text-slate-500 font-semibold flex items-center'>{project.category}</span>
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className='h-9 bg-blue-50 rounded-lg px-3 text-slate-500 font-semibold flex items-center'>{tech}</span>
              ))}
            </div>
            <div className='flex gap-4'>
              <Link
                href='/contact'
                className='inline-block px-6 py-3 bg-black text-white rounded-xl font-bold text-lg transition hover:bg-white hover:text-black border border-black'>
                Start Your Project
              </Link>
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block px-6 py-3 bg-white text-black rounded-xl font-bold text-lg border border-black transition hover:bg-black hover:text-white'>
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
