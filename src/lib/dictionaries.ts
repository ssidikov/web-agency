import 'server-only'
import { notFound } from 'next/navigation'
import { type Locale, isValidLocale, defaultLocale } from './i18n'

// Dictionary loading function - server only
const dictionaries = {
  fr: () => import('../../locales/fr/common.json').then((module) => module.default),
  en: () => import('../../locales/en/common.json').then((module) => module.default),
  ru: () => import('../../locales/ru/common.json').then((module) => module.default),
}

// Get dictionary for a locale - server only
export async function getDictionary(locale: Locale) {
  if (!isValidLocale(locale)) {
    notFound()
  }

  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error)
    // Fallback to default locale
    if (locale !== defaultLocale) {
      return getDictionary(defaultLocale)
    }
    throw new Error(`Failed to load default dictionary`)
  }
}

// Dictionary type for TypeScript
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>
