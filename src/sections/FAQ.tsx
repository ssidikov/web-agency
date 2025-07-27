'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

interface FAQProps {
  locale?: string
  dictionary?: any
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Combien de temps faut-il pour développer un site web ?',
    answer: 'Le délai de développement varie selon la complexité du projet. Un site vitrine simple peut être réalisé en 2-3 semaines, tandis qu\'un site e-commerce complexe peut nécessiter 6-8 semaines.',
    category: 'développement'
  },
  {
    id: '2',
    question: 'Proposez-vous la maintenance après livraison ?',
    answer: 'Oui, nous proposons différents plans de maintenance incluant les mises à jour de sécurité, les sauvegardes, et le support technique. Nous restons disponibles pour faire évoluer votre site selon vos besoins.',
    category: 'maintenance'
  },
  {
    id: '3',
    question: 'Quelles technologies utilisez-vous ?',
    answer: 'Nous utilisons des technologies modernes et éprouvées : React, Next.js, TypeScript pour le frontend, et diverses solutions backend selon les besoins du projet (Node.js, Python, etc.).',
    category: 'technique'
  },
  {
    id: '4',
    question: 'Le site sera-t-il optimisé pour mobile ?',
    answer: 'Absolument ! Tous nos sites sont développés avec une approche "mobile-first" et sont entièrement responsives. Nous testons sur tous les types d\'appareils pour garantir une expérience optimale.',
    category: 'design'
  },
  {
    id: '5',
    question: 'Puis-je modifier le contenu de mon site moi-même ?',
    answer: 'Oui, nous mettons en place des systèmes de gestion de contenu (CMS) intuitifs qui vous permettent de modifier facilement textes, images et pages sans connaissances techniques.',
    category: 'gestion'
  }
]

const categories = ['tous', 'développement', 'maintenance', 'technique', 'design', 'gestion']

export const FAQ = ({ locale, dictionary }: FAQProps) => {
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const filteredFAQ = selectedCategory === 'tous' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredFAQ.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-4"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openItems.has(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 flex-shrink-0"
                      >
                        <svg 
                          className="w-6 h-6 text-gray-400" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.has(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <div className="border-t border-gray-100 pt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contactez-nous
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ


