import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';

export const revalidate = 3600;
import Footer from '@/components/layout/Footer';
import AboutHero from '@/components/sections/about/AboutHero';
import AboutWhatWeDo from '@/components/sections/about/AboutWhatWeDo';
import AboutWhy from '@/components/sections/about/AboutWhy';
import AboutMission from '@/components/sections/about/AboutMission';
import AboutFAQ from '@/components/sections/about/AboutFAQ';
import AboutProcess from '@/components/sections/shared/AboutProcess';
import CTA from '@/components/sections/shared/CTA';

export async function generateMetadata() {
  const content = await getPageContent('about');
  const d = content?.meta || {};
  return {
    title: d.title || 'About Us | Madny Digital Services',
    description: d.description || 'Learn about Madny Digital Services, our mission, vision, and the team driving digital excellence in Calgary.',
    keywords: d.keywords || 'about us, web development agency Calgary, digital marketing team',
    alternates: { canonical: 'https://www.madnydigitalservices.com/about' },
    openGraph: {
      title: d.ogTitle || d.title || 'About Us | Madny Digital Services',
      description: d.ogDescription || d.description || 'Learn about Madny Digital Services, our mission, vision, and the team driving digital excellence in Calgary.',
      url: 'https://www.madnydigitalservices.com/about',
      images: [d.ogImage || '/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.twitterTitle || d.ogTitle || d.title || 'About Us | Madny Digital Services',
      description: d.twitterDescription || d.ogDescription || d.description || 'Learn about Madny Digital Services, our mission, vision, and the team driving digital excellence in Calgary.',
    },
  };
}

export default async function AboutPage() {
  const content = await getPageContent('about');
  const global = await getGlobalContent();
  const sections = content?.sections || {};

  // FAQPage structured data for AEO/GEO: lets voice assistants and AI
  // search engines surface these company Q&As directly as answers.
  const faqItems = sections.faq?.items || [];
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
      <Header data={global?.header} />
      <main className="page-flow">
        <AboutHero data={sections.hero} />
        <AboutWhatWeDo data={sections.whatWeDo} />
        <AboutWhy data={sections.whyChooseUs} />
        <AboutMission mission={sections.mission} vision={sections.vision} />
        <AboutProcess data={sections.process} />
        <AboutFAQ data={sections.faq} />
        <CTA data={sections.cta} />
      </main>
      <Footer data={global?.footer} />
    </>
  );
}
