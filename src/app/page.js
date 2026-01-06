import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import ProjectsShowcase from '@/components/sections/ProjectsShowcase';
import Gallery from '@/components/sections/Gallery';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import CTA from '@/components/sections/CTA';
import DiagonalBanners from '@/components/sections/DiagonalBanners';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ProjectsShowcase />
        <DiagonalBanners />
        <Gallery />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
