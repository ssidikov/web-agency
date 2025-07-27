'use client'

import React, { useState, useCallback, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Dictionary } from '@/lib/dictionaries'
import CTAButton from './ui/CTAButton'

// Импорты иконок вынесены в начало для лучшей производительности
import {
  EmailIcon,
  PhoneIcon,
  WhatsAppIcon,
  TelegramIcon,
  LinkedInIcon,
  GitHubIcon,
} from '@/components/icons'
import { LocationIcon } from '@/components/icons/location'

interface ContactProps {
  dictionary: Dictionary['contact']
  locale: 'fr' | 'en' | 'ru'
  className?: string
}

interface FormData {
  name: string
  email: string
  message: string
  locale: 'fr' | 'en' | 'ru'
}

type SubmitStatus = 'idle' | 'success' | 'error'

// Константы анимации для переиспользования
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  },
} as const

const Contact: React.FC<ContactProps> = ({ dictionary, locale, className }) => {
  const ref = React.useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    locale,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  // Мемоизированные данные каналов связи
  const channels = useMemo(
    () => [
      {
        name: dictionary.channels.email,
        icon: EmailIcon,
        href: `mailto:${dictionary.info.email}`,
        description: dictionary.channels.emailDesc || '',
        color: 'bg-blue-500 hover:bg-blue-600',
      },
      {
        name: dictionary.channels.whatsapp,
        icon: WhatsAppIcon,
        href: 'https://wa.me/+33626932734',
        description: dictionary.channels.whatsappDesc || '',
        color: 'bg-green-500 hover:bg-green-600',
      },
      {
        name: dictionary.channels.telegram,
        icon: TelegramIcon,
        href: 'https://t.me/sardorbek_sidikov',
        description: dictionary.channels.telegramDesc || '',
        color: 'bg-blue-400 hover:bg-blue-500',
      },
      {
        name: dictionary.channels.phone,
        icon: PhoneIcon,
        href: `tel:${dictionary.info.phone}`,
        description: dictionary.channels.phoneDesc || '',
        color: 'bg-purple-500 hover:bg-purple-600',
      },
    ],
    [dictionary]
  )

  // Мемоизированная контактная информация
  const contactInfo = useMemo(
    () => [
      {
        title: dictionary.info.localisations,
        icon: LocationIcon,
        value: dictionary.info.locations?.join(' <br /> ') || '',
        link: '',
      },
      {
        title: dictionary.info.phone_label || dictionary.channels.phone,
        icon: PhoneIcon,
        value: dictionary.info.phone,
        link: `tel:${dictionary.info.phone}`,
      },
      {
        title: dictionary.info.email_label || dictionary.channels.email,
        icon: EmailIcon,
        value: dictionary.info.email,
        link: `mailto:${dictionary.info.email}`,
      },
    ],
    [dictionary]
  )

  // Мемоизированные социальные ссылки
  const socialLinks = useMemo(
    () => [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sardorbeksidikov/',
        icon: LinkedInIcon,
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/ssidikov',
        icon: GitHubIcon,
      },
    ],
    []
  )

  // Оптимизированный обработчик изменения формы
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    },
    []
  )

  // Оптимизированный обработчик отправки формы
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()

      if (isSubmitting) return // Предотвращаем повторную отправку

      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', message: '', locale })
        } else {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      } catch (error) {
        // Log error only in development
        if (process.env.NODE_ENV === 'development') {
          console.error('Form submission error:', error)
        }
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
        // Сброс статуса через 5 секунд
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    },
    [formData, isSubmitting, locale]
  )

  // Компонент поля ввода для переиспользования
  const InputField = useCallback(
    ({
      type,
      id,
      name,
      value,
      onChange,
      label,
      placeholder,
      required = false,
      rows,
    }: {
      type?: string
      id: string
      name: string
      value: string
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
      label: string
      placeholder: string
      required?: boolean
      rows?: number
    }) => (
      <div className='group'>
        <label
          htmlFor={id}
          className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
          {label}
        </label>
        {rows ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 resize-none text-gray-900 placeholder-gray-400'
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type || 'text'}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400'
            placeholder={placeholder}
          />
        )}
      </div>
    ),
    []
  )

  // Компонент статуса отправки
  const SubmissionStatus = useCallback(() => {
    if (submitStatus === 'idle') return null

    const isSuccess = submitStatus === 'success'
    const message = isSuccess ? dictionary.form.success : dictionary.form.error
    const colorClasses = isSuccess
      ? 'bg-green-50 border-green-100 text-green-800'
      : 'bg-red-50 border-red-100 text-red-800'
    const iconColor = isSuccess ? 'text-green-600' : 'text-red-600'

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-6 border-2 rounded-2xl ${colorClasses}`}>
        <div className='flex items-center'>
          <svg
            className={`w-6 h-6 mr-3 ${iconColor}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={
                isSuccess
                  ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  : 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            />
          </svg>
          <p className='font-medium'>{message}</p>
        </div>
      </motion.div>
    )
  }, [submitStatus, dictionary.form.success, dictionary.form.error])

  return (
    <section
      ref={ref}
      id='contact'
      className={`relative py-24 overflow-hidden${className ? ` ${className}` : ''}`}>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero/hero.svg'
          alt='Contact Background'
          fill
          className='object-cover w-full h-full pointer-events-none select-none'
          priority={false}
          sizes='100vw'
        />
      </div>

      {/* Clean gradient background */}
      <div className='absolute inset-0 z-10 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20' />

      {/* Pattern overlay */}
      <div className='absolute inset-0 z-20 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50' />

      <div className='container mx-auto px-6 relative z-30'>
        <motion.div
          variants={ANIMATION_VARIANTS.container}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div variants={ANIMATION_VARIANTS.item} className='text-left mb-20'>
            <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
              {dictionary.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>{dictionary.subtitle}</p>
          </motion.div>

          <div className='grid lg:grid-cols-5 gap-8'>
            {/* Contact Form */}
            <motion.div variants={ANIMATION_VARIANTS.item} className='lg:col-span-3'>
              <div className='bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-900/5 p-10 h-full'>
                <div className='flex items-center mb-8'>
                  <div className='w-2 h-8 bg-black rounded-full mr-4' />
                  <h3 className='text-3xl font-bold text-gray-900'>{dictionary.form.title}</h3>
                </div>

                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <InputField
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      label={dictionary.form.name.label}
                      placeholder={dictionary.form.name.placeholder}
                      required
                    />

                    <InputField
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      label={dictionary.form.email.label}
                      placeholder={dictionary.form.email.placeholder}
                      required
                    />
                  </div>

                  <InputField
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    label={dictionary.form.message.label}
                    placeholder={dictionary.form.message.placeholder}
                    rows={6}
                    required
                  />

                  <CTAButton
                    type='submit'
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'>
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          />
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          />
                        </svg>
                        {dictionary.form.sending}
                      </>
                    ) : (
                      <>
                        {dictionary.form.submit}
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
                      </>
                    )}
                  </CTAButton>

                  <SubmissionStatus />
                </form>
              </div>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div variants={ANIMATION_VARIANTS.item} className='lg:col-span-2 space-y-6'>
              {/* Quick Contact Channels */}
              <div className='bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 p-8'>
                <div className='flex items-center mb-6'>
                  <div className='w-2 h-6 bg-black rounded-full mr-3' />
                  <h3 className='text-xl font-bold text-gray-900'>{dictionary.quickContact}</h3>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  {channels.map((channel, index) => {
                    const Icon = channel.icon
                    return (
                      <motion.a
                        key={channel.name}
                        href={channel.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative bg-gray-50 hover:bg-black border-2 border-gray-100 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden'
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}>
                        <Icon
                          size={32}
                          className='mb-3 text-gray-700 group-hover:text-white transition-colors duration-300'
                        />
                        <span className='font-semibold text-sm text-gray-900 group-hover:text-white transition-colors duration-300'>
                          {channel.name}
                        </span>
                        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className='bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 p-8'>
                <div className='flex items-center mb-6'>
                  <div className='w-2 h-6 bg-black rounded-full mr-3' />
                  <h3 className='text-xl font-bold text-gray-900'>{dictionary.info.title}</h3>
                </div>
                <div className='space-y-6'>
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        className='group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 border border-gray-100'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}>
                        <div className='flex-shrink-0 w-12 h-12 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center transition-colors duration-300'>
                          <Icon
                            size={20}
                            className='text-gray-600 group-hover:text-white transition-colors duration-300'
                          />
                        </div>
                        <div className='min-w-0 flex-1'>
                          <h4 className='font-semibold text-gray-900 mb-1'>{item.title}</h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-gray-600 hover:text-black transition-colors duration-200 break-words'>
                              {item.value}
                            </a>
                          ) : item.title === dictionary.info.localisations ? (
                            <p
                              className='text-gray-600 break-words'
                              dangerouslySetInnerHTML={{ __html: item.value }}
                            />
                          ) : (
                            <p className='text-gray-600 break-words'>{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className='bg-black rounded-3xl shadow-xl shadow-gray-900/5 p-8'>
                <div className='flex items-center mb-6'>
                  <div className='w-2 h-6 bg-white rounded-full mr-3' />
                  <h3 className='text-xl font-bold text-white'>{dictionary.social}</h3>
                </div>
                <div className='flex space-x-4'>
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group w-14 h-14 bg-gray-800 hover:bg-white rounded-2xl flex items-center justify-center transition-all duration-300'
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}>
                        <Icon
                          size={24}
                          className='text-gray-300 group-hover:text-black transition-colors duration-300'
                        />
                      </motion.a>
                    )
                  })}
                </div>
                <p className='text-gray-400 text-sm mt-6 leading-relaxed'>
                  {dictionary.socialDesc}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default React.memo(Contact)
