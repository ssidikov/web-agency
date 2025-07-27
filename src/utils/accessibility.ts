

// Утилиты для улучшения доступности (a11y)

export interface A11yConfig {
  enableFocusOutlines?: boolean
  enableHighContrast?: boolean
  enableReducedMotion?: boolean
  enableKeyboardNavigation?: boolean
}

// Утилиты для управления фокусом
export const focusUtils = {
  // Установка фокуса на элемент с задержкой
  setFocusWithDelay: (element: HTMLElement | null, delay: number = 100) => {
    if (!element) return
    setTimeout(() => {
      element.focus()
    }, delay)
  },

  // Фокус на первом интерактивном элементе в контейнере
  focusFirstInteractive: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }
  },

  // Фокус на последнем интерактивном элементе в контейнере
  focusLastInteractive: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus()
    }
  },

  // Trap focus within a container (useful for modals)
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)
    
    // Return cleanup function
    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }
}

// Утилиты для работы с prefers-reduced-motion
export const motionUtils = {
  // Проверка предпочтения пользователя к уменьшенной анимации
  prefersReducedMotion: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  },

  // Условная анимация с учетом предпочтений пользователя
  conditionalAnimation: <T>(
    normalAnimation: T,
    reducedAnimation: T
  ): T => {
    return motionUtils.prefersReducedMotion() ? reducedAnimation : normalAnimation
  },

  // Создание media query listener для prefers-reduced-motion
  createMotionListener: (callback: (prefersReduced: boolean) => void) => {
    if (typeof window === 'undefined') return () => {}

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => callback(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    
    // Call immediately with current value
    callback(mediaQuery.matches)
    
    // Return cleanup function
    return () => mediaQuery.removeEventListener('change', handleChange)
  }
}

// Утилиты для ARIA
export const ariaUtils = {
  // Генерация уникального ID для aria-labelledby
  generateId: (prefix: string = 'element'): string => {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  },

  // Управление aria-expanded
  toggleAriaExpanded: (element: HTMLElement) => {
    const isExpanded = element.getAttribute('aria-expanded') === 'true'
    element.setAttribute('aria-expanded', (!isExpanded).toString())
  },

  // Установка aria-describedby
  setDescribedBy: (element: HTMLElement, descriptionId: string) => {
    element.setAttribute('aria-describedby', descriptionId)
  },

  // Объявление live region для screen readers
  announceToScreenReader: (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message
    
    document.body.appendChild(announcement)
    
    // Удаляем элемент через короткое время
    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }
}

// Утилиты для контрастности
export const contrastUtils = {
  // Проверка предпочтения высокой контрастности
  prefersHighContrast: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-contrast: high)').matches
  },

  // Создание listener для prefers-contrast
  createContrastListener: (callback: (prefersHigh: boolean) => void) => {
    if (typeof window === 'undefined') return () => {}

    const mediaQuery = window.matchMedia('(prefers-contrast: high)')
    const handleChange = (e: MediaQueryListEvent) => callback(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    callback(mediaQuery.matches)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }
}

// Keyboard navigation utilities
export const keyboardUtils = {
  // Обработка Escape для закрытия модалов/меню
  handleEscape: (callback: () => void) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    
    return () => document.removeEventListener('keydown', handleKeyDown)
  },

  // Обработка стрелок для навигации
  handleArrowKeys: (
    container: HTMLElement,
    direction: 'horizontal' | 'vertical' | 'both' = 'both'
  ) => {
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = Array.from(focusableElements).indexOf(
        document.activeElement as HTMLElement
      )
      
      if (currentIndex === -1) return
      
      let nextIndex = currentIndex
      
      switch (e.key) {
        case 'ArrowLeft':
          if (direction === 'horizontal' || direction === 'both') {
            e.preventDefault()
            nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1
          }
          break
        case 'ArrowRight':
          if (direction === 'horizontal' || direction === 'both') {
            e.preventDefault()
            nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0
          }
          break
        case 'ArrowUp':
          if (direction === 'vertical' || direction === 'both') {
            e.preventDefault()
            nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1
          }
          break
        case 'ArrowDown':
          if (direction === 'vertical' || direction === 'both') {
            e.preventDefault()
            nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0
          }
          break
        case 'Home':
          e.preventDefault()
          nextIndex = 0
          break
        case 'End':
          e.preventDefault()
          nextIndex = focusableElements.length - 1
          break
      }
      
      if (nextIndex !== currentIndex) {
        focusableElements[nextIndex].focus()
      }
    }
    
    container.addEventListener('keydown', handleKeyDown)
    
    return () => container.removeEventListener('keydown', handleKeyDown)
  }
}

// Screen reader utilities
export const screenReaderUtils = {
  // Скрытие элемента только от screen readers
  hideFromScreenReaders: (element: HTMLElement) => {
    element.setAttribute('aria-hidden', 'true')
  },

  // Показ элемента для screen readers
  showToScreenReaders: (element: HTMLElement) => {
    element.removeAttribute('aria-hidden')
  },

  // Создание только для screen readers текста
  createScreenReaderOnlyText: (text: string): HTMLElement => {
    const span = document.createElement('span')
    span.className = 'sr-only'
    span.textContent = text
    return span
  }
}

// Skip links utility
export const skipLinksUtils = {
  // Создание skip link
  createSkipLink: (targetId: string, text: string): HTMLElement => {
    const skipLink = document.createElement('a')
    skipLink.href = `#${targetId}`
    skipLink.textContent = text
    skipLink.className = 'skip-link'
    
    // Styles for skip link (should be added to global CSS)
    skipLink.style.position = 'absolute'
    skipLink.style.top = '-40px'
    skipLink.style.left = '6px'
    skipLink.style.background = '#000'
    skipLink.style.color = '#fff'
    skipLink.style.padding = '8px'
    skipLink.style.zIndex = '100'
    skipLink.style.textDecoration = 'none'
    skipLink.style.transition = 'top 0.3s'
    
    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px'
    })
    
    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px'
    })
    
    return skipLink
  }
}

// Color scheme utilities
export const colorSchemeUtils = {
  // Проверка предпочтения темной темы
  prefersDarkMode: (): boolean => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  },

  // Создание listener для prefers-color-scheme
  createColorSchemeListener: (callback: (isDark: boolean) => void) => {
    if (typeof window === 'undefined') return () => {}

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => callback(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    callback(mediaQuery.matches)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }
}
