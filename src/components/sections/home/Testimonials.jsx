'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const defaultTestimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=75',
    content: 'Madny Digital fixed my laptop in just a few hours when another shop said it would take a week. Their expertise and speed saved my business.',
    rating: 5,
    tag: 'Computer Repair',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=75',
    content: 'Got my iPhone screen replaced while I waited. The quality is amazing and the price was very fair. The team is professional and friendly.',
    rating: 5,
    tag: 'Phone Repair',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=75',
    content: 'They built an amazing website for my restaurant and helped me set up online ordering. Beautiful and has brought in so many new customers.',
    rating: 5,
    tag: 'Web Development',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'IT Professional',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=75',
    content: "I bought a refurbished MacBook from Madny and it's been running perfectly for over a year. Great prices on quality devices.",
    rating: 5,
    tag: 'Device Sales',
  },
  {
    id: 5,
    name: 'Jessica Parker',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=75',
    content: 'The web development team understood my vision perfectly. My portfolio site is stunning and loads incredibly fast. Exceptional work!',
    rating: 5,
    tag: 'Web Development',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=75',
    content: 'Unlocked my phone quickly and professionally. Also got great advice on the best accessories for my business needs. Highly recommend!',
    rating: 5,
    tag: 'Device Services',
  },
];

/* Signal bars widget */
function SignalBars() {
  return (
    <div className="flex items-end gap-[3px] h-4">
      <div className="testi-bar-1 w-1 h-2 bg-primary rounded-sm" />
      <div className="testi-bar-2 w-1 h-3 bg-primary rounded-sm" />
      <div className="testi-bar-3 w-1 h-4 bg-primary rounded-sm" />
      <div className="testi-bar-4 w-1 h-3 bg-primary/60 rounded-sm" />
    </div>
  );
}

/* Corner bracket accent */
function CornerBracket({ position }) {
  const pos = {
    tl: 'top-0 left-0 border-t border-l',
    tr: 'top-0 right-0 border-t border-r',
    bl: 'bottom-0 left-0 border-b border-l',
    br: 'bottom-0 right-0 border-b border-r',
  }[position];
  return (
    <div className={`testi-corner absolute w-3 h-3 ${pos} border-primary/60`} />
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="w-[320px] md:w-[360px] mx-3 shrink-0 self-stretch">
      <div className="testi-card relative bg-white/80 backdrop-blur-xl border border-black/8 rounded-2xl p-6 overflow-hidden h-full flex flex-col">

        {/* Corner brackets */}
        <CornerBracket position="tl" />
        <CornerBracket position="tr" />
        <CornerBracket position="bl" />
        <CornerBracket position="br" />

        {/* Scan line */}
        <div className="testi-scan absolute inset-x-0 top-0" style={{ height: '1px' }} />

        {/* Top row — tag + signal */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[9px] font-black uppercase tracking-[0.25em] text-primary/80 px-2 py-1 rounded border border-primary/20 bg-primary/8">
            {testimonial.tag || 'Client'}
          </span>
          <SignalBars />
        </div>

        {/* Quote text */}
        <p className="flex-1 text-foreground/70 text-sm leading-relaxed mb-6 font-light">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Divider */}
        <div className="h-px bg-foreground/8 mb-5" />

        {/* Author row */}
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={40}
              height={40}
              loading="lazy"
              className="testi-avatar w-10 h-10 rounded-full object-cover"
            />
            {/* Live dot */}
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-white testi-live-dot" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-foreground text-sm font-bold leading-tight truncate">{testimonial.name}</div>
            <div className="text-muted-foreground text-[11px] truncate">{testimonial.role}</div>
          </div>
          {/* Stars */}
          <div className="flex gap-0.5 shrink-0">
            {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
              <Star key={i} className="w-3 h-3 text-primary fill-primary" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ testimonials, reverse }) {
  const items = [...testimonials, ...testimonials];
  return (
    <div className="testimonial-marquee-track overflow-hidden">
      <div className={reverse ? 'testimonial-marquee-rev' : 'testimonial-marquee-fwd'}>
        {items.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

/* Stat chip shown in the header */
function StatChip({ value, label, delay, inView }) {
  return (
    <div
      data-inview={inView ? 'true' : ''}
      className={`reveal-count ${delay} text-center`}
    >
      <div className="text-4xl md:text-5xl font-black text-gradient leading-none mb-1">{value}</div>
      <div className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Testimonials({ data }) {
  const d = data || {};
  const testimonials = (d.items ?? defaultTestimonials).map((t, i) => ({ ...t, id: t.id || i + 1 }));
  const [sectionRef, inView] = useInView('-60px');

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(159,35,33,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(159,35,33,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />


      <Container className="relative z-10">

        {/* ── Header ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-20">

          {/* Left */}
          <div className="lg:col-span-7">
            {/* Live badge */}
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-7"
            >
              <span className="testi-live-dot w-2 h-2 rounded-full bg-primary inline-block" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                {d.badge || 'Client Signals'}
              </span>
            </div>

            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-foreground"
            >
              {d.titleLine1 || 'What They'}<br />
              <span className="text-gradient">{d.titleLine2 || 'Say About Us'}</span>
            </h2>
          </div>

          {/* Right — stats */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-6">
              <StatChip value={d.stat1Value || '500+'} label={d.stat1Label || 'Clients'} delay="anim-delay-3" inView={inView} />
              <StatChip value={d.stat2Value || '4.9'} label={d.stat2Label || 'Avg Rating'} delay="anim-delay-4" inView={inView} />
              <StatChip value={d.stat3Value || '98%'} label={d.stat3Label || 'Satisfaction'} delay="anim-delay-5" inView={inView} />
            </div>
          </div>
        </div>
      </Container>

      {/* ── Marquee rows ──────────────────────────────── */}
      <div className="space-y-5">
        <MarqueeRow testimonials={testimonials} reverse={false} />
        <MarqueeRow testimonials={testimonials} reverse={true} />
      </div>

      {/* ── Footer label ──────────────────────────────── */}
      <Container className="relative z-10">
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-up anim-delay-3 mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-foreground/10 max-w-24" />
          <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.3em]">
            Trusted by {d.bottomCount || '500+'} {d.bottomText || 'customers in Calgary'}
          </p>
          <div className="h-px flex-1 bg-foreground/10 max-w-24" />
        </div>
      </Container>
    </section>
  );
}
