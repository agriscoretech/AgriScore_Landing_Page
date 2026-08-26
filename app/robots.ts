import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/signin', '/app'], // Disallow crawling of dashboard/auth pages
    },
    sitemap: 'https://myagriscore.com/sitemap.xml',
  }
}
