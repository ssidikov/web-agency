'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { Dictionary } from '@/lib/dictionaries'
import { Locale } from '@/lib/i18n'
import {
  ArrowIcon,
  PlayIcon,
  GuaranteeIcon,
  ResponseIcon,
  SupportIcon,
} from '@/components/ui/icons'

interface HeroProps {
  dict: Dictionary['hero']
  common: Dictionary['common']
  locale: Locale
}

export function Hero({ dict, common, locale }: HeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const badges = [
    { icon: GuaranteeIcon, text: common.badge_quality },
    { icon: ResponseIcon, text: common.badge_response },
    { icon: SupportIcon, text: common.badge_support },
  ]

  return (
    <section
      ref={ref}
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden z-0 px-4 sm:px-6 lg:px-8'>
      {/* Background with Gradient */}

      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero/hero.svg'
          alt='Hero Background'
          fill
          className='object-cover w-full h-full pointer-events-none select-none'
          priority
          sizes='100vw'
        />
      </div>

      {/* Floating Shapes */}
      <div className='absolute inset-0 overflow-hidden z-0'>
        <motion.div
          className='absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl'
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-40 right-20 w-48 h-48 bg-white/3 rounded-full blur-xl'
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-40 left-1/4 w-40 h-40 bg-white/4 rounded-full blur-xl'
          animate={{
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='relative z-10 container mx-auto px-4 text-center'>
        <div className='max-w-5xl mx-auto'>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8 bg-white/10 text-black/50 border border-black/20 backdrop-blur-sm mt-32 sm:mt-28 md:mt-32'>
            <span className='w-2 h-2 bg-black/50 rounded-full mr-3 animate-pulse' />
            {dict.badge}
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a232b] mb-6 leading-tight'>
            <span className=''>{dict.title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-[#3a4a5a] mb-12 max-w-3xl mx-auto leading-relaxed'>
            {dict.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-6 justify-center mb-16'>
            <Link
              href={`/${locale}#contact`}
              className='group inline-flex items-center justify-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
              <span className='mr-2'>{dict.cta_primary}</span>
              <ArrowIcon />
            </Link>

            <Link
              href={`/${locale}#portfolio`}
              className='group inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300'>
              <PlayIcon />
              <span className='ml-2'>{dict.cta_secondary}</span>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex flex-wrap justify-center gap-8 mb-12'>
            {badges.map((badge, index) => {
              const IconComponent = badge.icon
              return (
                <div key={index} className='flex items-center space-x-3'>
                  <span className='w-6 h-6 text-black inline-flex items-center justify-center'>
                    <IconComponent />
                  </span>
                  <span className='text-sm font-medium bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent'>
                    {badge.text}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
