"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Maximize2,
  Zap,
  Layers,
  Sparkles,
  Box,
  Eye,
  Code,
  Palette,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// Gallery items
const galleryItems = [
  {
    id: 1,
    title: "Neural Networks",
    category: "AI/ML",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    icon: Zap,
    height: "h-64",
    color: "from-cyan-500/20 to-blue-500/20",
    glow: "shadow-cyan-500/50",
  },
  {
    id: 2,
    title: "3D Rendering",
    category: "Graphics",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    icon: Box,
    height: "h-64",
    color: "from-purple-500/20 to-pink-500/20",
    glow: "shadow-purple-500/50",
  },
  {
    id: 3,
    title: "Data Visualization",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    icon: Layers,
    height: "h-64",
    color: "from-orange-500/20 to-red-500/20",
    glow: "shadow-orange-500/50",
  },
  {
    id: 4,
    title: "UI Design Systems",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    icon: Palette,
    height: "h-64",
    color: "from-pink-500/20 to-rose-500/20",
    glow: "shadow-pink-500/50",
  },
  {
    id: 5,
    title: "Code Architecture",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    icon: Code,
    height: "h-64",
    color: "from-green-500/20 to-emerald-500/20",
    glow: "shadow-green-500/50",
  },
  {
    id: 6,
    title: "Immersive Experiences",
    category: "XR/VR",
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    icon: Eye,
    height: "h-64",
    color: "from-indigo-500/20 to-violet-500/20",
    glow: "shadow-indigo-500/50",
  },
  {
    id: 7,
    title: "Creative Innovation",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    icon: Sparkles,
    height: "h-64",
    color: "from-yellow-500/20 to-amber-500/20",
    glow: "shadow-yellow-500/50",
  },
  {
    id: 8,
    title: "Cloud Solutions",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    icon: Layers,
    height: "h-64",
    color: "from-sky-500/20 to-blue-500/20",
    glow: "shadow-sky-500/50",
  },
  {
    id: 9,
    title: "Blockchain Tech",
    category: "Web3",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    icon: Box,
    height: "h-64",
    color: "from-violet-500/20 to-purple-500/20",
    glow: "shadow-violet-500/50",
  },
  {
    id: 10,
    title: "Mobile Apps",
    category: "iOS/Android",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    icon: Sparkles,
    height: "h-64",
    color: "from-teal-500/20 to-cyan-500/20",
    glow: "shadow-teal-500/50",
  },
  {
    id: 11,
    title: "Security Solutions",
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    icon: Eye,
    height: "h-64",
    color: "from-red-500/20 to-orange-500/20",
    glow: "shadow-red-500/50",
  },
  {
    id: 12,
    title: "IoT Systems",
    category: "Connected Devices",
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
    icon: Layers,
    height: "h-64",
    color: "from-blue-500/20 to-cyan-500/20",
    glow: "shadow-blue-500/50",
  },
  {
    id: 13,
    title: "Digital Marketing",
    category: "Growth",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    icon: Sparkles,
    height: "h-64",
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "shadow-emerald-500/50",
  },
];

function GalleryImage({ item, index, colSpan }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${colSpan} relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          width={800}
          height={700}
          src={item.image}
          alt={item.title}
          unoptimized
          className={`w-full ${item.height} object-cover transition-transform duration-700 group-hover:scale-110`}
        />

        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top - Icon & Category */}
        <div className="flex items-start justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Icon */}
          <motion.div
            animate={
              isHovered ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] } : {}
            }
            transition={{ duration: 0.5 }}
            className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center ${item.glow}`}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={isHovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30"
          >
            <span className="text-white text-xs font-semibold">
              {item.category}
            </span>
          </motion.div>
        </div>

        {/* Bottom - Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
            <Maximize2 className="w-4 h-4" />
            <span>View Project</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />

      {/* Border Glow */}
      <div
        className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10 ${item.glow}`}
      />
    </motion.div>
  );
}

export default function Gallery() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax background elements
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-24 overflow-hidden bg-white"
      style={{ maxWidth: "100vw" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs with parallax */}
        <motion.div
          style={{ y: bgY1 }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-linear-to-br from-primary/10 via-secondary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ y: bgY2 }}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-linear-to-tr from-secondary/10 via-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #9f2321 1px, transparent 1px),
              linear-gradient(#9f2321 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-linear-to-r from-primary to-secondary"
            style={{
              left: `${5 + i * 8}%`,
              top: `${10 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <SectionHeader
            badge="Innovation Gallery"
            title="Future-Ready Solutions"
            subtitle="Explore our cutting-edge technologies and creative innovations. Each project represents our commitment to pushing boundaries and delivering exceptional digital experiences."
          />
        </motion.div>

        {/* Responsive Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1 - 3 equal images */}
          <GalleryImage item={galleryItems[0]} index={0} colSpan="" />
          <GalleryImage item={galleryItems[1]} index={1} colSpan="" />
          <GalleryImage item={galleryItems[2]} index={2} colSpan="" />

          {/* Row 2 - 1 wide image + 1 normal */}
          <GalleryImage
            item={galleryItems[3]}
            index={3}
            colSpan="md:col-span-2"
          />
          <GalleryImage item={galleryItems[4]} index={4} colSpan="" />

          {/* Row 3 - 1 normal + 1 wide image */}
          <GalleryImage item={galleryItems[5]} index={5} colSpan="" />
          <GalleryImage
            item={galleryItems[6]}
            index={6}
            colSpan="md:col-span-2"
          />

          {/* Row 4 - 3 equal images */}
          <GalleryImage item={galleryItems[7]} index={7} colSpan="" />
          <GalleryImage item={galleryItems[8]} index={8} colSpan="" />
          <GalleryImage item={galleryItems[9]} index={9} colSpan="" />

          {/* Row 5 - 1 wide image + 1 normal */}
          <GalleryImage
            item={galleryItems[10]}
            index={10}
            colSpan="md:col-span-2"
          />
          <GalleryImage item={galleryItems[11]} index={11} colSpan="" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-linear-to-r from-primary to-primary-dark text-white font-bold text-lg shadow-2xl overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-primary-dark to-secondary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative z-10">View Full Portfolio</span>

            <motion.span
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "linear",
              }}
            />
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
