'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Services() {
  const services = [
    {
      title: 'Création de Sites Web – De A à Z',
      description:
        "Transformez votre vision en réalité digitale avec notre expertise complète en développement web. Nous créons des sites web modernes, rapides et optimisés pour le référencement Google. De la conception UX/UI à la mise en ligne, chaque projet est développé sur mesure avec les dernières technologies (React, Next.js, WordPress). Obtenez un site professionnel qui convertit vos visiteurs en clients et booste votre chiffre d'affaires dès le premier mois.",
      image: '/images/services/web-development-5.jpg',
      alt: 'Création de sites web sur mesure',
      badges: ['Sur mesure', 'Responsive'],
    },
    {
      title: 'Refonte / Redesign',
      description:
        "Votre site web actuel ne génère pas assez de ventes ? Notre service de refonte transforme votre présence en ligne en machine à convertir. Nous analysons votre taux de conversion, optimisons l'expérience utilisateur et modernisons le design pour doubler vos résultats. Interface mobile-first, vitesse de chargement optimisée, parcours utilisateur fluide - tout est pensé pour maximiser vos revenus et réduire le taux de rebond de 40%.",
      image: '/images/services/website-redesign-1.jpg',
      alt: 'Refonte et redesign de sites web',
      badges: ['Modernisation', 'UX/UI'],
    },
    {
      title: 'SEO & Optimisation de la Visibilité',
      description:
        'Dominez la première page Google et multipliez votre trafic organique par 5 en 6 mois. Notre stratégie SEO complète inclut : audit technique approfondi, optimisation on-page, création de contenu optimisé, netlinking de qualité et suivi des performances. Nous ciblons les mots-clés rentables de votre secteur pour attirer des prospects qualifiés.',
      image: '/images/services/seo-8.jpg',
      alt: 'Optimisation SEO et référencement',
      badges: ['Google Ready', 'Analytics'],
    },
    {
      title: 'Maintenance & Support',
      description:
        'Protégez votre investissement digital avec notre service de maintenance premium. Sécurité renforcée, sauvegardes automatiques, mises à jour régulières, monitoring 24/7 et support prioritaire. Nous garantissons 99.9% de disponibilité et un temps de réponse inférieur à 2h. Évitez les pannes coûteuses et concentrez-vous sur votre business pendant que nous maintenons votre site en parfait état de fonctionnement.',
      image: '/images/services/maintenance-support-4.jpg',
      alt: 'Maintenance et support technique',
      badges: ['24/7 Support', 'Mises à jour'],
    },
  ]

  return (
    <section id='services' className='relative py-20 overflow-hidden'>
      {/* Beautiful gradient background that continues from Hero */}
      <div className='absolute inset-0'>
        {/* Main gradient background */}
        <div className='absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-blue-50/20 to-white/90' />

        {/* Secondary gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-purple-50/20' />

        {/* Animated gradient waves */}
        <div
          className='absolute inset-0 opacity-30 animate-pulse'
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%),
                        linear-gradient(-45deg, transparent 30%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)`,
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating geometric elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Large soft circles with animation */}
        <motion.div
          className='absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl'
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
          className='absolute top-40 right-20 w-48 h-48 bg-indigo-200/15 rounded-full blur-xl'
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
          className='absolute bottom-40 left-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-xl'
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
        <motion.div
          className='absolute bottom-20 right-1/3 w-36 h-36 bg-blue-300/15 rounded-full blur-xl'
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated geometric shapes */}
        <motion.div
          className='absolute top-32 left-1/2 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-indigo-300/15 rounded-lg blur-sm'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute top-60 right-1/4 w-16 h-16 bg-gradient-to-tl from-purple-300/25 to-blue-200/20 rounded-full'
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-60 left-20 w-20 h-20 bg-gradient-to-r from-indigo-200/30 to-blue-300/15 rounded-lg blur-sm'
          animate={{
            rotate: [0, -180, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-32 right-16 w-14 h-14 bg-gradient-to-bl from-blue-400/20 to-purple-300/15 rounded-full blur-sm'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated triangle shapes */}
        <motion.div
          className='absolute top-1/3 left-16 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-blue-300/20 blur-sm'
          animate={{
            rotate: [0, 360],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-2/3 right-24 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-indigo-300/25 blur-sm'
          animate={{
            rotate: [180, 540],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated hexagon shapes */}
        <motion.div
          className='absolute top-1/4 right-1/3 w-12 h-12 bg-gradient-to-tr from-blue-300/20 to-purple-200/15 blur-sm'
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}
          animate={{
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 left-1/3 w-10 h-10 bg-gradient-to-bl from-indigo-300/25 to-blue-200/20 blur-sm'
          style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' }}
          animate={{
            rotate: [360, 240, 120, 0],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Animated decorative dots */}
        <motion.div
          className='absolute top-24 left-1/3 w-3 h-3 bg-blue-400/30 rounded-full'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-48 right-1/2 w-2 h-2 bg-indigo-400/35 rounded-full'
          animate={{
            y: [0, -12, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className='absolute bottom-24 left-1/2 w-4 h-4 bg-purple-400/25 rounded-full'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className='absolute bottom-48 right-1/4 w-3 h-3 bg-blue-300/30 rounded-full'
          animate={{
            x: [0, 8, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className='absolute top-72 left-24 w-2 h-2 bg-indigo-300/40 rounded-full'
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        />
        <motion.div
          className='absolute bottom-72 right-32 w-3 h-3 bg-blue-400/25 rounded-full'
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />

        {/* Subtle pattern overlay */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(59,130,246,0.4)_1px,transparent_0)] bg-[length:60px_60px]' />
        </div>
      </div>

      <div className='relative z-10 container mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-16 text-left'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
            Services
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
            Des solutions web accessibles et sur mesure pour votre entreprise
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className='space-y-16'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='gap-30px sm:gap-10 xl:gap-16 3xl:gap-20 bg-white rounded-2xl lg:rounded-22px 3xl:rounded-30px px-5 py-7 sm:p-30px lg:p-10 3xl:p-12'>
              <div className='grid lg:grid-cols-2 gap-8 items-center'>
                {/* Right Image - First on mobile */}
                <div className='relative order-1 lg:order-2'>
                  <div className='aspect-[4/3] relative overflow-hidden rounded-2xl max-h-48 md:max-h-fit w-full'>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={900}
                      height={600}
                      className='object-cover w-full h-full'
                      priority={index < 2}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                  </div>
                </div>

                {/* Left Content - Second on mobile */}
                <div className='space-y-6 xl:h-full flex flex-col justify-between order-2 lg:order-1'>
                  <div>
                    <h3 className='text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8'>
                      {service.title}
                    </h3>

                    {/* Feature Badges */}
                    <div className='grid grid-cols-2 gap-2 md:flex md:flex-wrap'>
                      {service.badges.map((badge, badgeIndex) => (
                        <motion.span
                          key={badgeIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 + badgeIndex * 0.1 }}
                          viewport={{ once: true }}
                          className='inline-flex items-center justify-center px-6 py-4 md:px-8 md:py-6 rounded-full text-sm md:text-xl font-medium border border-blue-200/50 cursor-default'>
                          <span className='text-center'>{badge}</span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <p className='text-gray-600 text-lg leading-relaxed'>{service.description}</p>

                  {/* Enhanced CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='group relative bg-black hover:bg-white text-white hover:text-black border border-black transition-all duration-300 h-16 lg:h-[77px] 3xl:h-[98px] w-full sm:w-auto 3xl:w-1/2 text-lg 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8 cursor-pointer'>
                      <span className='relative flex items-center justify-center'>
                        Demander un devis
                      </span>
                    </button>

                    <button className='relative text-brand-primary border border-black hover:bg-black hover:text-white transition-all duration-300 h-16 lg:h-[77px] 3xl:h-[98px] w-full sm:w-auto 3xl:w-1/2 text-lg 3xl:text-22 font-medium whitespace-nowrap rounded-full px-6 lg:px-8 cursor-pointer'>
                      <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-0 transition-opacity duration-200'></div>
                      <span className='relative flex items-center justify-center'>
                        Voir les tarifs
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-20'>
          {/* Mobile Card Version */}
          <div className='lg:hidden'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-md'>
              {/* Image at top */}
              <div className='relative h-48 w-full'>
                <Image
                  src='/images/services/cta-background-3.jpg'
                  alt='CTA Background'
                  fill
                  className='object-cover'
                  priority={false}
                  onError={(e) => {
                    console.log('CTA background image failed to load')
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              </div>

              {/* Content at bottom */}
              <div className='p-6'>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight text-[32px] sm:text-[40px] lg:lg:text-6xl 3xl:text-[80px]'>
                  Transformons ensemble vos idées en réalité numérique
                </h3>

                <p className='text-gray-600 text-base leading-relaxed mb-6'>
                  Nous accompagnons votre croissance digitale avec des solutions innovantes et sur
                  mesure. Contactez-nous pour une consultation gratuite et découvrez comment nous
                  pouvons booster votre présence en ligne.
                </p>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className='relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden group'>
                  <div className='absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  <span className='relative flex items-center justify-center gap-3'>
                    <span>Démarrer votre projet</span>
                    <svg
                      className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Desktop Version */}
          <div className='hidden lg:block'>
            <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-700 min-h-[400px] flex items-center'>
              {/* Background Image */}
              <div className='absolute inset-0'>
                <Image
                  src='/images/services/cta-background-21.jpg'
                  alt='CTA Background'
                  fill
                  className='object-cover'
                  priority={false}
                />
              </div>

              {/* Pattern Overlay */}
              <div className='absolute inset-0 opacity-10'>
                <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent' />
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]' />
              </div>

              {/* Content Grid */}
              <div className='relative z-10 w-full px-8 py-12'>
                <div className='flex justify-center lg:justify-end items-center max-w-7xl mx-auto'>
                  {/* CTA Card - Right on desktop */}
                  <div className='w-full max-w-2xl lg:max-w-3xl'>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className='bg-white rounded-2xl p-8 lg:p-12 shadow-2xl'
                      style={{
                        background: 'rgba(249, 247, 247, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      }}>
                      <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight'>
                        Transformons ensemble vos idées en réalité numérique
                      </h3>

                      <p className='text-gray-600 text-lg lg:text-xl leading-relaxed mb-8'>
                        Nous accompagnons votre croissance digitale avec des solutions innovantes et
                        sur mesure. Contactez-nous pour une consultation gratuite et découvrez
                        comment nous pouvons booster votre présence en ligne.
                      </p>

                      <button className='group relative bg-black hover:bg-transparent text-white hover:text-black border border-gray-400 transition-all duration-300 w-full text-lg 3xl:text-22 whitespace-nowrap px-6 lg:px-8 cursor-pointer h-[60px] sm:h-16 lg:h-20 lg:text-lg 3xl:text-22 font-medium rounded-full mt-5 sm:mt-10'>
                        <span className='relative flex items-center justify-center gap-3'>
                          <span className='text-xl'>Démarrer votre projet</span>
                        </span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
