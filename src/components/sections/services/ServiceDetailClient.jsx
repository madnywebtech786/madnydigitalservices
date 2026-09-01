'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  Phone,
  Search,
  Wrench,
  ShieldCheck,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FaqAccordion from '@/components/ui/FaqAccordion';
import { useInView } from '@/hooks/useInView';
import { centerArea, surroundingAreas } from '@/data/workingAreas';

const accentClasses = {
  primary: {
    badge: 'bg-primary/10 border-primary/20 text-primary',
    bar: 'bg-primary',
    dot: 'bg-primary',
    gradient: 'from-primary to-primary-dark',
    ring: 'border-primary/25',
    pin: 'text-primary',
  },
  secondary: {
    badge: 'bg-secondary/10 border-secondary/20 text-secondary',
    bar: 'bg-secondary',
    dot: 'bg-secondary',
    gradient: 'from-secondary to-secondary-dark',
    ring: 'border-secondary/25',
    pin: 'text-secondary',
  },
  tertiary: {
    badge: 'bg-tertiary/10 border-tertiary/20 text-tertiary',
    bar: 'bg-tertiary',
    dot: 'bg-tertiary',
    gradient: 'from-tertiary to-tertiary-dark',
    ring: 'border-tertiary/25',
    pin: 'text-tertiary',
  },
  ink: {
    badge: 'bg-foreground/8 border-foreground/15 text-foreground',
    bar: 'bg-foreground',
    dot: 'bg-foreground',
    gradient: 'from-foreground to-foreground/70',
    ring: 'border-foreground/20',
    pin: 'text-foreground',
  },
};

const staggerDelays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4', 'anim-delay-5', 'anim-delay-6'];

const serviceAreaNames = [centerArea.name, ...surroundingAreas.map((a) => a.name)];

/**
 * Rich, SEO/AEO/GEO-optimized leaf page template for the services nav tree.
 * Renders real content (from content.js entries keyed by leaf id) — used only
 * for leaves that have a matching `content` object; leaves without one keep
 * rendering ServiceStubClient (see the [item] route).
 *
 * @param {object} content - a serviceContent.js entry (h1, intro, problems,
 *   services, process, faqs, relatedServices, etc.)
 * @param {{name: string, href: string}[]} breadcrumb - ordered crumb list.
 * @param {string} accent - one of 'primary' | 'secondary' | 'tertiary' | 'ink'.
 * @param {{name: string, href: string}} parent - link back to the subcategory.
 * @param {{name: string, id: string, href: string}[]} relatedLinks - resolved
 *   related-service nav entries (href + display name) for the cross-link grid.
 */
export default function ServiceDetailClient({ content, breadcrumb, accent = 'primary', parent, relatedLinks = [] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [heroRef, heroInView] = useInView('-60px');
  const [problemsRef, problemsInView] = useInView('-80px');
  const [servicesRef, servicesInView] = useInView('-80px');
  const [processRef, processInView] = useInView('-80px');
  const [areaRef, areaInView] = useInView('-80px');
  const [faqRef, faqInView] = useInView('-80px');
  const [ctaRef, ctaInView] = useInView('-60px');
  const [relatedRef, relatedInView] = useInView('-80px');

  const colors = accentClasses[accent] || accentClasses.primary;

  return (
    <main className="pt-20 min-h-screen page-flow">
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="section relative overflow-hidden">
        <Container size="lg">
          <nav
            data-inview={heroInView ? 'true' : ''}
            className="reveal-up anim-delay-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8"
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.name} className="flex items-center gap-2">
                {i > 0 && <span className="opacity-40">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-3xl mb-12">
            <span
              data-inview={heroInView ? 'true' : ''}
              className={`reveal-scale anim-delay-2 inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.15em] rounded-full border ${colors.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              {content.eyebrow || 'Serving Calgary & Nearby Areas'}
            </span>
            <h1
              data-inview={heroInView ? 'true' : ''}
              className="reveal-blur anim-delay-3 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.05]"
            >
              {content.h1}
            </h1>
            <div
              data-inview={heroInView ? 'true' : ''}
              className={`reveal-expand-x anim-delay-4 w-16 h-1 rounded-full ${colors.bar} mb-6`}
            />
            <p
              data-inview={heroInView ? 'true' : ''}
              className="reveal-up anim-delay-4 text-lg text-muted-foreground leading-relaxed"
            >
              {content.intro}
            </p>

            <div
              data-inview={heroInView ? 'true' : ''}
              className="reveal-up anim-delay-5 flex flex-wrap gap-3 mt-10"
            >
              <Link href="/contact">
                <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>Get a Free Quote</Button>
              </Link>
              <a href="tel:+14037088214">
                <Button variant="outline" size="lg" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                  (403) 708-8214
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          COMMON PROBLEMS / SIGNS
      ══════════════════════════════════════════════ */}
      {content.problems?.length > 0 && (
        <section ref={problemsRef} className="py-16 md:py-20 relative overflow-hidden">
          <Container size="lg">
            <div className="max-w-2xl mb-10">
              <span
                data-inview={problemsInView ? 'true' : ''}
                className={`reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[10px] font-black uppercase tracking-[0.25em] border ${colors.badge}`}
              >
                <Search className="w-3 h-3" />
                Diagnosis
              </span>
              <h2
                data-inview={problemsInView ? 'true' : ''}
                className="reveal-blur anim-delay-2 text-3xl md:text-4xl font-black tracking-tight"
              >
                {content.problemsHeading}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.problems.map((problem, index) => (
                <div
                  key={problem}
                  data-inview={problemsInView ? 'true' : ''}
                  className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
                >
                  <div className="svc-feature-card h-full flex items-center gap-4 p-5 rounded-2xl bg-white border border-foreground/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                    <span className={`svc-feature-icon w-7 h-7 rounded-lg bg-linear-to-br ${colors.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-base font-medium text-foreground leading-snug">{problem}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          WHAT'S INCLUDED
      ══════════════════════════════════════════════ */}
      {content.services?.length > 0 && (
        <section ref={servicesRef} className="py-16 md:py-20 relative overflow-hidden">
          <Container size="lg">
            <div className="max-w-2xl mb-10">
              <span
                data-inview={servicesInView ? 'true' : ''}
                className={`reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[10px] font-black uppercase tracking-[0.25em] border ${colors.badge}`}
              >
                <Wrench className="w-3 h-3" />
                What's Included
              </span>
              <h2
                data-inview={servicesInView ? 'true' : ''}
                className="reveal-blur anim-delay-2 text-3xl md:text-4xl font-black tracking-tight"
              >
                {content.servicesHeading}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.map((service, index) => (
                <div
                  key={service.title}
                  data-inview={servicesInView ? 'true' : ''}
                  className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
                >
                  <div className="svc-feature-card h-full p-7 rounded-3xl bg-white border border-foreground/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                    <div className={`svc-feature-icon w-12 h-12 rounded-2xl bg-linear-to-br ${colors.gradient} flex items-center justify-center mb-5 shadow-md`}>
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black mb-2 leading-tight">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          PROCESS — diagonal accent band
      ══════════════════════════════════════════════ */}
      {content.process?.length > 0 && (
        <section ref={processRef} className="relative py-24 overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-r ${colors.gradient} svc-cta-clip`} aria-hidden="true" />
          <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
          </div>
          <Container size="lg" className="relative z-10">
            <div className="text-center mb-14">
              <h2
                data-inview={processInView ? 'true' : ''}
                className="reveal-up anim-delay-1 text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter"
              >
                {content.processHeading || 'How It Works'}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.process.map((step, index) => (
                <div
                  key={step.step}
                  data-inview={processInView ? 'true' : ''}
                  className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
                >
                  <div className="h-full p-6 rounded-3xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <span className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-linear-to-br ${colors.gradient} text-white text-base font-black mb-4 shadow-md`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-foreground font-black text-base mb-2 leading-snug">{step.step}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          SERVICE AREA — GEO block
      ══════════════════════════════════════════════ */}
      <section ref={areaRef} className="py-16 md:py-20">
        <Container size="lg">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span
                data-inview={areaInView ? 'true' : ''}
                className={`reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[10px] font-black uppercase tracking-[0.25em] border ${colors.badge}`}
              >
                <MapPin className="w-3 h-3" />
                Service Area
              </span>
              <h2
                data-inview={areaInView ? 'true' : ''}
                className="reveal-blur anim-delay-2 text-3xl md:text-4xl font-black tracking-tight mb-4"
              >
                {content.h1} in Calgary & Nearby Areas
              </h2>
              <p
                data-inview={areaInView ? 'true' : ''}
                className="reveal-up anim-delay-3 text-muted-foreground leading-relaxed"
              >
                {content.areaDescription || `Madny Digital Services proudly serves customers throughout Calgary and the surrounding communities.`}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div
                data-inview={areaInView ? 'true' : ''}
                className="reveal-up anim-delay-3 flex flex-wrap gap-3"
              >
                {serviceAreaNames.map((name, index) => (
                  <span
                    key={name}
                    className={`svc-benefit-pill inline-flex items-center gap-2 px-5 py-3 rounded-full border bg-white ${colors.ring} ${staggerDelays[index % staggerDelays.length]}`}
                  >
                    <MapPin className={`w-3.5 h-3.5 shrink-0 ${colors.pin}`} />
                    <span className="font-semibold text-sm text-foreground">{name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      {content.faqs?.length > 0 && (
        <section ref={faqRef} className="py-16 md:py-24 relative">
          <Container size="lg">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <span
                    data-inview={faqInView ? 'true' : ''}
                    className={`reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[10px] font-black uppercase tracking-[0.25em] border ${colors.badge}`}
                  >
                    FAQ
                  </span>
                  <h2
                    data-inview={faqInView ? 'true' : ''}
                    className="reveal-blur anim-delay-2 text-4xl md:text-5xl lg:text-6xl font-black leading-[0.92] tracking-tighter mb-5"
                  >
                    Frequently Asked <span className="text-gradient">Questions</span>
                  </h2>
                  <p
                    data-inview={faqInView ? 'true' : ''}
                    className="reveal-up anim-delay-3 text-muted-foreground leading-relaxed"
                  >
                    Answers to common questions about {content.h1?.toLowerCase()} in Calgary.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-8 space-y-3">
                {content.faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    data-inview={faqInView ? 'true' : ''}
                    className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
                  >
                    <FaqAccordion
                      faq={faq}
                      open={openFaqIndex === index}
                      onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section ref={ctaRef} className="py-16">
        <Container size="lg">
          <div
            data-inview={ctaInView ? 'true' : ''}
            className="reveal-up anim-delay-1 relative rounded-[40px] overflow-hidden"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${colors.gradient}`} />
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
            <div className="relative z-10 px-8 py-14 md:px-16 md:py-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-[0.95] tracking-tighter mb-4">
                    {content.ctaHeading || 'Ready to Get Started?'}
                  </h2>
                  <p className="text-white/85 leading-relaxed">
                    {content.ctaText || `Contact Madny Digital Services today for professional ${content.h1?.toLowerCase()} in Calgary.`}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a href="tel:+14037088214">
                    <Button variant="outline" size="lg" className="bg-white! text-black! border-2 border-white! hover:bg-white/90! backdrop-blur-none w-full sm:w-auto" icon={<Phone className="w-4 h-4" />} iconPosition="left">
                      (403) 708-8214
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="bg-white! text-black! border-2 border-white! hover:bg-white/90! backdrop-blur-none w-full sm:w-auto" icon={<ArrowRight className="w-4 h-4" />}>
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          RELATED SERVICES + BACK LINK
      ══════════════════════════════════════════════ */}
      <section ref={relatedRef} className="py-16 md:py-20">
        <Container size="lg">
          {relatedLinks.length > 0 && (
            <>
              <div className="mb-10">
                <span
                  data-inview={relatedInView ? 'true' : ''}
                  className={`reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-[10px] font-black uppercase tracking-[0.25em] border ${colors.badge}`}
                >
                  Related Services
                </span>
                <h2
                  data-inview={relatedInView ? 'true' : ''}
                  className="reveal-blur anim-delay-2 text-3xl md:text-4xl font-black tracking-tight"
                >
                  Explore More Ways We Can Help
                </h2>
              </div>
              <div
                data-inview={relatedInView ? 'true' : ''}
                className="reveal-up anim-delay-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 items-stretch auto-rows-fr"
              >
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="svc-feature-card group flex flex-col h-full w-full p-7 rounded-2xl bg-white border border-foreground/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-black text-lg leading-tight text-foreground pt-1">{link.name}</h3>
                      <span className={`svc-feature-icon shrink-0 w-11 h-11 rounded-xl bg-linear-to-br ${colors.gradient} flex items-center justify-center shadow-md`}>
                        <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </span>
                    </div>
                    {link.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{link.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}

          {parent && (
            <Link href={parent.href} className="svc-back-link inline-flex items-center gap-2 font-semibold text-foreground">
              <ArrowLeft className="svc-back-arrow w-4 h-4" />
              Back to {parent.name}
            </Link>
          )}
        </Container>
      </section>
    </main>
  );
}
