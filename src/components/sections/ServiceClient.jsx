'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  MapPin,
  ChevronDown,
  Star,
  Monitor,
  Smartphone,
  ShoppingBag,
  Code,
  Zap,
  Shield,
  Clock,
  Award,
  Wrench,
  Globe,
} from 'lucide-react';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

const getIconForService = (id) => {
  switch (id) {
    case 'computer-repair':   return Monitor;
    case 'cell-phone-repair': return Smartphone;
    case 'device-sales':      return ShoppingBag;
    case 'web-development':   return Code;
    default:                  return Monitor;
  }
};

const getFeatureIcon = (index) => {
  const icons = [Zap, Shield, Clock, Award, Wrench, Globe, Check, Star];
  return icons[index % icons.length];
};

const getColorForService = () => 'from-primary to-secondary';

const staggerDelays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4', 'anim-delay-5', 'anim-delay-6'];

/* ── FAQ Item ─────────────────────────────────────────────────── */
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`svc-faq-item border border-foreground/8 rounded-2xl ${isOpen ? 'is-open' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left"
      >
        <div className={`svc-faq-bar self-stretch shrink-0 ${isOpen ? 'is-open' : ''}`} style={{ minHeight: '1.5rem' }} />
        <span className="flex-1 font-semibold text-foreground leading-snug">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <p className="svc-faq-answer pl-12 pr-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
      )}
    </div>
  );
}

/* ── Main Component ───────────────────────────────────────────── */
export default function ServiceClient({ service, allServices }) {
  const [openFaq, setOpenFaq] = useState(null);

  const [heroRef, heroInView]         = useInView('-40px');
  const [featuresRef, featuresInView] = useInView('-60px');
  const [benefitsRef, benefitsInView] = useInView('-60px');
  const [faqRef, faqInView]           = useInView('-60px');
  const [ctaRef, ctaInView]           = useInView('-60px');
  const [othersRef, othersInView]     = useInView('-60px');

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/#services"><Button>Back to Services</Button></Link>
        </div>
      </main>
    );
  }

  const ServiceIcon = getIconForService(service.id);
  const color = getColorForService(service.id);

  return (
    <main className="pt-20 page-flow">

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative pt-12 pb-0 lg:pt-20 overflow-hidden">
        <Container>

          {/* Back link */}
          <div className="anim-fade-up anim-delay-1 mb-10">
            <Link href="/#services" className="svc-back-link inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <ArrowLeft className="svc-back-arrow w-4 h-4" />
              Back to Services
            </Link>
          </div>

          {/* Two-column layout: text left, image right — image bleeds slightly */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">

            {/* ── Left: content ── */}
            <div className="lg:col-span-5 pb-12 lg:pb-20">

              {/* Icon + category */}
              <div className="anim-fade-up anim-delay-2 flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}>
                  <ServiceIcon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-primary border border-primary/20 bg-primary/8 px-3 py-1.5 rounded-full">
                  {service.category || 'Our Services'}
                </span>
              </div>

              {/* Headline */}
              <h1 className="anim-fade-up anim-delay-3 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tighter mb-6">
                <span className="text-foreground">{service.title?.split(' ')[0] || service.title}</span>
                {service.title?.split(' ').length > 1 && (
                  <><br /><span className="text-gradient">{service.title.split(' ').slice(1).join(' ')}</span></>
                )}
              </h1>

              <p className="anim-fade-up anim-delay-4 text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
                {service.heroDescription}
              </p>

              {/* Star rating */}
              <div className="anim-fade-up anim-delay-5 flex items-center gap-3 mb-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· 100+ verified reviews</span>
              </div>

              {/* CTAs */}
              <div className="anim-fade-up anim-delay-6 flex flex-wrap gap-3">
                <a href="tel:+14035550123">
                  <Button size="lg" className="h-14 px-8 rounded-2xl font-black">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Call Now
                    </span>
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="h-14 px-8 rounded-2xl font-black">
                    <span className="flex items-center gap-2">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* ── Right: image ── */}
            <div className="lg:col-span-7 relative">
              <div
                className="anim-fade-right anim-delay-3 relative rounded-[32px] overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="svc-img-wrap object-cover"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                {/* Bottom-left overlay chip */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/90 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 loop-blink" />
                  <span className="text-xs font-black uppercase tracking-widest text-foreground">Available Now</span>
                </div>
              </div>

              {/* Rating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl z-20">
                <div className="loop-bob-up flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-sm">5.0 Rating</div>
                    <div className="text-xs text-muted-foreground">100+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Full-width divider line */}
        <div className="mt-16 h-px bg-foreground/6" />
      </section>

      {/* ══════════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════════ */}
      <section ref={featuresRef} className="py-24 relative overflow-hidden">
        <Container>

          <div className="text-center mb-16">
            <div
              data-inview={featuresInView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-linear-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
            >
              What We Offer
            </div>
            <h2
              data-inview={featuresInView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-3xl md:text-4xl font-bold"
            >
              Our <span className="text-gradient">{service.title}</span> Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features && service.features.map((feature, index) => {
              const FeatureIcon = getFeatureIcon(index);
              return (
                <div
                  key={feature.title}
                  data-inview={featuresInView ? 'true' : ''}
                  className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
                >
                  <div className="svc-feature-card h-full p-7 rounded-3xl bg-white/60 backdrop-blur-xl border border-foreground/6">
                    <div className={`svc-feature-icon w-12 h-12 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center mb-5 shadow-md`}>
                      <FeatureIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-black mb-2 leading-tight">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          BENEFITS — full-width diagonal band
      ══════════════════════════════════════════════ */}
      <section ref={benefitsRef} className="relative py-28 overflow-hidden">
        {/* Diagonal clip gradient band */}
        <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary svc-cta-clip" aria-hidden="true" />
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <div
              data-inview={benefitsInView ? 'true' : ''}
              className="reveal-up anim-delay-1"
            >
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                Why Choose Us
              </h2>
            </div>
          </div>

          {/* Benefit pills grid */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {service.benefits && service.benefits.map((benefit, index) => (
              <div
                key={benefit}
                data-inview={benefitsInView ? 'true' : ''}
                className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
              >
                <div className="svc-benefit-pill flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm cursor-default">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span className="text-white font-semibold text-sm">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════ */}
      <section ref={faqRef} className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left: sticky heading */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <div
                  data-inview={faqInView ? 'true' : ''}
                  className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
                >
                  FAQ
                </div>
                <h2
                  data-inview={faqInView ? 'true' : ''}
                  className="reveal-blur anim-delay-2 text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter mb-6"
                >
                  Common<br /><span className="text-gradient">Questions</span>
                </h2>
                <p
                  data-inview={faqInView ? 'true' : ''}
                  className="reveal-up anim-delay-3 text-muted-foreground leading-relaxed"
                >
                  Everything you need to know before booking your service.
                </p>
              </div>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-8 space-y-3">
              {service.faqs && service.faqs.map((faq, index) => (
                <div
                  key={index}
                  data-inview={faqInView ? 'true' : ''}
                  className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
                >
                  <FaqItem
                    faq={faq}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                  />
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section ref={ctaRef} className="py-16">
        <Container>
          <div
            data-inview={ctaInView ? 'true' : ''}
            className="reveal-up anim-delay-1 relative rounded-[40px] overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-dark to-secondary" />
            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />

            <div className="relative z-10 px-10 py-16 md:px-20 md:py-20">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4">
                    Ready to Get Started?
                  </h2>
                  <p className="text-white/70 leading-relaxed">
                    Contact us today for a free consultation on your {service.title ? service.title.toLowerCase() : 'service'} needs.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:justify-end">
                  <a href="tel:+14035550123">
                    <Button variant="outline" size="lg" className="h-14 px-8 rounded-2xl bg-white text-primary border-white hover:bg-white/90 font-black">
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" /> (403) 555-0123
                      </span>
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="ghost" size="lg" className="h-14 px-8 rounded-2xl text-white border-2 border-white/25 hover:bg-white/10 font-black">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> Visit Our Store
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════
          OTHER SERVICES
      ══════════════════════════════════════════════ */}
      <section ref={othersRef} className="py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-8">
              <div
                data-inview={othersInView ? 'true' : ''}
                className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
              >
                More Services
              </div>
              <h2
                data-inview={othersInView ? 'true' : ''}
                className="reveal-blur anim-delay-2 text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter"
              >
                Explore Our <span className="text-gradient">Other Services</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {allServices && allServices
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((otherService, index) => {
                const OtherIcon = getIconForService(otherService.id);
                const otherColor = getColorForService(otherService.id);
                return (
                  <div
                    key={otherService.id}
                    data-inview={othersInView ? 'true' : ''}
                    className={`reveal-up ${staggerDelays[index]}`}
                  >
                    <Link href={`/services/${otherService.id}`} className="block h-full">
                      <div className="svc-other-card group h-full p-7 rounded-3xl bg-white/60 backdrop-blur-xl border border-foreground/8">
                        <div className={`svc-other-icon w-12 h-12 rounded-2xl bg-linear-to-br ${otherColor} flex items-center justify-center mb-5 shadow-md`}>
                          <OtherIcon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-black text-lg mb-2 group-hover:text-primary transition-colors duration-200">{otherService.title}</h3>
                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{otherService.shortDesc}</p>
                        <span className="inline-flex items-center gap-2 text-primary text-sm font-black">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </Container>
      </section>

    </main>
  );
}
