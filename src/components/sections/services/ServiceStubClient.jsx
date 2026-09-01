'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Construction } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

const accentClasses = {
  primary: {
    badge: 'bg-primary/10 border-primary/20 text-primary',
    bar: 'bg-primary',
    dot: 'bg-primary',
  },
  secondary: {
    badge: 'bg-secondary/10 border-secondary/20 text-secondary',
    bar: 'bg-secondary',
    dot: 'bg-secondary',
  },
  tertiary: {
    badge: 'bg-tertiary/10 border-tertiary/20 text-tertiary',
    bar: 'bg-tertiary',
    dot: 'bg-tertiary',
  },
  ink: {
    badge: 'bg-foreground/8 border-foreground/15 text-foreground',
    bar: 'bg-foreground',
    dot: 'bg-foreground',
  },
};

/**
 * Shared placeholder template for every services-tree node (category,
 * subcategory, or leaf item) until real per-page content is written.
 *
 * @param {{name: string, accent?: string}[]} breadcrumb - ordered list from
 *   "Services" down to the current node, each with an href except the last.
 * @param {string} title - current node's display name.
 * @param {string} accent - one of 'primary' | 'secondary' | 'tertiary' | 'ink'.
 * @param {{name: string, href: string}[]} children - links to child nodes,
 *   omitted/empty for a leaf item.
 * @param {{name: string, href: string}} parent - link back up one level,
 *   used when `children` is empty (leaf item).
 */
export default function ServiceStubClient({ breadcrumb, title, accent = 'primary', children = [], parent }) {
  const [ref, inView] = useInView('-60px');
  const colors = accentClasses[accent] || accentClasses.primary;

  return (
    <main className="pt-20 min-h-screen page-flow">
      <section ref={ref} className="section relative overflow-hidden">
        <Container size="lg">
          {/* Breadcrumb */}
          <nav
            data-inview={inView ? 'true' : ''}
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

          {/* Hero */}
          <div className="max-w-3xl mb-16">
            <span
              data-inview={inView ? 'true' : ''}
              className={`reveal-scale anim-delay-2 inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.15em] rounded-full border ${colors.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
              Services
            </span>
            <h1
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-3 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            >
              {title}
            </h1>
            <div
              data-inview={inView ? 'true' : ''}
              className={`reveal-expand-x anim-delay-4 w-16 h-1 rounded-full ${colors.bar} mb-6`}
            />
            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-up anim-delay-4 flex items-center gap-2 text-muted-foreground"
            >
              <Construction className="w-4 h-4 shrink-0" />
              Detailed content for this page is coming soon. Contact us for pricing and availability today.
            </p>
          </div>

          {/* Children grid, or back-to-parent for a leaf */}
          {children.length > 0 ? (
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-up anim-delay-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="svc-other-card group flex items-center justify-between gap-3 p-5 rounded-2xl border border-border bg-white"
                >
                  <span className="font-semibold text-foreground">{child.name}</span>
                  <ArrowRight className="svc-other-icon w-4 h-4 text-muted-foreground shrink-0" />
                </Link>
              ))}
            </div>
          ) : parent ? (
            <Link href={parent.href} className="svc-back-link inline-flex items-center gap-2 font-semibold text-foreground">
              <ArrowLeft className="svc-back-arrow w-4 h-4" />
              Back to {parent.name}
            </Link>
          ) : null}

          <div className="mt-16">
            <Link href="/contact">
              <Button icon={<ArrowRight className="w-4 h-4" />}>Get a Free Quote</Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
