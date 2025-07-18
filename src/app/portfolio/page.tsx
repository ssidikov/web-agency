'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Explore our recent work and see how we&apos;ve helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            key={selectedCategory} // Re-animate when category changes
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-800 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Project overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300" />
                  
                  {/* Project info overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4">{project.category}</p>
                      {project.url && (
                        <span className="inline-flex items-center text-sm font-medium">
                          View Project →
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                      Completed: {new Date(project.completedAt).toLocaleDateString()}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Project Highlights
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
              Numbers that showcase our commitment to delivering exceptional results.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: portfolioItems.length.toString(), label: 'Projects Completed' },
              { number: portfolioCategories.length - 1, label: 'Service Categories' }, // -1 for "All"
              { number: '99%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 dark:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
              Let&apos;s discuss your project and create something that will be featured in our next portfolio showcase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white dark:text-gray-900 border border-white dark:border-gray-900 rounded-lg hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors duration-200"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
