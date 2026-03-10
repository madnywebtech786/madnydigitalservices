'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function AboutProcess({ data }) {
  const d = data || {};
  const steps = d.steps || [
    { title: 'Discovery', description: 'Understanding your goals.' },
    { title: 'Design', description: 'Creating the visual concept.' },
    { title: 'Development', description: 'Building the solution.' },
    { title: 'Launch', description: 'Going live to the world.' },
  ];

  const getStepIcon = (idx) => {
    const icons = [Search, PenTool, Code, Rocket, ShieldCheck];
    return icons[idx % icons.length];
  };

  return (
    <section className="py-24 bg-linear-to-b from-white via-muted/20 to-white relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-primary uppercase tracking-wider text-xs">
            {d.badge || "Our Working Process"}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            {d.title || "How We Bring Your Ideas to Life"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {d.description || "Our proven methodology ensures that every project is delivered on time, within budget, and to the highest standards of quality."}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-primary via-secondary to-primary -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = getStepIcon(idx);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-8 relative z-10 border-4 border-muted group-hover:border-primary/20 transition-all duration-500 scale-100 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary" />
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Pulse (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-ping -translate-y-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
