'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Services() {
  const services = [
    {
      title: 'Création de Sites Web – De A à Z',
      description:
        "Chaque projet est conçu sur mesure pour répondre précisément à vos besoins. J'assure toute la chaîne : conception, développement, mise en ligne et suivi.",
      image: '/images/services/web-development.jpg',
      alt: 'Création de sites web sur mesure',
    },
    {
      title: 'Refonte / Redesign',
      description:
        "Redonnez une nouvelle jeunesse à votre site existant ! Améliorez l'ergonomie, modernisez l'esthétique et optimisez la performance pour offrir une expérience utilisateur irréprochable.",
      image: '/images/services/website-redesign.jpg',
      alt: 'Refonte et redesign de sites web',
    },
    {
      title: 'SEO & Optimisation de la Visibilité',
      description:
        "Faites-vous trouver par vos clients. J'optimise le référencement naturel (SEO) de votre site grâce à des techniques éprouvées, un code allégé et une structure adaptée, afin de booster votre visibilité sur Google.",
      image: '/images/services/seo-optimization.jpg',
      alt: 'Optimisation SEO et référencement',
    },
    {
      title: 'Maintenance & Support',
      description:
        "Profitez d'un accompagnement continu : support technique, mise à jour, modification ou ajout de nouvelles fonctionnalités selon vos besoins. Une facturation horaire ou sur demande ponctuelle pour un service flexible et évolutif.",
      image: '/images/services/maintenance-support.jpg',
      alt: 'Maintenance et support technique',
    },
  ]

  return (
    <section id='services' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
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
        <div className='space-y-12'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='grid lg:grid-cols-2 gap-8 items-center'>
                {/* Left Content */}
                <div className='space-y-6'>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>{service.title}</h3>

                  <p className='text-gray-600 text-lg leading-relaxed'>{service.description}</p>

                  {/* CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex-1 sm:flex-none cursor-pointer'>
                      Demander un devis
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex-1 sm:flex-none cursor-pointer'>
                      Voir les tarifs
                    </motion.button>
                  </div>
                </div>

                {/* Right Image */}
                <div className='relative'>
                  <div className='aspect-[4/3] relative overflow-hidden rounded-2xl'>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={600}
                      height={450}
                      className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
                    <div className='absolute bottom-4 left-4 text-white font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-lg'>
                      {service.alt}
                    </div>
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
          <div className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-700 min-h-[400px] flex items-center'>
            {/* Background Image */}
            <div
              className='absolute inset-0 bg-cover bg-center bg-no-repeat'
              style={{
                backgroundImage: `url('/images/services/cta-background.jpg')`,
              }}
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70' />

            {/* Pattern Overlay */}
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent' />
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]' />
            </div>

            {/* Content Grid */}
            <div className='relative z-10 w-full px-8 py-12'>
              <div className='grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto'>
                {/* Left Side - Decorative Space */}
                <div className='hidden lg:flex items-center justify-center'>
                  <div className='text-center'>
                    <div className='w-40 h-40 mx-auto mb-6 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm'>
                      <svg
                        className='w-20 h-20 text-white'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={1.5}
                          d='M13 10V3L4 14h7v7l9-11h-7z'
                        />
                      </svg>
                    </div>
                    <div className='text-white/60 text-lg font-medium'>Innovation</div>
                  </div>
                </div>

                {/* Right Side - CTA Card */}
                <div className='lg:ml-auto'>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='bg-white rounded-2xl p-8 shadow-2xl max-w-lg'>
                    <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight'>
                      Transformons ensemble vos idées en réalité numérique
                    </h3>

                    <p className='text-gray-600 text-lg leading-relaxed mb-8'>
                      Nous accompagnons votre croissance digitale avec des solutions innovantes et
                      sur mesure. Contactez-nous pour une consultation gratuite et découvrez comment
                      nous pouvons booster votre présence en ligne.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer'>
                      Démarrer votre projet
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
