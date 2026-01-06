'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from '@/components/ui/ThreeDScrollTrigger';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    content:
      'Madeny Digital fixed my laptop in just a few hours when another shop said it would take a week. Their expertise and speed saved my business.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    content:
      'Got my iPhone screen replaced while I waited. The quality is amazing and the price was very fair. The team is professional and friendly.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Restaurant Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    content:
      'They built an amazing website for my restaurant and helped me set up online ordering. The website looks beautiful and has brought in so many new customers.',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'IT Professional',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    content:
      "I bought a refurbished MacBook from Madeny and it's been running perfectly for over a year. Great prices on quality devices.",
  },
  {
    id: 5,
    name: 'Jessica Parker',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    content:
      'The web development team understood my vision perfectly. My portfolio site is stunning and loads incredibly fast. Exceptional work!',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Startup Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    content:
      'Unlocked my phone quickly and professionally. Also got great advice on the best accessories for my business needs. Highly recommend!',
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="max-w-[350px] mx-4 shrink-0 py-4">
      {/* make this a column flex so header always sits above the content */}
      <div className="bg-white overflow-hidden rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100/80 min-h-[200px] flex flex-col">
        {/* Header with avatar, name and role */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-gray-900 text-base truncate">
              {testimonial.name}
            </h4>
            <p className="text-sm text-primary truncate">{testimonial.role}</p>
          </div>
        </div>

        {/* Testimonial content - now forces its own line and wraps */}
        <p className="text-gray-600 text-sm mt-2 whitespace-normal break-words">
          {testimonial.content}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background decoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        {/* Floating quote marks */}
        <motion.div
          className="absolute top-32 right-[15%] text-primary/10"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Quote size={120} strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[10%] text-secondary/10"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Quote size={80} strokeWidth={1} />
        </motion.div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what Calgary businesses and individuals have to say about our services."
          />
        </motion.div>
      </Container>

      {/* 3D Scroll Trigger Testimonials */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <ThreeDScrollTriggerContainer className="py-8">
          {/* First row - scrolls right */}
          <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </ThreeDScrollTriggerRow>

          {/* Second row - scrolls left */}
          <div className="mt-6">
            <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
              {[...testimonials].reverse().map((testimonial) => (
                <TestimonialCard
                  key={`reverse-${testimonial.id}`}
                  testimonial={testimonial}
                />
              ))}
            </ThreeDScrollTriggerRow>
          </div>
        </ThreeDScrollTriggerContainer>
      </motion.div>

      {/* Bottom CTA */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Trusted by <span className="text-primary font-semibold">500+</span>{' '}
            satisfied customers in Calgary
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
