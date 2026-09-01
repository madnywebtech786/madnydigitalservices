'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const accentClasses = {
  primary: {
    badge: 'bg-primary/10 border-primary/20 text-primary',
    bar: 'bg-primary',
    dot: 'bg-primary',
    gradient: 'from-primary to-primary-dark',
  },
  secondary: {
    badge: 'bg-secondary/10 border-secondary/20 text-secondary',
    bar: 'bg-secondary',
    dot: 'bg-secondary',
    gradient: 'from-secondary to-secondary-dark',
  },
  tertiary: {
    badge: 'bg-tertiary/10 border-tertiary/20 text-tertiary',
    bar: 'bg-tertiary',
    dot: 'bg-tertiary',
    gradient: 'from-tertiary to-tertiary-dark',
  },
  ink: {
    badge: 'bg-foreground/8 border-foreground/15 text-foreground',
    bar: 'bg-foreground',
    dot: 'bg-foreground',
    gradient: 'from-foreground to-foreground/70',
  },
};

const staggerDelays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4', 'anim-delay-5', 'anim-delay-6', 'anim-delay-7', 'anim-delay-8', 'anim-delay-9', 'anim-delay-10'];

/**
 * Card-grid index page for a services-nav node that has children (a
 * category like "Computer", or a subcategory like "Repair"). Replaces the
 * plain pill-link grid previously rendered by ServiceStubClient's
 * `children` branch — each card shows the child's name, a short
 * description (from its serviceContent.js entry when one exists, else a
 * generic fallback), and an arrow affordance.
 *
 * @param {{name: string, href: string}[]} breadcrumb - ordered crumb list.
 * @param {string} title - current node's display name.
 * @param {string} accent - one of 'primary' | 'secondary' | 'tertiary' | 'ink'.
 * @param {{name: string, href: string, description: string}[]} items - child
 *   nodes to render as cards.
 */
export default function ServiceIndexClient({ breadcrumb, title, accent = 'primary', items = [] }) {
  const [heroRef, heroInView] = useInView('-60px');
  const [gridRef, gridInView] = useInView('-80px');

  const colors = accentClasses[accent] || accentClasses.primary;

  return (
    <main className="pt-20 min-h-screen page-flow">
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

          <div className="max-w-3xl mb-14">
            <span
              data-inview={heroInView ? 'true' : ''}
              className={`reveal-scale anim-delay-2 inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.15em] rounded-full border ${colors.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              Services
            </span>
            <h1
              data-inview={heroInView ? 'true' : ''}
              className="reveal-blur anim-delay-3 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            >
              {title}
            </h1>
            <div
              data-inview={heroInView ? 'true' : ''}
              className={`reveal-expand-x anim-delay-4 w-16 h-1 rounded-full ${colors.bar} mb-6`}
            />
            <p
              data-inview={heroInView ? 'true' : ''}
              className="reveal-up anim-delay-4 text-lg text-muted-foreground leading-relaxed"
            >
              Explore our {title.toLowerCase()} services below, or contact us for pricing and availability.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-16 items-stretch auto-rows-fr"
          >
            {items.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                data-inview={gridInView ? 'true' : ''}
                className={`reveal-up ${staggerDelays[index % staggerDelays.length]} svc-feature-card group flex flex-col h-full w-full p-7 rounded-2xl bg-white border border-foreground/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-black text-lg leading-tight text-foreground pt-1">{item.name}</h3>
                  <span className={`svc-feature-icon shrink-0 w-11 h-11 rounded-xl bg-linear-to-br ${colors.gradient} flex items-center justify-center shadow-md`}>
                    <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
