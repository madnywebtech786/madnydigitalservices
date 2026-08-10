/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,

  // Legacy PHP site → Next.js redirects. Preserves search rankings and
  // backlink equity accumulated by the old madnydigitalservices.com PHP
  // site. All permanent (301) so Google transfers link equity — do not
  // change to temporary/302.
  async redirects() {
    return [
      { source: '/index.php',             destination: '/',                              permanent: true },
      { source: '/about.php',             destination: '/about',                         permanent: true },
      { source: '/contact.php',           destination: '/contact',                       permanent: true },
      { source: '/computer-repair.php',   destination: '/services/computer-repair',      permanent: true },
      { source: '/cellphone-unlock.php',  destination: '/services/cell-phone-repair',    permanent: true },
      { source: '/webdesign.php',         destination: '/services/web-development',      permanent: true },
      { source: '/webhosting.php',        destination: '/services/web-development',      permanent: true },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',            value: 'DENY' },
          { key: 'X-XSS-Protection',           value: '1; mode=block' },
          { key: 'Referrer-Policy',             value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',          value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Cache static assets aggressively — Next.js content-hashes these filenames
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Images
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;
