'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Eye, MousePointer } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const categories = ['All', 'E-Commerce', 'Business', 'Landing Page'];

const projects = [
  {
    id: 1,
    title: 'TechMart Pro',
    category: 'E-Commerce',
    description: 'Modern e-commerce platform for electronics with advanced filtering, real-time inventory, and seamless checkout experience.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    link: '#',
    stats: { views: '12.5K', conversion: '4.2%' },
  },
  {
    id: 2,
    title: 'MobileHub Store',
    category: 'E-Commerce',
    description: 'Premium mobile phone retail platform featuring device comparison tools, trade-in calculator, and AR preview.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    stats: { views: '8.3K', conversion: '3.8%' },
  },
  {
    id: 3,
    title: 'Calgary Tech Solutions',
    category: 'Business',
    description: 'Professional business website for IT consulting firm with service showcase, team profiles, and client portal.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'Tailwind', 'Sanity'],
    link: '#',
    stats: { views: '5.2K', conversion: '6.1%' },
  },
  {
    id: 4,
    title: 'GadgetZone Landing',
    category: 'Landing Page',
    description: 'High-converting product launch landing page with animated sections, countdown timer, and lead capture.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    tags: ['React', 'Framer Motion', 'Vercel'],
    link: '#',
    stats: { views: '15.7K', conversion: '8.3%' },
  },
  {
    id: 5,
    title: 'LaptopWorld Market',
    category: 'E-Commerce',
    description: 'Comprehensive laptop marketplace with detailed specs comparison, financing calculator, and live chat support.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    tags: ['Next.js', 'Prisma', 'Stripe'],
    link: '#',
    stats: { views: '9.8K', conversion: '4.5%' },
  },
  {
    id: 6,
    title: 'Repair Pro Services',
    category: 'Business',
    description: 'Service-based business website with online booking, service tracking, and customer testimonials showcase.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80',
    tags: ['Next.js', 'Calendly', 'Tailwind'],
    link: '#',
    stats: { views: '4.1K', conversion: '7.2%' },
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/[0.02] to-white" />

      {/* Animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-20 -right-40 w-[700px] h-[700px]"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/[0.08] via-secondary/[0.05] to-transparent blur-3xl" />
        </motion.div>

        <motion.div
          style={{ y: backgroundY }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px]"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-secondary/[0.08] via-primary/[0.05] to-transparent blur-3xl" />
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[15%] w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-48 right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/10"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-[20%] w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 rotate-12"
        />

        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <motion.line
            x1="0%"
            y1="20%"
            x2="100%"
            y2="40%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
          <motion.line
            x1="100%"
            y1="60%"
            x2="0%"
            y2="80%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9f2321" />
              <stop offset="100%" stopColor="#135180" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, #9f2321 1.5px, transparent 1.5px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          badge="Our Work"
          title="Web Projects"
          subtitle="Explore our portfolio of stunning websites and web applications. Each project showcases our commitment to modern design and exceptional user experience."
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                activeCategory === category
                  ? 'text-white shadow-xl shadow-primary/25'
                  : 'bg-white text-muted-foreground hover:text-foreground shadow-md hover:shadow-lg border border-gray-100'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {activeCategory === category && (
                  <Sparkles className="w-4 h-4" />
                )}
                {category}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-full"
                >
                  {/* Card with glassmorphism */}
                  <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-sm" />
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Light overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

                      {/* Hover overlay with stats */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end justify-between p-6"
                      >
                        <div className="flex gap-6">
                          <div className="text-white">
                            <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                              <Eye className="w-3 h-3" /> Views
                            </div>
                            <div className="text-xl font-bold">
                              {project.stats.views}
                            </div>
                          </div>
                          <div className="text-white">
                            <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
                              <MousePointer className="w-3 h-3" /> Conversion
                            </div>
                            <div className="text-xl font-bold">
                              {project.stats.conversion}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Floating action button */}
                      <motion.a
                        href={project.link}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0.8,
                          y: hoveredProject === project.id ? 0 : 10,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center"
                      >
                        <ArrowUpRight className="w-5 h-5 text-primary" />
                      </motion.a>

                      {/* Category badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="absolute top-4 left-4"
                      >
                        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/95 backdrop-blur-sm text-primary shadow-md">
                          {project.category}
                        </span>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: tagIndex * 0.05 }}
                            className="px-3 py-1.5 text-xs font-medium rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 text-foreground border border-primary/10"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: hoveredProject === project.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            View All Projects
          </Button>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        />
      </Container>
    </section>
  );
}
