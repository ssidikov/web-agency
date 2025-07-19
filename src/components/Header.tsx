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
      className={`sticky z-[100] transition-all duration-500 ${scrolled ? 'top-0' : 'top-4'}`}>
      <nav className='container mx-auto relative z-[110] px-3.5 xs:px-4'>
        <div
          className={`flex items-center justify-between bg-[#F9F7F7]/70 border border-white/20 px-5 py-4 lg:px-4 3xl:p-4 backdrop-blur-xl shadow-lg transition-all duration-500 ${
            scrolled ? 'rounded-b-3xl rounded-t-none' : 'rounded-full'
          }`}
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href='/'
              className='text-2xl font-bold tracking-tight transition-all duration-300 text-[#112D4E]'>
              <span className='bg-gradient-to-r from-[#3F72AF] to-[#112D4E] bg-clip-text text-transparent'>
                Agency
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navigation.map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={item.href}
                  className={`text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg text-[#112D4E] ${
                    pathname === item.href
                      ? 'bg-[#3F72AF] text-white'
                      : 'hover:text-[#3F72AF] hover:bg-[#DBE2EF]/30'
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
              className='p-2 rounded-lg transition-all duration-300 bg-[#DBE2EF] text-[#112D4E] hover:bg-[#3F72AF] hover:text-white'
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
          className={`md:hidden overflow-hidden mt-2 bg-[#F9F7F7]/90 border border-white/20 shadow-lg backdrop-blur-xl transition-all duration-500 ${
            scrolled ? 'rounded-b-lg rounded-t-none' : 'rounded-lg'
          }`}
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}>
          <div className='py-4 space-y-2 px-4'>
            {navigation.map((item) => (
              <motion.div key={item.href} whileHover={{ x: 4 }} whileTap={{ x: 0 }}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 text-[#112D4E] ${
                    pathname === item.href
                      ? 'bg-[#3F72AF] text-white'
                      : 'hover:bg-[#DBE2EF]/50 hover:text-[#3F72AF]'
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
