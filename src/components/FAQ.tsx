'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { FilterButtonBar } from './ui/FilterButtonBar'
import { Dictionary } from '@/lib/dictionaries'

interface FAQProps {
  dictionary: Dictionary['faq']
}

export function FAQ({ dictionary: faqData }: FAQProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  if (!faqData) {
    return <div>FAQ data not available</div>
  }

  const questions = Object.entries(faqData.questions)

  const filteredQuestions =
    activeCategory === 'all'
      ? questions
      : questions.filter(([, question]) => question.category === activeCategory)

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <section id='faq' className='3xl:space-y-12 py-20 relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero/hero.svg'
          alt='FAQ Background'
          fill
          className='object-cover w-full h-full pointer-events-none select-none'
          priority={false}
          sizes='100vw'
        />
      </div>
      {/* Clean gradient background */}
      <div className='absolute inset-0 z-10 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-white/90'></div>

      <div className='container mx-auto px-4 relative z-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-left mb-10 md:mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
            {faqData.title}
          </h2>
          <p className='text-2xl text-gray-600 max-w-3xl leading-relaxed'>{faqData.subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='w-full mb-12'>
          <FilterButtonBar
            options={[
              { value: 'all', label: 'All' },
              { value: 'general', label: faqData.categories.general },
              { value: 'pricing', label: faqData.categories.pricing },
              { value: 'support', label: faqData.categories.support },
            ]}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </motion.div>

        {/* FAQ Items */}
        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-2.5 h-[560px] md:h-80'>
          <div className='space-y-2.5 w-full lg:w-1/2'>
            {filteredQuestions
              .slice(0, Math.ceil(filteredQuestions.length / 2))
              .map(([questionId, questionData], index) => (
                <motion.div
                  key={questionId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
                  style={{
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(16px) saturate(100%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(100%)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  }}>
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className='w-full flex items-center justify-between transition-all duration-[10000] pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8 cursor-pointer'>
                    <div className='flex items-center gap-3 3xl:gap-6'>
                      <h4 className='font-medium text-left text-xl sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10'>
                        {questionData.question}
                      </h4>
                    </div>
                    <span className='size-8 3xl:size-11 shrink-0 flex items-center justify-center rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300'>
                      <svg
                        className={`w-5 h-5 3xl:w-7 3xl:h-7 transition-transform duration-300 ${
                          openQuestion === questionId ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openQuestion === questionId ? '500px' : '0px',
                      transition: 'max-height 0.3s',
                      overflow: 'hidden',
                    }}>
                    <p className='pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8 text-lg mt-4'>
                      {questionData.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
          <div className='space-y-2.5 w-full lg:w-1/2'>
            {filteredQuestions
              .slice(Math.ceil(filteredQuestions.length / 2))
              .map(([questionId, questionData], index) => (
                <motion.div
                  key={questionId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-white/30 shadow-lg'
                  style={{
                    background: 'rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(16px) saturate(100%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(100%)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  }}>
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className='w-full flex items-center justify-between transition-all duration-[10000] pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8 cursor-pointer'>
                    <div className='flex items-center gap-3 3xl:gap-6'>
                      <h4 className='font-medium text-left text-xl sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10'>
                        {questionData.question}
                      </h4>
                    </div>
                    <span className='size-8 3xl:size-11 shrink-0 flex items-center justify-center rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300'>
                      <svg
                        className={`w-5 h-5 3xl:w-7 3xl:h-7 transition-transform duration-300 ${
                          openQuestion === questionId ? 'rotate-180' : ''
                        }`}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 9l-7 7-7-7'
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openQuestion === questionId ? '500px' : '0px',
                      transition: 'max-height 0.3s',
                      overflow: 'hidden',
                    }}>
                    <p className='pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8 text-lg mt-4'>
                      {questionData.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {filteredQuestions.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'>
            <p className='text-gray-500 text-lg'>No questions found for this category.</p>
          </motion.div>
        )}
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='text-center mt-32 z-10 relative'>
        <div
          className='rounded-2xl p-8 text-white shadow-xl border border-white/30 max-w-[720px] mx-auto'
          style={{
            background: 'rgba(44, 62, 80, 0.35)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}>
          <h3 className='text-3xl font-bold mb-4 text-white'>{faqData.cta.title}</h3>
          <p className='text-lg text-white mb-6 max-w-2xl mx-auto'>{faqData.cta.description}</p>
          <a
            href='#contact'
            className='text-xl inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200'>
            {faqData.cta.button}
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </a>
        </div>
      </motion.div>
      {/* End of section */}
    </section>
  )
}
