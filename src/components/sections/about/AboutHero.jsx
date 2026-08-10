'use client';

import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AboutHero({ data }) {
  const d = data || {};

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-24">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Orb top-right — hidden on mobile */}
        <div className="hidden md:block absolute -top-[20%] -right-[10%] w-[60%] h-[60%]">
          <div className="loop-orb-a w-full h-full rounded-full bg-linear-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
        </div>
        {/* Orb bottom-left — hidden on mobile */}
        <div className="hidden md:block absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%]">
          <div className="loop-orb-b w-full h-full rounded-full bg-linear-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl" />
        </div>
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#9f2321 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="anim-scale-in anim-delay-1 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary loop-spin" />
            <span className="text-sm font-black text-gradient uppercase tracking-widest">
              {d.badge || 'About Madny Digital'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            <span className="anim-fade-up anim-delay-2 block text-foreground">
              {d.headingPart1 || 'Crafting Digital'}
            </span>
            <span className="anim-fade-up anim-delay-4 block loop-gradient-text">
              {d.headingPart2 || 'Masterpieces'}
            </span>
          </h1>

          {/* Description */}
          <p className="anim-blur-up anim-delay-5 text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {d.description || 'We are a team of visionary designers, technical experts, and strategic thinkers dedicated to transforming businesses through exceptional digital experiences.'}
          </p>

          {/* CTAs */}
          <div className="anim-fade-up anim-delay-7 flex flex-wrap justify-center gap-6">
            <div className="hover-lift">
              <Link href="/projects">
                <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-black group">
                  <span className="flex items-center gap-2">
                    {d.ctaPrimary || 'Our Portfolio'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
            <div className="hover-lift">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="h-16 px-10 rounded-2xl text-lg font-black group bg-white/50 backdrop-blur-xl border-gray-200">
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    {d.ctaSecondary || 'Contact Us'}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
