export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/cms-admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.madnydigitalservices.com/sitemap.xml',
  };
}
