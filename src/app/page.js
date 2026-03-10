import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import Gallery from '@/components/sections/Gallery';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import CTA from '@/components/sections/CTA';
import DiagonalBanners from '@/components/sections/DiagonalBanners';
import { getPageContent, getGlobalContent } from '@/lib/content';

export async function generateMetadata() {
  const page = await getPageContent('home');
  if (!page?.meta) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    openGraph: {
      title: page.meta.ogTitle || page.meta.title,
      description: page.meta.ogDescription || page.meta.description,
      type: 'website',
      locale: 'en_CA',
      siteName: 'Madeny Digital Services',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.meta.ogTitle || page.meta.title,
      description: page.meta.ogDescription || page.meta.description,
    },
  };
}

export default async function Home() {
  const [pageContent, globalContent, projectsContent] = await Promise.all([
    getPageContent('home'),
    getGlobalContent(),
    getPageContent('projects'),
  ]);

  const sections = pageContent?.sections || {};

  // Build the projects showcase data: use home section for badge/title/subtitle,
  // but pull items from the projects page so featured flag changes reflect here.
  const allProjectItems = projectsContent?.sections?.items || sections.projects?.items || [];
  const projectsShowcaseData = {
    ...(sections.projects || {}),
    items: allProjectItems,
  };

  return (
    <>
      <Header data={globalContent?.header} />
      <main>
        <Hero data={sections.hero} />
        <Services data={sections.services} />
        <About data={sections.about} />
        <ProjectsShowcase data={projectsShowcaseData} />
        <DiagonalBanners data={sections.diagonalBanners} />
        <Gallery data={sections.gallery} />
        <Testimonials data={sections.testimonials} />
        <Contact data={sections.contact} />
        <CTA data={sections.cta} />
      </main>
      <Footer data={globalContent?.footer} />
    </>
  );
}
