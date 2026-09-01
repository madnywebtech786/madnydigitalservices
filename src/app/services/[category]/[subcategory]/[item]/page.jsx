import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceStubClient from '@/components/sections/services/ServiceStubClient';
import ServiceDetailClient from '@/components/sections/services/ServiceDetailClient';
import { servicesNav, getCategory, getCategoryChild, getSubcategoryItem } from '@/data/servicesNav';
import { getServiceContent, describeServiceNode } from '@/data/serviceContent';

const BASE_URL = 'https://www.madnydigitalservices.com';

export async function generateStaticParams() {
  const params = [];
  for (const category of servicesNav) {
    for (const child of category.children) {
      if (!child.children) continue;
      for (const item of child.children) {
        params.push({ category: category.id, subcategory: child.id, item: item.id });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { category: categoryId, subcategory: subcategoryId, item: itemId } = await params;
  const category = getCategory(categoryId);
  const subcategory = category && getCategoryChild(categoryId, subcategoryId);
  const item = subcategory && getSubcategoryItem(categoryId, subcategoryId, itemId);
  if (!category || !subcategory || !item) return { title: 'Service Not Found' };

  const content = getServiceContent(categoryId, itemId);
  const url = `${BASE_URL}/services/${categoryId}/${subcategoryId}/${itemId}`;
  const title = content?.metaTitle || `${item.name} | ${subcategory.name} | Madny Digital Services`;
  const description = content?.metaDescription || `${item.name}, part of our ${subcategory.name} services in Calgary.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function ServiceItemPage({ params }) {
  const { category: categoryId, subcategory: subcategoryId, item: itemId } = await params;
  const category = getCategory(categoryId);
  const subcategory = category && getCategoryChild(categoryId, subcategoryId);
  const item = subcategory && getSubcategoryItem(categoryId, subcategoryId, itemId);
  if (!category || !subcategory || !item) notFound();

  const content = getServiceContent(categoryId, itemId);
  const pageUrl = `${BASE_URL}/services/${categoryId}/${subcategoryId}/${itemId}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: category.name, item: `${BASE_URL}/services/${categoryId}` },
      { '@type': 'ListItem', position: 4, name: subcategory.name, item: `${BASE_URL}/services/${categoryId}/${subcategoryId}` },
      { '@type': 'ListItem', position: 5, name: item.name, item: pageUrl },
    ],
  };

  const serviceJsonLd = content
    ? {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: content.h1 || item.name,
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
      const relatedItem = getSubcategoryItem(categoryId, subcategoryId, relatedId);
      if (relatedItem) {
        return {
          name: relatedItem.name,
          href: `/services/${categoryId}/${subcategoryId}/${relatedId}`,
          description: describeServiceNode(categoryId, relatedItem),
        };
      }
      const relatedChild = getCategoryChild(categoryId, relatedId);
      if (relatedChild) {
        return {
          name: relatedChild.name,
          href: `/services/${categoryId}/${relatedId}`,
          description: describeServiceNode(categoryId, relatedChild),
        };
      }
      return null;
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
      {content ? (
        <ServiceDetailClient
          content={content}
          breadcrumb={[
            { name: 'Services', href: '/#services' },
            { name: category.name, href: `/services/${categoryId}` },
            { name: subcategory.name, href: `/services/${categoryId}/${subcategoryId}` },
            { name: item.name },
          ]}
          accent={category.accent}
          parent={{ name: subcategory.name, href: `/services/${categoryId}/${subcategoryId}` }}
          relatedLinks={relatedLinks}
        />
      ) : (
        <ServiceStubClient
          breadcrumb={[
            { name: 'Services', href: '/#services' },
            { name: category.name, href: `/services/${categoryId}` },
            { name: subcategory.name, href: `/services/${categoryId}/${subcategoryId}` },
            { name: item.name },
          ]}
          title={item.name}
          accent={category.accent}
          parent={{ name: subcategory.name, href: `/services/${categoryId}/${subcategoryId}` }}
        />
      )}
      <Footer />
    </>
  );
}
