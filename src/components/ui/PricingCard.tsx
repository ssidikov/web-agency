'use client'

import { motion } from 'framer-motion'

// Simple SVG icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
  </svg>
)

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
  </svg>
)

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingCardProps {
  name: string
  price: string | number
  period: string
  description: string
  features: PricingFeature[]
  ctaText: string
  isPopular?: boolean
  isHighlighted?: boolean
  onSelect: () => void
  index: number
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  ctaText,
  isPopular = false,
  isHighlighted = false,
  onSelect,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl w-full h-full flex flex-col min-h-[600px] ${
        isHighlighted
          ? 'border-[#3F72AF] ring-4 ring-[#3F72AF]/20'
          : 'border-gray-200 hover:border-[#3F72AF]/50'
      }`}
      role='article'
      aria-labelledby={`pricing-${name.toLowerCase()}-title`}
      aria-describedby={`pricing-${name.toLowerCase()}-description`}>
      {/* Badge populaire */}
      {isPopular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <div className='bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg'>
            <StarIcon className='w-4 h-4' />
            Populaire
          </div>
        </div>
      )}

      <div className='p-8 flex flex-col flex-grow'>
        {/* En-tête du plan */}
        <div className='text-center mb-8'>
          <h3
            id={`pricing-${name.toLowerCase()}-title`}
            className='text-2xl font-bold text-[#112D4E] mb-2'>
            {name}
          </h3>
          <p
            id={`pricing-${name.toLowerCase()}-description`}
            className='text-gray-600 text-sm leading-relaxed'>
            {description}
          </p>
        </div>

        {/* Prix */}
        <div className='text-center mb-8'>
          <div className='flex items-end justify-center gap-1 mb-2'>
            <span className='text-2xl md:text-3xl font-bold text-[#112D4E]'>
              {typeof price === 'string' ? price : `${price}€`}
            </span>
            {period && <span className='text-gray-600 text-lg font-medium pb-1'>/{period}</span>}
          </div>
          {period && <p className='text-gray-500 text-sm'>Facturé mensuellement</p>}
        </div>

        {/* Textes Objectif/Recommandé */}
        {features.filter(feature => feature.included && (feature.text.includes('🧩') || feature.text.includes('🔥') || feature.text.includes('🎯'))).length > 0 && (
          <div className='mb-6'>
            {features
              .filter(feature => feature.included && (feature.text.includes('🧩') || feature.text.includes('🔥') || feature.text.includes('🎯')))
              .map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className='text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100'>
                  <span className='text-sm font-medium italic text-gray-700'>
                    {feature.text}
                  </span>
                </motion.div>
              ))}
          </div>
        )}

        {/* Liste des fonctionnalités */}
        <div className='mb-8 flex-grow'>
          <ul className='space-y-4' role='list'>
            {features
              .filter((feature) => feature.included && !feature.text.includes('🧩') && !feature.text.includes('🔥') && !feature.text.includes('🎯')) // Exclure les textes avec émojis spéciaux
              .map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className='flex items-center gap-3'>
                  <div className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-green-100 text-green-600'>
                    <CheckIcon className='w-3 h-3' />
                  </div>
                  <span className='text-sm text-gray-700'>
                    {feature.text}
                  </span>
                </motion.li>
              ))}
          </ul>
        </div>

        {/* Bouton CTA - toujours en bas */}
        <div className='mt-auto'>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onSelect}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
              isHighlighted
                ? 'bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white hover:shadow-lg focus:ring-[#3F72AF]'
                : 'bg-[#F9F7F7] text-[#112D4E] hover:bg-[#3F72AF] hover:text-white border-2 border-[#3F72AF]/20 hover:border-[#3F72AF] focus:ring-[#3F72AF]'
            }`}
            aria-label={`Choisir le plan ${name} ${typeof price === 'string' ? price : `à ${price}€`}${period ? ` par ${period}` : ''}`}>
            {ctaText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
