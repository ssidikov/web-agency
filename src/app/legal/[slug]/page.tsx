'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { legalPages } from '@/data/legal';
import { notFound } from 'next/navigation';

export default function LegalPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const page = legalPages.find(p => p.slug === slug);
  
  if (!page) {
    notFound();
  }

  // Simple markdown-like parsing for the content
  const parseContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactElement[] = [];
    let key = 0;

    for (const line of lines) {
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
            {line.slice(4)}
          </h3>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={key++} className="font-semibold text-gray-900 dark:text-white mb-4">
            {line.slice(2, -2)}
          </p>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <div key={key++} className="flex items-start mb-2">
            <span className="text-gray-600 dark:text-gray-400 mr-3">•</span>
            <span className="text-gray-600 dark:text-gray-400">{line.slice(2)}</span>
          </div>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={key++} className="mb-4" />);
      } else {
        elements.push(
          <p key={key++} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="mb-8">
              <Link
                href="/legal"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                ← Back to Legal
              </Link>
            </nav>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {page.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: {new Date(page.lastUpdated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {parseContent(page.content)}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About This Policy?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              If you have any questions or concerns about this policy, please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="mailto:legal@agency.com"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
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
