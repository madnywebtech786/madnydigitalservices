import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceClient from '@/components/sections/services/ServiceClient';
import { services as staticServices } from '@/data/services';

// ISR: revalidate every hour so CMS updates propagate within 60 minutes
export const revalidate = 3600;

export async function generateStaticParams() {
  return staticServices.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = await getPageContent('services');
  const cmsServices = content?.sections?.items || [];
  const service =
    cmsServices.find((s) => s.id === slug) ||
    staticServices.find((s) => s.id === slug);

  if (!service) return { title: 'Service Not Found' };

  const d = content?.meta || {};
  const title = `${service.title} | Madny Digital Services`;
  const description = service.shortDesc || service.heroDescription || d.description;
  const url = `https://www.madnydigitalservices.com/services/${slug}`;

  return {
    title,
    description,
    keywords: d.keywords || 'computer repair calgary, cell phone repair, web development calgary',
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [service.image || d.ogImage || '/og-services.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const [global, content] = await Promise.all([
    getGlobalContent(),
    getPageContent('services'),
  ]);

  const cmsServices = content?.sections?.items || [];
  const service =
    cmsServices.find((s) => s.id === slug) ||
    staticServices.find((s) => s.id === slug);
  const allServices = cmsServices.length > 0 ? cmsServices : staticServices;

  // staticServices (src/data/services.js) carries live lucide-react icon
  // components on `icon`/`secondaryIcon`/`features[].icon` for server-side
  // use (e.g. metadata) — those aren't plain data and can't cross the
  // server->client boundary. ServiceClient re-derives every icon itself
  // from id/index (getIconForService/getFeatureIcon), so it never actually
  // reads these fields — safe to strip via serialize round-trip before
  // handing off to the client component. CMS-sourced services never carry
  // icons in the first place (Mongo can't store components), so this only
  // has real work to do on the static fallback path.
  const serialize = (v) => (v === undefined ? v : JSON.parse(JSON.stringify(v)));

  // Service + BreadcrumbList structured data for AEO/GEO: lets AI answer
  // engines and Google surface this service's pricing/offer directly, and
  // gives search engines explicit page hierarchy.
  const BASE_URL = 'https://www.madnydigitalservices.com';
  const serviceJsonLd = service ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDesc || service.heroDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Madny Digital Services',
      telephone: '+1-403-708-8214',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '#216, 55 Westwinds Cres NE',
        addressLocality: 'Calgary',
        addressRegion: 'AB',
        postalCode: 'T3J 5H2',
        addressCountry: 'CA',
      },
    },
    areaServed: { '@type': 'City', name: 'Calgary' },
    url: `${BASE_URL}/services/${slug}`,
    ...(service.pricing?.length > 0 && {
      offers: service.pricing.map((p) => ({
        '@type': 'Offer',
        name: p.service,
        price: p.price?.replace(/[^0-9.]/g, '') || undefined,
        priceCurrency: 'CAD',
      })),
    }),
  } : null;

  const breadcrumbJsonLd = service ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${BASE_URL}/services/${slug}` },
    ],
  } : null;

  return (
    <>
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      <Header data={global?.header} />
      <ServiceClient service={serialize(service)} allServices={serialize(allServices)} />
      <Footer data={global?.footer} />
    </>
  );
}
