// Утилиты для оптимизации производительности сайта для SEO

export interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
  firstInputDelay: number
}

// Конфигурация изображений для лучшего SEO
export const imageOptimization = {
  // Форматы изображений по приоритету
  formats: ['avif', 'webp', 'jpg', 'png'] as const,

  // Размеры для адаптивности
  breakpoints: {
    mobile: 375,
    tablet: 768,
    desktop: 1200,
    large: 1920,
  },

  // Качество сжатия
  quality: {
    hero: 85,
    content: 80,
    thumbnail: 75,
    background: 70,
  },

  // Приоритет загрузки
  priority: {
    hero: 'high',
    aboveFold: 'high',
    content: 'low',
    background: 'low',
  } as const,
}

// Генерация srcSet для адаптивных изображений
export function generateSrcSet(
  imagePath: string,
  type: 'hero' | 'content' | 'thumbnail' = 'content'
): string {
  const { breakpoints } = imageOptimization
  const quality = imageOptimization.quality[type]

  const sizes = Object.values(breakpoints)

  return sizes.map((width) => `${imagePath}?w=${width}&q=${quality} ${width}w`).join(', ')
}

// Calcul des Core Web Vitals pour SEO
export function trackCoreWebVitals() {
  if (typeof window === 'undefined') return

  // Largest Contentful Paint (LCP)
  const observer = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    const lastEntry = entries[entries.length - 1]

    // Envoyer métriques pour analyse SEO
    console.log('LCP:', lastEntry.startTime)
  })

  observer.observe({ entryTypes: ['largest-contentful-paint'] })

  // First Input Delay (FID)
  const fidObserver = new PerformanceObserver((entryList) => {
    const firstInput = entryList.getEntries()[0] as PerformanceEventTiming
    console.log('FID:', firstInput.processingStart - firstInput.startTime)
  })

  fidObserver.observe({ entryTypes: ['first-input'] })

  // Cumulative Layout Shift (CLS)
  let clsValue = 0
  const clsObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      const layoutShift = entry as PerformanceEntry & { hadRecentInput: boolean; value: number }
      if (!layoutShift.hadRecentInput) {
        clsValue += layoutShift.value
      }
    }
    console.log('CLS:', clsValue)
  })

  clsObserver.observe({ entryTypes: ['layout-shift'] })
}

// Préchargement des ressources critiques
export function preloadCriticalResources() {
  if (typeof document === 'undefined') return

  // Précharger les polices
  const fontPreloads = ['/fonts/inter-var.woff2', '/fonts/inter-var-latin.woff2']

  fontPreloads.forEach((font) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'font'
    link.type = 'font/woff2'
    link.href = font
    link.crossOrigin = 'anonymous'
    document.head.appendChild(link)
  })

  // Précharger les images hero
  const heroImages = ['/images/hero/hero-bg1.webp', '/images/hero/hero-bg2.png']

  heroImages.forEach((image) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = image
    document.head.appendChild(link)
  })
}

// Lazy loading optimisé pour SEO
export function setupSEOLazyLoading() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement

          // Charger l'image haute qualité
          if (img.dataset.src) {
            img.src = img.dataset.src
          }

          // Ajouter srcset si disponible
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset
          }

          // Supprimer l'observer
          observer.unobserve(img)

          // Ajouter classe pour animation
          img.classList.add('loaded')
        }
      })
    },
    {
      // Charger 50px avant que l'image soit visible
      rootMargin: '50px 0px',
      threshold: 0.01,
    }
  )

  // Observer toutes les images lazy
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img)
  })
}

// Configuration des headers de performance
export const performanceHeaders = {
  // Cache control pour différents types de ressources
  cacheControl: {
    static: 'public, max-age=31536000, immutable', // 1 an
    images: 'public, max-age=86400, stale-while-revalidate=3600', // 1 jour
    pages: 'public, max-age=3600, stale-while-revalidate=60', // 1 heure
    api: 'public, max-age=300, stale-while-revalidate=30', // 5 minutes
  },

  // Security headers pour SEO
  security: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), location=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy':
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
  },
}

// Optimisation des polices pour performance SEO
export const fontOptimization = {
  // Stratégie de chargement des polices
  display: 'swap' as const, // font-display: swap

  // Précharger les polices critiques
  preload: [
    {
      href: '/fonts/inter-var.woff2',
      type: 'font/woff2',
      crossorigin: 'anonymous',
    },
  ],

  // Fallback fonts
  fallbacks: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
}

// Métriques SEO pour surveillance
export interface SEOMetrics {
  loadTime: number
  ttfb: number // Time to First Byte
  fcp: number // First Contentful Paint
  lcp: number // Largest Contentful Paint
  cls: number // Cumulative Layout Shift
  fid: number // First Input Delay
  crawlability: boolean
  mobileUsability: boolean
  coreWebVitalsScore: number
}

// Génération de rapport de performance SEO
export function generateSEOPerformanceReport(): Promise<Partial<SEOMetrics>> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve({})
      return
    }

    const metrics: Partial<SEOMetrics> = {}

    // Navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

    if (navigation) {
      metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart
      metrics.ttfb = navigation.responseStart - navigation.requestStart
    }

    // Web Vitals avec observer
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime
            }
            break
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime
            break
          case 'layout-shift':
            const layoutShift = entry as PerformanceEntry & {
              hadRecentInput: boolean
              value: number
            }
            if (!layoutShift.hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + layoutShift.value
            }
            break
        }
      }
    })

    observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] })

    // Calculer score général après 3 secondes
    setTimeout(() => {
      // Score basé sur Core Web Vitals
      const lcpScore = (metrics.lcp || 0) <= 2500 ? 100 : (metrics.lcp || 0) <= 4000 ? 50 : 0
      const clsScore = (metrics.cls || 0) <= 0.1 ? 100 : (metrics.cls || 0) <= 0.25 ? 50 : 0
      const fcpScore = (metrics.fcp || 0) <= 1800 ? 100 : (metrics.fcp || 0) <= 3000 ? 50 : 0

      metrics.coreWebVitalsScore = Math.round((lcpScore + clsScore + fcpScore) / 3)

      observer.disconnect()
      resolve(metrics)
    }, 3000)
  })
}
