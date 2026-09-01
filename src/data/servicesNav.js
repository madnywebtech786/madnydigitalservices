// Navigation tree for the 3-level services hierarchy (category > subcategory > item).
// Independent from src/data/services.js — that file still powers the 5 original
// /services/[slug] pricing/FAQ pages via ServiceClient.jsx, unchanged by this tree.
// This tree has NO pricing/FAQ/long-form content yet (out of scope for this pass);
// every node here renders through the shared ServiceStubClient placeholder template
// until real content is written.

export const servicesNav = [
  {
    id: 'computer',
    name: 'Computer',
    accent: 'primary',
    children: [
      {
        id: 'repair',
        name: 'Repair',
        children: [
          { id: 'replace-laptop-screens', name: 'Replace Laptop Screens' },
          { id: 'replace-charging-ports', name: 'Replace Charging Ports' },
          { id: 'replace-keyboard', name: 'Replace Keyboard' },
          { id: 'replace-battery', name: 'Replace Battery' },
          { id: 'liquid-damage', name: 'Liquid Damage' },
          { id: 'motherboard-repair', name: 'Motherboard Repair' },
          { id: 'replace-ram-hdd-ssd', name: 'Replace RAM, HDD, SSD' },
          { id: 'upgrade-your-computer', name: 'Upgrade Your Computer' },
        ],
      },
      { id: 'computer-system-design', name: 'Computer System Design' },
      { id: 'hardware-software', name: 'Hardware & Software' },
      { id: 'data-backup-recovery', name: 'Data Backup & Recovery' },
      { id: 'sales-and-service', name: 'Sales and Service' },
    ],
  },
  {
    id: 'software-development',
    name: 'Software Development',
    accent: 'ink',
    children: [
      { id: 'custom-software-development', name: 'Custom Software Development' },
      { id: 'web-application-development', name: 'Web Application Development' },
      { id: 'software-testing-maintenance', name: 'Software Testing & Maintenance' },
      { id: 'database-development', name: 'Database Development' },
    ],
  },
  {
    id: 'web-development',
    name: 'Web Development',
    accent: 'tertiary',
    children: [
      { id: 'website-design-development', name: 'Website Design & Development' },
      { id: 'ecommerce-development', name: 'ECommerce Development' },
      { id: 'custom-web-portals', name: 'Custom Web Portals' },
      { id: 'website-maintenance', name: 'Website Maintenance' },
      { id: 'digital-marketing', name: 'Digital Marketing' },
      { id: 'seo', name: 'SEO' },
      { id: 'ppc-google-ads', name: 'PPC/Google Ads' },
    ],
  },
  {
    id: 'cellphone',
    name: 'Cellphone',
    accent: 'secondary',
    children: [
      { id: 'sales-and-service', name: 'Sales and Service' },
      {
        id: 'repair',
        name: 'Repair',
        children: [
          { id: 'replace-broken-screen', name: 'Replace Broken Screen' },
          { id: 'fix-camera', name: 'Fix Camera' },
          { id: 'replace-microphone-speaker', name: 'Replace Microphone/Speaker' },
          { id: 'repair-replace-charging-port', name: 'Repair/Replace Charging Port' },
          { id: 'replace-battery', name: 'Replace Battery' },
          { id: 'replace-backglass', name: 'Replace Backglass' },
          { id: 'liquid-damage', name: 'Liquid Damage' },
          { id: 'cleaning-testing', name: 'Cleaning & Testing' },
          { id: 'unlocking', name: 'Unlocking' },
        ],
      },
    ],
  },
];

export function getCategory(categoryId) {
  return servicesNav.find((c) => c.id === categoryId) || null;
}

// Returns the child of `category` matching `nodeId` — this child is either a
// subcategory (has its own `children`) or a direct leaf (no `children`).
export function getCategoryChild(categoryId, nodeId) {
  const category = getCategory(categoryId);
  if (!category) return null;
  return category.children.find((child) => child.id === nodeId) || null;
}

// Returns the leaf item nested under category > subcategory.
export function getSubcategoryItem(categoryId, subcategoryId, itemId) {
  const subcategory = getCategoryChild(categoryId, subcategoryId);
  if (!subcategory || !subcategory.children) return null;
  return subcategory.children.find((item) => item.id === itemId) || null;
}

// Flattens the tree into every routable path, used by generateStaticParams
// across the 3 new route files.
export function getAllServiceNavPaths() {
  const paths = [];
  for (const category of servicesNav) {
    paths.push({ segments: [category.id], node: category });
    for (const child of category.children) {
      paths.push({ segments: [category.id, child.id], node: child });
      if (child.children) {
        for (const item of child.children) {
          paths.push({ segments: [category.id, child.id, item.id], node: item });
        }
      }
    }
  }
  return paths;
}

// Top-level category options for the shared contact-form <Select> ("Which
// service are you interested in?"), used identically by both the homepage
// and /contact page forms — derived from servicesNav so the labels can
// never drift out of sync with the real category names.
export const serviceSelectOptions = [
  ...servicesNav.map((category) => ({ value: category.id, label: category.name })),
  { value: 'other', label: 'Other / Not Sure' },
];
