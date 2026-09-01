'use client';

import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

export default function AboutMission({ mission, vision }) {
  const m = mission || {};
  const v = vision || {};

  const mPoints = m.bulletPoints || ['Quality service and practical solutions', 'Long-term client relationships', 'Professional technical and device repair support'];
  const vPillars = v.pillars || ['Modern Solutions', 'Reliable & Scalable', 'Built to Grow With You'];

  const [missionRef, missionInView] = useInView('-60px');
  const [visionRef, visionInView] = useInView('-60px');

  return (
    <div className="space-y-0">

      {/* ── Mission ─────────────────────────────────── */}
      <section ref={missionRef} className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div
              data-inview={missionInView ? 'true' : ''}
              className="reveal-left relative rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/mission.webp"
                alt="Our Mission"
                width={800}
                height={800}
                loading="lazy"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <div className="text-4xl font-black mb-2">Our Mission</div>
                  <div className="text-lg opacity-80">Driving digital transformation</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              data-inview={missionInView ? 'true' : ''}
              className="reveal-right anim-delay-2"
            >
              <span className="anim-fade-down anim-delay-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-primary uppercase tracking-wider text-xs">
                {m.badge || 'Our Mission'}
              </span>
              <h2
                data-inview={missionInView ? 'true' : ''}
                className="reveal-blur anim-delay-4 text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                {m.title || 'Empowering the Next Generation of Digital Leaders'}
              </h2>
              <p
                data-inview={missionInView ? 'true' : ''}
                className="reveal-blur anim-delay-5 text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                {m.description || 'Our mission is to bridge the gap between technology and business growth. We strive to provide accessible, high-quality digital solutions for everyone.'}
              </p>

              <div className="space-y-4">
                {mPoints.map((point, idx) => (
                  <div
                    key={idx}
                    data-inview={missionInView ? 'true' : ''}
                    className={`reveal-right anim-delay-${6 + idx} about-feature-row flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100`}
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Vision ──────────────────────────────────── */}
      <section ref={visionRef} className="py-24 relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <div
              data-inview={visionInView ? 'true' : ''}
              className="reveal-left lg:order-1"
            >
              <span
                data-inview={visionInView ? 'true' : ''}
                className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-bold text-secondary uppercase tracking-wider text-xs"
              >
                {v.badge || 'Our Vision'}
              </span>
              <h2
                data-inview={visionInView ? 'true' : ''}
                className="reveal-blur anim-delay-2 text-4xl md:text-5xl font-black mb-6 leading-tight"
              >
                {v.titlePart1 || 'Pioneering the'}{' '}
                <span className="text-gradient">{v.titlePart2 || 'Future of Web'}</span>
              </h2>
              <p
                data-inview={visionInView ? 'true' : ''}
                className="reveal-blur anim-delay-3 text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                {v.description || 'We envision a world where every business, regardless of size, can leverage the power of technology to create meaningful change.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {vPillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    data-inview={visionInView ? 'true' : ''}
                    className={`reveal-up anim-delay-${4 + idx} hover-card p-6 rounded-3xl bg-secondary/5 border border-secondary/10`}
                  >
                    <div className="text-2xl font-black text-secondary mb-2">0{idx + 1}</div>
                    <div className="font-bold text-foreground">
                      {typeof pillar === 'object' ? pillar.label : pillar}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              data-inview={visionInView ? 'true' : ''}
              className="reveal-right anim-delay-2 relative lg:order-2"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/vission.webp"
                  alt="Our Vision"
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full aspect-4/5 object-cover"
                />
                <div className="absolute inset-x-8 bottom-8 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-2xl font-black mb-1">2030 Vision</div>
                    <div className="text-sm opacity-80">Leading Global Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
