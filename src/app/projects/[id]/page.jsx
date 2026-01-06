'use client';

import { useRef, use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Star,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { projects, projectCategories } from '@/data/projects';

export default function ProjectDetailPage({ params }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === parseInt(id));
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  if (!project) {
    return (
      <>
        <Header />
        <Container className="py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
              Back to Projects
            </Button>
          </Link>
        </Container>
        <Footer />
      </>
    );
  }

  const category = projectCategories.find((c) => c.id === project.category);
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero Section with Parallax Image */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
        </motion.div>

        {/* Content */}
        <Container className="relative z-10 h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Back Button */}
            <Link href="/projects">
              <motion.button
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Projects</span>
              </motion.button>
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className={`px-4 py-2 rounded-xl bg-linear-to-r ${category.color} text-white text-sm font-bold backdrop-blur-xl shadow-lg`}>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {category.name}
                </div>
              </div>
              {project.featured && (
                <div className="px-4 py-2 rounded-xl bg-linear-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    FEATURED
                  </div>
                </div>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
            >
              {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white/90 mb-8 max-w-3xl"
            >
              {project.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  icon={<ExternalLink className="w-5 h-5" />}
                  className="shadow-2xl"
                >
                  View Live Demo
                </Button>
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Github className="w-5 h-5" />}
                  iconPosition="left"
                  className="bg-white/10 backdrop-blur-xl border-white/30 text-white hover:bg-white/20"
                >
                  View Source
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-gradient mb-2">{project.stats.users}</div>
              <div className="text-sm text-muted-foreground font-medium">Active Users</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-yellow-500 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="text-4xl font-black text-gradient mb-2">{project.stats.rating}</div>
              <div className="text-sm text-muted-foreground font-medium">User Rating</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-gradient mb-2">{project.stats.performance}</div>
              <div className="text-sm text-muted-foreground font-medium">Performance Score</div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-linear-to-b from-white via-gray-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Technologies */}
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-xl bg-white border-2 border-gray-200 hover:border-primary shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-sm text-foreground">{tag}</span>
                  </motion.div>
                ))}
              </div>

              {/* Key Features */}
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <div className="space-y-3">
                {[
                  'Responsive design for all devices',
                  'Optimized performance and loading speeds',
                  'Modern UI/UX best practices',
                  'Secure and scalable architecture',
                  'Cross-browser compatibility',
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </motion.div>

              {/* Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Project Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      This project has helped transform the way users interact with digital platforms,
                      providing seamless experiences and driving business growth.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Related <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore more projects from the same category
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/projects/${relatedProject.id}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                    >
                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                          <Image
                            src={relatedProject.image}
                            alt={relatedProject.title}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        </motion.div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`px-3 py-1.5 rounded-lg bg-linear-to-r ${category.color} text-white text-xs font-bold`}>
                            {category.name}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-white/80 line-clamp-2 mb-3">
                          {relatedProject.description}
                        </p>
                        <div className="flex items-center gap-2 text-white text-sm font-medium">
                          <span>View Project</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link href="/projects">
                <Button
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="shadow-xl"
                >
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </Container>
        </section>
      )}

      <Footer />
    </>
  );
}
