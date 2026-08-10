import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/home/Hero';
import Services from '@/components/sections/home/Services';
import About from '@/components/sections/home/About';
import AboutProcess from '@/components/sections/shared/AboutProcess';
import ProjectsShowcase from '@/components/sections/home/ProjectsShowcase';
import Gallery from '@/components/sections/home/Gallery';
import Testimonials from '@/components/sections/home/Testimonials';
import FAQ from '@/components/sections/home/FAQ';
import Contact from '@/components/sections/home/Contact';
import CTA from '@/components/sections/shared/CTA';
import DiagonalBanners from '@/components/sections/home/DiagonalBanners';
import { getPageContent, getGlobalContent } from '@/lib/content';

export const revalidate = 3600;

export async function generateMetadata() {
  const page = await getPageContent('home');
  if (!page?.meta) return {};
  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    alternates: { canonical: 'https://www.madnydigitalservices.com' },
    openGraph: {
      title: page.meta.ogTitle || page.meta.title,
      description: page.meta.ogDescription || page.meta.description,
      url: 'https://www.madnydigitalservices.com',
      type: 'website',
      locale: 'en_CA',
      siteName: 'Madny Digital Services',
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

  // FAQPage structured data for AEO/GEO: lets voice assistants and AI
  // search engines (Google, ChatGPT, Gemini) surface these Q&As directly
  // as featured snippets / direct answers instead of only crawling prose.
  const faqItems = sections.faqs?.items || [];
  const faqJsonLd = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header data={globalContent?.header} />
      <main className="page-flow">
        <Hero data={sections.hero} />
        <Services data={sections.services} />
        <About data={sections.about} />
        <AboutProcess data={sections.process} />
        <ProjectsShowcase data={projectsShowcaseData} />
        <DiagonalBanners data={sections.diagonalBanners} />
        <Gallery data={sections.gallery} />
        <Testimonials data={sections.testimonials} />
        <FAQ data={sections.faqs} />
        <Contact data={sections.contact} />
        <CTA data={sections.cta} />
      </main>
      <Footer data={globalContent?.footer} />
    </>
  );
}
