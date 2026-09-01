// Shared slug helper for src/data/workingAreas.js surrounding-area names —
// used by the /areas/[city] route, sitemap.js, and WorkingAreas.jsx so the
// same city can never slugify differently in two places.
export function slugifyAreaName(name) {
  return name.toLowerCase().replace(/\s+/g, '-');
}
