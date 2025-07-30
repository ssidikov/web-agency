'use client'

import { motion } from 'framer-motion'
import { sectionStyles } from '@/utils/styles'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'gradient' | 'hero' | 'pattern' | 'transparent'
  backgroundImage?: string
  backgroundConfig?: {
    image?: string
    backgroundColor?: string
    size?: string
    position?: string
    repeat?: string
    opacity?: number
  }
  'aria-labelledby'?: string
  variant?: 'default' | 'hero' | 'compact'
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-[#F9F7F7] via-white to-[#F9F7F7]',
  hero: 'bg-slate-50',
  pattern: 'bg-gray-50',
  transparent: 'bg-transparent'
}

const variantStyles = {
  default: 'py-20',
  hero: 'min-h-screen flex items-center justify-center',
  compact: 'py-12'
}

export default function Section({ 
  children, 
  id, 
  className = '', 
  containerClassName = '',
  background = 'white',
  backgroundImage,
  backgroundConfig,
  variant = 'default',
  'aria-labelledby': ariaLabelledBy
}: SectionProps) {
  const sectionClass = `
    ${variantStyles[variant]} 
    ${backgroundStyles[background]} 
    ${className} 
    relative overflow-hidden
  `.trim()

  const renderBackground = () => {
    if (backgroundConfig || backgroundImage) {
      const config = backgroundConfig || {}
      const bgImage = backgroundImage || config.image || '/images/bg-image-3.svg'
      
      return (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: config.size || '100% auto',
              backgroundPosition: config.position || 'center top',
              backgroundRepeat: config.repeat || 'repeat-y',
              backgroundColor: config.backgroundColor || '#f8fafc',
              opacity: config.opacity || 1,
            }}
          />
          {/* Gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-blue-50/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
        </div>
      )
    }
    return null
  }

  return (
    <section
      id={id}
      className={sectionClass}
      aria-labelledby={ariaLabelledBy}
    >
      {renderBackground()}
      <div className={`${sectionStyles.container} ${containerClassName} relative z-10`}>
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
