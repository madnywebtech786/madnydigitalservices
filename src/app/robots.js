export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cms-admin/', '/api/'],
      },
    ],
    sitemap: 'https://madenydigital.com/sitemap.xml',
  };
}
