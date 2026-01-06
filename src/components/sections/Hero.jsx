'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight,
  Phone,
  Sparkles,
  Zap,
  Shield,
  Monitor,
  Smartphone,
  Wrench,
  Star,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  const stats = [
    { value: '500+', label: 'Devices Repaired', icon: Wrench },
    { value: '50+', label: 'Web Projects', icon: Monitor },
    { value: '1000+', label: 'Happy Customers', icon: Star },
    { value: '24/7', label: 'Support', icon: Shield },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Ultra-modern animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.02] to-white" />

        {/* Large animated gradient orbs with 3D effect */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px]"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl"
          />
        </motion.div>

        <motion.div
          style={{ y: backgroundY }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px]"
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full rounded-full bg-gradient-to-tr from-secondary/20 via-secondary/10 to-transparent blur-3xl"
          />
        </motion.div>

        {/* Center pulse effect */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/05 via-transparent to-transparent blur-2xl"
        />

        {/* Animated grid pattern */}
        <motion.div
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #9f2321 1px, transparent 1px),
              linear-gradient(#9f2321 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Futuristic floating geometric shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            rotateX: [0, 15, 0]
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
            rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-[20%] left-[10%] w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 backdrop-blur-sm"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 20, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute top-[30%] right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 25, 0],
            x: [0, 10, 0],
            rotate: [12, 27, 12]
          }}
          transition={{
            opacity: { duration: 1, delay: 0.4 },
            scale: { duration: 1, delay: 0.4 },
            y: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="absolute bottom-[25%] left-[20%] w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/5"
        />

        {/* Pulsing energy dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
            style={{
              left: `${10 + i * 8}%`,
              top: `${30 + (i % 4) * 15}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.3, 0.8, 0.3, 0],
              scale: [0, 1, 1.5, 1, 0],
              y: [0, -20, -40, -60, -80],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeOut',
            }}
          />
        ))}

        {/* Animated flowing lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9f2321" stopOpacity="0" />
              <stop offset="50%" stopColor="#9f2321" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#135180" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,300 Q400,200 800,300 T1600,300"
            stroke="url(#heroLineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,500 Q400,400 800,500 T1600,500"
            stroke="url(#heroLineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.7, 0]
            }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <Container className="relative z-10 py-24 lg:py-32">
        <motion.div
          style={{ opacity, scale }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <motion.div className="text-center lg:text-left">
            {/* Badge with futuristic entrance */}
            <motion.div
              initial={{ opacity: 0, y: -30, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: 'spring',
                stiffness: 100
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/5"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-gradient">
                Calgary&apos;s Trusted Tech Partner
              </span>
            </motion.div>

            {/* Headline with staggered character entrance */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Your One-Stop
              </motion.span>
              <motion.span
                className="block text-gradient"
                initial={{ opacity: 0, x: -50, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                Tech Solution
              </motion.span>
              <motion.span
                className="block text-foreground"
                initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                Center
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Expert computer & cell phone repair, quality device sales, and professional
              web development services. All under one roof in Calgary, Alberta.
            </motion.p>

            {/* CTA Buttons with 3D effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="shadow-xl shadow-primary/25"
                >
                  Get Free Quote
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  iconPosition="left"
                >
                  (403) 555-0123
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats with sequential reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-12 border-t border-primary/10"
            >
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30, rotateY: -90 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{
                      delay: 1.4 + index * 0.1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
                    className="relative group"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50 shadow-lg group-hover:shadow-2xl group-hover:border-primary/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <motion.div
                          animate={{ rotate: [0, 10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <StatIcon className="w-4 h-4 text-primary" />
                        </motion.div>
                        <span className="text-2xl md:text-3xl font-bold text-gradient">
                          {stat.value}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced 3D Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
              type: 'spring',
              stiffness: 50
            }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative">
              {/* Floating service cards with 3D entrance */}
              <motion.div
                initial={{ opacity: 0, x: -50, rotateY: -90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 1, duration: 0.8, type: 'spring' }}
                className="absolute -top-4 -left-8 z-30"
              >
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Computer Repair</div>
                      <div className="text-xs text-muted-foreground">Same-day service</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
                className="absolute -bottom-8 -right-4 z-30"
              >
                <motion.div
                  animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  whileHover={{ scale: 1.1, rotateY: -10 }}
                  className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/50"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center shadow-lg">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Phone Repair</div>
                      <div className="text-xs text-muted-foreground">While you wait</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Speed badge with pulse */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.6, type: 'spring', stiffness: 200 }}
                className="absolute top-1/4 -right-12 z-30"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                  }}
                  className="bg-gradient-to-br from-primary to-secondary rounded-full p-4 shadow-xl"
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Main visual with 3D devices */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-white/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/3] p-8 flex items-center justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Desktop/Laptop */}
                    <motion.div
                      initial={{ opacity: 0, y: 50, rotateX: 45 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
                      className="relative z-10"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="bg-gray-900 rounded-t-2xl p-3">
                        <div className="flex gap-1.5 mb-2">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-red-400"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-yellow-400"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
                          />
                          <motion.div
                            className="w-3 h-3 rounded-full bg-green-400"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
                          />
                        </div>
                        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                          <img
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                            alt="Web development"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-800 h-4 rounded-b-lg"></div>
                      <div className="bg-gray-700 h-1 mx-12 rounded-b"></div>
                    </motion.div>

                    {/* Tablet */}
                    <motion.div
                      initial={{ opacity: 0, x: 50, rotateY: 45 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 1, duration: 0.8, type: 'spring' }}
                      className="absolute -right-6 top-8 w-28 z-20"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <div className="bg-gray-900 rounded-xl p-1.5 shadow-xl">
                          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-secondary to-primary">
                            <img
                              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
                              alt="Mobile app"
                              className="w-full h-full object-cover opacity-90"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, x: -50, rotateY: -45 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
                      className="absolute -left-4 bottom-4 w-20 z-20"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      >
                        <div className="bg-gray-900 rounded-2xl p-1 shadow-xl">
                          <div className="aspect-[9/19] rounded-xl overflow-hidden bg-gradient-to-br from-primary to-secondary">
                            <img
                              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&q=80"
                              alt="Mobile device"
                              className="w-full h-full object-cover opacity-90"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              </motion.div>

              {/* Background glow */}
              <motion.div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%]"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/15 via-transparent to-secondary/15 blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-gradient-to-b from-primary to-secondary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
