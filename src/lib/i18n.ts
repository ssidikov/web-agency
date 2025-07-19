import { notFound } from 'next/navigation'

export type Locale = 'en' | 'fr' | 'ru'

export const locales: Locale[] = ['en', 'fr', 'ru']
export const defaultLocale: Locale = 'en'

// Language metadata
export const languageNames = {
  en: 'English',
  fr: 'Français',
  ru: 'Русский',
}

export const languageFlags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  ru: '🇷🇺',
}

// Check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

// Get dictionary for a locale
export async function getDictionary(locale: Locale) {
  if (!isValidLocale(locale)) {
    notFound()
  }

  try {
    const dictionary = await import(`../../locales/${locale}/common.json`)
    return dictionary.default
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error)
    // Fallback to default locale
    if (locale !== defaultLocale) {
      return getDictionary(defaultLocale)
    }
    throw new Error(`Failed to load default dictionary`)
  }
}

// Get user's preferred language from browser
export function getPreferredLocale(acceptLanguage?: string): Locale {
  if (!acceptLanguage) return defaultLocale

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, quality = '1'] = lang.trim().split(';q=')
      return {
        code: code.toLowerCase().split('-')[0], // Extract language code (en from en-US)
        quality: parseFloat(quality)
      }
    })
    .sort((a, b) => b.quality - a.quality) // Sort by quality

  // Find first matching locale
  for (const { code } of languages) {
    if (isValidLocale(code)) {
      return code
    }
  }

  return defaultLocale
}

// Get locale from pathname
export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (firstSegment && isValidLocale(firstSegment)) {
    return firstSegment
  }
  
  return null
}

// Remove locale from pathname
export function removeLocaleFromPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments[0] === locale) {
    segments.shift()
  }
  return '/' + segments.join('/')
}

// Add locale to pathname
export function addLocaleToPathname(pathname: string, locale: Locale): string {
  const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname
  return `/${locale}/${cleanPath}`.replace(/\/+/g, '/').replace(/\/$/, '') || `/${locale}`
}

// Get alternate URLs for SEO
export function getAlternateUrls(pathname: string, baseUrl: string = '') {
  const cleanPath = removeLocaleFromPathname(pathname, getLocaleFromPathname(pathname) || defaultLocale)
  
  return locales.map(locale => ({
    locale,
    url: `${baseUrl}${addLocaleToPathname(cleanPath, locale)}`,
    hreflang: locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU'
  }))
}

// Translation hook type
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>

// Utility to get nested translation
export function getNestedTranslation(
  dict: Dictionary,
  key: string,
  fallback?: string
): string {
  const keys = key.split('.')
  let current: unknown = dict
  
  for (const k of keys) {
    if (current && typeof current === 'object' && current !== null && k in current) {
      current = (current as Record<string, unknown>)[k]
    } else {
      return fallback || key
    }
  }
  
  return typeof current === 'string' ? current : fallback || key
}

// Format number based on locale
export function formatNumber(num: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU').format(num)
}

// Format date based on locale
export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(
    locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  ).format(date)
}

// Format currency based on locale
export function formatCurrency(amount: number, locale: Locale): string {
  const currency = locale === 'en' ? 'USD' : locale === 'fr' ? 'EUR' : 'RUB'
  return new Intl.NumberFormat(
    locale === 'en' ? 'en-US' : locale === 'fr' ? 'fr-FR' : 'ru-RU',
    {
      style: 'currency',
      currency
    }
  ).format(amount)
}
