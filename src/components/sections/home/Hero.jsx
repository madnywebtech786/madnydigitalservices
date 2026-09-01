'use client';

import {
  ArrowRight,
  Phone,
  Sparkles,
  Wrench,
  Monitor,
  Star,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const DOT_POSITIONS = [
  { left: '15%', top: '35%', dur: 4.0, delay: 0 },
  { left: '50%', top: '45%', dur: 5.2, delay: 0.8 },
  { left: '82%', top: '38%', dur: 4.8, delay: 0.4 },
];

const SLIDE_INTERVAL_MS = 4000;

// Rotating slide content — text, the two floating stat cards, and the main
// hero image all change together every 4s.
const heroSlides = [
  {
    badge: "Calgary's Trusted Computer and Digital Services",
    heading: 'Complete Digital & IT Solutions',
    subheading:
      'From computer systems to software and web development, we provide reliable technology solutions for individuals and businesses , all delivered by one trusted technology team. We are serving Calgary and nearby areas.',
    ctaPrimary: 'Explore Our Services',
    ctaPrimaryHref: '/#services',
    ctaSecondaryLabel: '(403) 708-8214',
    ctaSecondaryHref: 'tel:+14037088214',
    stat1: { icon: Shield, value: '20+', label: 'Years of Experience', color: 'primary' },
    stat2: { icon: Star, value: '1.5k+', label: 'Happy Customers', color: 'secondary' },
    image: '/images/hero.webp',
    imageAlt: 'Complete digital and IT solutions',
  },
  {
    badge: 'Professional Computer Solutions',
    heading: 'Computer Sales & Repair',
    subheading:
      'Expert laptop and desktop repairs, hardware and software support, upgrades, data backup and recovery, and complete desktop sets for sale at competitive prices.',
    ctaPrimary: 'Computer Services',
    ctaPrimaryHref: '/services/computer',
    ctaSecondaryLabel: '(403) 493-7500',
    ctaSecondaryHref: 'tel:+14034937500',
    stat1: { icon: Wrench, value: '5k+', label: 'Devices Repaired', color: 'primary' },
    stat2: { icon: Star, value: '1.5k+', label: 'Happy Customers', color: 'secondary' },
    image: '/images/hero.webp',
    imageAlt: 'Computer sales, repair and upgrades',
  },
  {
    badge: 'Technology Built for Your Business',
    heading: 'Software & Web Development',
    subheading:
      'Custom software, web applications, professional websites, e-commerce solutions, SEO, digital marketing, and Google Ads to help your business grow.',
    ctaPrimary: 'Our Projects',
    ctaPrimaryHref: '/projects',
    ctaSecondaryLabel: 'Get a Free Quote',
    ctaSecondaryHref: '/contact',
    stat1: { icon: Monitor, value: '1k+', label: 'Web Projects', color: 'primary' },
    stat2: { icon: Shield, value: '20+', label: 'Years of Experience', color: 'secondary' },
    image: '/images/hero.webp',
    imageAlt: 'Software and web development',
  },
  {
    badge: 'Reliable Mobile Device Solutions',
    heading: 'Cellphone Sales and Repair',
    subheading:
      'Professional cellphone repairs including screens, batteries, charging ports, cameras, back glass and liquid damage, plus unlocking and cellphones for sale.',
    ctaPrimary: 'Cellphone Services',
    ctaPrimaryHref: '/services/cellphone',
    ctaSecondaryLabel: 'Get a Free Diagnose',
    ctaSecondaryHref: '/contact',
    stat1: { icon: Wrench, value: '5k+', label: 'Devices Repaired', color: 'primary' },
    stat2: { icon: Star, value: '1.5k+', label: 'Happy Customers', color: 'secondary' },
    image: '/images/hero.webp',
    imageAlt: 'Cellphone sales and repair',
  },
];

const statColorClasses = {
  primary: 'from-primary to-primary-dark',
  secondary: 'from-secondary to-secondary-dark',
};

export default function Hero() {
  // Only ONE slide is ever mounted at a time — no stacked/overlapping DOM.
  // A fresh `key` on the text block forces React to remount it on every
  // change, replaying its CSS entrance animations (fade/blur-in) each time,
  // which doubles as the "slide changed" motion cue. The stats grid that
  // used to sit below the CTAs was removed — its varying height (driven by
  // subheading length differences between slides) left a visible empty gap
  // once the tallest slide's height was reserved. Two relevant stats now
  // rotate into the floating cards on the right instead, tied to the
  // slide's own topic, so nothing on the left column depends on content
  // height beyond its own natural size.
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-28 pb-12">

      {/* ── Background ─────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Orbs — desktop only. Blur is on a static wrapper; only transform animates (GPU composited). */}
        <div className="hidden md:block absolute -top-40 -right-40 w-125 h-125 blur-3xl">
          <div className="loop-orb-a w-full h-full rounded-full bg-linear-to-br from-primary/20 via-primary/10 to-transparent" />
        </div>
        <div className="hidden md:block absolute -bottom-40 -left-40 w-[700px] h-[700px] blur-3xl">
          <div className="loop-orb-b w-full h-full rounded-full bg-linear-to-tr from-secondary/20 via-secondary/10 to-transparent" />
        </div>
        <div className="hidden md:block absolute top-1/2 left-1/2 w-150 h-150 rounded-full bg-linear-to-br from-primary/8 via-primary/3 to-transparent blur-2xl loop-center" />

        {/* Floating shapes — desktop only */}
        <div className="hidden md:block anim-fade-up anim-delay-2 absolute top-[20%] left-[10%] w-24 h-24">
          <div className="loop-float-a w-full h-full rounded-3xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10" />
        </div>
        <div className="hidden md:block anim-fade-up anim-delay-3 absolute top-[30%] right-[15%] w-16 h-16">
          <div className="loop-float-b w-full h-full rounded-full bg-linear-to-br from-secondary/10 to-secondary/5 border border-secondary/10" />
        </div>
        <div className="hidden md:block anim-fade-up anim-delay-4 absolute bottom-[25%] left-[20%] w-20 h-20">
          <div className="loop-float-c w-full h-full rounded-2xl bg-linear-to-br from-primary/5 to-secondary/5 border border-primary/5" />
        </div>

        {/* Rising dots */}
        {DOT_POSITIONS.map((pos, i) => (
          <div
            key={i}
            className="loop-dot-rise absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-secondary"
            style={{
              left: pos.left,
              top: pos.top,
              animationDuration: `${pos.dur}s`,
              animationDelay: `${pos.delay}s`,
            }}
          />
        ))}

        {/* SVG lines — desktop only */}
        <svg className="hidden md:block absolute inset-0 w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="#9f2321" stopOpacity="0" />
              <stop offset="50%"  stopColor="#9f2321" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#135180" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="animate-[loop-line-draw_4s_ease-in-out_infinite]"
            d="M0,300 Q400,200 800,300 T1600,300"
            stroke="url(#heroLineGrad)" strokeWidth="2" fill="none"
            strokeDasharray="1600"
          />
          <path
            className="animate-[loop-line-draw_4s_ease-in-out_1s_infinite]"
            d="M0,500 Q400,400 800,500 T1600,500"
            stroke="url(#heroLineGrad)" strokeWidth="2" fill="none"
            strokeDasharray="1600"
          />
        </svg>
      </div>

      {/* ── Main content ───────────────────────────────────── */}
      <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left / text column ── */}
          <div className="text-left lg:text-left">

            {/* Rotating text block. Only the active slide is ever mounted —
                key={activeSlide} forces a full remount on change so the
                fade/blur entrance animations replay each time. */}
            <div key={activeSlide}>

              {/* Badge — single line, truncated so a long badge never wraps
                  a rounded-full pill to 2 lines. */}
              <div className="anim-fade-down anim-delay-2 inline-flex items-center gap-2 max-w-full px-3.5 py-1.5 mb-5 sm:mb-7 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-md shadow-primary/5">
                <span className="loop-spin inline-flex shrink-0">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                </span>
                <span className="text-[11px] sm:text-sm font-semibold text-gradient truncate">
                  {slide.badge}
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6">
                <span className="anim-fade-left anim-delay-3 block text-gradient">
                  {slide.heading}
                </span>
              </h1>

              {/* Subheading */}
              <p className="anim-blur-up anim-delay-9 text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
                {slide.subheading}
              </p>

              {/* CTAs — stacked on mobile, side by side on sm+ */}
              <div className="anim-fade-up anim-delay-11 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center lg:justify-start mb-8 sm:mb-10 lg:mb-0">
                <Link href={slide.ctaPrimaryHref}>
                  <Button
                    size="default"
                    icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                    className="w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-primary/20"
                  >
                    {slide.ctaPrimary}
                  </Button>
                </Link>
                <Link href={slide.ctaSecondaryHref}>
                  <Button
                    variant="secondary"
                    size="default"
                    icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                    iconPosition="left"
                    className="w-full sm:w-auto text-sm sm:text-base"
                  >
                    {slide.ctaSecondaryLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right / visual column ── */}
          <div className="anim-fade-right anim-delay-5 relative">
            <div className="relative">

              {/* Floating stat card 1 — hidden on mobile to avoid overlap.
                  Only the active slide's stat1 is ever mounted;
                  key={activeSlide} forces a remount so it fades/scales in
                  fresh each rotation. loop-card-a's float animation stays
                  on the outer wrapper, never mixed with the remount-driven
                  entrance, per the entrance/loop separation rule used
                  across this site. */}
              <div className="hidden sm:block absolute -top-4 -left-8 z-30">
                <div className="loop-card-a">
                  <div key={`stat1-${activeSlide}`} className="anim-scale-in bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${statColorClasses[slide.stat1.color]} flex items-center justify-center shadow-lg shrink-0`}>
                        <slide.stat1.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-gradient leading-none">{slide.stat1.value}</div>
                        <div className="text-xs text-muted-foreground">{slide.stat1.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 — hidden on mobile */}
              <div className="hidden sm:block absolute -bottom-8 -right-4 z-30">
                <div className="loop-card-b">
                  <div key={`stat2-${activeSlide}`} className="anim-scale-in bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${statColorClasses[slide.stat2.color]} flex items-center justify-center shadow-lg shrink-0`}>
                        <slide.stat2.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-gradient leading-none">{slide.stat2.value}</div>
                        <div className="text-xs text-muted-foreground">{slide.stat2.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile stat badges — shown only on mobile, inside the card area */}
              <div className="sm:hidden absolute top-3 left-3 z-30">
                <div key={`m-stat1-${activeSlide}`} className="anim-scale-in bg-white/90 backdrop-blur-xl rounded-xl px-3 py-2 shadow-lg border border-white/50 flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${statColorClasses[slide.stat1.color]} flex items-center justify-center shrink-0`}>
                    <slide.stat1.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gradient leading-tight">{slide.stat1.value}</div>
                    <div className="text-[10px] text-muted-foreground">{slide.stat1.label}</div>
                  </div>
                </div>
              </div>
              <div className="sm:hidden absolute bottom-3 right-3 z-30">
                <div key={`m-stat2-${activeSlide}`} className="anim-scale-in bg-white/90 backdrop-blur-xl rounded-xl px-3 py-2 shadow-lg border border-white/50 flex items-center gap-2">
                  <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${statColorClasses[slide.stat2.color]} flex items-center justify-center shrink-0`}>
                    <slide.stat2.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gradient leading-tight">{slide.stat2.value}</div>
                    <div className="text-[10px] text-muted-foreground">{slide.stat2.label}</div>
                  </div>
                </div>
              </div>

              {/* Main device showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-white to-gray-50 border border-white/50">
                <div className="aspect-4/3 p-6 sm:p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-md">

                    {/* Laptop — only the active slide's image is mounted;
                        key={activeSlide} forces a remount so it fades in
                        fresh each rotation via the anim-blur-up class. */}
                    <div className="anim-fade-up anim-delay-8 relative z-10">
                      <div className="bg-gray-900 rounded-t-2xl p-3">
                        <div className="flex gap-1.5 mb-2">
                          <div className="loop-blink   w-3 h-3 rounded-full bg-red-400" />
                          <div className="loop-blink-2 w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="loop-blink-3 w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10">
                          <Image
                            key={activeSlide}
                            src={slide.image}
                            alt={slide.imageAlt}
                            width={800}
                            height={500}
                            priority={activeSlide === 0}
                            className="anim-blur-up w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-800 h-4 rounded-b-lg" />
                      <div className="bg-gray-700 h-1 mx-12 rounded-b" />
                    </div>

                    {/* Computer */}
                    <div className="anim-fade-right anim-delay-10 absolute -right-6 top-8 w-24 sm:w-28 z-20">
                      <div className="loop-bob-up">
                        <div className="bg-gray-900 rounded-xl p-1.5 shadow-xl">
                          <div className="aspect-3/4 rounded-lg overflow-hidden">
                            <Image
                              src="/images/hero.webp"
                              alt="Computer systems design"
                              width={400}
                              height={533}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="anim-fade-left anim-delay-12 absolute -left-4 bottom-4 w-16 sm:w-20 z-20">
                      <div className="loop-bob-down">
                        <div className="bg-gray-900 rounded-2xl p-1 shadow-xl">
                          <div className="aspect-9/19 rounded-xl overflow-hidden">
                            <Image
                              src="/images/hero-small-mobile.webp"
                              alt="Mobile device repair"
                              width={300}
                              height={633}
                              loading="lazy"
                              className="w-full h-full object-cover opacity-90"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              </div>

              {/* Glow ring — desktop only */}
              <div className="hidden md:block loop-orb-spin absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] rounded-full bg-linear-to-r from-primary/15 via-transparent to-secondary/15 blur-3xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="anim-scroll-reveal anim-delay-20 absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium tracking-wide">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <div className="loop-scroll-dot w-1.5 h-1.5 rounded-full bg-linear-to-b from-primary to-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
}
