'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';
import { projectCategories as fallbackCategories } from '@/data/projects';

/* Ticker items */
const TICKER_ITEMS = [
  'Web Development',
  'UI / UX Design',
  'E-Commerce',
  'Branding',
  'SEO Strategy',
  'Digital Marketing',
  'Mobile Apps',
  'Custom Software',
];

function TickerBand() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden py-4 border-y border-primary/10 my-16 select-none">
      <div className="portfolio-ticker-inner gap-12">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 whitespace-nowrap text-sm font-black uppercase tracking-[0.25em] text-muted-foreground">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index, inView, categoryMap }) {
  const isReversed = index % 2 !== 0;
  const num = String(index + 1).padStart(2, '0');
  const delays = ['anim-delay-2', 'anim-delay-3', 'anim-delay-4'];
  const clipDelays = ['anim-delay-3', 'anim-delay-4', 'anim-delay-5'];

  return (
    <article className="group mb-4">
      {/* Divider rule */}
      <div
        data-inview={inView ? 'true' : ''}
        className={`reveal-rule ${delays[index % delays.length]} h-px bg-foreground/10 mb-10 origin-left`}
      />

      <div className={`grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch`}>

        {/* ── Number col ── */}
        <div className={`hidden lg:flex lg:col-span-1 flex-col justify-between ${isReversed ? 'lg:order-3' : 'lg:order-1'}`}>
          <div
            data-inview={inView ? 'true' : ''}
            className={`reveal-number ${delays[index % delays.length]} overflow-hidden`}
          >
            <span className="text-[3.5rem] font-black leading-none tracking-tighter select-none text-gradient opacity-30">
              {num}
            </span>
          </div>
          <div
            data-inview={inView ? 'true' : ''}
            className={`reveal-up ${delays[index % delays.length]} anim-delay-5`}
          >
            <span className="portfolio-vert-label text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
              {project.year}
            </span>
          </div>
        </div>

        {/* ── Image col ── */}
        <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-2'}`}>
          <Link
            href={`/projects/${project.id}`}
            className="portfolio-card block relative rounded-[28px] overflow-hidden"
            style={{ aspectRatio: '4/3' }}
            aria-label={`View project: ${project.title}`}
          >
            {/* Image — visible by default; clip-reveal is a pure enhancement,
                never hides the image if the reveal never triggers */}
            <div
              className={`portfolio-img-clip ${inView ? 'is-revealed' : ''} ${clipDelays[index % clipDelays.length]} absolute inset-0`}
            >
              <Image
                fill
                src={project.image}
                alt={project.title}
                sizes="(max-width: 768px) 100vw, 55vw"
                loading={index === 0 ? 'eager' : 'lazy'}
                className="portfolio-img object-cover"
              />
            </div>

            {/* Dark overlay base */}
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500 z-10" />

            {/* Hover content overlay */}
            <div className="portfolio-overlay absolute inset-0 z-20 bg-linear-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-8">
              <div className="text-white">
                <p className="text-white/70 text-sm mb-2 font-medium">{categoryMap[project.category] ?? project.category}</p>
                <h3 className="text-2xl font-black leading-tight mb-4">{project.shortTitle || project.title}</h3>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span>View Detail</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Featured badge */}
            {project.featured && (
              <div className="portfolio-featured-badge absolute top-5 left-5 z-30 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-primary shadow-lg">
                Featured
              </div>
            )}
          </Link>
        </div>

        {/* ── Content col ── */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-3'}`}>
          {/* Mobile number */}
          <div
            data-inview={inView ? 'true' : ''}
            className={`reveal-number ${delays[index % delays.length]} lg:hidden overflow-hidden mb-2`}
          >
            <span className="text-[5rem] font-black leading-none tracking-tighter select-none text-gradient opacity-30">
              {num}
            </span>
          </div>

          <div
            data-inview={inView ? 'true' : ''}
            className={`reveal-up ${delays[index % delays.length]}`}
          >
            {/* Category pill */}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-5">
              {categoryMap[project.category] ?? project.category}
            </span>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tighter mb-5 group-hover:text-primary transition-colors duration-300">
              {project.shortTitle || project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              {project.description}
            </p>

            {/* Tags */}
            {project.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="portfolio-tag px-3 py-1.5 bg-foreground/5 border border-foreground/10 text-foreground text-xs font-bold rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-3 group/link"
            >
              <span className="relative text-sm font-black uppercase tracking-widest text-foreground overflow-hidden">
                <span className="relative z-10 transition-colors duration-300 group-hover/link:text-primary">
                  View Detail
                </span>
                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover/link:w-full" />
              </span>
              <div className="portfolio-arrow w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover/link:border-primary group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div className="mt-16" />
    </article>
  );
}

export default function ProjectsShowcase({ data }) {
  const d = data || {};
  const projects = (d.items || []).filter(p => p.featured).slice(0, 4);
  const categoryMap = Object.fromEntries(
    (d.categories?.length ? d.categories : fallbackCategories).map(c => [c.id, c.name])
  );
  const [headerRef, headerInView] = useInView('-60px');
  const [bodyRef, bodyInView] = useInView('-80px');

  return (
    <section className="py-24 relative overflow-hidden">
      <Container>

        {/* ── Header ────────────────────────────────── */}
        <div ref={headerRef} className="grid lg:grid-cols-12 gap-8 items-end mb-4">

          {/* Left — badge + big title */}
          <div className="lg:col-span-8">
            <div
              data-inview={headerInView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary portfolio-featured-badge inline-block" />
              {d.badge || 'Portfolio'}
            </div>

            <h2
              data-inview={headerInView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter"
            >
              <span className="block text-foreground">{d.titleLine1 || 'Selected'}</span>
              <span className="block text-gradient">{d.titleLine2 || 'Work'}</span>
            </h2>
          </div>

          {/* Right — subtitle + count */}
          <div className="lg:col-span-4 lg:text-right space-y-6">
            <p
              data-inview={headerInView ? 'true' : ''}
              className="reveal-right anim-delay-3 text-muted-foreground leading-relaxed"
            >
              {d.subtitle || 'A selection of our best work across web development, e-commerce, and digital solutions.'}
            </p>
            <div
              data-inview={headerInView ? 'true' : ''}
              className="reveal-right anim-delay-5 inline-flex items-center gap-3 justify-end"
            >
              <span className="text-5xl font-black text-gradient leading-none">
                {String(projects.length).padStart(2, '0')}
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground leading-tight">
                Featured<br />Projects
              </span>
            </div>
          </div>
        </div>

        {/* ── Ticker ─────────────────────────────────── */}
        <TickerBand />

        {/* ── Project list ───────────────────────────── */}
        <div ref={bodyRef}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={bodyInView} categoryMap={categoryMap} />
          ))}
        </div>

        {/* ── Footer rule ────────────────────────────── */}
        <div
          data-inview={bodyInView ? 'true' : ''}
          className="reveal-rule anim-delay-2 h-px bg-foreground/10 mt-8"
        />

        {/* ── View all CTA ───────────────────────────── */}
        <div
          data-inview={bodyInView ? 'true' : ''}
          className="reveal-up anim-delay-3 flex justify-center mt-16"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-black uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </Container>
    </section>
  );
}
