// Static fallback category list — mirrors the categories seeded into the
// 'projects' PageContent document (src/scripts/seed.js). Project *items*
// themselves are no longer stored here; they're fetched from the database
// via getPageContent('projects') so the CMS/seed data is the source of truth.
export const projectCategories = [
  { id: 'all',         name: 'All Projects' },
  { id: 'business',    name: 'Business Websites' },
  { id: 'restaurant',  name: 'Restaurants & Cafés' },
  { id: 'nonprofit',   name: 'Nonprofit & NGO' },
  { id: 'healthcare',  name: 'Healthcare' },
  { id: 'automotive',  name: 'Automotive' },
  { id: 'renovation',  name: 'Renovation & Construction' },
  { id: 'logistics',   name: 'Logistics & Delivery' },
];
