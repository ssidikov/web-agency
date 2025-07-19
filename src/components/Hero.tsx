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
      {/* Animated gradient background using our 4 colors */}
      <div
        className='absolute inset-0 animate-pulse'
        style={{
          background: `linear-gradient(135deg, #F9F7F7 0%, #DBE2EF 50%, #F9F7F7 100%)`,
        }}
      />

      {/* Floating shapes */}
      <div className='absolute inset-0'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full opacity-10'
            style={{
              backgroundColor: '#3F72AF',
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
    <section className='relative h-screen flex items-center justify-center overflow-hidden z-0 -mt-20'>
      <BackgroundAnimation />

      {/* Content */}
      <div className='relative z-[5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8'
            style={{
              backgroundColor: '#DBE2EF',
              color: '#112D4E',
              border: '1px solid rgba(63, 114, 175, 0.2)',
            }}>
            <span
              className='w-2 h-2 rounded-full mr-3 animate-pulse'
              style={{ backgroundColor: '#3F72AF' }}></span>
            New: Launch your project in 30 days
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6'
            style={{ color: '#112D4E' }}>
            {dict.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium'
            style={{ color: '#3F72AF' }}>
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
                href={`/${locale}#contact`}
                className='inline-flex items-center px-8 py-4 text-lg font-medium text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
                style={{
                  backgroundColor: '#3F72AF',
                  border: '2px solid #3F72AF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#112D4E'
                  e.currentTarget.style.borderColor = '#112D4E'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3F72AF'
                  e.currentTarget.style.borderColor = '#3F72AF'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                {dict.hero.cta_primary}
                <ArrowIcon />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}#portfolio`}
                className='inline-flex items-center px-8 py-4 text-lg font-medium bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
                style={{
                  color: '#3F72AF',
                  border: '2px solid #3F72AF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3F72AF'
                  e.currentTarget.style.color = 'white'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  e.currentTarget.style.color = '#3F72AF'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
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
                className='text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300'
                style={{ border: '1px solid #DBE2EF' }}>
                <div className='text-2xl md:text-3xl font-bold mb-2' style={{ color: '#112D4E' }}>
                  {stat.number}
                </div>
                <div className='text-sm font-medium' style={{ color: '#3F72AF' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
