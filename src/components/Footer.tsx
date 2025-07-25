'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Locale } from '@/lib/i18n'
import { Dictionary } from '@/lib/dictionaries'

interface FooterProps {
  dictionary: Dictionary
  locale: Locale
}

const SocialIcon = ({
  name,
  href,
  children,
}: {
  name: string
  href: string
  children: React.ReactNode
}) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className='w-12 h-12 bg-gray-800 hover:bg-white border border-gray-700 hover:border-black rounded-xl flex items-center justify-center transition-all duration-300 group'
    aria-label={name}>
    <div className='text-gray-300 group-hover:text-black transition-colors duration-300'>
      {children}
    </div>
  </motion.a>
)

const EmailIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
)

const PhoneIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
  </svg>
)

const LocationIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
)

const LinkedInIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
)

const GitHubIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
)

const TwitterIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
  </svg>
)

const InstagramIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
  </svg>
)

export function Footer({ dictionary, locale }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: dictionary.navigation?.home || 'Accueil', href: `/${locale}` },
    { name: dictionary.navigation?.services || 'Services', href: `/${locale}#services` },
    {
      name: dictionary.navigation?.portfolio || 'Portfolio',
      href: `/${locale}#portfolio`,
    },
    { name: dictionary.navigation?.contact || 'Contact', href: `/${locale}#contact` },
  ]

  const legalLinks = [
    {
      name: 'Mentions légales',
      href: `/${locale}/mentions-legales`,
    },
  ]

  const services = [
    {
      id: 'web-creation',
      name: dictionary.services?.web_creation?.title || 'Développement Web',
      href: `/${locale}#services`,
    },
    {
      id: 'web-redesign',
      name: dictionary.services?.web_redesign?.title || 'Refonte de Site',
      href: `/${locale}#services`,
    },
    {
      id: 'seo-optimization',
      name: dictionary.services?.seo_optimization?.title || 'SEO',
      href: `/${locale}#services`,
    },
    {
      id: 'maintenance',
      name: dictionary.services?.maintenance?.title || 'Maintenance',
      href: `/${locale}#services`,
    },
  ]

  return (
    <footer className='relative bg-black text-white'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px]' />
      </div>

      <div className='relative z-10'>
        {/* Main Footer Content */}
        <div className='container mx-auto px-4 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
            {/* Company Info */}
            <div className='lg:col-span-1'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <Link href={`/${locale}`} className='inline-flex items-center justify-center mb-6'>
                  <Image
                    src='/logo-sidikoff.webp'
                    alt='Sidikoff Digital'
                    width={60}
                    height={60}
                    className='w-15 h-15'
                  />
                </Link>

                <p className='text-gray-400 text-sm leading-relaxed mb-6 max-w-sm'>
                  {dictionary.footer?.description ||
                    'Agence digitale spécialisée dans le développement web moderne et le design créatif.'}
                </p>

                {/* Social Links */}
                <div className='flex space-x-4'>
                  <SocialIcon name='LinkedIn' href='https://linkedin.com/in/sidikoff'>
                    <LinkedInIcon />
                  </SocialIcon>
                  <SocialIcon name='GitHub' href='https://github.com/sidikoff'>
                    <GitHubIcon />
                  </SocialIcon>
                  <SocialIcon name='Twitter' href='https://twitter.com/sidikoff'>
                    <TwitterIcon />
                  </SocialIcon>
                  <SocialIcon name='Instagram' href='https://instagram.com/sidikoff'>
                    <InstagramIcon />
                  </SocialIcon>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}>
                <h3 className='text-lg font-semibold mb-6 text-white'>
                  {dictionary.footer?.quick_links || 'Navigation'}
                </h3>
                <ul className='space-y-3'>
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}>
                <h3 className='text-lg font-semibold mb-6 text-white'>
                  {dictionary.footer?.services_links || 'Services'}
                </h3>
                <ul className='space-y-3'>
                  {services.map((service) => (
                    <li key={service.id}>
                      <Link
                        href={service.href}
                        className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}>
                <h3 className='text-lg font-semibold mb-6 text-white'>
                  {dictionary.footer?.contact_info || 'Contact'}
                </h3>
                <div className='space-y-4'>
                  {/* Email */}
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 text-gray-400'>
                      <EmailIcon />
                    </div>
                    <a
                      href='mailto:s.sidikoff@gmail.com'
                      className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                      s.sidikoff@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className='flex items-center space-x-3'>
                    <div className='w-5 h-5 text-gray-400'>
                      <PhoneIcon />
                    </div>
                    <a
                      href='tel:+330625305923'
                      className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                      +33 06 25 30 59 23
                    </a>
                  </div>

                  {/* Location */}
                  <div className='flex items-start space-x-3'>
                    <div className='w-5 h-5 text-gray-400 mt-0.5'>
                      <LocationIcon />
                    </div>
                    <span className='text-gray-400 text-sm'>France, Europe</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800'>
          <div className='container mx-auto px-4 py-6'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              {/* Copyright */}
              <div className='text-gray-400 text-sm'>
                © {currentYear} Sidikoff Digital.{' '}
                {dictionary.footer?.copyright || 'Tous droits réservés.'}
              </div>

              {/* Legal Links */}
              <div className='flex flex-wrap justify-center md:justify-end space-x-6'>
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='text-gray-400 hover:text-white transition-colors duration-300 text-sm'>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
