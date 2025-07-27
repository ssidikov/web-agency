'use client'

import { motion } from 'framer-motion'

import { sectionStyles } from '@/utils/styles'




interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'gradient'
  'aria-labelledby'?: string
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-[#F9F7F7] via-white to-[#F9F7F7]'
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  background = 'white',
  'aria-labelledby': ariaLabelledBy
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${sectionStyles.base} ${backgroundStyles[background]} ${className}`}
      aria-labelledby={ariaLabelledBy}
    >
      <div className={`${sectionStyles.container} ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
  titleId?: string
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className = '',
  titleId 
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      <h2
        id={titleId}
        className={sectionStyles.title}
      >
        {title}
        {subtitle && (
          <span className={`block ${sectionStyles.subtitle} mt-2`}>
            {subtitle}
          </span>
        )}
      </h2>
      {description && (
        <p className={`${sectionStyles.description} max-w-3xl mx-auto`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
