import { getAllServiceNavPaths } from '@/data/servicesNav';
import { getPageContent } from '@/lib/content';
import { surroundingAreas } from '@/data/workingAreas';
import { slugifyAreaName } from '@/lib/areas';

const BASE_URL = 'https://www.madnydigitalservices.com';
// Fallback for entries without a real CMS updatedAt timestamp — the date
// this migration shipped, not "now" (avoids telling Google every URL
// changed on every single build/deploy).
const FALLBACK_LAST_MODIFIED = new Date('2026-08-10');

export default async function sitemap() {
  const [projectsContent, homeContent, aboutContent, contactContent, servicesContent] =
    await Promise.all([
      getPageContent('projects'),
      getPageContent('home'),
      getPageContent('about'),
      getPageContent('contact'),
      getPageContent('services'),
    ]);

  const projects = projectsContent?.sections?.items || [];

  const lastModOf = (content) =>
    content?.updatedAt ? new Date(content.updatedAt) : FALLBACK_LAST_MODIFIED;

  // NOTE: no bare "/services" entry — that URL has no page.jsx (would 404).
  // The real landing points are the category pages already covered below by
  // serviceNavRoutes (depth-1 segments, e.g. /services/computer).
  const staticRoutes = [
    { url: BASE_URL,                          lastModified: lastModOf(homeContent),     changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about`,               lastModified: lastModOf(aboutContent),    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/projects`,            lastModified: lastModOf(projectsContent), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/faqs`,                lastModified: FALLBACK_LAST_MODIFIED,     changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,             lastModified: lastModOf(contactContent),  changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/careers`,             lastModified: FALLBACK_LAST_MODIFIED,     changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/terms-and-conditions`,lastModified: FALLBACK_LAST_MODIFIED,     changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`,      lastModified: FALLBACK_LAST_MODIFIED,     changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`,          lastModified: FALLBACK_LAST_MODIFIED,     changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const areaRoutes = surroundingAreas.map((area) => ({
    url: `${BASE_URL}/areas/${slugifyAreaName(area.name)}`,
    lastModified: FALLBACK_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Services nav tree (category > subcategory > item) replaced the 5 flat
  // service slugs. web-development and software-development keep their old
  // slugs as category pages (no redirect, no duplicate here); computer-repair,
  // device-sales, and cell-phone-repair are gone — see next.config.mjs redirects.
  const serviceNavRoutes = getAllServiceNavPaths().map(({ segments }) => ({
    url: `${BASE_URL}/services/${segments.join('/')}`,
    lastModified: lastModOf(servicesContent),
    changeFrequency: 'monthly',
    priority: segments.length === 1 ? 0.8 : segments.length === 2 ? 0.6 : 0.5,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.id}`,
    lastModified: lastModOf(projectsContent),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceNavRoutes, ...projectRoutes, ...areaRoutes];
}
