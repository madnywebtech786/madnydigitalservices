'use client';

import {
  Layers,
  MapPin,
  Sliders,
  Home,
  Zap,
  DollarSign,
  ShieldCheck,
  PackageCheck,
  Users,
  Star,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const cardIcons = [Layers, MapPin, Layers, Sliders, Home, Zap, DollarSign, ShieldCheck, PackageCheck, Users];

function WhyCard({ item, index, inView, delayClass }) {
  if (!item) return null;
  const Icon = cardIcons[index % cardIcons.length];

  return (
    <div
      data-inview={inView ? 'true' : ''}
      className={`reveal-up ${delayClass} bento-card group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-lg overflow-hidden`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="bento-icon w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-lg font-black mb-2 group-hover:text-primary transition-colors leading-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}

const cardDelays = ['anim-delay-3', 'anim-delay-4', 'anim-delay-5', 'anim-delay-6', 'anim-delay-7', 'anim-delay-8', 'anim-delay-9', 'anim-delay-10', 'anim-delay-11', 'anim-delay-12'];

export default function AboutWhy({ data }) {
  const d = data || {};
  const features = d.features || [
    { title: 'Your Local One-Stop Technology Partner', description: 'From computer systems and software development to web solutions, digital services, device sales, and repairs, Madny Digital Services brings your technology needs together under one roof.' },
    { title: 'Local Calgary Business', description: 'A locally based technology company proudly serving businesses and individuals in Calgary and nearby areas.' },
    { title: 'One-Stop Technology Solutions', description: 'Computer systems, software development, web development, digital marketing, hardware, device sales, technical support, and repairs — all in one place.' },
    { title: 'Custom Solutions for Your Needs', description: 'Technology solutions tailored to your business requirements, project goals, and individual needs.' },
    { title: 'Onsite Service Option', description: 'Convenient onsite computer and IT support available for eligible business and technical service requirements.' },
    { title: 'Same-Day Service Available', description: 'Fast diagnostics and same-day service available for many common computer and device issues, subject to service requirements and parts availability.' },
    { title: 'Affordable & Transparent Pricing', description: 'Competitive pricing with clear recommendations and solutions designed around your requirements and budget.' },
    { title: 'Reliable Professional Service', description: 'Professional support focused on dependable solutions, quality workmanship, and long-term customer relationships.' },
    { title: 'Quality Replacement Parts', description: 'Carefully selected replacement parts for supported computer, laptop, and cellphone repairs.' },
    { title: 'Business & Individual Solutions', description: 'From helping businesses build their digital presence and technology systems to assisting individuals with everyday technology needs, our team is ready to help.' },
  ];

  const [sectionRef, inView] = useInView('-60px');

  return (
    <section ref={sectionRef} className="py-32 relative">
      <Container className="relative z-10">
        {/* Mobile/tablet (below lg): heading stacked above a 2-col card grid */}
        <div className="lg:hidden">
          <div className="mb-16">
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 font-black text-primary uppercase tracking-[0.2em] text-[10px]"
            >
              <Star className="w-3 h-3 fill-current" />
              {d.badge || 'Why Choose Us'}
            </div>
            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter mb-6"
            >
              {d.title || 'Why Choose Madny Digital Services?'}
            </h2>
            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-up anim-delay-3 text-lg text-muted-foreground leading-relaxed"
            >
              {d.description || 'Your local one-stop technology partner in Calgary.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <WhyCard key={`m-${item.title}`} item={item} index={index} inView={inView} delayClass={cardDelays[index % cardDelays.length]} />
            ))}
          </div>
        </div>

        {/* Desktop (lg+): left column sticks while the right column's
            single-file card stack scrolls past it. Built with flexbox
            (hidden lg:flex), not CSS grid — this project's Tailwind build
            was not generating a `lg:grid` responsive display utility
            (confirmed absent from the compiled CSS), while `lg:flex` is
            already proven working elsewhere (Header.jsx's nav). A single
            column of stacked cards (not a multi-column grid) is what gives
            the right side enough real height to scroll past a sticky
            sidebar in the first place. */}
        <div className="hidden lg:flex lg:gap-16">
          <div className="lg:w-5/12 lg:shrink-0">
            <div className="lg:sticky lg:top-28">
              <div
                data-inview={inView ? 'true' : ''}
                className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 font-black text-primary uppercase tracking-[0.2em] text-[10px]"
              >
                <Star className="w-3 h-3 fill-current" />
                {d.badge || 'Why Choose Us'}
              </div>
              <h2
                data-inview={inView ? 'true' : ''}
                className="reveal-blur anim-delay-2 text-6xl xl:text-7xl font-black leading-[0.95] tracking-tighter mb-6"
              >
                {d.title || 'Why Choose Madny Digital Services?'}
              </h2>
              <p
                data-inview={inView ? 'true' : ''}
                className="reveal-up anim-delay-3 text-xl text-muted-foreground leading-relaxed max-w-md"
              >
                {d.description || 'Your local one-stop technology partner in Calgary.'}
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 flex flex-col gap-6">
            {features.map((item, index) => (
              <WhyCard key={`d-${item.title}`} item={item} index={index} inView={inView} delayClass={cardDelays[index % cardDelays.length]} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
