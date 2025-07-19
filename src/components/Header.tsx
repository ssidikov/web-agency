'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Dictionary, Locale } from '@/lib/i18n'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  dictionary: Dictionary
  locale: Locale
}

const MenuIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <line x1='3' y1='6' x2='21' y2='6' />
    <line x1='3' y1='12' x2='21' y2='12' />
    <line x1='3' y1='18' x2='21' y2='18' />
  </svg>
)

const CloseIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
)

export function Header({ dictionary, locale }: HeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = [
    { label: dictionary.navigation.home, href: `/${locale}` },
    { label: dictionary.navigation.about, href: `/${locale}#about` },
    { label: dictionary.navigation.services, href: `/${locale}#services` },
    { label: dictionary.navigation.portfolio, href: `/${locale}#portfolio` },
    { label: dictionary.navigation.faq, href: `/${locale}#faq` },
    { label: dictionary.navigation.contact, href: `/${locale}#contact` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='/'
              className='text-2xl font-bold tracking-tight text-gray-900'>
              <span className='gradient-text'>Agency</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}>
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher currentLocale={locale} dict={dictionary} />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center space-x-2'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200'
              aria-label='Toggle menu'>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className='md:hidden overflow-hidden'>
          <div className='py-4 space-y-2'>
            {navigation.map((item) => (
              <motion.div key={item.href} whileHover={{ x: 4 }} whileTap={{ x: 0 }}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                    pathname === item.href
                      ? 'bg-indigo-100 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
