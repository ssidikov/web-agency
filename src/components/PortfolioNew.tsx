'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioData = dictionary?.portfolio

  if (!portfolioData) {
    return <div>Portfolio data not available</div>
  }

  const projects = [
    {
      id: 'ecommerce',
      category: 'web',
      image: '/images/portfolio/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '/portfolio/ecommerce-platform',
      featured: true,
    },
    {
      id: 'mobile_app',
      category: 'mobile',
      image: '/images/portfolio/mobile-app.jpg',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      link: '/portfolio/mobile-app',
      featured: true,
    },
    {
      id: 'brand_identity',
      category: 'design',
      image: '/images/portfolio/brand-identity.jpg',
      technologies: ['Figma', 'Adobe CC', 'Branding'],
      link: '/portfolio/brand-identity',
      featured: false,
    },
    {
      id: 'corporate_website',
      category: 'web',
      image: '/images/portfolio/corporate-website.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
      link: '/portfolio/corporate-website',
      featured: false,
    },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

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
            {portfolioData.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
            {portfolioData.subtitle}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex justify-center mb-12'>
          <div className='flex flex-wrap gap-2 bg-white rounded-full p-2 shadow-lg'>
            {(['all', 'web', 'mobile', 'design'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}>
                {portfolioData.filter[filter]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => {
            const projectData = portfolioData.projects[project.id]

            return (
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
                    alt={projectData?.title || project.id}
                    width={400}
                    height={300}
                    className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300' />
                  {project.featured && (
                    <div className='absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold'>
                      Featured
                    </div>
                  )}
                </div>

                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.category === 'web'
                          ? 'bg-blue-100 text-blue-800'
                          : project.category === 'mobile'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                      {portfolioData.filter[project.category as keyof typeof portfolioData.filter]}
                    </span>
                  </div>

                  <h3 className='text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
                    {projectData?.title || project.id}
                  </h3>

                  <p className='text-gray-600 mb-4 line-clamp-2'>
                    {projectData?.description || 'Project description'}
                  </p>

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
                    <Link
                      href={project.link}
                      className='flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold cursor-pointer'>
                      {portfolioData.view_project}
                    </Link>
                    <Link
                      href={project.link}
                      className='flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-sm font-semibold cursor-pointer'>
                      {portfolioData.live_demo}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'>
            <p className='text-gray-500 text-lg'>No projects found for this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
