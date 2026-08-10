import { services } from '@/data/services';
import { getPageContent } from '@/lib/content';

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

  const staticRoutes = [
    { url: BASE_URL,                  lastModified: lastModOf(homeContent),     changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about`,       lastModified: lastModOf(aboutContent),    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`,    lastModified: lastModOf(servicesContent), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/projects`,    lastModified: lastModOf(projectsContent), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/faqs`,        lastModified: FALLBACK_LAST_MODIFIED,     changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,     lastModified: lastModOf(contactContent),  changeFrequency: 'yearly',  priority: 0.7 },
  ];

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.id}`,
    lastModified: lastModOf(servicesContent),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.id}`,
    lastModified: lastModOf(projectsContent),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
