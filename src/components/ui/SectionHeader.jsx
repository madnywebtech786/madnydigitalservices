'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('flex flex-col mb-16', alignments[align], className)}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
