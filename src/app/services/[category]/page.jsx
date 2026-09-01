import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceIndexClient from '@/components/sections/services/ServiceIndexClient';
import { servicesNav, getCategory } from '@/data/servicesNav';
import { describeServiceNode } from '@/data/serviceContent';

const BASE_URL = 'https://www.madnydigitalservices.com';

export async function generateStaticParams() {
  return servicesNav.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) return { title: 'Service Not Found' };

  const title = `${category.name} Services | Madny Digital Services`;
  const description = `Explore ${category.name} services from Madny Digital Services in Calgary.`;
  const url = `${BASE_URL}/services/${category.id}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServiceCategoryPage({ params }) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) notFound();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `${BASE_URL}/services/${category.id}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <ServiceIndexClient
        breadcrumb={[{ name: 'Services', href: '/#services' }, { name: category.name }]}
        title={category.name}
        accent={category.accent}
        items={category.children.map((child) => ({
          name: child.name,
          href: `/services/${category.id}/${child.id}`,
          description: describeServiceNode(category.id, child),
        }))}
      />
      <Footer />
    </>
  );
}
