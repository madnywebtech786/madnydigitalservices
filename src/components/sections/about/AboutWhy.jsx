'use client';

import { Zap, TrendingUp, Shield, Star, ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const cardIcons = [Zap, TrendingUp, Shield];

function BentoCard({ item, index, inView, className = '' }) {
  if (!item) return null;
  const Icon = cardIcons[index % cardIcons.length];
  const delays = ['anim-delay-3', 'anim-delay-5', 'anim-delay-7'];

  return (
    <div
      data-inview={inView ? 'true' : ''}
      className={`reveal-up ${delays[index]} bento-card group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[40px] p-8 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-500"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        aria-hidden="true"
      />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="bento-icon w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col items-end">
            <div className="text-4xl font-black text-gradient leading-none">{item.metric}</div>
            <div className="text-[10px] font-black uppercase text-muted-foreground tracking-tighter mt-1">{item.benefit}</div>
          </div>
        </div>

        <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {item.description}
        </p>

        <div className="bento-cta mt-auto pt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
          Explore
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}

export default function AboutWhy({ data }) {
  const d = data || {};
  const features = d.features || [];

  const [sectionRef, inView] = useInView('-60px');

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
   

      <Container className="relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-left anim-delay-1 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 font-black text-primary uppercase tracking-[0.2em] text-[10px]"
            >
              <Star className="w-3 h-3 fill-current" />
              {d.badge || 'Why Choose Us'}
            </div>
            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter"
            >
              {d.title || 'The Madny Advantage'}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-right anim-delay-3 text-xl text-muted-foreground leading-relaxed"
            >
              {d.description}
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BentoCard item={features[0]} index={0} inView={inView} className="md:col-span-2 lg:col-span-2 aspect-video md:aspect-auto" />
          <BentoCard item={features[1]} index={1} inView={inView} className="lg:h-full" />
          <BentoCard item={features[2]} index={2} inView={inView} />

          {/* Banner card */}
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-up anim-delay-9 md:col-span-2 bg-linear-to-br from-primary to-secondary rounded-[40px] p-12 flex items-center justify-between text-white overflow-hidden relative group"
          >
            <div className="relative z-10">
              <div className="text-5xl font-black mb-4 leading-none italic">UNMATCHED<br />DYNAMICS</div>
              <p className="opacity-80 max-w-sm">Our creative engine is fueled by data and refined by aesthetic intuition.</p>
            </div>
            {/* Spinning star — no entrance on same element */}
            <div className="loop-spin-slow absolute -right-20 -top-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Star className="w-80 h-80 fill-current" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
