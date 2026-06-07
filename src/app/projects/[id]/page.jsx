import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import { projects, projectCategories } from '@/data/projects';
import { ScrollPreview, RelatedCard } from './ProjectDetailClient';

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return { title: 'Project Not Found' };

  const category = projectCategories.find((c) => c.id === project.category);
  const title = `${project.title} | Madeny Digital Services`;
  const description = project.description;
  const url = `https://madenydigital.com/projects/${project.id}`;

  return {
    title,
    description,
    keywords: `${project.tags?.join(', ')}, web development Calgary, ${category?.name ?? ''}`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: project.image, width: 900, height: 600, alt: project.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) notFound();

  const category = projectCategories.find((c) => c.id === project.category);
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="page-flow pt-20">

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden pt-14 pb-0">
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
            aria-hidden="true"
          />

          <Container>
            <div className="mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-black uppercase tracking-[0.2em] group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
                All Projects
              </Link>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-16">
              {/* Left — meta + title */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-7">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary loop-blink inline-block" />
                    {category?.name || project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-[10px] font-black uppercase tracking-[0.25em] text-foreground/60">
                      Featured
                    </span>
                  )}
                  <span className="ml-auto text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/40">
                    {project.year || '2024'}
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.88] tracking-tighter mb-7">
                  <span className="block text-foreground">{project.title}</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>

              {/* Right — stats + CTA */}
              <div className="lg:col-span-5">
                <div className="space-y-6">
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Users',       value: project.stats.users },
                        { label: 'Rating',      value: project.stats.rating },
                        { label: 'Performance', value: project.stats.performance },
                      ].map((s) => (
                        <div key={s.label} className="p-4 rounded-2xl bg-foreground/4 border border-foreground/8">
                          <div className="text-xl sm:text-2xl font-black text-gradient leading-none mb-1">{s.value}</div>
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-black uppercase tracking-[0.15em] shadow-lg shadow-primary/20"
                      >
                        Live Demo
                      </a>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground/15 text-sm font-black uppercase tracking-[0.15em] text-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
                    >
                      Get a Quote
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {project.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/8 text-xs font-bold text-foreground/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>

          <div className="h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
        </section>

        {/* ══ BODY — preview + details ══ */}
        <section className="py-20 lg:py-28">
          <Container>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left — scrolling preview (client) */}
              <div className="lg:col-span-6 lg:sticky lg:top-28">
                <ScrollPreview src={project.image} alt={project.title} />

                {project.projectImpact && (
                  <div className="mt-6 p-5 rounded-2xl bg-primary/6 border border-primary/12">
                    <div className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-2">
                      {project.projectImpact.title}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.projectImpact.description}
                    </p>
                  </div>
                )}
              </div>

              {/* Right — overview + features */}
              <div className="lg:col-span-6">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-foreground/10" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Overview</span>
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {project.features?.length > 0 && (
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="h-px flex-1 bg-foreground/10" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Key Features</span>
                    </div>
                    <ul className="space-y-4">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-primary/20">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-sm sm:text-base text-foreground/80 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.tags?.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px flex-1 bg-foreground/10" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-xl bg-white border border-foreground/10 text-xs font-black text-foreground shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* ══ RELATED PROJECTS ══ */}
        {relatedProjects.length > 0 && (
          <section className="pb-24">
            <Container>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-foreground/10" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">More Projects</span>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <RelatedCard
                    key={rp.id}
                    project={rp}
                    category={projectCategories.find((c) => c.id === rp.category)}
                  />
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
                >
                  View All Projects
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
