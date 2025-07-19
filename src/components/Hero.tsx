'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Dictionary, Locale } from '@/lib/i18n'

interface HeroProps {
  dict: Dictionary
  locale: Locale
}

const BackgroundAnimation = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='absolute inset-0 overflow-hidden'>
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 animate-pulse' />

      {/* Floating shapes */}
      <div className='absolute inset-0'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full bg-indigo-200 opacity-20'
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const ArrowIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M7 17L17 7' />
    <path d='M7 7h10v10' />
  </svg>
)

const PlayIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M8 5v14l11-7z' />
  </svg>
)

export function Hero({ dict, locale }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      <BackgroundAnimation />

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-8'>
            <span className='w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse'></span>
            New: Launch your project in 30 days
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6'>
            {dict.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed'>
            {dict.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}/contact`}
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl'>
                {dict.hero.cta_primary}
                <ArrowIcon />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}/portfolio`}
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-gray-900 bg-white border border-gray-300 hover:bg-gray-50 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl'>
                <PlayIcon />
                {dict.hero.cta_secondary}
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto'>
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className='text-center'>
                <div className='text-2xl md:text-3xl font-bold text-gray-900'>
                  {stat.number}
                </div>
                <div className='text-sm text-gray-600'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-gray-400 rounded-full mt-2'></div>
        </motion.div>
      </motion.div>
    </section>
  )
}
