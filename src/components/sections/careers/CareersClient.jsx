'use client';

import { Sparkles, ArrowUpRight, MapPin, Phone, Cpu, Code2, Globe, Wrench, Headset, Smartphone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

const APPLY_EMAIL = 'madny786@hotmail.com';
const APPLY_MAILTO = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent('Job Application: Madny Digital Services')}&body=${encodeURIComponent('Hi Madny Digital Services team,\n\nI\'d like to apply. Here is a bit about my skills, experience, and area of interest:\n\n')}`;

// The 6 work areas named in the source copy, given a matching icon each —
// not a new claim, just a visual reflection of "computer systems, software
// development, web development, digital solutions, technical support, and
// device services" from the page brief.
const workAreas = [
  { icon: Cpu, label: 'Computer Systems' },
  { icon: Code2, label: 'Software Development' },
  { icon: Globe, label: 'Web Development' },
  { icon: Wrench, label: 'Digital Solutions' },
  { icon: Headset, label: 'Technical Support' },
  { icon: Smartphone, label: 'Device Services' },
];

export default function CareersClient() {
  const [heroRef, heroInView] = useInView('-80px');
  const [applyRef, applyInView] = useInView('-60px');

  return (
    <main className="page-flow">
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="hidden md:block absolute -top-[15%] -right-[10%] w-[55%] h-[55%]">
            <div className="loop-orb-a w-full h-full rounded-full bg-linear-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
          </div>
          <div className="hidden md:block absolute -bottom-[20%] -left-[10%] w-[45%] h-[45%]">
            <div className="loop-orb-b w-full h-full rounded-full bg-linear-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl" />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div
              data-inview={heroInView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 font-black text-primary uppercase tracking-[0.2em] text-[10px]"
            >
              <Sparkles className="w-3 h-3" />
              Careers at Madny Digital Services
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.02] tracking-tighter">
              <span className="anim-fade-up anim-delay-2 block text-foreground">
                Build Your Career
              </span>
              <span className="anim-fade-up anim-delay-4 block loop-gradient-text pb-2">
                in Technology
              </span>
            </h1>

            <p className="anim-blur-up anim-delay-5 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              At Madny Digital Services, we believe great technology starts with talented and motivated people. We work across computer systems, software development, web development, digital solutions, technical support, and device services.
            </p>
            <p className="anim-blur-up anim-delay-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4">
              We welcome individuals who are passionate about technology, problem-solving, innovation, and delivering quality service to our clients.
            </p>

            <div className="anim-fade-up anim-delay-7 flex flex-wrap items-center gap-3 mt-10 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                55 Westwinds Crescent NE, Unit 216, Calgary, Alberta T3J 5H2
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+14037088214" className="hover:text-primary transition-colors">
                  (403) 708-8214
                </a>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ══ WORK AREAS STRIP ══ */}
      <section className="py-16 border-y border-border/60">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {workAreas.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="about-value-card flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-border bg-card"
              >
                <div className="about-value-icon w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══ APPLY ══ */}
      <section ref={applyRef} className="py-24 md:py-32">
        <Container size="sm">
          <div
            data-inview={applyInView ? 'true' : ''}
            className="reveal-up anim-delay-1 relative rounded-3xl overflow-hidden bg-linear-to-br from-primary to-secondary"
          >
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Join Our Team
              </h2>
              <p className="text-lg text-white max-w-xl mx-auto mb-10 leading-relaxed">
                Interested in building your career with Madny Digital Services? Send us your resume and tell us about your skills, experience, and area of interest.
              </p>

              <div className="hover-lift inline-block">
                <a href={APPLY_MAILTO}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary"
                    icon={<ArrowUpRight className="w-5 h-5" />}
                  >
                    Apply Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
