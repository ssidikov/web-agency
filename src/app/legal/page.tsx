'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { legalPages } from '@/data/legal';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export default function Legal() {
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
              Legal Information
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Important legal documents and policies that govern our services and your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Documents */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {legalPages.map((page) => (
              <motion.div
                key={page.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link
                  href={`/legal/${page.slug}`}
                  className="block p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Last updated: {new Date(page.lastUpdated).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <div className="flex items-center text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                    <span className="mr-2">Read more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Summary Section */}
          <motion.div
            className="mt-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Legal Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Privacy Commitment
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We are committed to protecting your privacy and handling your personal information responsibly. We collect only necessary information and never sell your data to third parties.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Service Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our terms of service outline the responsibilities of both parties, payment terms, intellectual property rights, and project delivery expectations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Legal Questions */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Legal Questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-balance">
              If you have any questions about our legal policies or need clarification on any terms, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="mailto:legal@agency.com"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Email Legal Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
