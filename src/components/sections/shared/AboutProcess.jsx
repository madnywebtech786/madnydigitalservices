'use client';

import { Search, PenTool, Code, Rocket, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const stepIcons = [Search, PenTool, Code, Rocket, ShieldCheck];

export default function AboutProcess({ data }) {
  const d = data || {};
  const steps = d.steps || [
    { title: 'Understand Your Needs', description: 'We discuss your requirements, goals, or technical issue to understand exactly what solution you need.' },
    { title: 'Assess & Plan',         description: 'Our team evaluates the requirements and recommends the right technology, service, repair, or development approach.' },
    { title: 'Develop & Deliver',     description: 'We design, develop, configure, upgrade, or repair your solution with a focus on quality, performance, and reliability.' },
    { title: 'Test & Support',        description: 'We test the completed work, ensure everything functions as expected, and provide ongoing support when required.' },
  ];

  const [sectionRef, inView] = useInView('-60px');

  const stepDelays = ['anim-delay-3', 'anim-delay-5', 'anim-delay-7', 'anim-delay-9', 'anim-delay-11'];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <Container>

        {/* Header */}
        <div className="text-center mb-20">
          <span
            data-inview={inView ? 'true' : ''}
            className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-primary uppercase tracking-wider text-xs"
          >
            {d.badge || 'Our Process'}
          </span>
          <h2
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-2 text-4xl md:text-5xl font-black mb-6"
          >
            {d.title || 'Simple Process. Reliable Solutions.'}
          </h2>
          <p
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-3 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {d.description || 'From digital projects to technical services, we follow a clear and professional process focused on understanding your needs and delivering the right solution.'}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — wrapper positions it, inner reveals via CSS */}
          <div className="hidden lg:block absolute top-12 left-[8%] w-[84%] h-1 overflow-hidden">
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-line-grow w-full h-full bg-linear-to-r from-primary via-secondary to-primary"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={idx}
                  data-inview={inView ? 'true' : ''}
                  className={`reveal-up ${stepDelays[idx]} process-step relative flex flex-col items-center text-center group`}
                >
                  {/* Circle with ping */}
                  <div className="relative mb-8">
                    {/* Ping ring — standalone loop, no entrance on same element */}
                    <div className="loop-ping absolute inset-0 rounded-full bg-primary/15" />
                    <div className="process-circle w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center relative z-10 border-4 border-muted">
                      <Icon className="w-10 h-10 text-primary" />
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-sm shadow-lg">
                        {idx + 1}
                      </div>
                    </div>
                  </div>

                  <h3 className="process-title text-2xl font-black mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
