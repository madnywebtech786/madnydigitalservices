'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export default function About({ data }) {
  const d = data || {};

  const values = d.values ?? [
    { title: 'Mission', description: 'To empower businesses in Calgary and beyond with innovative digital solutions that drive growth and success in the modern marketplace.' },
    { title: 'Vision', description: 'To be the leading digital agency in Canada, known for exceptional creativity, technical excellence, and unwavering commitment to client success.' },
  ];

  // Map title to icon if not provided
  const getIconForValue = (title) => {
    switch(title.toLowerCase()) {
      case 'mission': return Target;
      case 'vision': return Eye;
      default: return Award;
    }
  };

  const achievements = d.achievements ?? [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '25+', label: 'Team Members' },
  ];

  const features = d.features ?? [
    'Custom solutions tailored to your business',
    'Cutting-edge technologies and frameworks',
    'Transparent communication throughout',
    'On-time delivery guaranteed',
    'Post-launch support and maintenance',
    'SEO and performance optimization',
  ];
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-muted/20 to-white relative overflow-hidden"
    >
      {/* Enhanced Background elements with 3D effects */}
      <motion.div
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
      />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
            background: i % 2 === 0
              ? 'linear-gradient(135deg, #9f2321, #135180)'
              : 'linear-gradient(135deg, #135180, #9f2321)',
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 2, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Container className="relative z-10">
          <div ref={contentRef}>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 80,
              damping: 20
            }}
            className="relative"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Madeny Digital Services Team"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Floating card - Experience with 3D effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateZ: -45 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotateZ: 0,
                  y: [0, -10, 0],
                } : {}}
                transition={{
                  opacity: { delay: 0.5, duration: 0.6 },
                  scale: { delay: 0.5, duration: 0.6, type: 'spring' },
                  rotateZ: { delay: 0.5, duration: 0.6 },
                  y: { delay: 1.2, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }}
                whileHover={{ scale: 1.1, rotateZ: 5, y: -15 }}
                className="absolute -bottom-6 -right-6 md:right-8"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass-card rounded-2xl p-5 shadow-2xl border border-primary/20">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
                    >
                      <Award className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 }}
                        className="text-3xl font-bold text-gradient"
                      >
                        {d.floatingCard1Value || '10+'}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">
                        {d.floatingCard1Label || 'Years of Excellence'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - Clients with 3D effects */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotateZ: 45 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotateZ: 0,
                  y: [0, 10, 0],
                } : {}}
                transition={{
                  opacity: { delay: 0.7, duration: 0.6 },
                  scale: { delay: 0.7, duration: 0.6, type: 'spring' },
                  rotateZ: { delay: 0.7, duration: 0.6 },
                  y: { delay: 1.4, duration: 5, repeat: Infinity, ease: 'easeInOut' },
                }}
                whileHover={{ scale: 1.1, rotateZ: -5, y: 15 }}
                className="absolute -top-6 -left-6 md:left-8"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="glass-card rounded-2xl p-5 shadow-2xl border border-secondary/20">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg"
                    >
                      <Users className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 1 }}
                        className="text-3xl font-bold text-gradient"
                      >
                        {d.floatingCard2Value || '50+'}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">
                        {d.floatingCard2Label || 'Happy Clients'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20" />
            </div>
          </motion.div>

          {/* Right - Content with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotateY: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0, scale: 1 } : {}}
            transition={{
              duration: 1,
              type: 'spring',
              stiffness: 80,
              damping: 20
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0, y: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              {d.badge || 'About Us'}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              {d.titlePrefix || 'We Are'}{' '}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, type: 'spring' }}
                className="text-gradient inline-block"
              >
                {d.title || 'Madeny Digital Services'}
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-6"
            >
              {d.paragraph1 || "Based in Calgary, Canada, we are a full-service digital agency specializing in creating exceptional digital experiences. With over a decade of experience, we've helped businesses in the mobile, laptop, and accessories industry establish powerful online presences."}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              {d.paragraph2 || 'Our team of designers, developers, and strategists work together to deliver solutions that not only look stunning but also drive real business results. We believe in the power of technology to transform businesses and create meaningful connections with customers.'}
            </motion.p>

            {/* Features list with 3D flip animation */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, rotateX: -90, y: 20 }}
                  animate={isInView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
                  transition={{
                    delay: 0.9 + index * 0.1,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 150
                  }}
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                    backgroundColor: 'rgba(159, 35, 33, 0.05)',
                  }}
                  className="flex items-center gap-3 p-2 rounded-lg transition-colors duration-200"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.5
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 1.5, type: 'spring' }}
            >
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Learn More About Us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Cards with 3D flip entrance */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50, rotateX: -45, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                scale: 1.02,
                y: -8,
                rotateY: 5,
                boxShadow: '0 25px 50px -12px rgba(159, 35, 33, 0.25)',
              }}
              className="relative group"
              style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
            >
              <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 border border-primary/10 hover:border-primary/30 relative overflow-hidden">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  animate={{
                    left: ['100%', '-100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: 'linear',
                  }}
                />

                <div className="flex items-start gap-5 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-lg"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {(() => {
                      const Icon = value.icon || getIconForValue(value.title);
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="text-2xl font-bold mb-3"
                    >
                      {value.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {value.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats with counter animation */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 150
                }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                }}
                className="text-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {achievement.number}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 }}
                  className="text-white/90 text-sm md:text-base font-medium"
                >
                  {achievement.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </Container>
    </section>
  );
}
