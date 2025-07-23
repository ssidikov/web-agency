// Project details page
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '@/data/projects'
import { notFound } from 'next/navigation'

export default function ProjectPage({ params }: { params: { id: string; locale: string } }) {
  const locale = (['en', 'fr', 'ru'].includes(params.locale) ? params.locale : 'en') as
    | 'en'
    | 'fr'
    | 'ru'
  const projects = getProjects(locale)
  const project = projects.find((p) => p.id === params.id)
  if (!project) return notFound()
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg'>
          <h1 className='text-4xl font-bold mb-6'>{project.title}</h1>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className='rounded-xl mb-6 w-full object-cover'
          />
          <p className='text-lg text-gray-700 mb-6'>{project.longDescription}</p>
          <div className='flex flex-wrap gap-2 mb-6'>
            <span className='bg-black text-white px-3 py-1 rounded-lg text-sm font-semibold'>
              {project.category}
            </span>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className='bg-gray-100 text-gray-900 px-3 py-1 rounded-lg text-sm font-semibold'>
                {tech}
              </span>
            ))}
          </div>
          <div className='flex gap-4 mt-8'>
            <Link
              href={project.link}
              target='_blank'
              className='bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300'>
              Visit Project
            </Link>
            <Link
              href='/contact'
              className='bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
