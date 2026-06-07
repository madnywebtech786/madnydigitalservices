'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

export default function CTA({ data }) {
  const d = data || {};
  const [sectionRef, inView] = useInView('-60px');

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <Container>
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-up anim-delay-1 relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary" />

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          {/* Floating orbs — wrapper positions, inner loops */}
          <div className="absolute top-10 left-10 w-20 h-20 pointer-events-none" aria-hidden="true">
            <div className="loop-float-a w-full h-full rounded-full bg-white/10 backdrop-blur-sm" />
          </div>
          <div className="absolute bottom-10 right-10 w-32 h-32 pointer-events-none" aria-hidden="true">
            <div className="loop-float-b w-full h-full rounded-full bg-white/10 backdrop-blur-sm" />
          </div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 pointer-events-none" aria-hidden="true">
            <div className="loop-float-c w-full h-full rounded-full bg-white/5 backdrop-blur-sm" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-scale anim-delay-2 inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                {d.badge || 'Ready to Transform Your Business?'}
              </span>
            </div>

            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
            >
              {d.heading || "Let's Create Something Extraordinary Together"}
            </h2>

            <p
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-4 text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              {d.description || "Whether you need a stunning website, a powerful e-commerce platform, or a complete digital transformation, we're here to make it happen."}
            </p>

            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-up anim-delay-5 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <div className="hover-lift">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    {d.ctaPrimary || 'Start Your Project'}
                  </Button>
                </Link>
              </div>
              <div className="hover-lift">
                <Link href="/contact">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-2 border-white/30 hover:bg-white/10"
                  >
                    {d.ctaSecondary || 'Schedule a Call'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
