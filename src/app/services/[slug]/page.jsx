import { getGlobalContent, getPageContent } from '@/lib/content';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceClient from '@/components/sections/ServiceClient';
import { services as staticServices } from '@/data/services';

// ISR: revalidate every hour so CMS updates propagate within 60 minutes
export const revalidate = 3600;

export async function generateStaticParams() {
  return staticServices.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = await getPageContent('services');
  const cmsServices = content?.sections?.items || [];
  const service =
    cmsServices.find((s) => s.id === slug) ||
    staticServices.find((s) => s.id === slug);

  if (!service) return { title: 'Service Not Found' };

  const d = content?.meta || {};
  const title = `${service.title} | Madeny Digital Services`;
  const description = service.shortDesc || service.heroDescription || d.description;
  const url = `https://madenydigital.com/services/${slug}`;

  return {
    title,
    description,
    keywords: d.keywords || 'computer repair calgary, cell phone repair, web development calgary',
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [service.image || d.ogImage || '/og-services.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const [global, content] = await Promise.all([
    getGlobalContent(),
    getPageContent('services'),
  ]);

  const cmsServices = content?.sections?.items || [];
  const service =
    cmsServices.find((s) => s.id === slug) ||
    staticServices.find((s) => s.id === slug);
  const allServices = cmsServices.length > 0 ? cmsServices : staticServices;

  return (
    <>
      <Header data={global?.header} />
      <ServiceClient service={service} allServices={allServices} />
      <Footer data={global?.footer} />
    </>
  );
}
