// Real service-area list (client-provided, matches the same cities already
// used across seed.js hero copy and service-area SEO content). Calgary is
// the hub; the rest are the nearby areas served alongside it. Descriptions
// are deliberately generic ("computer & device repair", etc.) rather than
// fabricated per-city stats — this is a tech repair/software/web company,
// not the home-renovation business the original placeholder copy implied.
export const centerArea = {
  name: 'Calgary',
  img: '/images/cities/Calgary.webp',
  description: 'Our home base, full-service technology support',
};

export const surroundingAreas = [
  { name: 'Airdrie', img: '/images/cities/Airdrie.webp', description: 'Computer & device repair' },
  { name: 'Cochrane', img: '/images/cities/Cochrane.webp', description: 'Computer & device repair' },
  { name: 'Chestermere', img: '/images/cities/Chesteremere.webp', description: 'Computer & device repair' },
  { name: 'Strathmore', img: '/images/cities/Strathmore.webp', description: 'Computer & device repair' },
  { name: 'Okotoks', img: '/images/cities/okotoks.webp', description: 'Computer & device repair' },
  { name: 'High River', img: '/images/cities/highriver.webp', description: 'Computer & device repair' },
];
