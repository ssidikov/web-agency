'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Locale } from '@/lib/i18n'
import { Dictionary } from '@/lib/dictionaries'
import Image from 'next/image'

interface HeroProps {
  dict: Dictionary['hero']
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
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image
          src='/images/hero/hero.svg'
          alt='Hero Background'
          fill
          className='object-cover w-full h-full'
          priority
          sizes='100vw'
        />
      </div>
      {/* Clean gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30' />

      {/* Animated gradient overlay */}
      <div
        className='absolute inset-0 animate-pulse opacity-20'
        style={{
          background: `linear-gradient(135deg, #DBE2EF 0%, #3F72AF/10 50%, #DBE2EF 100%)`,
        }}
      />

      {/* Floating shapes */}
      <div className='absolute inset-0'>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full opacity-5'
            style={{
              backgroundColor: '#3F72AF',
              width: Math.random() * 200 + 30,
              height: Math.random() * 200 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              scale: [1, Math.random() * 0.3 + 0.9, 1],
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
  <svg width='25' height='25' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M7 17L17 7' />
    <path d='M7 7h10v10' />
  </svg>
)

const PlayIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M8 5v14l11-7z' />
  </svg>
)

const GuaranteeIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M9 12l2 2 4-4' />
    <path d='M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3' />
    <path d='M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3' />
    <path d='M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7' />
  </svg>
)

const ResponseIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <circle cx='12' cy='12' r='10' />
    <polyline points='12,6 12,12 16,14' />
  </svg>
)

const SupportIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' />
    <path d='M10 9h4' />
    <path d='M10 13h4' />
  </svg>
)

export function Hero({ dict, locale }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden z-0 -mt-20 px-4 sm:px-6 lg:px-8'>
      <BackgroundAnimation />

      {/* Content */}
      <div className='relative z-[5] max-w-7xl mx-auto text-center pt-28 pb-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 mx-4'
            style={{
              backgroundColor: '#DBE2EF',
              color: '#112D4E',
              border: '1px solid rgba(63, 114, 175, 0.2)',
            }}>
            <span
              className='w-2 h-2 rounded-full mr-2 sm:mr-3 animate-pulse'
              style={{ backgroundColor: '#3F72AF' }}></span>
            {dict.badge}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 px-4 leading-tight'
            style={{ color: '#112D4E' }}>
            {dict.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-medium px-4'
            style={{ color: '#3F72AF' }}>
            {dict.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}#contact`}
                className='inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] cursor-pointer'
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
                {dict.cta_primary}
                <ArrowIcon />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`/${locale}#portfolio`}
                className='inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium bg-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl min-w-[200px] cursor-pointer'
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
                {dict.cta_secondary}
              </Link>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4'>
            {dict.features?.map((feature: { title: string; icon: string }, index: number) => {
              const getIcon = (iconType: string) => {
                switch (iconType) {
                  case 'guarantee':
                    return <GuaranteeIcon />
                  case 'response':
                    return <ResponseIcon />
                  case 'support':
                    return <SupportIcon />
                  default:
                    return <GuaranteeIcon />
                }
              }

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl text-center sm:text-left'
                  style={{
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow:
                      '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.2)',
                  }}>
                  <div style={{ color: '#3F72AF' }} className='flex-shrink-0'>
                    {getIcon(feature.icon)}
                  </div>
                  <div
                    className='text-sm sm:text-base md:text-lg font-medium'
                    style={{ color: '#112D4E' }}>
                    {feature.title}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
