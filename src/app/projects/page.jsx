import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';

export const revalidate = 3600;
import Footer from '@/components/layout/Footer';
import ProjectsClient from '@/components/sections/projects/ProjectsClient';

export async function generateMetadata() {
  const content = await getPageContent('projects');
  const d = content?.meta || {};
  return {
    title: d.title || 'Our Projects | Madny Digital Services',
    description: d.description || 'Discover cutting-edge digital solutions built by Madny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.',
    keywords: d.keywords || 'portfolio, web projects, digital projects, case studies, madny digital portfolio',
    alternates: { canonical: 'https://www.madnydigitalservices.com/projects' },
    openGraph: {
      title: d.ogTitle || d.title || 'Our Projects | Madny Digital Services',
      description: d.ogDescription || d.description || 'Discover cutting-edge digital solutions built by Madny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.',
      url: 'https://www.madnydigitalservices.com/projects',
      images: [d.ogImage || '/mds-logo.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.twitterTitle || d.ogTitle || d.title || 'Our Projects | Madny Digital Services',
      description: d.twitterDescription || d.ogDescription || d.description || 'Discover cutting-edge digital solutions built by Madny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.',
    },
  };
}

const BASE_URL = 'https://www.madnydigitalservices.com';

export default async function ProjectsPage() {
  const content = await getPageContent('projects');
  const global = await getGlobalContent();
  const sections = content?.sections || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header data={global?.header} />
      <ProjectsClient data={sections} />
      <Footer data={global?.footer} />
    </>
  );
}
