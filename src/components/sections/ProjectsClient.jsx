'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight, Search, X, Sparkles, Star,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';
import { projects as allProjects, projectCategories } from '@/data/projects';

const defaultCategories = [
  { id: 'all', name: 'All Projects' },
  ...projectCategories.filter(c => c.id !== 'all'),
];

/* ── Ticker ── */
const TICKER_ITEMS = ['Web Development', 'UI / UX Design', 'E-Commerce', 'Branding', 'SEO Strategy', 'Digital Marketing', 'Mobile Apps', 'Custom Software'];

function TickerBand() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden py-4 border-y border-primary/10 my-12 select-none">
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

/* ── Project Card (same editorial design as landing page) ── */
function ProjectCard({ project, index, inView, categories }) {
  const isReversed = index % 2 !== 0;
  const num = String(index + 1).padStart(2, '0');
  const delayClasses = ['anim-delay-2', 'anim-delay-3', 'anim-delay-4', 'anim-delay-5', 'anim-delay-6', 'anim-delay-7'];
  const delay = delayClasses[index % delayClasses.length];
  const clipDelay = delayClasses[(index + 1) % delayClasses.length];
  const categoryName = categories.find(c => c.id === project.category)?.name || project.category;
  const detailHref = `/projects/${project.id}`;

  return (
    <article className="group mb-4">
      <div
        data-inview={inView ? 'true' : ''}
        className={`reveal-rule ${delay} h-px bg-foreground/10 mb-10 origin-left`}
      />

      <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">

        {/* Number col */}
        <div className={`hidden lg:flex lg:col-span-1 flex-col justify-between ${isReversed ? 'lg:order-3' : 'lg:order-1'}`}>
          <div data-inview={inView ? 'true' : ''} className={`reveal-number ${delay} overflow-hidden`}>
            <span className="text-[3.5rem] font-black leading-none tracking-tighter select-none text-gradient opacity-30">
              {num}
            </span>
          </div>
          <div data-inview={inView ? 'true' : ''} className={`reveal-up ${delay} anim-delay-5`}>
            <span className="portfolio-vert-label text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
              {project.year}
            </span>
          </div>
        </div>

        {/* Image col — links to detail page */}
        <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-2'}`}>
          <Link
            href={detailHref}
            className="portfolio-card block relative rounded-[28px] overflow-hidden"
            style={{ aspectRatio: '4/3' }}
            aria-label={`View detail: ${project.title}`}
          >
            <div data-inview={inView ? 'true' : ''} className={`reveal-clip ${clipDelay} absolute inset-0`}>
              <Image
                fill
                src={project.image}
                alt={project.title}
                sizes="(max-width: 768px) 100vw, 55vw"
                loading={index === 0 ? 'eager' : 'lazy'}
                className="portfolio-img object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/5 transition-colors duration-500 z-10" />
            <div className="portfolio-overlay absolute inset-0 z-20 bg-linear-to-t from-foreground/90 via-foreground/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <div className="text-white">
                <p className="text-white/70 text-sm mb-2 font-medium">{categoryName}</p>
                <h3 className="text-xl sm:text-2xl font-black leading-tight mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span>View Detail</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            {project.featured && (
              <div className="portfolio-featured-badge absolute top-5 left-5 z-30 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-primary shadow-lg flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-primary" />
                Featured
              </div>
            )}
          </Link>
        </div>

        {/* Content col */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-3'}`}>
          {/* Mobile number */}
          <div data-inview={inView ? 'true' : ''} className={`reveal-number ${delay} lg:hidden overflow-hidden mb-2`}>
            <span className="text-[4rem] sm:text-[5rem] font-black leading-none tracking-tighter select-none text-gradient opacity-30">
              {num}
            </span>
          </div>

          <div data-inview={inView ? 'true' : ''} className={`reveal-up ${delay}`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-5">
              {categoryName}
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tighter mb-5 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-8">
              {project.description}
            </p>

            {project.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="portfolio-tag px-3 py-1.5 bg-foreground/5 border border-foreground/10 text-foreground text-xs font-bold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <Link href={detailHref} className="inline-flex items-center gap-3 group/link">
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

      <div className="mt-16" />
    </article>
  );
}

/* ── Empty state ── */
function EmptyState({ onReset }) {
  return (
    <div className="text-center py-24">
      <div className="w-20 h-20 rounded-full bg-foreground/5 border border-foreground/10 mx-auto mb-6 flex items-center justify-center">
        <Search className="w-8 h-8 text-muted-foreground/40" />
      </div>
      <h3 className="text-2xl font-black tracking-tight mb-3">No Projects Found</h3>
      <p className="text-muted-foreground mb-8 max-w-sm mx-auto text-sm leading-relaxed">
        Nothing matched your criteria. Try adjusting your filters or search.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-sm font-black uppercase tracking-[0.2em]"
      >
        <X className="w-4 h-4" /> Reset Filters
      </button>
    </div>
  );
}

/* ── Main component ── */
export default function ProjectsClient({ data }) {
  const d = data || {};
  const projects = allProjects;
  const categories = defaultCategories;
  const hero = d.hero || {};

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [heroRef, heroInView] = useInView('-40px');
  const [bodyRef, bodyInView] = useInView('-80px');

  const filteredProjects = useMemo(() => {
    let result = projects;
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.tags?.some(t => t.toLowerCase().includes(q))
      );
    }
    return result;
  }, [projects, selectedCategory, searchQuery]);

  return (
    <main className="pt-20 min-h-screen page-flow">

      {/* ── Hero ── */}
      <section ref={heroRef} className="pt-16 pb-4 relative overflow-hidden">
        <Container>
          <div className="max-w-5xl">
            <div
              data-inview={heroInView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
            >
              <span className="loop-spin inline-flex">
                <Sparkles className="w-3 h-3" />
              </span>
              {hero.badge || 'Portfolio Showcase'}
            </div>

            <h1
              data-inview={heroInView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter mb-6"
            >
              <span className="block text-foreground">{hero.headingPart1 || 'Our'}</span>
              <span className="block text-gradient">{hero.headingHighlight || 'Amazing Work'}</span>
            </h1>

            <p
              data-inview={heroInView ? 'true' : ''}
              className="reveal-right anim-delay-3 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              {hero.description || 'Cutting-edge digital solutions that transform businesses and delight users — from startups to enterprise.'}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Ticker ── */}
      <Container>
        <TickerBand />
      </Container>

      {/* ── Filters ── */}
      <section className="pb-4">
        <Container>
          <div
            data-inview={heroInView ? 'true' : ''}
            className="reveal-up anim-delay-4 space-y-5"
          >
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, tech stack, or category…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-foreground/4 border border-foreground/8 focus:border-primary/30 focus:bg-white outline-none transition-all duration-200 text-sm placeholder:text-muted-foreground/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-foreground/8 flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 items-center">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? 'bg-linear-to-r from-primary to-secondary text-white shadow-md shadow-primary/20'
                      : 'bg-foreground/5 border border-foreground/8 text-muted-foreground hover:border-primary/20 hover:text-primary'
                  }`}
                >
                  {cat.name}
                  {selectedCategory === cat.id && (
                    <span className="ml-1.5 opacity-70">· {filteredProjects.length}</span>
                  )}
                </button>
              ))}

              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="ml-auto flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-primary transition-colors"
                >
                  <X className="w-3 h-3" /> Clear
                </button>
              )}
            </div>

            {/* Count */}
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' || searchQuery ? ' matching' : ' total'}
            </p>
          </div>
        </Container>
      </section>

      {/* ── Project list ── */}
      <section className="pb-24">
        <Container>
          <div ref={bodyRef}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  inView={bodyInView}
                  categories={categories}
                />
              ))
            ) : (
              <EmptyState onReset={() => { setSelectedCategory('all'); setSearchQuery(''); }} />
            )}
          </div>

          {filteredProjects.length > 0 && (
            <div
              data-inview={bodyInView ? 'true' : ''}
              className="reveal-rule anim-delay-2 h-px bg-foreground/10 mt-8"
            />
          )}
        </Container>
      </section>

    </main>
  );
}
