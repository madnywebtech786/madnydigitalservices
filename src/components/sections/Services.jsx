'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import {
  Monitor,
  Smartphone,
  ShoppingBag,
  Code2,
  ArrowRight,
  Wrench,
  Unlock,
  Cpu,
  Sparkles,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    id: 'computer-repair',
    icon: Monitor,
    secondaryIcon: Wrench,
    title: 'Computer Repair',
    shortDesc: 'Expert diagnostics & repair',
    description:
      'Professional computer repair services for all brands. From hardware issues to software problems, virus removal to data recovery, we fix it all with quick turnaround times.',
    features: ['Hardware Repair', 'Virus Removal', 'Data Recovery', 'Upgrades'],
    color: 'from-primary to-primary-dark',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(159, 35, 33, 0.15) 0%, transparent 50%)',
  },
  {
    id: 'cell-phone-repair',
    icon: Smartphone,
    secondaryIcon: Unlock,
    title: 'Cell Phone Repair & Unlocking',
    shortDesc: 'Screen repair & carrier unlock',
    description:
      'Fast and reliable cell phone repair services. Screen replacements, battery changes, water damage repair, and professional carrier unlocking for all phone models.',
    features: ['Screen Repair', 'Battery Replacement', 'Unlocking', 'Water Damage'],
    color: 'from-secondary to-secondary-dark',
    bgPattern: 'radial-gradient(circle at 80% 20%, rgba(19, 81, 128, 0.15) 0%, transparent 50%)',
  },
  {
    id: 'device-sales',
    icon: ShoppingBag,
    secondaryIcon: Cpu,
    title: 'Mobile & Computer Sales',
    shortDesc: 'Quality devices & accessories',
    description:
      'Wide selection of new and refurbished mobile phones, laptops, and computers. Quality accessories including cases, chargers, and peripherals at competitive prices.',
    features: ['New Devices', 'Refurbished', 'Accessories', 'Best Prices'],
    color: 'from-primary to-secondary',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(159, 35, 33, 0.1) 0%, rgba(19, 81, 128, 0.1) 50%, transparent 70%)',
  },
  {
    id: 'web-development',
    icon: Code2,
    secondaryIcon: Monitor,
    title: 'Web Development',
    shortDesc: 'Custom websites & apps',
    description:
      'Professional web development services from stunning business websites to powerful e-commerce platforms. Modern, responsive designs that drive results.',
    features: ['Custom Websites', 'E-Commerce', 'SEO Optimized', 'Responsive'],
    color: 'from-secondary to-primary',
    bgPattern: 'radial-gradient(circle at 80% 80%, rgba(19, 81, 128, 0.15) 0%, transparent 50%)',
  },
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, scale: 0.8, rotateX: -45 }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0
      } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Link href={`/services/${service.id}`}>
        <motion.div
          whileHover={{ y: -12, scale: 1.03, rotateY: 2 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
          className="group relative h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Card */}
          <div
            className="relative h-full p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            style={{ background: service.bgPattern }}
          >
            {/* Animated gradient border on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary p-[2px]"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 100%' }}
              >
                <div className="w-full h-full rounded-3xl bg-white" />
              </motion.div>
            </motion.div>

            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
              initial={{ scale: 0, rotate: 0 }}
              whileHover={{ scale: 1, rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icons with 3D entrance */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5, type: 'spring' }}
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 shrink-0`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <service.icon className="w-8 h-8 text-white shrink-0" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30, scale: 0 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                  className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 shrink-0"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.secondaryIcon className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors duration-300 shrink-0" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Title & Description with staggered reveal */}
              <motion.h3
                initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                className="text-2xl font-bold mb-2 group-hover:text-gradient transition-all duration-300"
              >
                {service.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                className="text-primary/70 font-medium text-sm mb-4"
              >
                {service.shortDesc}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
                className="text-muted-foreground leading-relaxed mb-6"
              >
                {service.description}
              </motion.p>

              {/* Features with sequential entrance */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, y: 20, scale: 0, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : {}}
                    transition={{
                      delay: index * 0.1 + 0.7 + idx * 0.08,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 150
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      boxShadow: '0 4px 12px rgba(159, 35, 33, 0.2)',
                      background: 'linear-gradient(135deg, rgba(159, 35, 33, 0.1), rgba(19, 81, 128, 0.1))',
                    }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 text-foreground border border-primary/10 cursor-default"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    >
                      {feature}
                    </motion.span>
                  </motion.span>
                ))}
              </div>

              {/* CTA with magnetic effect */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 1.2, duration: 0.5 }}
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <span>Learn More</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative corner accent with animation */}
            <motion.div
              className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-10`}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />

            {/* Floating particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-40`}
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                }}
                animate={{
                  y: [0, -20, -40],
                  opacity: [0, 0.4, 0],
                  scale: [1, 1.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden bg-white"
    >
      {/* Ultra-modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs with 3D effect */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl"
        />

        {/* Animated grid pattern */}
        <motion.div
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #9f2321 1px, transparent 1px),
              linear-gradient(#9f2321 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Energy particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, -60],
              opacity: [0, 0.7, 0],
              scale: [1, 1.5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="servicesLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9f2321" stopOpacity="0" />
              <stop offset="50%" stopColor="#135180" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#9f2321" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,200 Q400,150 800,200 T1600,200"
            stroke="url(#servicesLineGradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <Container className="relative z-10">
        {/* Section Header with 3D entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, type: 'spring' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <SectionHeader
            badge="Our Services"
            title="What We Offer"
            subtitle="From device repairs to web solutions, we provide comprehensive tech services to keep you connected and your business growing."
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom decorative line with animation */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </Container>
    </section>
  );
}
