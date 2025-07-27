
import { NextRequest, NextResponse } from 'next/server'

import { locales, defaultLocale } from './lib/i18n'



export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap')
  ) {
    return enhanceResponse(NextResponse.next())
  }
  
  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // If pathname already has a locale, continue
  if (pathnameHasLocale) {
    return enhanceResponse(NextResponse.next())
  }

  // For App Router with French as default:
  // Root path "/" should be handled by root page.tsx (French content)
  // Other paths without locale should be rewritten to French locale internally
  if (pathname !== '/' && !pathnameHasLocale) {
    // Rewrite to French locale path internally (no redirect)
    const rewriteUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
    return enhanceResponse(NextResponse.rewrite(rewriteUrl))
  }
  
  // For root path, let it go to page.tsx (French content)
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
    // Skip all internal paths (_next, api, etc) and static files
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|manifest.json|.*\\..*).*)',
  ],
}
