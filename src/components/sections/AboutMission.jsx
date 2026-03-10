'use client';

import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle2, Award, Zap, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function AboutMission({ mission, vision }) {
  const m = mission || {};
  const v = vision || {};
  
  const mPoints = m.bulletPoints || ['Empowering businesses', 'Digital excellence'];
  const vPillars = v.pillars || ['Innovation', 'Integrity'];

  return (
    <div className="space-y-0">
      {/* Mission Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Our Mission" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="text-white">
                  <div className="text-4xl font-black mb-2">Our Mission</div>
                  <div className="text-lg opacity-80">Driving digital transformation</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-primary uppercase tracking-wider text-xs">
                {m.badge || "Our Mission"}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {m.title || "Empowering the Next Generation of Digital Leaders"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {m.description || "Our mission is to bridge the gap between technology and business growth. We strive to provide accessible, high-quality digital solutions for everyone."}
              </p>

              <div className="space-y-4">
                {mPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-semibold text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6 font-bold text-secondary uppercase tracking-wider text-xs">
                {v.badge || "Our Vision"}
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                {v.titlePart1 || "Pioneering the"}{' '}
                <span className="text-gradient">{v.titlePart2 || "Future of Web"}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {v.description || "We envision a world where every business, regardless of size, can leverage the power of technology to create meaningful change."}
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {vPillars.map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 rounded-3xl bg-secondary/5 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
                  >
                    <div className="text-2xl font-black text-secondary mb-2">0{idx + 1}</div>
                    <div className="font-bold text-foreground">
                      {typeof pillar === 'object' ? pillar.label : pillar}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:order-1"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" 
                  alt="Our Vision" 
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-x-8 bottom-8 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
                  <div className="text-white text-center">
                    <div className="text-2xl font-black mb-1">2030 Vision</div>
                    <div className="text-sm opacity-80">Leading Global Innovation</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
