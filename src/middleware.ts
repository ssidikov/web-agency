import { NextRequest, NextResponse } from 'next/server'
import { 
  locales, 
  getPreferredLocale, 
  isValidLocale, 
  getLocaleFromPathname,
  addLocaleToPathname 
} from './lib/i18n'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If no locale in pathname, redirect to locale-specific URL
  if (!pathnameHasLocale) {
    // Get locale from Accept-Language header
    const acceptLanguage = request.headers.get('Accept-Language')
    const preferredLocale = getPreferredLocale(acceptLanguage || '')
    
    // Always redirect to locale-specific URL (including English)
    const localeUrl = new URL(addLocaleToPathname(pathname, preferredLocale), request.url)
    return NextResponse.redirect(localeUrl)
  }

  // Validate locale in pathname
  const locale = getLocaleFromPathname(pathname)
  if (locale && !isValidLocale(locale)) {
    // Invalid locale, redirect to default
    const cleanPath = pathname.replace(`/${locale}`, '')
    const defaultUrl = new URL(cleanPath || '/', request.url)
    return NextResponse.redirect(defaultUrl)
  }

  return enhanceResponse(NextResponse.next())
}

function enhanceResponse(response: NextResponse) {
  // Security headers for better security score
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  // CSP Header for security
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
  
  response.headers.set('Content-Security-Policy', cspHeader.replace(/\s{2,}/g, ' ').trim())
  
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml|manifest.json|browserconfig.xml).*)',
  ],
}
