'use client'

import { motion } from 'framer-motion'
import { BlogCategory } from '@/lib/sanity'
import { Locale } from '@/lib/i18n'

interface CategoryFilterProps {
  categories: BlogCategory[]
  selectedCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
  locale: Locale
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  locale,
}: CategoryFilterProps) {
  const getAllText = () => {
    switch (locale) {
      case 'fr':
        return 'Tous les articles'
      case 'ru':
        return 'Все статьи'
      default:
        return 'All Posts'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex flex-wrap gap-3 justify-center lg:justify-start mb-12'>
      {/* All Posts Button */}
      <motion.button
        variants={itemVariants}
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
          selectedCategory === null
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
        }`}>
        <span className='flex items-center gap-2'>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
            />
          </svg>
          {getAllText()}
        </span>
      </motion.button>

      {/* Category Buttons */}
      {categories.map((category) => (
        <motion.button
          key={category._id}
          variants={itemVariants}
          onClick={() => onCategoryChange(category._id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
            selectedCategory === category._id
              ? 'text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
          }`}
          style={{
            backgroundColor:
              selectedCategory === category._id ? category.color || '#3F72AF' : undefined,
          }}>
          <span className='relative z-10 flex items-center gap-2'>
            {/* Category Icon */}
            <div
              className={`w-3 h-3 rounded-full ${
                selectedCategory === category._id ? 'bg-white/30' : ''
              }`}
              style={{
                backgroundColor:
                  selectedCategory !== category._id ? category.color || '#3F72AF' : undefined,
              }}
            />
            {category.title}
          </span>

          {/* Hover Effect */}
          {selectedCategory !== category._id && (
            <div
              className='absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-300'
              style={{ backgroundColor: category.color || '#3F72AF' }}
            />
          )}
        </motion.button>
      ))}
    </motion.div>
  )
}
