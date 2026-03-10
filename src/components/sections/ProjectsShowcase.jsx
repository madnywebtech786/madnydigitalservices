'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Container from '@/components/ui/Container';

const defaultProjects = [
  {
    id: 1,
    title: "E-Commerce Fashion Store",
    description: "A modern, responsive e-commerce platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    url: "#",
    tags: ["Next.js", "Stripe"],
    color: "from-blue-500/10 to-purple-500/10"
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
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.5, 1]);

  return (
    <motion.div ref={cardRef} style={{ y, opacity }} className="mb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`relative group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <motion.div style={{ scale: imageScale }} className="relative aspect-[4/3]">
              <Image fill src={project.image} alt={project.title} className="object-cover" unoptimized />
            </motion.div>
          </div>
        </div>
        <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags?.map(tag => (
              <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{tag}</span>
            ))}
          </div>
          <button icon={<ArrowRight className="w-5 h-5" />}>View Project</button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase({ data }) {
  const d = data || {};
  console.log(data)
  const projects = d.items?.filter(p => p.featured) ?? defaultProjects;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader badge={d.badge || "Portfolio"} title={d.title || "Featured Projects"} />
        <div className="mt-24">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </Container>
    </section>
  );
}
