'use client';

import { motion } from 'framer-motion';

export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(159, 35, 33, 0.4) 0%, transparent 70%)',
          top: '-10%',
          right: '-10%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Secondary orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(19, 81, 128, 0.4) 0%, transparent 70%)',
          bottom: '-5%',
          left: '-5%',
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {/* Accent orb */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(159, 35, 33, 0.5) 0%, transparent 70%)',
          top: '40%',
          left: '30%',
        }}
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(159, 35, 33, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(159, 35, 33, 1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

export function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-primary to-secondary"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function GlowingLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9f2321" stopOpacity="0" />
            <stop offset="50%" stopColor="#9f2321" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#135180" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,200 Q480,100 960,200 T1920,200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,400 Q480,300 960,400 T1920,400"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,600 Q480,500 960,600 T1920,600"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 3, delay: 0.6, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

export function HeroBackground() {
  return (
    <>
      <FloatingOrbs />
      <GridPattern />
      <GlowingLines />
    </>
  );
}
