import 'server-only'
import { notFound } from 'next/navigation'
import { type Locale, isValidLocale, defaultLocale } from './i18n'

// Define the Dictionary type based on your actual JSON structure
export interface Dictionary {
  '404'?: {
    title: string
    description: string
    search_placeholder: string
    search_button: string
    go_home: string
    popular_pages: string
  }
  navigation?: Record<string, string>
  hero?: Record<string, string>
  services?: Record<string, string>
  faq?: Record<string, string>
  contact?: Record<string, string>
  footer?: Record<string, string>
  common?: Record<string, string>
  [key: string]: any // Allow additional properties
}

// Кэш для словарей
const dictionaryCache = new Map<Locale, Dictionary>()

// Dictionary loading function - server only с кэшированием
const dictionaries = {
  fr: () => import('../../locales/fr/common.json').then((module) => module.default as Dictionary),
  en: () => import('../../locales/en/common.json').then((module) => module.default as Dictionary),
  ru: () => import('../../locales/ru/common.json').then((module) => module.default as Dictionary),
} as const

// Get dictionary for a locale - server only с оптимизацией
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  // Валидация локали
  if (!isValidLocale(locale)) {
    console.warn(`Invalid locale requested: ${locale}`)
    notFound()
  }

  // Проверка кэша
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!
  }

  try {
    const dictionary = await dictionaries[locale]()

    // Кэшируем результат
    dictionaryCache.set(locale, dictionary)

    return dictionary
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error)

    // Fallback to default locale
    if (locale !== defaultLocale) {
      console.warn(`Falling back to default locale: ${defaultLocale}`)
      return getDictionary(defaultLocale)
    }

    throw new Error(`Failed to load default dictionary for locale: ${defaultLocale}`)
  }
}

// Очистка кэша (для тестирования или hot reload)
export function clearDictionaryCache(): void {
  dictionaryCache.clear()
}

// Предзагрузка словарей (опционально)
export async function preloadDictionaries(): Promise<void> {
  const locales: Locale[] = ['en', 'fr', 'ru']

  await Promise.allSettled(locales.map((locale) => getDictionary(locale)))
}

// Типы для безопасного доступа к ключам
export type DictionaryKey = keyof Dictionary
export type NotFoundKey = keyof Dictionary['404']
export type NavigationKey = keyof Dictionary['navigation']
export type HeroKey = keyof Dictionary['hero']
export type ServicesKey = keyof Dictionary['services']
export type FaqKey = keyof Dictionary['faq']
export type ContactKey = keyof Dictionary['contact']
export type FooterKey = keyof Dictionary['footer']
export type CommonKey = keyof Dictionary['common']
