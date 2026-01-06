'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  Rocket,
  Target,
  Users,
  Award,
  Zap,
  Code,
  Sparkles,
  TrendingUp,
  Shield,
  Globe,
  Star,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
  { icon: Award, value: '50+', label: 'Awards Won', color: 'from-purple-500 to-pink-500' },
  { icon: Rocket, value: '1000+', label: 'Projects Completed', color: 'from-orange-500 to-red-500' },
  { icon: TrendingUp, value: '99%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
];

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'We leverage agile methodologies and cutting-edge tools to deliver projects 40% faster than industry standards without compromising quality.',
    color: 'from-yellow-500 to-orange-500',
    glow: 'shadow-yellow-500/50',
    metric: '40% Faster',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption, GDPR compliance, and regular security audits ensure your data and applications are protected 24/7.',
    color: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/50',
    metric: '99.9% Uptime',
  },
  {
    icon: Users,
    title: 'Dedicated Support Team',
    description: 'Round-the-clock expert support with guaranteed 2-hour response time. Your success is our priority, every step of the way.',
    color: 'from-purple-500 to-pink-500',
    glow: 'shadow-purple-500/50',
    metric: '24/7 Support',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI Growth',
    description: 'Our clients see an average 300% ROI within the first year through optimized performance, user engagement, and conversion rates.',
    color: 'from-green-500 to-emerald-500',
    glow: 'shadow-green-500/50',
    metric: '300% ROI',
  },
  {
    icon: Code,
    title: 'Modern Tech Stack',
    description: 'Built with the latest frameworks and technologies - React, Next.js, Node.js, AI/ML integrations, and cloud-native architecture.',
    color: 'from-indigo-500 to-violet-500',
    glow: 'shadow-indigo-500/50',
    metric: 'Future-Proof',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'With clients across 40+ countries, we bring international best practices and diverse insights to every project we build.',
    color: 'from-cyan-500 to-teal-500',
    glow: 'shadow-cyan-500/50',
    metric: '40+ Countries',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and competitive landscape to craft a strategic roadmap.',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description: 'Our designers create stunning, user-centric interfaces and interactive prototypes for your approval.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Expert developers build your solution using cutting-edge tech, with rigorous testing at every stage.',
    icon: Code,
    color: 'from-orange-500 to-red-500',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Seamless deployment to production with ongoing support, monitoring, and continuous optimization.',
    icon: Rocket,
    color: 'from-green-500 to-emerald-500',
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/5 via-white to-secondary/5"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Large gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-200 h-200 rounded-full bg-linear-to-br from-primary/20 via-primary/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -left-40 w-175 h-175 rounded-full bg-linear-to-tr from-secondary/20 via-secondary/10 to-transparent blur-3xl"
          />

          {/* Grid pattern */}
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

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-secondary"
              style={{
                left: `${5 + i * 5}%`,
                top: `${10 + (i % 6) * 15}%`,
              }}
              animate={{
                y: [0, -30, -60, -90],
                opacity: [0, 0.5, 1, 0],
                scale: [0, 1, 1.5, 0],
              }}
              transition={{
                duration: 5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <Container className="relative z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-gradient">About Madeny Digital</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-none"
            >
              <span className="text-foreground">Crafting Digital</span>{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%] animate-[gradient_3s_ease-in-out_infinite]">
                Excellence
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              We're a team of passionate innovators transforming ideas into powerful digital experiences that drive real business growth
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Our Projects
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-linear-to-br from-white to-gray-50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section - Card Grid Layout */}
      <section className="relative py-24 bg-linear-to-b from-white via-muted/20 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            style={{
              backgroundImage: `
                linear-gradient(90deg, #9f2321 1px, transparent 1px),
                linear-gradient(#9f2321 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            className="w-full h-full"
          />
        </div>

        {/* Floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-linear-to-br from-purple-500 to-pink-500 blur-3xl"
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Your Success Is <span className="text-gradient">Our Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver exceptional results that drive real business growth
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-linear-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative h-full"
                  >
                    <div className="p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                      {/* Icon with gradient background */}
                      <div className="relative mb-6">
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`w-20 h-20 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                        </motion.div>

                        {/* Metric badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                          className="absolute -top-2 -right-2 px-3 py-1 rounded-xl bg-white border-2 border-gray-200 shadow-md"
                        >
                          <span className="text-xs font-black text-gradient">{feature.metric}</span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-black mb-3 text-foreground">
                        {feature.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {feature.description}
                      </p>

                      {/* Key benefit with icon */}
                      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                        <div className={`w-5 h-5 rounded-full bg-linear-to-br ${feature.color} flex items-center justify-center shrink-0`}>
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {index === 0 ? 'Faster time to market' :
                           index === 1 ? 'Enterprise reliability' :
                           index === 2 ? 'Expert guidance 24/7' :
                           index === 3 ? 'Measurable impact' :
                           index === 4 ? 'Future-ready solutions' :
                           'Global best practices'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mission & Vision - Split Design */}
      <section className="relative py-24 overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Mission - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl lg:rounded-tl-none lg:rounded-bl-none bg-linear-to-br from-primary via-primary-dark to-secondary p-12 lg:p-16 flex items-center min-h-[600px]"
          >
            {/* Animated background patterns */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute top-10 right-10 w-64 h-64 border-2 border-white rounded-full"
              />
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-10 left-10 w-48 h-48 border-2 border-white rounded-full"
              />
            </div>

            <div className="relative z-10 max-w-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-6"
              >
                <Target className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Our Mission</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Transforming Ideas Into Digital Reality
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We exist to bridge the gap between imagination and execution. Every project we undertake is an opportunity to create something extraordinary—solutions that don't just solve problems but inspire progress.
              </p>

              <div className="space-y-4">
                {[
                  'Empower businesses with cutting-edge technology',
                  'Deliver measurable results and lasting value',
                  'Build partnerships based on trust and transparency',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vision - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white p-12 lg:p-16 flex items-center min-h-[600px]"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, #9f2321 1px, transparent 1px),
                    linear-gradient(#9f2321 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
                className="w-full h-full"
              />
            </div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 right-20 w-64 h-64 rounded-full bg-linear-to-br from-primary to-secondary blur-3xl"
            />

            <div className="relative z-10 max-w-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Vision</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                A World Where Technology <span className="text-gradient">Elevates Everyone</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We envision a future where innovative digital solutions are accessible to all businesses, regardless of size or industry. A world where technology serves as an equalizer, enabling every organization to compete, grow, and thrive.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: 'Global Impact' },
                  { icon: Zap, label: 'Innovation First' },
                  { icon: Users, label: 'Human-Centered' },
                  { icon: TrendingUp, label: 'Sustainable Growth' },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-foreground text-sm">{item.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section - Vertical Timeline */}
      <section className="relative py-24 bg-gradient-to-b from-muted/30 via-white to-muted/30 overflow-hidden">
        {/* Animated background orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-linear-to-br from-purple-500 to-pink-500 blur-3xl"
        />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              How We <span className="text-gradient">Transform</span> Ideas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that turns vision into exceptional digital products
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index < process.length - 1 && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 w-0.5 h-20 bg-linear-to-b from-primary/50 to-secondary/50 hidden lg:block" />
                  )}

                  <div className={`grid lg:grid-cols-2 gap-8 items-center mb-20 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
                    >
                      <div className="p-8 lg:p-10 rounded-3xl bg-white border-2 border-gray-100 hover:border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                        <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-linear-to-r ${step.color} mb-6`}>
                          <span className="text-2xl font-black text-white">{step.step}</span>
                          <div className="w-1 h-6 bg-white/30" />
                          <span className="text-sm font-bold text-white uppercase tracking-wider">Step {index + 1}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-black mb-4 text-foreground">
                          {step.title}
                        </h3>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {step.description}
                        </p>

                        {/* Key deliverables */}
                        <div className="space-y-3">
                          {[
                            index === 0 ? 'Comprehensive project roadmap' :
                            index === 1 ? 'Interactive prototypes & mockups' :
                            index === 2 ? 'Fully tested codebase' :
                            'Live deployment & documentation',

                            index === 0 ? 'Competitive analysis report' :
                            index === 1 ? 'Design system & style guide' :
                            index === 2 ? 'Performance optimization' :
                            'Training & knowledge transfer',

                            index === 0 ? 'Technical architecture plan' :
                            index === 1 ? 'User feedback integration' :
                            index === 2 ? 'Security & code reviews' :
                            '24/7 monitoring & support',
                          ].map((deliverable, i) => (
                            <motion.div
                              key={deliverable}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.3 + i * 0.1 }}
                              className="flex items-center gap-3 group"
                            >
                              <div className={`w-6 h-6 rounded-lg bg-linear-to-br ${step.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-foreground font-medium">{deliverable}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Duration badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.6, type: 'spring' }}
                          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
                        >
                          <div className={`w-2 h-2 rounded-full bg-linear-to-r ${step.color}`} />
                          <span className="text-sm font-semibold text-muted-foreground">
                            {index === 0 ? '1-2 weeks' : index === 1 ? '2-3 weeks' : index === 2 ? '4-6 weeks' : 'Ongoing'}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Visual Panel */}
                    <div className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                        className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden"
                      >
                        {/* Gradient background */}
                        <div className={`absolute inset-0 bg-linear-to-br ${step.color} p-6 md:p-8 lg:p-12`}>
                          {/* Animated icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                              <Icon className="w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40 text-white opacity-90" strokeWidth={1.5} />
                            </motion.div>
                          </div>

                          {/* Decorative elements */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                            }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 border-2 md:border-3 lg:border-4 border-white/20 rounded-full"
                          />
                          <motion.div
                            animate={{
                              scale: [1, 1.3, 1],
                              rotate: [360, 180, 0],
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                            className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 w-12 h-12 md:w-18 md:h-18 lg:w-24 lg:h-24 border-2 md:border-3 lg:border-4 border-white/30 rounded-2xl lg:rounded-3xl"
                          />

                          {/* Step number badge */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                            className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl bg-white shadow-2xl flex items-center justify-center"
                          >
                            <span className="text-2xl md:text-3xl lg:text-4xl font-black text-gradient">{step.step}</span>
                          </motion.div>

                          {/* Floating particles - hidden on mobile */}
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white hidden md:block"
                              style={{
                                left: `${20 + i * 10}%`,
                                top: `${30 + (i % 3) * 20}%`,
                              }}
                              animate={{
                                y: [0, -20, 0],
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 3 + i * 0.3,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>

                      {/* Glow effect */}
                      <div className={`absolute -inset-4 bg-linear-to-br ${step.color} opacity-20 blur-3xl -z-10`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-8 lg:p-10 rounded-3xl bg-white border-2 border-primary/20 shadow-2xl max-w-3xl">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to see our process in action? Let's discuss how we can bring your vision to life with our proven methodology.
              </p>
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-linear-to-br from-primary via-primary-dark to-secondary overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Let's collaborate and turn your vision into reality. Join hundreds of satisfied clients who trust us with their digital future.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-primary hover:bg-white/90 border-white"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </Button>
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 hover:bg-white/20"
              >
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
