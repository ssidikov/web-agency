'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { portfolioItems } from '@/data/portfolio'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  const featuredProjects = portfolioItems.filter((item) => item.featured).slice(0, 3)

  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6'>
              Digital Innovation
              <span className='block text-gray-600 dark:text-gray-300'>Meets Design</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto text-balance'>
              We create exceptional digital experiences that drive growth and engagement through
              innovative design and cutting-edge technology.
            </p>
            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200'>
                Start Your Project
              </Link>
              <Link
                href='/portfolio'
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200'>
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract geometric shapes */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <motion.div
            className='absolute top-1/4 right-1/4 w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-full opacity-10'
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className='absolute bottom-1/4 left-1/4 w-48 h-48 bg-gray-300 dark:bg-gray-600 opacity-10'
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className='py-24 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>What We Do</h2>
            <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance'>
              We specialize in creating digital solutions that transform businesses and engage
              audiences.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}>
            {[
              {
                title: 'Web Development',
                description:
                  'Modern, responsive websites built with the latest technologies and best practices.',
                icon: '🚀',
              },
              {
                title: 'UI/UX Design',
                description:
                  'User-centered design that creates intuitive and engaging digital experiences.',
                icon: '🎨',
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications that users love.',
                icon: '📱',
              },
              {
                title: 'E-Commerce',
                description:
                  'Scalable online stores with seamless payment integration and management.',
                icon: '🛒',
              },
              {
                title: 'Brand Identity',
                description: 'Comprehensive branding solutions that make your business stand out.',
                icon: '✨',
              },
              {
                title: 'Consulting',
                description: 'Strategic digital consulting to help optimize your online presence.',
                icon: '💡',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className='p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300'>
                <div className='text-4xl mb-4'>{service.icon}</div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className='py-24 bg-gray-50 dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>Featured Work</h2>
            <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance'>
              A showcase of our recent projects that demonstrate our expertise and creativity.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 lg:grid-cols-3 gap-8'
            variants={staggerContainer}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}>
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp} className='group cursor-pointer'>
                <div className='relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 aspect-[4/3] mb-6'>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 group-hover:scale-105 transition-transform duration-300' />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <span className='text-white text-lg font-medium'>{project.title}</span>
                  </div>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className='text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full'>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className='text-center mt-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <Link
              href='/portfolio'
              className='inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200'>
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 bg-gray-900 dark:bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className='text-4xl font-bold text-white dark:text-gray-900 mb-4'>
              Ready to Start Your Project?
            </h2>
            <p className='text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto text-balance'>
              Let&apos;s discuss how we can bring your digital vision to life with our expertise and
              passion.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'>
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
