import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';

export const revalidate = 3600;
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/AboutHero';
import AboutWhy from '@/components/sections/AboutWhy';
import AboutMission from '@/components/sections/AboutMission';
import AboutProcess from '@/components/sections/AboutProcess';
import CTA from '@/components/sections/CTA';

export async function generateMetadata() {
  const content = await getPageContent('about');
  const d = content?.meta || {};
  return {
    title: d.title || 'About Us | Madeny Digital Services',
    description: d.description || 'Learn about Madeny Digital Services, our mission, vision, and the team driving digital excellence in Calgary.',
    keywords: d.keywords || 'about us, web development agency Calgary, digital marketing team',
    alternates: { canonical: 'https://madenydigital.com/about' },
    openGraph: {
      title: d.ogTitle || d.title || 'About Us | Madeny Digital Services',
      description: d.ogDescription || d.description || 'Learn about Madeny Digital Services, our mission, vision, and the team driving digital excellence in Calgary.',
      url: 'https://madenydigital.com/about',
      images: [d.ogImage || '/og-about.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.twitterTitle || d.ogTitle || d.title || 'About Us | Madeny Digital Services',
      description: d.twitterDescription || d.ogDescription || d.description || 'Learn about Madeny Digital Services, our mission, vision, and the team driving digital excellence in Calgary.',
    },
  };
}

export default async function AboutPage() {
  const content = await getPageContent('about');
  const global = await getGlobalContent();
  const sections = content?.sections || {};

  return (
    <>
      <Header data={global?.header} />
      <main className="page-flow">
        <AboutHero data={sections.hero} />
        <AboutWhy data={sections.whyChooseUs} />
        <AboutMission mission={sections.mission} vision={sections.vision} />
        <AboutProcess data={sections.process} />
        <CTA data={sections.cta} />
      </main>
      <Footer data={global?.footer} />
    </>
  );
}
