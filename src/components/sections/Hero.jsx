'use client';

import {
  ArrowRight,
  Phone,
  Sparkles,
  Zap,
  Shield,
  Monitor,
  Smartphone,
  Wrench,
  Star,
  CloudCog,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

const DOT_POSITIONS = [
  { left: '15%', top: '35%', dur: 4.0, delay: 0 },
  { left: '50%', top: '45%', dur: 5.2, delay: 0.8 },
  { left: '82%', top: '38%', dur: 4.8, delay: 0.4 },
];

export default function Hero({ data }) {
  const d = data || {};
  const defaultIcons = [Wrench, Monitor, Star, Shield, Zap, Sparkles, CloudCog];
  const stats = d.stats && Array.isArray(d.stats)
    ? d.stats.map((stat, i) => ({
        value: stat.value,
        label: stat.label,
        icon: defaultIcons[i % defaultIcons.length],
      }))
    : [
        { value: '500+',  label: 'Devices Repaired', icon: Wrench },
        { value: '50+',   label: 'Web Projects',      icon: Monitor },
        { value: '1000+', label: 'Happy Customers',   icon: Star },
        { value: '24/7',  label: 'Support',           icon: Shield },
      ];

  const statDelays = ['anim-delay-14', 'anim-delay-15', 'anim-delay-16', 'anim-delay-17'];

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

            {/* Badge */}
            <div className="anim-fade-down anim-delay-2 inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 sm:mb-7 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-md shadow-primary/5">
              <span className="loop-spin inline-flex">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
              </span>
              <span className="text-[11px] sm:text-sm font-semibold text-gradient">
                {d.badge || "Calgary's Trusted Tech Partner"}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-4 sm:mb-6">
              <span className="anim-fade-left anim-delay-3 block text-foreground">
                {d.headingLine1 || 'Your One-Stop'}
              </span>
              <span className="anim-fade-left anim-delay-5 block text-gradient">
                {d.headingLine2 || 'Tech Solution'}
              </span>
              <span className="anim-fade-left anim-delay-7 block text-foreground">
                {d.headingLine3 || 'Center'}
              </span>
            </h1>

            {/* Subheading */}
            <p className="anim-blur-up anim-delay-9 text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg lg:mx-0 mb-6 sm:mb-8 leading-relaxed">
              {d.subheading || 'Expert computer & cell phone repair, quality device sales, and professional web development services. All under one roof in Calgary, Alberta.'}
            </p>

            {/* CTAs — stacked on mobile, side by side on sm+ */}
            <div className="anim-fade-up anim-delay-11 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center lg:justify-start mb-8 sm:mb-10 lg:mb-0">
              <Link href="/contact">
                <Button
                  size="default"
                  icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                  className="w-full sm:w-auto text-sm sm:text-base shadow-lg shadow-primary/20"
                >
                  {d.ctaPrimary || 'Get Free Quote'}
                </Button>
              </Link>
              <a href={`tel:${d.phone || '+14035550123'}`}>
                <Button
                  variant="secondary"
                  size="default"
                  icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5" />}
                  iconPosition="left"
                  className="w-full sm:w-auto text-sm sm:text-base"
                >
                  {d.ctaSecondary || '(403) 555-0123'}
                </Button>
              </a>
            </div>

            {/* Stats — horizontal scrolling row on mobile, grid on sm+ */}
            <div className="anim-fade-up anim-delay-13 mt-8 sm:mt-10 pt-6 sm:pt-10 lg:py-6 border-t border-primary/10">
              {/* Mobile: 4-col inline row, no card box */}
              <div className="grid grid-cols-4 gap-2 sm:hidden">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={stat.label} className={`anim-fade-up ${statDelays[index]} text-center`}>
                      <StatIcon className="w-4 h-4 text-primary mx-auto mb-1" />
                      <div className="text-lg font-bold text-gradient leading-none mb-1">{stat.value}</div>
                      <div className="text-[9px] text-muted-foreground leading-tight">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              {/* sm+: card grid */}
              <div className="hidden sm:grid sm:grid-cols-4 gap-3 py-2 lg:max-w-full overflow-hidden">
                {stats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className={`anim-fade-up ${statDelays[index]} p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 shadow-md`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <StatIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</span>
                      </div>
                      <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right / visual column ── */}
          <div className="anim-fade-right anim-delay-5 relative">
            <div className="relative">

              {/* Floating card 1 — hidden on mobile to avoid overlap */}
              <div className="hidden sm:block anim-fade-left anim-delay-10 absolute -top-4 -left-8 z-30">
                <div className="loop-card-a bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shrink-0">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{d.floatingCard1Title || 'Computer Repair'}</div>
                      <div className="text-xs text-muted-foreground">{d.floatingCard1Subtitle || 'Same-day service'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card 2 — hidden on mobile */}
              <div className="hidden sm:block anim-fade-right anim-delay-12 absolute -bottom-8 -right-4 z-30">
                <div className="loop-card-b bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-secondary to-secondary-dark flex items-center justify-center shadow-lg shrink-0">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">{d.floatingCard2Title || 'Phone Repair'}</div>
                      <div className="text-xs text-muted-foreground">{d.floatingCard2Subtitle || 'While you wait'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zap badge — hidden on mobile */}
              <div className="hidden sm:block anim-scale-in anim-delay-14 absolute top-1/4 -right-12 z-30">
                <div className="loop-zap bg-linear-to-br from-primary to-secondary rounded-full p-4 shadow-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Mobile service badges — shown only on mobile, inside the card area */}
              <div className="sm:hidden absolute top-3 left-3 z-30">
                <div className="bg-white/90 backdrop-blur-xl rounded-xl px-3 py-2 shadow-lg border border-white/50 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shrink-0">
                    <Monitor className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">{d.floatingCard1Title || 'Computer Repair'}</div>
                    <div className="text-[10px] text-muted-foreground">{d.floatingCard1Subtitle || 'Same-day'}</div>
                  </div>
                </div>
              </div>
              <div className="sm:hidden absolute bottom-3 right-3 z-30">
                <div className="bg-white/90 backdrop-blur-xl rounded-xl px-3 py-2 shadow-lg border border-white/50 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-linear-to-br from-secondary to-secondary-dark flex items-center justify-center shrink-0">
                    <Smartphone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">{d.floatingCard2Title || 'Phone Repair'}</div>
                    <div className="text-[10px] text-muted-foreground">{d.floatingCard2Subtitle || 'While you wait'}</div>
                  </div>
                </div>
              </div>

              {/* Main device showcase */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-white to-gray-50 border border-white/50">
                <div className="aspect-4/3 p-6 sm:p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-md">

                    {/* Laptop */}
                    <div className="anim-fade-up anim-delay-8 relative z-10">
                      <div className="bg-gray-900 rounded-t-2xl p-3">
                        <div className="flex gap-1.5 mb-2">
                          <div className="loop-blink   w-3 h-3 rounded-full bg-red-400" />
                          <div className="loop-blink-2 w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="loop-blink-3 w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="aspect-video rounded-lg overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10">
                          <Image
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75"
                            alt="Web development dashboard"
                            width={800}
                            height={500}
                            priority
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-800 h-4 rounded-b-lg" />
                      <div className="bg-gray-700 h-1 mx-12 rounded-b" />
                    </div>

                    {/* Tablet */}
                    <div className="anim-fade-right anim-delay-10 absolute -right-6 top-8 w-24 sm:w-28 z-20">
                      <div className="loop-bob-up">
                        <div className="bg-gray-900 rounded-xl p-1.5 shadow-xl">
                          <div className="aspect-3/4 rounded-lg overflow-hidden">
                            <Image
                              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=75"
                              alt="Mobile app interface"
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
                              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=75"
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
