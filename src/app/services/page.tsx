'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'SEO Implementation',
        'CMS Integration',
        'E-commerce Solutions'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      icon: '🚀'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging and intuitive experiences.',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design Systems'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Principle', 'InVision'],
      icon: '🎨'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS & Android',
        'Cross-platform Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
      icon: '📱'
    },
    {
      title: 'Brand Identity',
      description: 'Complete branding solutions that make your business memorable.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Marketing Materials',
        'Brand Strategy',
        'Visual Identity'
      ],
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
      icon: '✨'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing to grow your online presence.',
      features: [
        'SEO Optimization',
        'Content Strategy',
        'Social Media Marketing',
        'Email Campaigns',
        'Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'SEMrush', 'Mailchimp', 'HubSpot'],
      icon: '📈'
    },
    {
      title: 'Consulting & Strategy',
      description: 'Expert guidance to help optimize your digital presence.',
      features: [
        'Digital Strategy',
        'Technology Consulting',
        'Performance Audits',
        'Growth Planning',
        'Process Optimization'
      ],
      technologies: ['Various Tools', 'Custom Solutions'],
      icon: '💡'
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What We Include:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
              A proven methodology that ensures successful project delivery from start to finish.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and target audience to create the perfect strategy.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates wireframes, prototypes, and visual designs that bring your vision to life.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'We build your solution using modern technologies and best practices for optimal performance.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'We deploy your project and provide ongoing support to ensure continued success.'
              }
            ].map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
                </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
              Contact us today to discuss your project and see how we can help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
