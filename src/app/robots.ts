import type { MetadataRoute } from 'next'

import { siteConfig } from './site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search & retrieval: allow
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // User-triggered: allow
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      // Training: block
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent',
        disallow: '/',
      },
      // Undeclared: block
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  }
}
