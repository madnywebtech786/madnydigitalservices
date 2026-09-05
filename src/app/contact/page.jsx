import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';

export const revalidate = 3600;
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/sections/contact/ContactHero';
import Contact from '@/components/sections/home/Contact';

export async function generateMetadata() {
  const content = await getPageContent('contact');
  const d = content?.meta || {};
  return {
    title: d.title || 'Contact Us | Madny Digital Services',
    description: d.description || 'Get in touch with Madny Digital Services. We would love to hear about your project and how we can help bring your vision to life.',
    keywords: d.keywords || 'contact us, digital agency Calgary, web development inquiry',
    alternates: { canonical: 'https://www.madnydigitalservices.com/contact' },
    openGraph: {
      title: d.ogTitle || d.title || 'Contact Us | Madny Digital Services',
      description: d.ogDescription || d.description || 'Get in touch with Madny Digital Services. We would love to hear about your project and how we can help bring your vision to life.',
      url: 'https://www.madnydigitalservices.com/contact',
      images: [d.ogImage || '/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.twitterTitle || d.ogTitle || d.title || 'Contact Us | Madny Digital Services',
      description: d.twitterDescription || d.ogDescription || d.description || 'Get in touch with Madny Digital Services. We would love to hear about your project and how we can help bring your vision to life.',
    },
  };
}

// Maps the /contact page's richer CMS shape (sections.contactInfo with
// title/value/description/link) onto the shape the shared <Contact> section
// expects (contactInfo with title/details[]) — keeps <Contact> itself
// unchanged so the homepage and this page render the exact same component.
// Badge/title/subtitle aren't mapped since ContactHero already covers that
// role on this page (Contact renders with showHeader={false} below).
function mapContactSectionData(sections) {
  return {
    contactInfo: sections.contactInfo?.length
      ? sections.contactInfo.map((info) => ({
          title: info.title,
          details: [info.value, info.description].filter(Boolean),
        }))
      : undefined,
  };
}

const BASE_URL = 'https://www.madnydigitalservices.com';

export default async function ContactPage() {
  const content = await getPageContent('contact');
  const global = await getGlobalContent();
  const sections = content?.sections || {};

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header data={global?.header} />
      <main className="pt-20 min-h-screen page-flow">
        <ContactHero data={sections.hero} />
        <Contact data={mapContactSectionData(sections)} showHeader={false} />
      </main>
      <Footer data={global?.footer} />
    </>
  );
}
