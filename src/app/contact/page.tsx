'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Let&apos;s Work Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-balance">
              Ready to bring your digital vision to life? We&apos;d love to hear about your project and discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  We&apos;re here to answer your questions and discuss your project needs. Choose the method that works best for you.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                {[
                  {
                    icon: '📧',
                    title: 'Email Us',
                    description: 'hello@agency.com',
                    link: 'mailto:hello@agency.com'
                  },
                  {
                    icon: '📞',
                    title: 'Call Us',
                    description: '+1 (555) 123-4567',
                    link: 'tel:+15551234567'
                  },
                  {
                    icon: '📍',
                    title: 'Visit Us',
                    description: '123 Digital Street, Tech City, TC 12345',
                    link: '#'
                  },
                  {
                    icon: '💬',
                    title: 'Live Chat',
                    description: 'Available Monday-Friday, 9AM-6PM EST',
                    link: '#'
                  }
                ].map((contact) => (
                  <div key={contact.title} className="flex items-start space-x-4">
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.title}
                      </h3>
                      <a
                        href={contact.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        {contact.description}
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Response Times
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>General Inquiries:</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project Quotes:</span>
                    <span className="font-medium">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Urgent Support:</span>
                    <span className="font-medium">Within 4 hours</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="mobile-development">Mobile Development</option>
                          <option value="brand-identity">Brand Identity</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="consulting">Consulting</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-10k">Under $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="over-100k">Over $100,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 text-lg font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white dark:border-gray-900 mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
              Here&apos;s what you can expect after reaching out to us.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: '1',
                title: 'Initial Response',
                description: 'We\'ll acknowledge your message within 24 hours and schedule a discovery call.',
                icon: '📞'
              },
              {
                step: '2',
                title: 'Discovery Call',
                description: 'We\'ll discuss your project in detail, understand your goals, and answer questions.',
                icon: '💭'
              },
              {
                step: '3',
                title: 'Proposal',
                description: 'You\'ll receive a detailed proposal with timeline, pricing, and project scope.',
                icon: '📋'
              }
            ].map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeInUp}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  {phase.step}
                </div>
                <div className="text-4xl mb-4">{phase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
