'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  type Locale,
  locales,
  languageNames,
  languageFlags,
  getLocaleFromPathname,
  removeLocaleFromPathname,
  addLocaleToPathname,
} from '@/lib/i18n'
import { Dictionary } from '@/lib/dictionaries'

interface LanguageSwitcherProps {
  currentLocale: Locale
  dict: Dictionary
}

export function LanguageSwitcher({ currentLocale, dict }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  const handleLanguageChange = (locale: Locale) => {
    const currentPath = removeLocaleFromPathname(
      pathname,
      getLocaleFromPathname(pathname) || currentLocale
    )
    const newPath = addLocaleToPathname(currentPath, locale)

    // Store language preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', locale)
    }

    router.push(newPath)
    setIsOpen(false)
  }

  // Click outside to close
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className='relative z-[140]' ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 bg-[#DBE2EF]/30 border border-white/30 text-[#112D4E] hover:bg-[#3F72AF] hover:text-white hover:border-[#3F72AF] cursor-pointer'
        aria-label={dict?.navigation?.language || 'Language'}>
        <span className='text-lg'>{languageFlags[currentLocale]}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className='w-4 h-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-[150]'
            style={{
              background: 'rgba(249, 247, 247, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(50px) saturate(180%)',
              WebkitBackdropFilter: 'blur(50px) saturate(180%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}>
            <div className='py-2'>
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-all duration-300 cursor-pointer ${
                    locale === currentLocale
                      ? 'bg-[#3F72AF] text-white'
                      : 'text-[#112D4E] hover:bg-[#DBE2EF]/50 hover:text-[#3F72AF]'
                  }`}>
                  <span className='text-lg'>{languageFlags[locale]}</span>
                  <span>{languageNames[locale]}</span>
                  {locale === currentLocale && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='w-4 h-4 ml-auto text-white'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </motion.svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
