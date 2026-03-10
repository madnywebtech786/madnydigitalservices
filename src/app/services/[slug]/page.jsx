import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceClient from '@/components/sections/ServiceClient';

export async function generateMetadata({ params }) {
  // Await params as required in Next 15+
  const resolvedParams = await params;
  const content = await getPageContent('services');
  const services = content?.sections?.items || [];
  const service = services.find((s) => s.id === resolvedParams.slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  // Use service data for dynamic metadata if we want, or fall back to generic
  const d = content?.meta || {};
  return {
    title: `${service.title} | Madeny Digital Services`,
    description: service.shortDesc || d.description,
    keywords: d.keywords || 'computer repair calgary, cell phone repair, web development',
    openGraph: {
      title: `${service.title} | Madeny Digital Services`,
      description: service.shortDesc || d.ogDescription,
      images: [service.image || d.ogImage || '/og-services.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Madeny Digital Services`,
      description: service.shortDesc || d.twitterDescription,
    },
  };
}

export default async function ServicePage({ params }) {
  // Await params as required in Next 15+
  const resolvedParams = await params;
  const global = await getGlobalContent();
  const content = await getPageContent('services');
  
  const allServices = content?.sections?.items || [];
  const service = allServices.find((s) => s.id === resolvedParams.slug);

  return (
    <>
      <Header data={global?.header} />
      <ServiceClient service={service} allServices={allServices} />
      <Footer data={global?.footer} />
    </>
  );
}
