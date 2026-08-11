import type { MetadataRoute } from 'next'

import { siteConfig } from './site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: 'weekly',
      priority: 1,
      images: [siteConfig.ogImage],
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.changelog}`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}${siteConfig.routes.privacy}`,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}
