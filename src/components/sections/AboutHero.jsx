'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function AboutHero({ data }) {
  const d = data || {};
  
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/5 via-white to-secondary/5 py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-linear-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-linear-to-tr from-secondary/10 via-secondary/5 to-transparent blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#9f2321 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-5 rounded-full bg-white/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-black text-gradient uppercase tracking-widest">
              {d.badge || "About Madeny Digital"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter"
          >
            <span className="text-foreground">{d.headingPart1 || "Crafting Digital"}</span><br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%] animate-[gradient_3s_ease-in-out_infinite]">
              {d.headingPart2 || "Masterpieces"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {d.description || "We are a team of visionary designers, technical experts, and strategic thinkers dedicated to transforming businesses through exceptional digital experiences."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-black group">
              <span className="flex items-center gap-2">
                {d.ctaPrimary || "Our Portfolio"}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button variant="secondary" size="lg" className="h-16 px-10 rounded-2xl text-lg font-black group bg-white/50 backdrop-blur-xl border-gray-200">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                {d.ctaSecondary || "Watch Story"}
              </span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
