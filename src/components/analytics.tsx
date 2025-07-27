'use client'

import { useEffect } from 'react'
import { useReportWebVitals } from 'next/web-vitals'

import { createSkipLink, enhanceFocusManagement, validateHeadingHierarchy, checkAccessibility, setupKeyboardNavigation } from '@/lib/accessibility'
import { reportWebVitals, preloadCriticalResources, lazyLoadImages } from '@/lib/performance'

