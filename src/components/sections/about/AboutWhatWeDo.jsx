'use client';

import { Cpu, Code2, Globe, Wrench, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const pillarIcons = [Cpu, Code2, Globe, Wrench];

const defaultPillars = [
  {
    title: 'Computer Systems',
    description: 'Computer systems design, hardware and software solutions, upgrades, data services, and technical support.',
  },
  {
    title: 'Software Development',
    description: 'Custom software, web applications, database development, testing, maintenance, and business solutions.',
  },
  {
    title: 'Web & Digital Solutions',
    description: 'Website development, e-commerce, custom web portals, SEO, digital marketing, and Google Ads.',
  },
  {
    title: 'Sales & Repair',
    description: 'Computer and cellphone sales, diagnostics, maintenance, upgrades, data recovery, and professional device repairs.',
  },
];

const cardDelays = ['anim-delay-4', 'anim-delay-6', 'anim-delay-8', 'anim-delay-10'];

export default function AboutWhatWeDo({ data }) {
  const d = data || {};
  const pillars = d.pillars || defaultPillars;
  const [lightCards, panelCard] = [pillars.slice(0, 3), pillars[3]];
  const PanelIcon = pillarIcons[3];

  const [sectionRef, inView] = useInView('-60px');

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span
            data-inview={inView ? 'true' : ''}
            className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-primary uppercase tracking-wider text-xs"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {d.badge || 'What We Do'}
          </span>
          <h2
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-2 text-4xl md:text-5xl font-black leading-[1.05] tracking-tight"
          >
            {d.title || 'Complete Technology Solutions Under One Roof'}
          </h2>
        </div>

        {/* Bento — 3 light cards + 1 solid gradient panel carrying the
            4th pillar, 2x2 on desktop */}
        <div className="grid sm:grid-cols-2 gap-5">
          {lightCards.map((pillar, idx) => {
            const Icon = pillarIcons[idx];
            return (
              <div
                key={pillar.title}
                data-inview={inView ? 'true' : ''}
                className={`reveal-up ${cardDelays[idx]} wwd-card rounded-3xl bg-card border border-border p-7 md:p-8`}
              >
                <div className="wwd-icon w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                  <Icon className="w-5.5 h-5.5 text-primary" />
                </div>
                <h3 className="text-lg font-black text-foreground mb-2.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}

          {/* Gradient panel — carries the 4th pillar */}
          <div
            data-inview={inView ? 'true' : ''}
            className={`reveal-up ${cardDelays[3]} wwd-panel relative rounded-3xl bg-gradient-primary p-7 md:p-8 overflow-hidden`}
          >
            <div className="wwd-panel-blob absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mb-8">
                <PanelIcon className="w-5.5 h-5.5 text-white" />
              </div>
              <h3 className="text-lg font-black text-white mb-2.5 leading-snug">
                {panelCard.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {panelCard.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
