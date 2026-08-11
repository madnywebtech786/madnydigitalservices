'use client';

import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

function getIconForValue(title) {
  switch (title.toLowerCase()) {
    case 'mission': return Target;
    case 'vision':  return Eye;
    default:        return Award;
  }
}

export default function About({ data }) {
  const d = data || {};

  const values = d.values ?? [
    { title: 'Mission', description: 'To empower businesses in Calgary and beyond with innovative digital solutions that drive growth and success in the modern marketplace.' },
    { title: 'Vision',  description: 'To be the leading digital agency in Canada, known for exceptional creativity, technical excellence, and unwavering commitment to client success.' },
  ];

  const achievements = d.achievements ?? [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+',  label: 'Happy Clients' },
    { number: '10+',  label: 'Years Experience' },
    { number: '25+',  label: 'Team Members' },
  ];

  const features = d.features ?? [
    'Custom solutions tailored to your business',
    'Cutting-edge technologies and frameworks',
    'Transparent communication throughout',
    'On-time delivery guaranteed',
    'Post-launch support and maintenance',
    'SEO and performance optimization',
  ];

  const [sectionRef, inView] = useInView('-80px');

  const featureDelays  = ['anim-delay-9', 'anim-delay-10', 'anim-delay-11', 'anim-delay-12', 'anim-delay-13', 'anim-delay-14'];
  const valueDelays    = ['anim-delay-2', 'anim-delay-4'];
  const achieveDelays  = ['anim-delay-2', 'anim-delay-4', 'anim-delay-6', 'anim-delay-8'];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background particles only — orbs from page-flow canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Rising particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="loop-dot-rise absolute w-3 h-3 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: i % 2 === 0 ? 'linear-gradient(135deg,#9f2321,#135180)' : 'linear-gradient(135deg,#135180,#9f2321)',
              animationDuration: `${6 + i * 0.5}s`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">

        {/* ── Two-column layout ─────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — image with floating cards */}
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-left relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about.webp"
                  alt="Madny Digital Services Team"
                  width={800}
                  height={600}
                  className="w-full aspect-4/3 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating card — Years (entrance wrapper + loop inner) */}
              <div
                data-inview={inView ? 'true' : ''}
                className="reveal-scale anim-delay-6 absolute -bottom-6 -right-6 md:right-8"
              >
                <div className="about-card-a glass-card rounded-2xl p-5 shadow-2xl border border-primary/20">
                  <div className="flex items-center gap-4">
                    {/* Icon inner loops, wrapper card handles entrance above */}
                    <div className="loop-spin-slow w-14 h-14 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">{d.floatingCard1Value || '10+'}</div>
                      <div className="text-sm text-muted-foreground">{d.floatingCard1Label || 'Years of Excellence'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card — Clients */}
              <div
                data-inview={inView ? 'true' : ''}
                className="reveal-scale anim-delay-8 absolute -top-6 -left-6 md:left-8"
              >
                <div className="about-card-b glass-card rounded-2xl p-5 shadow-2xl border border-secondary/20">
                  <div className="flex items-center gap-4">
                    <div className="loop-spin w-14 h-14 rounded-xl bg-linear-to-br from-secondary to-primary flex items-center justify-center shadow-lg" style={{ animationDirection: 'reverse' }}>
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">{d.floatingCard2Value || '50+'}</div>
                      <div className="text-sm text-muted-foreground">{d.floatingCard2Label || 'Happy Clients'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Shadow decoration */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-3xl bg-linear-to-br from-primary/20 to-secondary/20" />
            </div>
          </div>

          {/* Right — content */}
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-right anim-delay-2"
          >
            {/* Badge */}
            <span
              data-inview={inView ? 'true' : ''}
              className="reveal-scale anim-delay-3 inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-linear-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              {d.badge || 'About Us'}
            </span>

            {/* Heading */}
            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-4 text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              {d.titlePrefix || 'We Are'}{' '}
              <span className="text-gradient">{d.title || 'Madny Digital Services'}</span>
            </h2>

            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-5 text-lg text-muted-foreground leading-relaxed mb-6"
            >
              {d.paragraph1 || "Based in Calgary, Canada, we are a full-service digital agency specializing in creating exceptional digital experiences. With over a decade of experience, we've helped businesses in the mobile, laptop, and accessories industry establish powerful online presences."}
            </p>
            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-6 text-muted-foreground leading-relaxed mb-8"
            >
              {d.paragraph2 || 'Our team of designers, developers, and strategists work together to deliver solutions that not only look stunning but also drive real business results.'}
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  data-inview={inView ? 'true' : ''}
                  className={`reveal-right ${featureDelays[index]} about-feature-row flex items-center gap-3 p-2 rounded-lg`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-up anim-delay-15 hover-lift inline-block"
            >
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

        {/* ── Value cards (Mission / Vision) ────────── */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon || getIconForValue(value.title);
            return (
              <div
                key={value.title}
                data-inview={inView ? 'true' : ''}
                className={`reveal-up ${valueDelays[index]} about-value-card glass-card rounded-2xl p-8 h-full border border-primary/10 relative overflow-hidden`}
              >
                {/* Hover bg gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Shimmer sweep */}
                <div className="loop-shimmer-sweep" aria-hidden="true" />

                <div className="flex items-start gap-5 relative z-10">
                  <div className="about-value-icon w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Achievements banner ───────────────────── */}
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-up anim-delay-3 bg-linear-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Moving stripe pattern */}
          <div
            className="loop-stripe-scroll absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(45deg,transparent 25%,rgba(255,255,255,0.1) 25%,rgba(255,255,255,0.1) 50%,transparent 50%,transparent 75%,rgba(255,255,255,0.1) 75%)',
              backgroundSize: '60px 60px',
            }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {achievements.map((item, index) => (
              <div
                key={item.label}
                data-inview={inView ? 'true' : ''}
                className={`reveal-up ${achieveDelays[index]} about-achievement text-center`}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.number}</div>
                <div className="text-white/90 text-sm md:text-base font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
