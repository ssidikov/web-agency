'use client'

import React, { useState, useCallback } from 'react'

interface ContactDictionary {
  title?: string
  subtitle?: string
  quickContact?: string
  social?: string
  socialDesc?: string
  form?: {
    title?: string
    name?: { label?: string; placeholder?: string }
    email?: { label?: string; placeholder?: string }
    message?: { label?: string; placeholder?: string }
    submit?: string
    sending?: string
  }
  info?: {
    title?: string
    localisations?: string
    locations?: string[]
    phone_label?: string
    email_label?: string
    phone?: string
    email?: string
  }
  channels?: {
    email?: string
    whatsapp?: string
    telegram?: string
    phone?: string
  }
}

interface ContactProps {
  className?: string
  dictionary?: ContactDictionary
  locale?: string
}

const Contact = ({ className, dictionary }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Form submitted with data
    setIsSubmitting(false)

    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  return (
    <section id='contact' className={`py-20 relative overflow-hidden ${className || ''}`}>
      {/* Background with gradient */}
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0 w-full h-full pointer-events-none select-none'
          style={{
            backgroundImage: 'url(/images/bg-image-3.svg)',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center top',
            backgroundSize: '100% auto',
            backgroundColor: '#f8fafc',
          }}
        />
        {/* Многослойный градиент для Contact */}
        <div className='absolute inset-0 bg-gradient-to-t from-white/80` via-transparent to-blue-50/10' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4'>
        <div className='text-left mb-20'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
            {dictionary?.title || 'Prenez Contact'}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
            {dictionary?.subtitle || 'Prêt à Commencer Votre Projet ?'}
          </p>
        </div>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Contact Form */}
          <div className='lg:col-span-3'>
            <div className='bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-900/5 p-10 h-full'>
              <div className='flex items-center mb-8'>
                <div className='w-2 h-8 bg-black rounded-full mr-4'></div>
                <h3 className='text-3xl font-bold text-gray-900'>
                  {dictionary?.form?.title || 'Envoyez-nous un message'}
                </h3>
              </div>
              <form onSubmit={handleSubmit} className='space-y-8'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='group'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                      {dictionary?.form?.name?.label || 'Nom Complet'}
                    </label>
                    <input
                      id='name'
                      name='name'
                      type='text'
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400'
                      placeholder={
                        dictionary?.form?.name?.placeholder || 'Entrez votre nom complet'
                      }
                    />
                  </div>
                  <div className='group'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                      {dictionary?.form?.email?.label || 'Adresse Email'}
                    </label>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400'
                      placeholder={
                        dictionary?.form?.email?.placeholder || 'Entrez votre adresse email'
                      }
                    />
                  </div>
                </div>
                <div className='group'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                    {dictionary?.form?.message?.label || 'Message'}
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 resize-none text-gray-900 placeholder-gray-400'
                    placeholder={
                      dictionary?.form?.message?.placeholder || 'Parlez-nous de votre projet...'
                    }
                  />
                </div>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full font-medium whitespace-nowrap rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 group relative bg-black hover:bg-white text-white hover:text-black border border-black transition-all duration-300 h-16 lg:h-[77px] 3xl:h-[98px] text-lg 3xl:text-xl px-6 lg:px-8'>
                  <span className='relative flex items-center justify-center'>
                    {isSubmitting
                      ? dictionary?.form?.sending || 'Envoi en cours...'
                      : dictionary?.form?.submit || 'Envoyer le Message'}
                    <svg
                      className='ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Quick Contact */}
            <div className='bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-2 h-6 bg-black rounded-full mr-3'></div>
                <h3 className='text-xl font-bold text-gray-900'>
                  {dictionary?.quickContact || 'Contact Rapide'}
                </h3>
              </div>
              <div className='grid grid-cols-2 gap-4'>
                <a
                  href='mailto:s.sidikoff@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50 hover:bg-black border-2 border-gray-100 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                    <polyline points='22,6 12,13 2,6' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.email || 'Email'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
                <a
                  href='https://wa.me/+33626932734'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50 hover:bg-black border-2 border-gray-100 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.whatsapp || 'WhatsApp'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
                <a
                  href='https://t.me/sardorbek_sidikov'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50 hover:bg-black border-2 border-gray-100 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.telegram || 'Telegram'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
                <a
                  href='tel:+33 6 26 93 27 34'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group relative bg-gray-50 hover:bg-black border-2 border-gray-100 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden'
                  tabIndex={0}>
                  <svg
                    width='32'
                    height='32'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'>
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                  </svg>
                  <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                    {dictionary?.channels?.phone || 'Téléphone'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className='bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-2 h-6 bg-black rounded-full mr-3'></div>
                <h3 className='text-xl font-bold text-gray-900'>
                  {dictionary?.info?.title || 'Informations de Contact'}
                </h3>
              </div>
              <div className='space-y-6'>
                <div className='group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100'>
                  <div className='flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'>
                      <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
                      <circle cx='12' cy='10' r='3' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {dictionary?.info?.localisations || 'Localisations'}
                    </h4>
                    <p className='text-gray-600 break-words'>
                      {dictionary?.info?.locations
                        ? dictionary.info.locations.join(' | ')
                        : 'Paris, France | Toulouse, France'}
                    </p>
                  </div>
                </div>
                <div className='group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100'>
                  <div className='flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'>
                      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {dictionary?.info?.phone_label || 'Téléphone'}
                    </h4>
                    <a
                      href='tel:+33 6 26 93 27 34'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 hover:text-black transition-colors duration-200 break-words'>
                      {dictionary?.info?.phone || '+33 6 26 93 27 34'}
                    </a>
                  </div>
                </div>
                <div className='group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100'>
                  <div className='flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      className='text-gray-600 group-hover:text-white transition-colors duration-300'>
                      <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
                      <polyline points='22,6 12,13 2,6' />
                    </svg>
                  </div>
                  <div className='min-w-0 flex-1'>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      {dictionary?.info?.email_label || 'Email'}
                    </h4>
                    <a
                      href='mailto:s.sidikoff@gmail.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-600 hover:text-black transition-colors duration-200 break-words'>
                      {dictionary?.info?.email || 's.sidikoff@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className='bg-black rounded-3xl shadow-xl shadow-gray-900/5 p-8'>
              <div className='flex items-center mb-6'>
                <div className='w-2 h-6 bg-white rounded-full mr-3'></div>
                <h3 className='text-xl font-bold text-white'>
                  {dictionary?.social || 'Suivez-nous'}
                </h3>
              </div>
              <div className='flex space-x-4'>
                <a
                  href='https://www.linkedin.com/in/sardorbeksidikov/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group w-14 h-14 bg-gray-800 hover:bg-white rounded-2xl flex items-center justify-center transition-all duration-300'
                  tabIndex={0}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='text-gray-300 group-hover:text-black transition-colors duration-300'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </a>
                <a
                  href='https://github.com/ssidikov'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group w-14 h-14 bg-gray-800 hover:bg-white rounded-2xl flex items-center justify-center transition-all duration-300'
                  tabIndex={0}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='text-gray-300 group-hover:text-black transition-colors duration-300'>
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                  </svg>
                </a>
              </div>
              <p className='text-gray-400 text-sm mt-6 leading-relaxed'>
                {dictionary?.socialDesc ||
                  'Suivez-nous sur les réseaux sociaux pour les dernières mises à jour, insights et contenu en coulisses.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
