'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

interface FAQProps {
  dictionary: {
    faq: {
      title: string
      subtitle: string
      categories: {
        general: string
        pricing: string
        support: string
      }
      questions: {
        [key: string]: {
          question: string
          answer: string
          category: string
        }
      }
    }
  }
}

export function FAQ({ dictionary }: FAQProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const faqData = dictionary?.faq

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
    <section
      id='faq'
      className='space-y-[30px] lg:space-y-8 3xl:space-y-12 py-20 relative overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url('/images/hero/hero.svg')` }}
      />
      {/* Clean gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-secondary/30 to-brand-cream/20'></div>
      {/* Pattern overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:20px_20px] opacity-50'></div>
      <div className='container mx-auto px-4 relative'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-left mb-16'>
          <h2 className='text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight'>
            {faqData.title}
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl leading-relaxed'>{faqData.subtitle}</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='w-full mb-12'>
          <div className='flex flex-wrap gap-2.5'>
            <button
              onClick={() => setActiveCategory('all')}
              className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0 ${
                activeCategory === 'all'
                  ? 'text-white bg-black border border-transparent hover:bg-transparent hover:text-black hover:border-black'
                  : 'text-black border border-black hover:bg-black hover:text-white'
              }`}
              tabIndex={0}>
              #Все
            </button>
            {(['general', 'pricing', 'support'] as const).map((category, idx) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer h-10 sm:h-12 lg:h-[60px] 3xl:h-20 3xl:text-22 rounded-xl 3xl:rounded-2xl px-2 sm:px-3 lg:px-[18px] 3xl:px-6 transition-all duration-300 outline-none focus:ring-0 ${
                  idx === 2 ? 'mr-[30px]' : ''
                } ${
                  activeCategory === category
                    ? 'text-white bg-black border border-transparent hover:bg-transparent hover:text-black hover:border-black'
                    : 'text-black border border-black hover:bg-black hover:text-white'
                }`}
                tabIndex={0}>
                #{faqData.categories[category]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-2.5'>
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
                  className='bg-brand-cream rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-brand-secondary '>
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className='w-full flex items-center justify-between transition-all duration-[10000] pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8 cursor-pointer'>
                    <div className='flex items-center gap-3 3xl:gap-6'>
                      <h4 className='font-medium text-left text-lg sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10'>
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
                    <p className='pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8 text-brand-primary'>
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
                  className='bg-brand-cream rounded-2xl pb-5 sm:pb-6 3xl:pb-8 border border-brand-secondary'>
                  <button
                    onClick={() => toggleQuestion(questionId)}
                    className='w-full flex items-center justify-between transition-all duration-[10000] pt-5 px-5 sm:pt-6 sm:px-6 3xl:pt-8 3xl:px-8 cursor-pointer'>
                    <div className='flex items-center gap-3 3xl:gap-6'>
                      <h4 className='font-medium text-left text-lg sm:text-22 3xl:text-30 leading-7 sm:leading-[22px] lg:leading-[30px] 3xl:leading-10'>
                        {questionData.question}
                      </h4>
                    </div>
                    <span className='size-8 3xl:size-11 shrink-0 flex items-center justify-center rounded-full bg-brand-primary opacity-80 hover:opacity-100 transition-opacity duration-300'>
                      <svg
                        className={`w-5 h-5 3xl:w-7 3xl:h-7 text-brand-cream transition-transform duration-300 ${
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
                    <p className='pb-2 3xl:pb-4 px-5 sm:px-6 3xl:px-8 text-brand-primary'>
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
        <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl'>
          <h3 className='text-2xl font-bold mb-4 text-brand-primary'>Остались вопросы?</h3>
          <p className='text-brand-primary mb-6 max-w-2xl mx-auto'>
            Свяжитесь с нашей командой для персональной консультации по вашему проекту.
          </p>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-cream hover:text-brand-primary transition-colors duration-200'>
            Связаться
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
