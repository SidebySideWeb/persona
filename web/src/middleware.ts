import {defineMiddleware} from 'astro:middleware'
import {buildSecurityHeaders} from './lib/security-headers'

const securityHeaders = buildSecurityHeaders()

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next()

  // Skip strict CSP on localhost so Google Fonts / Material Icons always load during design review.
  const host = context.url.hostname
  const isLocal = host === 'localhost' || host === '127.0.0.1'

  for (const [name, value] of Object.entries(securityHeaders)) {
    if (isLocal && name === 'Content-Security-Policy') continue
    response.headers.set(name, value)
  }
  return response
})
