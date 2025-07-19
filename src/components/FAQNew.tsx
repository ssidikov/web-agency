'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQProps {
  dictionary: {
    faq: {
      title: string;
      subtitle: string;
      categories: {
        general: string;
        pricing: string;
        support: string;
      };
      questions: {
        [key: string]: {
          question: string;
          answer: string;
          category: string;
        };
      };
    };
  };
}

export function FAQ({ dictionary }: FAQProps) {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const faqData = dictionary?.faq;
  
  if (!faqData) {
    return <div>FAQ data not available</div>;
  }

  const questions = Object.entries(faqData.questions);
  
  const filteredQuestions = activeCategory === 'all' 
    ? questions 
    : questions.filter(([, question]) => question.category === activeCategory);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {faqData.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {faqData.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-gray-100 rounded-full p-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            {(['general', 'pricing', 'support'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {faqData.categories[category]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredQuestions.map(([questionId, questionData], index) => (
              <motion.div
                key={questionId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(questionId)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        questionData.category === 'general' ? 'bg-blue-100 text-blue-800' :
                        questionData.category === 'pricing' ? 'bg-green-100 text-green-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {faqData.categories[questionData.category as keyof typeof faqData.categories]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {questionData.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <motion.div
                      animate={{ rotate: openQuestion === questionId ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: openQuestion === questionId ? 'auto' : 0,
                    opacity: openQuestion === questionId ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gray-200 mb-4" />
                    <p className="text-gray-600 leading-relaxed">
                      {questionData.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No questions found for this category.</p>
            </motion.div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We&apos;re here to help! Contact our team for personalized assistance with your project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
