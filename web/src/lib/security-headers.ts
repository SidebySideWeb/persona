/**
 * Security headers for Persona Spritzeria.
 * CSP allows Google Fonts, Material Symbols, Sanity CDN, Stitch/AIDA images, GTM, reCAPTCHA.
 */
function buildContentSecurityPolicy(): string {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    [
      'script-src',
      "'self'",
      "'unsafe-inline'",
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://www.google.com',
      'https://www.gstatic.com',
    ].join(' '),
    [
      'style-src',
      "'self'",
      "'unsafe-inline'",
      'https://www.gstatic.com',
      'https://fonts.googleapis.com',
    ].join(' '),
    [
      'font-src',
      "'self'",
      'data:',
      'https://fonts.gstatic.com',
    ].join(' '),
    [
      'img-src',
      "'self'",
      'data:',
      'blob:',
      'https://cdn.sanity.io',
      'https://lh3.googleusercontent.com',
      'https://*.googleusercontent.com',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://region1.google-analytics.com',
      'https://www.google.com',
      'https://www.gstatic.com',
      'https://maps.google.com',
      'https://*.googleapis.com',
    ].join(' '),
    [
      'connect-src',
      "'self'",
      'https://*.sanity.io',
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://region1.google-analytics.com',
      'https://analytics.google.com',
      'https://stats.g.doubleclick.net',
      'https://www.google.com',
      'https://www.gstatic.com',
    ].join(' '),
    [
      'frame-src',
      "'self'",
      'https://www.googletagmanager.com',
      'https://www.google.com',
      'https://recaptcha.google.com',
      'https://www.google.com/maps',
    ].join(' '),
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "require-trusted-types-for 'script'",
    "trusted-types default goog#html goog#script goog#html-renderer 'allow-duplicates'",
    'upgrade-insecure-requests',
  ]

  return directives.join('; ')
}

export function buildSecurityHeaders(): Record<string, string> {
  return {
    'Content-Security-Policy': buildContentSecurityPolicy(),
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Resource-Policy': 'cross-origin',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  }
}

const ONE_YEAR_IMMUTABLE = 'public, max-age=31536000, immutable'

function toHeaderEntries(headers: Record<string, string>) {
  return Object.entries(headers).map(([key, value]) => ({key, value}))
}

export function buildStaticAssetCacheHeaders(): Record<string, string> {
  return {
    'Cache-Control': ONE_YEAR_IMMUTABLE,
  }
}

export function buildVercelHeadersConfig() {
  const cacheHeaders = toHeaderEntries(buildStaticAssetCacheHeaders())
  const securityHeaders = toHeaderEntries(buildSecurityHeaders())

  return {
    regions: ['fra1'],
    redirects: [
      {
        source: '/:path*',
        has: [{type: 'host', value: 'personaspritzeria.gr'}],
        destination: 'https://www.personaspritzeria.gr/:path*',
        permanent: true,
      },
    ],
    headers: [
      {source: '/_astro/(.*)', headers: cacheHeaders},
      {source: '/images/(.*)', headers: cacheHeaders},
      {source: '/fonts/(.*)', headers: cacheHeaders},
      {source: '/(.*)', headers: securityHeaders},
    ],
  }
}
