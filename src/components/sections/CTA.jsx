'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"
          />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Ready to Transform Your Business?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto"
            >
              Let&apos;s Create Something{' '}
              <span className="relative">
                Extraordinary
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 4 150 4 198 10"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                  />
                </svg>
              </span>{' '}
              Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              Whether you need a stunning website, a powerful e-commerce platform, or
              a complete digital transformation, we&apos;re here to make it happen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary border-white hover:bg-white/90 hover:text-primary"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-2 border-white/30 hover:bg-white/10"
              >
                Schedule a Call
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
