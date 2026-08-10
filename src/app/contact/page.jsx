import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';

export const revalidate = 3600;
import Footer from '@/components/layout/Footer';
import ContactClient from '@/components/sections/contact/ContactClient';

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
      images: [d.ogImage || '/og-contact.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: d.twitterTitle || d.ogTitle || d.title || 'Contact Us | Madny Digital Services',
      description: d.twitterDescription || d.ogDescription || d.description || 'Get in touch with Madny Digital Services. We would love to hear about your project and how we can help bring your vision to life.',
    },
  };
}

export default async function ContactPage() {
  const content = await getPageContent('contact');
  const global = await getGlobalContent();
  const sections = content?.sections || {};

  return (
    <>
      <Header data={global?.header} />
      <ContactClient data={sections} />
      <Footer data={global?.footer} />
    </>
  );
}
