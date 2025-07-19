'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVitals, preloadCriticalResources, lazyLoadImages } from '@/lib/performance'
import { createSkipLink, enhanceFocusManagement, validateHeadingHierarchy, checkAccessibility, setupKeyboardNavigation } from '@/lib/accessibility'
import { validateMetaTags, checkDuplicateContent, analyzeInternalLinks } from '@/lib/seo'

export function PerformanceMonitor() {
  // Report web vitals to analytics
  useReportWebVitals((metric) => {
    reportWebVitals(metric)
  })

  useEffect(() => {
    // Performance optimizations
    preloadCriticalResources()
    lazyLoadImages()
    
    // Accessibility enhancements
    createSkipLink()
    enhanceFocusManagement()
    setupKeyboardNavigation()
    
    // Development checks
    if (process.env.NODE_ENV === 'development') {
      validateHeadingHierarchy()
      checkAccessibility()
      validateMetaTags()
      checkDuplicateContent()
      analyzeInternalLinks()
    }
    
    // Cleanup
    return () => {
      // Clean up event listeners if needed
    }
  }, [])

  return null
}

// Google Analytics component
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    // Load Google Analytics after user interaction for better performance
    const loadGA = () => {
      const script1 = document.createElement('script')
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      script1.async = true
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true
        });
      `
      document.head.appendChild(script2)
      
      // Remove event listeners after loading
      document.removeEventListener('scroll', loadGA)
      document.removeEventListener('click', loadGA)
      document.removeEventListener('touchstart', loadGA)
    }

    // Load on user interaction
    document.addEventListener('scroll', loadGA, { once: true })
    document.addEventListener('click', loadGA, { once: true })
    document.addEventListener('touchstart', loadGA, { once: true })
    
    // Fallback: load after 5 seconds if no interaction
    const fallbackTimer = setTimeout(loadGA, 5000)
    
    return () => {
      clearTimeout(fallbackTimer)
      document.removeEventListener('scroll', loadGA)
      document.removeEventListener('click', loadGA)
      document.removeEventListener('touchstart', loadGA)
    }
  }, [measurementId])

  return null
}

// Cookie consent component for GDPR compliance
export function CookieConsent() {
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show cookie consent banner
      const banner = document.createElement('div')
      banner.className = 'fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50'
      banner.innerHTML = `
        <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-sm">
            We use cookies to enhance your experience and analyze site usage. 
            <a href="/privacy" class="underline hover:no-underline">Learn more</a>
          </p>
          <div class="flex gap-2">
            <button id="accept-cookies" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
              Accept
            </button>
            <button id="decline-cookies" class="border border-gray-300 hover:bg-gray-100 hover:text-gray-900 px-4 py-2 rounded text-sm">
              Decline
            </button>
          </div>
        </div>
      `
      document.body.appendChild(banner)

      // Handle consent buttons
      document.getElementById('accept-cookies')?.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted')
        document.body.removeChild(banner)
      })

      document.getElementById('decline-cookies')?.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'declined')
        document.body.removeChild(banner)
      })
    }
  }, [])

  return null
}
