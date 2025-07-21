import { portfolioItems } from '@/data/portfolio'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight'>
          Все проекты
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {portfolioItems.map((project) => (
            <div
              key={project.id}
              className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
              <div className='relative overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                {project.featured && (
                  <div className='absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
                    #featured
                  </div>
                )}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
