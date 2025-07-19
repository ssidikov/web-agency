'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Locale, locales, languageNames, languageFlags, getLocaleFromPathname, removeLocaleFromPathname, addLocaleToPathname, Dictionary } from '@/lib/i18n'

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
    const currentPath = removeLocaleFromPathname(pathname, getLocaleFromPathname(pathname) || currentLocale)
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
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label={dict?.navigation?.language || 'Language'}
      >
        <span className="text-lg">{languageFlags[currentLocale]}</span>
        <span className="hidden sm:inline">{languageNames[currentLocale]}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                    locale === currentLocale
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{languageFlags[locale]}</span>
                  <span>{languageNames[locale]}</span>
                  {locale === currentLocale && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 ml-auto text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
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
