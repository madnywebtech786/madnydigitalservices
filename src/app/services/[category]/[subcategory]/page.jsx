import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceStubClient from '@/components/sections/services/ServiceStubClient';
import ServiceDetailClient from '@/components/sections/services/ServiceDetailClient';
import ServiceIndexClient from '@/components/sections/services/ServiceIndexClient';
import { servicesNav, getCategory, getCategoryChild } from '@/data/servicesNav';
import { getServiceContent, describeServiceNode } from '@/data/serviceContent';

const BASE_URL = 'https://www.madnydigitalservices.com';

export async function generateStaticParams() {
  const params = [];
  for (const category of servicesNav) {
    for (const child of category.children) {
      params.push({ category: category.id, subcategory: child.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { category: categoryId, subcategory: nodeId } = await params;
  const category = getCategory(categoryId);
  const node = category && getCategoryChild(categoryId, nodeId);
  if (!category || !node) return { title: 'Service Not Found' };

  const content = !node.children?.length ? getServiceContent(categoryId, nodeId) : null;
  const url = `${BASE_URL}/services/${categoryId}/${nodeId}`;
  const title = content?.metaTitle || `${node.name} | ${category.name} | Madny Digital Services`;
  const description = content?.metaDescription || `${node.name} services from Madny Digital Services in Calgary, part of our ${category.name} services.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServiceNodePage({ params }) {
  const { category: categoryId, subcategory: nodeId } = await params;
  const category = getCategory(categoryId);
  const node = category && getCategoryChild(categoryId, nodeId);
  if (!category || !node) notFound();

  const hasChildren = Boolean(node.children?.length);
  const content = !hasChildren ? getServiceContent(categoryId, nodeId) : null;
  const pageUrl = `${BASE_URL}/services/${categoryId}/${nodeId}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `${BASE_URL}/services/${categoryId}` },
      { '@type': 'ListItem', position: 4, name: node.name, item: pageUrl },
    ],
  };

  const serviceJsonLd = content
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: content.h1 || node.name,
        description: content.metaDescription || content.intro,
        url: pageUrl,
        areaServed: { '@type': 'City', name: 'Calgary' },
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
      }
    : null;

  const faqJsonLd = content?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

  const relatedLinks = (content?.relatedServices || [])
    .map((relatedId) => {
      const relatedChild = getCategoryChild(categoryId, relatedId);
      if (!relatedChild) return null;
      return {
        name: relatedChild.name,
        href: `/services/${categoryId}/${relatedId}`,
        description: describeServiceNode(categoryId, relatedChild),
      };
    })
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />
      {hasChildren ? (
        <ServiceIndexClient
          breadcrumb={[
            { name: 'Services', href: '/#services' },
            { name: category.name, href: `/services/${categoryId}` },
            { name: node.name },
          ]}
          title={node.name}
          accent={category.accent}
          items={node.children.map((item) => ({
            name: item.name,
            href: `/services/${categoryId}/${nodeId}/${item.id}`,
            description: describeServiceNode(categoryId, item),
          }))}
        />
      ) : content ? (
        <ServiceDetailClient
          content={content}
          breadcrumb={[
            { name: 'Services', href: '/#services' },
            { name: category.name, href: `/services/${categoryId}` },
            { name: node.name },
          ]}
          accent={category.accent}
          parent={{ name: category.name, href: `/services/${categoryId}` }}
          relatedLinks={relatedLinks}
        />
      ) : (
        <ServiceStubClient
          breadcrumb={[
            { name: 'Services', href: '/#services' },
            { name: category.name, href: `/services/${categoryId}` },
            { name: node.name },
          ]}
          title={node.name}
          accent={category.accent}
          parent={{ name: category.name, href: `/services/${categoryId}` }}
        />
      )}
      <Footer />
    </>
  );
}
