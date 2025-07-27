'use client'

import { motion } from 'framer-motion'
import PricingCard from './ui/PricingCard'
import { useState, useEffect } from 'react'

// Simple SVG icons
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={3}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
  </svg>
)

interface Dictionary {
  pricing?: {
    maintenance?: {
      title?: string
      billing?: string
      features?: string[]
      cta?: string
    }
  }
}

interface PricingProps {
  locale: string
}

export default function Pricing({ locale }: PricingProps) {
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const dictionary = await import(`../../locales/${locale}/common.json`)
        setDict(dictionary.default)
      } catch {
        // Fallback to French if locale not found
        const dictionary = await import('../../locales/fr/common.json')
        setDict(dictionary.default)
      }
    }
    loadDictionary()
  }, [locale])

  if (!dict) return null
  // Données des plans tarifaires
  const pricingPlans = [
    {
      name: 'Essentiel',
      price: 'à partir de 590 €',
      period: '',
      description: 'Parfait pour lancer votre activité ou moderniser votre image en ligne',
      features: [
        { text: 'Page unique claire et professionnelle', included: true },
        { text: 'Design moderne qui rassure', included: true },
        { text: 'Texte structuré et impactant (nous vous aidons à le rédiger)', included: true },
        { text: 'Optimisation SEO de base (Google & mobile)', included: true },
        { text: 'Formulaire de contact intégré', included: true },
        { text: 'Compatible mobile/tablette/ordinateur', included: true },
        { text: 'Livraison en 7 jours ouvrés', included: true },
        {
          text: '🧩 Objectif : avoir une présence pro, rapidement, sans complexité',
          included: true,
        },
        { text: 'Site multi-pages', included: false },
        { text: 'Formation incluse', included: false },
      ],
      ctaText: 'Commencer',
      isPopular: false,
      isHighlighted: false,
    },
    {
      name: 'Pro',
      price: 'à partir de 900 €',
      period: '',
      description: 'Solution complète pour les entreprises en croissance avec besoins avancés',
      features: [
        {
          text: 'Site complet 4 à 6 pages (Accueil, Services, À propos, Contact, etc.)',
          included: true,
        },
        { text: 'Rédaction de contenus sur-mesure', included: true },
        { text: 'Optimisation SEO avancée (Google Business, balises, structure)', included: true },
        { text: 'Statistiques simples (Google Analytics)', included: true },
        { text: 'Design premium avec animations modernes', included: true },
        { text: 'Formation courte pour gérer votre site', included: true },
        { text: 'Livraison en 14 jours ouvrés', included: true },
        {
          text: '🔥 Recommandé pour créer une vraie autorité en ligne et générer des leads',
          included: true,
        },
        { text: 'Développement spécifique avancé', included: false },
        { text: 'Accompagnement digital prolongé', included: false },
      ],
      ctaText: 'Choisir Pro',
      isPopular: true,
      isHighlighted: true,
    },
    {
      name: 'Entreprise',
      price: 'Sur devis',
      period: '',
      description: 'Solution haut de gamme adaptée à votre stratégie business',
      features: [
        { text: 'Analyse personnalisée de vos objectifs et de votre marché', included: true },
        {
          text: 'Développement spécifique (ex : réservation, espace client, boutique en ligne)',
          included: true,
        },
        { text: 'Design unique et totalement sur-mesure', included: true },
        { text: 'Stratégie SEO complète (contenu, technique, sémantique)', included: true },
        { text: 'Accompagnement digital sur 1 à 3 mois', included: true },
        { text: 'Fonctionnalités avancées (automatisation, blog, podcast, etc.)', included: true },
        { text: 'Support continu et conseils personnalisés', included: true },
        {
          text: '🎯 Objectif : transformer votre site en un outil de croissance et de conversion',
          included: true,
        },
        { text: 'Délai de livraison standard', included: false },
        { text: 'Solution basique', included: false },
      ],
      ctaText: 'Nous contacter',
      isPopular: false,
      isHighlighted: false,
    },
  ]

  const handlePlanSelect = (planName: string) => {
    // Redirection vers la page de contact avec le plan présélectionné
    const contactUrl = `/${locale === 'fr' ? '' : locale + '/'}contact?plan=${planName.toLowerCase()}`
    window.location.href = contactUrl
  }

  return (
    <section
      className='py-20 bg-gradient-to-br from-[#F9F7F7] via-white to-[#F9F7F7]'
      aria-labelledby='pricing-title'>
      <div className='container mx-auto px-4'>
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2
            id='pricing-title'
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#112D4E] mb-6'>
            Nos Offres
            <span className='block text-[#3F72AF] mt-2'>Transparentes & Adaptées</span>
          </h2>
          <p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
            Choisissez la solution qui correspond parfaitement à vos besoins et à votre budget. Tous
            nos projets incluent un design moderne, un développement professionnel et un support
            complet.
          </p>

          {/* Badges de confiance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex flex-wrap justify-center gap-4 mt-8'>
            <div className='bg-white px-6 py-3 rounded-full shadow-md border border-gray-200 flex items-center gap-2 text-green-500 p-4'>
              <CheckIcon className='w-3 h-3 bg-green-100 rounded-full' />
              <span className='text-sm font-medium text-gray-700'>
                Résultats garantis • Livraison garantie
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Grille des cartes de tarification */}
        <div className='grid lg:grid-cols-3 gap-8 lg:gap-6 max-w-7xl mx-auto'>
          {pricingPlans.map((plan, index) => (
            <div key={plan.name} className='h-full'>
              <PricingCard
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                ctaText={plan.ctaText}
                isPopular={plan.isPopular}
                isHighlighted={plan.isHighlighted}
                onSelect={() => handlePlanSelect(plan.name)}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Section informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-16'>
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-[#112D4E] mb-4'>
              {dict?.pricing?.maintenance?.title || 'Maintenance et Support'}
            </h3>
            <p className='text-gray-600 mb-2 font-semibold'>
              {dict?.pricing?.maintenance?.billing ||
                'Facturation horaire ou forfaitaire selon la demande'}
            </p>
            <div className='text-gray-600 mb-6 leading-relaxed text-left max-w-2xl mx-auto'>
              <ul className='space-y-2'>
                {(
                  dict?.pricing?.maintenance?.features || [
                    'Accompagnement personnalisé après livraison',
                    'Interventions ponctuelles pour modifications et mises à jour',
                    'Support technique réactif par email, téléphone, WhatsApp ou Telegram',
                  ]
                ).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePlanSelect('custom')}
              className='bg-gradient-to-r from-[#3F72AF] to-[#112D4E] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3F72AF]/50'
              aria-label={dict?.pricing?.maintenance?.cta || 'Demander un devis'}>
              {dict?.pricing?.maintenance?.cta || 'Demander un devis'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
