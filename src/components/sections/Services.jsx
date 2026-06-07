'use client';

import Link from 'next/link';
import {
  Monitor, Smartphone, ShoppingBag, Code2,
  ArrowUpRight, Wrench, Unlock, Cpu, Star,
  Check,
} from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const servicesMeta = {
  'computer-repair': {
    icon: Monitor,
    secondaryIcon: Wrench,
    gradient: 'from-primary to-primary-dark',
    panelGrad: 'linear-gradient(135deg, #9f2321 0%, #7a1b19 100%)',
    accentColor: '#9f2321',
  },
  'cell-phone-repair': {
    icon: Smartphone,
    secondaryIcon: Unlock,
    gradient: 'from-secondary to-secondary-dark',
    panelGrad: 'linear-gradient(135deg, #135180 0%, #0e3d5f 100%)',
    accentColor: '#135180',
  },
  'device-sales': {
    icon: ShoppingBag,
    secondaryIcon: Cpu,
    gradient: 'from-primary to-secondary',
    panelGrad: 'linear-gradient(135deg, #9f2321 0%, #135180 100%)',
    accentColor: '#9f2321',
  },
  'web-development': {
    icon: Code2,
    secondaryIcon: Monitor,
    gradient: 'from-secondary to-primary',
    panelGrad: 'linear-gradient(135deg, #135180 0%, #9f2321 100%)',
    accentColor: '#135180',
  },
};

const defaultServices = [
  {
    id: 'computer-repair',
    title: 'Computer Repair',
    shortDesc: 'Expert diagnostics & repair',
    description: 'Professional computer repair for all brands. Hardware issues, software problems, virus removal to data recovery — fixed with quick turnaround.',
    features: ['Hardware Repair', 'Virus Removal', 'Data Recovery', 'Upgrades'],
  },
  {
    id: 'cell-phone-repair',
    title: 'Cell Phone Repair',
    shortDesc: 'Screen repair & carrier unlock',
    description: 'Fast and reliable cell phone repair. Screen replacements, battery changes, water damage repair, and professional carrier unlocking for all models.',
    features: ['Screen Repair', 'Battery Replacement', 'Unlocking', 'Water Damage'],
  },
  {
    id: 'device-sales',
    title: 'Device Sales',
    shortDesc: 'Quality devices & accessories',
    description: 'New and refurbished mobiles, laptops, and computers. Quality accessories including cases, chargers, and peripherals at competitive prices.',
    features: ['New Devices', 'Refurbished', 'Accessories', 'Best Prices'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Custom websites & apps',
    description: 'From stunning business websites to powerful e-commerce platforms. Modern, responsive designs built for performance and results.',
    features: ['Custom Websites', 'E-Commerce', 'SEO Optimized', 'Responsive'],
  },
];

/* ── Progress bar that fills over 5s ── */
function ProgressBar({ active, duration }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
      <div
        key={active}
        className="srv-progress-bar h-full bg-white/60"
        style={{ animationDuration: `${duration}ms` }}
      />
    </div>
  );
}

/* ── Active Service Panel ── */
function ServicePanel({ service, paused }) {
  const meta = servicesMeta[service.id] || servicesMeta['web-development'];
  const Icon = meta.icon;

  return (
    <div
      key={service.id}
      className="srv-panel h-full rounded-[32px] overflow-hidden relative flex flex-col justify-between p-8 sm:p-10 lg:p-12 min-h-105 sm:min-h-125"
      style={{ background: meta.panelGrad }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
        aria-hidden="true"
      />

      {/* Orbiting decorations */}
      <div className="absolute top-1/2 right-16 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <div className="relative w-0 h-0">
          <div className="srv-orbit-dot absolute w-3 h-3 rounded-full bg-white/30" />
          <div className="srv-orbit-dot-2 absolute w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Large bg icon */}
      <div className="absolute -bottom-8 -right-8 opacity-[0.08] pointer-events-none" aria-hidden="true">
        <Icon className="w-48 h-48 sm:w-64 sm:h-64 text-white" />
      </div>

      {/* Top: icon + tag */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-8 sm:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-xl">
            <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/50 border border-white/20 px-3 py-1.5 rounded-full">
            {service.shortDesc}
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 sm:mb-5">
          {service.title}
        </h3>

        <p className="text-white/70 leading-relaxed text-sm sm:text-base mb-6 sm:mb-8 max-w-sm">
          {service.description}
        </p>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
          {service.features?.map(f => (
            <div key={f} className="srv-tag flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/12 border border-white/20 backdrop-blur-sm">
              <Check className="w-3 h-3 text-white/70 shrink-0" />
              <span className="text-white text-xs font-semibold">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10">
        <div className="h-px bg-white/15 mb-6 sm:mb-8" />
        <Link
          href={`/services/${service.id}`}
          className="srv-cta inline-flex items-center gap-3 group"
        >
          <span className="text-sm font-black uppercase tracking-[0.2em] text-white">
            View Service
          </span>
          <div className="srv-cta-arrow w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </Link>
      </div>

      {/* Auto-play progress bar */}
      {!paused && <ProgressBar active={service.id} duration={5000} />}
    </div>
  );
}

/* ── Service list row ── */
function ServiceListItem({ service, index, isActive, onClick }) {
  const meta = servicesMeta[service.id] || servicesMeta['web-development'];
  const Icon = meta.icon;

  return (
    <button
      onClick={() => onClick(index)}
      className={`srv-list-item w-full text-left group ${isActive ? 'is-active' : ''}`}
    >
      <div className={`flex items-center gap-4 sm:gap-5 py-5 sm:py-6 border-b border-foreground/8 transition-all duration-200 ${isActive ? 'border-primary/20' : ''}`}>
        {/* Indicator bar */}
        <div className="srv-indicator h-14 shrink-0" />

        {/* Number */}
        <span className={`srv-num text-xs font-black tabular-nums shrink-0 transition-colors duration-200 ${isActive ? 'text-primary' : 'text-muted-foreground/40'}`}>
          0{index + 1}
        </span>

        {/* Icon */}
        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? `bg-linear-to-br ${meta.gradient} shadow-md` : 'bg-foreground/5'}`}>
          <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-muted-foreground'}`} />
        </div>

        {/* Title + desc */}
        <div className="flex-1 min-w-0">
          <div className={`font-black text-base sm:text-lg leading-tight transition-colors duration-200 ${isActive ? 'text-foreground' : 'text-foreground/60'}`}>
            {service.title}
          </div>
          <div className={`text-xs mt-0.5 transition-colors duration-200 ${isActive ? 'text-primary' : 'text-muted-foreground/50'}`}>
            {service.shortDesc}
          </div>
        </div>

        {/* Arrow */}
        <ArrowUpRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? 'text-primary opacity-100 translate-x-0 translate-y-0' : 'text-muted-foreground/20 -translate-x-1 translate-y-1'}`} />
      </div>
    </button>
  );
}

/* ── Main export ── */
export default function Services({ data }) {
  const [sectionRef, inView] = useInView('-80px');
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const d = data || {};
  const services = (d.items ?? defaultServices).map(item => ({
    ...item,
    ...(servicesMeta[item.id] || servicesMeta['web-development']),
  }));

  const advance = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % services.length);
  }, [services.length]);

  /* Auto-rotate every 5s, pause on hover/manual click */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 5000);
    return () => clearInterval(timerRef.current);
  }, [paused, advance]);

  const handleManualSelect = (index) => {
    setActiveIndex(index);
    /* Reset the timer so next auto-advance is 5s from now */
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 5000);
  };

  const activeService = services[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <Container className="relative z-10">

        {/* ── Section header ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
            >
              <Star className="w-3 h-3 fill-current" />
              {d.badge || 'Our Services'}
            </div>
            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tighter"
            >
              <span className="block text-foreground">{d.titleLine1 || 'What We'}</span>
              <span className="block text-gradient">{d.titleLine2 || 'Offer'}</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-right anim-delay-3 text-muted-foreground leading-relaxed"
            >
              {d.subtitle || 'From device repairs to web solutions — comprehensive tech services to keep you connected and your business growing.'}
            </p>
          </div>
        </div>

        {/* ── Shared interactive layout (both mobile & desktop) ── */}
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-up anim-delay-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Mobile: panel on top, list below */}
          <div className="flex flex-col gap-6 lg:hidden">
            {/* Panel */}
            <ServicePanel service={activeService} paused={paused} />

            {/* Service selector list */}
            <div className="flex flex-col">
              {services.map((service, i) => (
                <ServiceListItem
                  key={service.id}
                  service={service}
                  index={i}
                  isActive={activeIndex === i}
                  onClick={handleManualSelect}
                />
              ))}
            </div>
          </div>

          {/* Desktop: split 5/7 grid */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: list */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {services.map((service, i) => (
                <ServiceListItem
                  key={service.id}
                  service={service}
                  index={i}
                  isActive={activeIndex === i}
                  onClick={handleManualSelect}
                />
              ))}
            </div>

            {/* Right: panel */}
            <div className="lg:col-span-7">
              <ServicePanel service={activeService} paused={paused} />
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-expand-x anim-delay-10 mt-16 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"
        />

      </Container>
    </section>
  );
}
