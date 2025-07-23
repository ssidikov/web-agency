'use client'

import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { contactData } from '@/data/contact'
import { Dictionary } from '@/lib/dictionaries'

interface ContactProps {
  dictionary: Dictionary
}

const Contact: React.FC<ContactProps> = ({ dictionary }) => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={ref} id='contact' className='py-24 relative overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('/images/hero/hero.svg')`,
        }}
      />
      {/* Clean gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20'></div>

      {/* Pattern overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50'></div>

      <div className='container mx-auto px-6 relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-left mb-20'>
            <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
              {dictionary.contact.title}
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>
              {dictionary.contact.subtitle}
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-5 gap-8'>
            {/* Contact Form */}
            <motion.div variants={itemVariants} className='lg:col-span-3'>
              <div className='bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-900/5 p-10 h-full'>
                <div className='flex items-center mb-8'>
                  <div className='w-2 h-8 bg-black rounded-full mr-4'></div>
                  <h3 className='text-3xl font-bold text-gray-900'>
                    {dictionary.contact.form.title}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='group'>
                      <label
                        htmlFor='name'
                        className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                        {dictionary.contact.form.name.label}
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400'
                        placeholder={dictionary.contact.form.name.placeholder}
                      />
                    </div>

                    <div className='group'>
                      <label
                        htmlFor='email'
                        className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                        {dictionary.contact.form.email.label}
                      </label>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400'
                        placeholder={dictionary.contact.form.email.placeholder}
                      />
                    </div>
                  </div>

                  <div className='group'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-black transition-colors'>
                      {dictionary.contact.form.message.label}
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className='w-full px-6 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:bg-white focus:border-black focus:outline-none transition-all duration-300 resize-none text-gray-900 placeholder-gray-400'
                      placeholder={dictionary.contact.form.message.placeholder}
                    />
                  </div>

                  <motion.button
                    type='submit'
                    disabled={isSubmitting}
                    className='group relative w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <span className='relative z-10 flex items-center justify-center'>
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
                              strokeWidth='4'></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                          </svg>
                          {dictionary.contact.form.sending}
                        </>
                      ) : (
                        <>
                          {dictionary.contact.form.submit}
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
                    </span>
                    <div className='absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='p-6 bg-green-50 border-2 border-green-100 rounded-2xl'>
                      <div className='flex items-center'>
                        <svg
                          className='w-6 h-6 text-green-600 mr-3'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <p className='text-green-800 font-medium'>
                          {dictionary.contact.form.success}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='p-6 bg-red-50 border-2 border-red-100 rounded-2xl'>
                      <div className='flex items-center'>
                        <svg
                          className='w-6 h-6 text-red-600 mr-3'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <p className='text-red-800 font-medium'>{dictionary.contact.form.error}</p>
                      </div>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div variants={itemVariants} className='lg:col-span-2 space-y-6'>
              {/* Quick Contact Channels */}
              <div className='bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 p-8'>
                <div className='flex items-center mb-6'>
                  <div className='w-2 h-6 bg-black rounded-full mr-3'></div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {dictionary.contact.quickContact}
                  </h3>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                  {contactData.channels.map((channel, index) => {
                    const Icon = channel.icon
                    return (
                      <motion.a
                        key={channel.name}
                        href={channel.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative bg-gray-50 hover:bg-black border-2 border-gray-100 hover:border-black p-6 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden'
                        whileHover={{ scale: 1.02, y: -2 }}
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
                        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Contact Information */}
              <div className='bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 p-8'>
                <div className='flex items-center mb-6'>
                  <div className='w-2 h-6 bg-black rounded-full mr-3'></div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {dictionary.contact.info.title}
                  </h3>
                </div>
                <div className='space-y-6'>
                  {contactData.info.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={index}
                        className='group flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200'
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
                  <div className='w-2 h-6 bg-white rounded-full mr-3'></div>
                  <h3 className='text-xl font-bold text-white'>{dictionary.contact.social}</h3>
                </div>
                <div className='flex space-x-4'>
                  {contactData.socialLinks.map((social, index) => {
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
                  Follow us on social media for the latest updates, insights, and behind-the-scenes
                  content.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
