import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';

export const revalidate = 3600;
import Footer from '@/components/layout/Footer';
import ProjectsClient from '@/components/sections/ProjectsClient';

export async function generateMetadata() {
  const content = await getPageContent('projects');
  const d = content?.meta || {};
  return {
    title: d.title || 'Our Projects | Madeny Digital Services',
    description: d.description || 'Discover cutting-edge digital solutions built by Madeny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.',
    keywords: d.keywords || 'portfolio, web projects, digital projects, case studies, madeny digital portfolio',
    alternates: { canonical: 'https://madenydigital.com/projects' },
    openGraph: {
      title: d.ogTitle || d.title || 'Our Projects | Madeny Digital Services',
      description: d.ogDescription || d.description || 'Discover cutting-edge digital solutions built by Madeny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.',
      url: 'https://madenydigital.com/projects',
      images: [d.ogImage || '/og-projects.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.twitterTitle || d.ogTitle || d.title || 'Our Projects | Madeny Digital Services',
      description: d.twitterDescription || d.ogDescription || d.description || 'Discover cutting-edge digital solutions built by Madeny Digital Services. Browse our portfolio of web development, e-commerce, mobile app, and SaaS projects.',
    },
  };
}

export default async function ProjectsPage() {
  const content = await getPageContent('projects');
  const global = await getGlobalContent();
  const sections = content?.sections || {};

  return (
    <>
      <Header data={global?.header} />
      <ProjectsClient data={sections} />
      <Footer data={global?.footer} />
    </>
  );
}
