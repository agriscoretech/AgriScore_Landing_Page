import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://myagriscore.com'
  
  const routes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/blog',
    '/case-studies',
    '/innovation',
    '/partnership',
    '/research-labs',
    '/yield-engineering',
    '/media-room',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
