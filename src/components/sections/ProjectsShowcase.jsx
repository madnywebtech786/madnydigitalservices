'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';

const projects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description: "A modern, responsive e-commerce platform featuring real-time inventory management, secure payment processing, and an intuitive shopping experience. Built with Next.js and integrated with Stripe for seamless transactions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    url: "#",
    tags: ["Next.js", "Stripe", "E-Commerce"],
    color: "from-blue-500/10 to-purple-500/10"
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Complete restaurant solution with online ordering, table reservations, and kitchen management. Features real-time order tracking, customer reviews, and integrated delivery system for modern dining experiences.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    url: "#",
    tags: ["React", "Node.js", "Real-time"],
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    id: 3,
    title: "Healthcare Booking Platform",
    description: "Patient-friendly healthcare platform enabling easy appointment scheduling, telemedicine consultations, and medical record management. Streamlines doctor-patient communication with secure messaging.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    url: "#",
    tags: ["Healthcare", "Booking", "HIPAA"],
    color: "from-green-500/10 to-teal-500/10"
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    description: "Comprehensive property listing platform with advanced search filters, virtual tours, and direct agent communication. Features mortgage calculators and neighborhood insights for informed decisions.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    url: "#",
    tags: ["Real Estate", "3D Tours", "Maps"],
    color: "from-indigo-500/10 to-blue-500/10"
  },
  {
    id: 5,
    title: "Fitness & Wellness App",
    description: "Personal fitness companion with workout tracking, nutrition planning, and progress analytics. Includes video tutorials, custom workout plans, and integration with popular fitness wearables.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    url: "#",
    tags: ["Fitness", "Mobile", "Analytics"],
    color: "from-pink-500/10 to-rose-500/10"
  }
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Image zoom animation - zooms from 1.2 to 1 as card scrolls into view
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="mb-32"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image - alternating sides */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} z-10`} />

            {/* Image with scroll-based zoom */}
            <motion.div
              className="relative aspect-[4/3]"
              style={{ scale: imageScale }}
            >
              <Image
                unoptimized
                fill
                src={project.image}
                alt={project.title}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 flex items-end justify-center pb-8"
            >
              <div className="flex items-center gap-2 text-white font-semibold">
                <ExternalLink className="w-5 h-5" />
                <span>View Live Project</span>
              </div>
            </motion.div>

            {/* Project number badge */}
            <div className="absolute top-6 right-6 z-30 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-xl">
              <span className="text-white font-bold text-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%]">
            <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${project.color} blur-3xl opacity-50`} />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
        >
          <div className="space-y-6">
            {/* Tags */}
      

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900"
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 leading-relaxed text-lg"
            >
              {project.description}
            </motion.p>
                  <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="px-4 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <span>View Project</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Background decoratives */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #9f2321 1px, transparent 1px),
              linear-gradient(#9f2321 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
            style={{
              left: `${10 + i * 15}%`,
              top: `${25 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.7, 0],
              scale: [1, 1.5, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            badge="Portfolio"
            title="Featured Projects"
            subtitle="Explore our latest web development projects. From e-commerce platforms to custom web applications, we deliver exceptional digital experiences."
          />
        </motion.div>

        {/* Projects List */}
        <div className="mt-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />

            <span className="relative z-10">View All Projects</span>

            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{
                left: ['100%', '-100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'linear',
              }}
            />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
