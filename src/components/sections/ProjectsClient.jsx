'use client';

import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  Search,
  TrendingUp,
  Users,
  Star,
  Eye,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Container from '@/components/ui/Container';

export default function ProjectsClient({ data }) {
  const d = data || {};
  const projects = d.items || [];
  const projectCategories = d.categories || [];
  const hero = d.hero || {};

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.tags && p.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
    }

    return filtered;
  }, [projects, selectedCategory, searchQuery]);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-linear-to-b from-white via-primary/2 to-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            style={{ y: heroY }}
            className="absolute -top-40 -right-40 w-200 h-200"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full rounded-full bg-linear-to-br from-primary/20 via-primary/10 to-transparent blur-3xl"
            />
          </motion.div>

          <motion.div
            style={{ y: heroY }}
            className="absolute -bottom-40 -left-40 w-175 h-175"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full rounded-full bg-linear-to-tr from-secondary/20 via-secondary/10 to-transparent blur-3xl"
            />
          </motion.div>

          {/* Animated grid pattern */}
          <motion.div
            animate={{ opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: 'linear-gradient(90deg, #9f2321 1px, transparent 1px), linear-gradient(#9f2321 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Pulsing energy dots */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-secondary"
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
        </div>

        <Container className="relative z-10 py-24">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="text-center max-w-5xl mx-auto"
          >
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
              <span className="text-sm font-semibold text-gradient">{hero.badge || 'Portfolio Showcase'}</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-none"
            >
              <span className="text-foreground">{hero.headingPart1 || 'Our'}</span>{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%] animate-[gradient_3s_ease-in-out_infinite]">
                {hero.headingHighlight || 'Amazing'}
              </span>{' '}
              <span className="text-foreground">{hero.headingPart2 || 'Work'}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {hero.description || 'Discover cutting-edge digital solutions that transform businesses and delight users'}
            </motion.p>

            {hero.stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                {hero.stats.map((stat, i) => {
                  const icons = { Projects: TrendingUp, Clients: Users, Rating: Star };
                  const colors = { Projects: 'from-blue-500 to-cyan-500', Clients: 'from-purple-500 to-pink-500', Rating: 'from-orange-500 to-yellow-500' };
                  const Icon = icons[stat.label] || TrendingUp;
                  const color = colors[stat.label] || 'from-blue-500 to-cyan-500';
                  return (
                    <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + i * 0.1, type: 'spring' }} className="relative group">
                      <div className="absolute inset-0 bg-linear-to-br from-white to-gray-50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/50 hover:border-primary/20 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                        <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        </Container>
      </section>

      {/* Filters Section - Modern Floating Design */}
      <section className="relative -mt-20 mb-16 z-20">
        <Container>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-60" />

            <div className="relative p-6 md:p-8">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search projects by name, tech stack, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-12 py-4 rounded-2xl bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white outline-none transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                  />
                  {searchQuery && (
                    <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                      <X className="w-4 h-4 text-gray-600" />
                    </motion.button>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {projectCategories.map((category, index) => {
                  const isActive = selectedCategory === category.id;
                  const categoryColors = {
                    'all': 'from-gray-700 to-gray-900',
                    'web': 'from-blue-500 to-cyan-500',
                    'mobile': 'from-purple-500 to-pink-500',
                    'ecommerce': 'from-green-500 to-emerald-500',
                    'saas': 'from-orange-500 to-red-500',
                    'ai': 'from-indigo-500 to-violet-500',
                  };
                  const colorMatch = categoryColors[category.id] || 'from-gray-700 to-gray-900';
                  return (
                    <motion.button key={category.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} onClick={() => setSelectedCategory(category.id)} className="relative group">
                      {isActive && (
                        <motion.div layoutId="activeCategory" className={`absolute inset-0 bg-gradient-to-r ${colorMatch} rounded-xl`} transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
                      )}
                      <div className={`relative px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${isActive ? 'text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                        {category.name}
                        {isActive && (
                          <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-xs">
                            {filteredProjects.length}
                          </motion.span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> project{filteredProjects.length !== 1 && 's'}
                </span>
                {(selectedCategory !== 'all' || searchQuery) && (
                  <button onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }} className="text-primary hover:text-primary-dark font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    <X className="w-4 h-4" /> Clear Filters
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <Container>
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div key={selectedCategory + searchQuery} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isHovered={hoveredProject === project.id}
                    onHover={() => setHoveredProject(project.id)}
                    onLeave={() => setHoveredProject(null)}
                    categories={projectCategories}
                  />
                ))}
              </motion.div>
            ) : (
              <EmptyState onReset={() => { setSelectedCategory('all'); setSearchQuery(''); }} />
            )}
          </AnimatePresence>
        </Container>
      </section>
    </>
  );
}

function ProjectCard({ project, index, isHovered, onHover, onLeave, categories }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const categoryColors = {
    'all': 'from-gray-700 to-gray-900',
    'web': 'from-blue-500 to-cyan-500',
    'mobile': 'from-purple-500 to-pink-500',
    'ecommerce': 'from-green-500 to-emerald-500',
    'saas': 'from-orange-500 to-red-500',
    'ai': 'from-indigo-500 to-violet-500',
  };
  const categoryColor = categoryColors[project.category] || 'from-gray-500 to-gray-600';

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div ref={cardRef} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: index * 0.1 }} onMouseEnter={onHover} onMouseLeave={onLeave} style={{ y }} className="group relative h-full cursor-pointer">
      <motion.div className={`absolute -inset-4 bg-gradient-to-r ${categoryColor} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} animate={isHovered ? { scale: 1.1 } : { scale: 1 }} />
      <div className="relative h-full rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent overflow-hidden transition-all duration-500 flex flex-col shadow-lg hover:shadow-2xl">
        <div className="relative h-72 overflow-hidden">
          <motion.div className="absolute inset-0" animate={isHovered ? { scale: 1.1 } : { scale: 1 }} transition={{ duration: 0.6 }}>
            <Image src={project.image} alt={project.title} fill unoptimized className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          {project.featured && (
            <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', delay: 0.2 }} className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-black flex items-center gap-1.5 shadow-lg">
              <Star className="w-3.5 h-3.5 fill-white" />
              FEATURED
            </motion.div>
          )}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.3 }} className="absolute top-4 left-4 flex gap-2">
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.demoUrl, '_blank'); }} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group/btn">
              <ExternalLink className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
            </button>
            <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.githubUrl, '_blank'); }} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 group/btn">
              <Github className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
            </button>
          </motion.div>
          <div className="absolute bottom-4 left-4">
            <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${categoryColor} text-white text-xs font-black backdrop-blur-xl shadow-lg flex items-center gap-2`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {categories.find(c => c.id === project.category)?.name}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.1 }} className="absolute bottom-4 right-4 flex gap-2">
            <div className="px-3 py-2 rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 text-white text-xs font-bold">
              <Eye className="w-3.5 h-3.5 inline mr-1" />
              {project.stats?.users || ''}
            </div>
            <div className="px-3 py-2 rounded-lg bg-white/20 backdrop-blur-xl border border-white/30 text-white text-xs font-bold">
              <Star className="w-3.5 h-3.5 inline mr-1 fill-white" />
              {project.stats?.rating || ''}
            </div>
          </motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" animate={{ x: isHovered ? ['-200%', '200%'] : '-200%' }} transition={{ duration: 0.8, ease: 'easeInOut' }} />
        </div>
        <div className="flex-1 flex flex-col p-6">
          <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {(project.tags || []).slice(0, 3).map((tag, i) => (
               <motion.span key={tag} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-100 text-gray-700">
                 {tag}
               </motion.span>
            ))}
            {(project.tags || []).length > 3 && (
               <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
                 +{(project.tags || []).length - 3}
               </span>
            )}
          </div>
          <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 text-primary font-bold text-sm group/btn self-start">
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
}

function EmptyState({ onReset }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="text-center py-24">
      <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mx-auto mb-6 flex items-center justify-center">
        <Search className="w-16 h-16 text-gray-400" />
      </motion.div>
      <h3 className="text-3xl font-black text-gray-900 mb-3">No Projects Found</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        We couldn't find any projects matching your criteria. Try adjusting your filters or search query.
      </p>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onReset} className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-lg hover:shadow-xl transition-all">
        Reset All Filters
      </motion.button>
    </motion.div>
  );
}
