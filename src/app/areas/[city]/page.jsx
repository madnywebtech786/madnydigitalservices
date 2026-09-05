import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AreaDetailClient from '@/components/sections/areas/AreaDetailClient';
import { surroundingAreas } from '@/data/workingAreas';
import { slugifyAreaName } from '@/lib/areas';
import { getGlobalContent } from '@/lib/content';

const BASE_URL = 'https://www.madnydigitalservices.com';

function getAreaBySlug(slug) {
  return surroundingAreas.find((area) => slugifyAreaName(area.name) === slug) || null;
}

export async function generateStaticParams() {
  return surroundingAreas.map((area) => ({ city: slugifyAreaName(area.name) }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) return { title: 'Area Not Found' };

  const title = `Computer & Cellphone Repair in ${area.name}, AB | Madny Digital Services`;
  const description = `Madny Digital Services serves ${area.name}, Alberta with computer repair, cellphone repair, custom software development, and web development. Calgary-based, call today.`;
  const url = `${BASE_URL}/areas/${slugifyAreaName(area.name)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: ['/og-image.png'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  };
}

export default async function AreaPage({ params }) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) notFound();

  const global = await getGlobalContent();
  const pageUrl = `${BASE_URL}/areas/${slugifyAreaName(area.name)}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: area.name, item: pageUrl },
    ],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Madny Digital Services',
    legalName: 'Madny Digital Services Group Ltd.',
    url: pageUrl,
    telephone: '+1-403-708-8214',
    email: 'madny786@hotmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '#216, 55 Westwinds Cres NE',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T3J 5H2',
      addressCountry: 'CA',
    },
    areaServed: { '@type': 'City', name: area.name },
    priceRange: '$$',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <Header data={global?.header} />
      <AreaDetailClient cityName={area.name} />
      <Footer data={global?.footer} />
    </>
  );
}
