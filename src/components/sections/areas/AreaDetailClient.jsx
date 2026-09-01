'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import CTA from '@/components/sections/shared/CTA';
import { useInView } from '@/hooks/useInView';
import { servicesNav } from '@/data/servicesNav';

const accentClasses = {
  primary: { badge: 'bg-primary/10 border-primary/20 text-primary', dot: 'bg-primary', gradient: 'from-primary to-primary-dark' },
  secondary: { badge: 'bg-secondary/10 border-secondary/20 text-secondary', dot: 'bg-secondary', gradient: 'from-secondary to-secondary-dark' },
  tertiary: { badge: 'bg-tertiary/10 border-tertiary/20 text-tertiary', dot: 'bg-tertiary', gradient: 'from-tertiary to-tertiary-dark' },
  ink: { badge: 'bg-foreground/8 border-foreground/15 text-foreground', dot: 'bg-foreground', gradient: 'from-foreground to-foreground/70' },
};

const staggerDelays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4'];

// Real, sitewide business info — same constants layout.js uses for JSON-LD.
// Never fabricate per-city figures; this is the one real address/phone/hours
// the business has, shown as "who serves this area", not a local branch.
const BUSINESS_INFO = {
  address: '#216, 55 Westwinds Cres NE, Calgary, AB T3J 5H2',
  phone: '+1 (403) 708-8214',
  hours: 'Mon–Sat 11am–7pm, Sun 12pm–5pm',
};

/**
 * Shared template for /areas/[city] local-SEO landing pages. Follows the
 * same breadcrumb/hero/useInView conventions as ServiceIndexClient — real
 * service-category links and real business info only, no invented per-city
 * claims or stats.
 */
export default function AreaDetailClient({ cityName }) {
  const [heroRef, heroInView] = useInView('-60px');
  const [gridRef, gridInView] = useInView('-80px');

  return (
    <main className="pt-20 min-h-screen page-flow">
      <section ref={heroRef} className="section relative overflow-hidden">
        <Container size="lg">
          <nav
            data-inview={heroInView ? 'true' : ''}
            className="reveal-up anim-delay-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-foreground font-medium">{cityName}</span>
          </nav>

          <div className="max-w-3xl mb-14">
            <span
              data-inview={heroInView ? 'true' : ''}
              className="reveal-scale anim-delay-2 inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.15em] rounded-full border bg-primary/10 border-primary/20 text-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Serving {cityName}, Alberta
            </span>
            <h1
              data-inview={heroInView ? 'true' : ''}
              className="reveal-blur anim-delay-3 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
            >
              Computer &amp; Cellphone Repair Services in {cityName}, Alberta
            </h1>
            <div
              data-inview={heroInView ? 'true' : ''}
              className="reveal-expand-x anim-delay-4 w-16 h-1 rounded-full bg-primary mb-6"
            />
            <p
              data-inview={heroInView ? 'true' : ''}
              className="reveal-up anim-delay-4 text-lg text-muted-foreground leading-relaxed"
            >
              Madny Digital Services is based in Calgary and serves {cityName} and the surrounding area with computer repair, cellphone repair, custom software development, and web development services. Explore our service categories below or get in touch to discuss what you need.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-16 items-stretch auto-rows-fr"
          >
            {servicesNav.map((category, index) => {
              const colors = accentClasses[category.accent] || accentClasses.primary;
              return (
                <Link
                  key={category.id}
                  href={`/services/${category.id}`}
                  data-inview={gridInView ? 'true' : ''}
                  className={`reveal-up ${staggerDelays[index % staggerDelays.length]} svc-feature-card group flex flex-col h-full w-full p-7 rounded-2xl bg-white border border-foreground/8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-black text-lg leading-tight text-foreground pt-1">{category.name}</h3>
                    <span className={`svc-feature-icon shrink-0 w-11 h-11 rounded-xl bg-linear-to-br ${colors.gradient} flex items-center justify-center shadow-md`}>
                      <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {category.name} services for {cityName} customers, available at our Calgary location.
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Real business info — establishes coverage without fabricating a
              local branch/address for this city. */}
          <div
            data-inview={gridInView ? 'true' : ''}
            className="reveal-up anim-delay-4 grid sm:grid-cols-3 gap-4 mb-16 p-6 md:p-8 rounded-2xl bg-foreground/[0.03] border border-foreground/8"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-1">Our Location</div>
                <div className="text-sm text-foreground/80">{BUSINESS_INFO.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-1">Call Us</div>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/[^+\d]/g, '')}`} className="text-sm text-foreground/80 hover:text-primary transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-muted-foreground mb-1">Hours</div>
                <div className="text-sm text-foreground/80">{BUSINESS_INFO.hours}</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        data={{
          badge: `Serving ${cityName} & Nearby Areas`,
          heading: `Need Computer or Cellphone Repair in ${cityName}?`,
          description: `Reach out to Madny Digital Services and we'll help with repair, sales, or a software/web project — Calgary-based, serving ${cityName} and the surrounding area.`,
        }}
      />
    </main>
  );
}
