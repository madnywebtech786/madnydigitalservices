import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CareersClient from '@/components/sections/careers/CareersClient';
import { getGlobalContent } from '@/lib/content';

export const revalidate = 3600;

const TITLE = 'Careers | Madny Digital Services';
const DESCRIPTION = 'Build your career in technology with Madny Digital Services. We work across computer systems, software development, web development, digital solutions, technical support, and device services in Calgary.';
const BASE_URL = 'https://www.madnydigitalservices.com';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/careers` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE_URL}/careers`,
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

export default async function CareersPage() {
  const global = await getGlobalContent();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: `${BASE_URL}/careers` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header data={global?.header} />
      <CareersClient />
      <Footer data={global?.footer} />
    </>
  );
}
