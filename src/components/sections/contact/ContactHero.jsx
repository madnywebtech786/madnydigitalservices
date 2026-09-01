'use client';

import Container from '@/components/ui/Container';

/* Full-width headline banner at the top of the dedicated /contact page.
   Sits above the shared <Contact> section (same component the homepage
   uses for its info panel, form, and map) — kept separate because the
   homepage reaches the contact form via scroll, while this page needs
   its own arrival moment. */
export default function ContactHero({ data }) {
  const hero = data || {};

  return (
    <section className="pt-16 pb-12 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl">
          <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-8 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary loop-blink inline-block" />
            {hero.badge || 'Get In Touch'}
          </div>
          <h1 className="anim-fade-up anim-delay-2 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter mb-6">
            <span className="block">{hero.headingPart1 || "Let's Build"}</span>
            <span className="block text-gradient">{hero.headingPart2 || 'Something Great'}</span>
          </h1>
          <p className="anim-fade-up anim-delay-3 text-xl text-muted-foreground max-w-xl leading-relaxed">
            {hero.description || "Tell us about your project. We'll get back to you within 24 hours."}
          </p>
        </div>
      </Container>
    </section>
  );
}
