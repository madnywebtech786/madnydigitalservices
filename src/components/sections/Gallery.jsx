'use client';

import { motion } from 'framer-motion';
import { Maximize2, Sparkles, Box } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Gallery({ data }) {
  const d = data || {};
  const items = d.items || [];

  return (
    <section className="py-24 bg-white relative">
      <Container>
        <SectionHeader badge={d.badge || "Gallery"} title={d.title || "Innovation Discovery"} />
        <div className="grid md:grid-cols-3 gap-4 mt-16">
          {items.map((item, i) => (
            <motion.div key={i} className="relative aspect-square overflow-hidden rounded-2xl group">
              <Image fill src={item.image} alt={item.title} className="object-cover transition-transform group-hover:scale-110" unoptimized />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
