

// Accessibility utilities for better Lighthouse scores

// Skip link component for keyboard navigation
export function createSkipLink() {
  const skipLink = document.createElement('a')
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50'
  skipLink.addEventListener('click', (e) => {
    e.preventDefault()
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
  })
  
  document.body.insertBefore(skipLink, document.body.firstChild)
}

// Enhanced focus management
export function enhanceFocusManagement() {
  // Add focus-visible polyfill behavior
  let hadKeyboardEvent = true
  
  function onPointerDown() {
    hadKeyboardEvent = false
  }
  
  function onKeyDown(e: KeyboardEvent) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return
    }
    hadKeyboardEvent = true
  }
  
  function onFocus(e: FocusEvent) {
    if (hadKeyboardEvent && e.target) {
      (e.target as HTMLElement).classList.add('focus-visible')
    }
  }
  
  function onBlur(e: FocusEvent) {
    if (e.target) {
      (e.target as HTMLElement).classList.remove('focus-visible')
    }
  }
  
  document.addEventListener('keydown', onKeyDown, true)
  document.addEventListener('mousedown', onPointerDown, true)
  document.addEventListener('pointerdown', onPointerDown, true)
  document.addEventListener('touchstart', onPointerDown, true)
  document.addEventListener('focus', onFocus, true)
  document.addEventListener('blur', onBlur, true)
}

// Announce dynamic content changes to screen readers
export function announceToScreenReader(message: string) {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', 'polite')
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Ensure proper heading hierarchy
export function validateHeadingHierarchy() {
  if (process.env.NODE_ENV === 'development') {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let previousLevel = 0
    
    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1))
      
      if (index === 0 && currentLevel !== 1) {
        console.warn('First heading should be h1, found:', heading.tagName)
      }
      
      if (currentLevel > previousLevel + 1) {
        console.warn('Heading level jumps detected. Previous:', previousLevel, 'Current:', currentLevel, 'Element:', heading)
      }
      
      previousLevel = currentLevel
    })
  }
}

// Check for accessibility issues
export function checkAccessibility() {
  if (process.env.NODE_ENV === 'development') {
    // Check for images without alt text
    const images = document.querySelectorAll('img:not([alt])')
    if (images.length > 0) {
      console.warn('Images without alt text found:', images)
    }
    
    // Check for buttons without accessible names
    const buttons = document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        console.warn('Button without accessible name found:', button)
      }
    })
    
    // Check for form inputs without labels
    const inputs = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])')
    inputs.forEach(input => {
      const id = input.getAttribute('id')
      if (id) {
        const label = document.querySelector(`label[for="${id}"]`)
        if (!label) {
          console.warn('Input without associated label found:', input)
        }
      } else {
        console.warn('Input without label or aria-label found:', input)
      }
    })
  }
}

// Keyboard navigation helpers
export function setupKeyboardNavigation() {
  // Escape key to close modals/dropdowns
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openModals = document.querySelectorAll('[role="dialog"][aria-hidden="false"]')
      const openDropdowns = document.querySelectorAll('[aria-expanded="true"]')
      
      openModals.forEach(modal => {
        modal.setAttribute('aria-hidden', 'true')
        // Focus management for modals
        const trigger = document.querySelector(`[aria-controls="${modal.id}"]`)
        if (trigger instanceof HTMLElement) {
          trigger.focus()
        }
      })
      
      openDropdowns.forEach(dropdown => {
        dropdown.setAttribute('aria-expanded', 'false')
        if (dropdown instanceof HTMLElement) {
          dropdown.focus()
        }
      })
    }
  })
}

// Color contrast checker (development only)
export function checkColorContrast() {
  if (process.env.NODE_ENV === 'development') {
    // This would require a more complex implementation
    // For now, just log a reminder to check contrast
    console.log('Remember to check color contrast ratios for WCAG compliance')
    console.log('Normal text: 4.5:1 minimum, Large text: 3:1 minimum')
  }
}
