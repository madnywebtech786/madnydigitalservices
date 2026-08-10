import { getGlobalContent } from '@/lib/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FaqPageClient from '@/components/sections/faqs/FaqPageClient';
import { allFaqs } from '@/data/faqs';

export const revalidate = 3600;

const BASE_URL = 'https://www.madnydigitalservices.com';

export const metadata = {
  title: 'FAQs | Computer & Phone Repair, Web & Software Dev | Madny Digital Services',
  description: 'Answers to real Calgary customer questions about computer repair, phone repair and unlocking, device sales, software development, and web development pricing, warranties, and process.',
  keywords: 'computer repair faq calgary, phone repair questions, web development faq, madny digital services faq',
  alternates: { canonical: `${BASE_URL}/faqs` },
  openGraph: {
    title: 'Frequently Asked Questions | Madny Digital Services',
    description: 'Real answers about computer repair, phone repair, device sales, software development, and web development in Calgary.',
    url: `${BASE_URL}/faqs`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Madny Digital Services',
    description: 'Real answers about computer repair, phone repair, device sales, software development, and web development in Calgary.',
  },
};

export default async function FaqsPage() {
  const global = await getGlobalContent();

  // FAQPage structured data for AEO/GEO: lets Google, AI Overviews, and
  // assistants like ChatGPT surface these answers directly. Covers every
  // question across all topic groups, not just one section.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'FAQs', item: `${BASE_URL}/faqs` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header data={global?.header} />
      <FaqPageClient />
      <Footer data={global?.footer} />
    </>
  );
}
