'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Zap, Shield, TrendingUp, Star, ArrowUpRight, MousePointer2 } from 'lucide-react';
import Container from '@/components/ui/Container';

const BentoCard = ({ item, index, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const springConfig = { damping: 20, stiffness: 300 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = [Zap, TrendingUp, Shield][index % 3];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative group bg-white/40 backdrop-blur-xl border border-white/20 rounded-[40px] p-8 shadow-2xl overflow-hidden cursor-none ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Dynamic Content */}
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col items-end">
             <div className="text-4xl font-black text-gradient leading-none">{item.metric}</div>
             <div className="text-[10px] font-black uppercase text-muted-foreground tracking-tighter mt-1">{item.benefit}</div>
          </div>
        </div>

        <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {item.description}
        </p>

        <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
          Exploration
          <ArrowUpRight className="w-3 h-3" />
        </div>
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.07] transition-opacity" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
    </motion.div>
  );
};

export default function AboutWhy({ data }) {
  const d = data || {};
  const features = d.features || [];
  const containerRef = useRef(null);
  
  // Custom Cursor for the section
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-32 bg-linear-to-b from-[#f8f9fa] to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #9f2321 1px, transparent 1px), linear-gradient(#9f2321 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 font-black text-primary uppercase tracking-[0.2em] text-[10px]"
            >
              <Star className="w-3 h-3 fill-current" />
              {d.badge || "Why Choose Us"}
            </motion.div>
            
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-0 leading-[0.85] tracking-tighter">
              {d.title || "The Madeny Advantage"}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {d.description}
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspect-[2000px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main Large Card */}
          <BentoCard item={features[0]} index={0} className="md:col-span-2 lg:col-span-2 aspect-video md:aspect-auto" />
          
          {/* Smaller Cards */}
          <BentoCard item={features[1]} index={1} className="lg:h-full" />
          
          <BentoCard item={features[2]} index={2} />
          
          {/* Extra Static Bento Piece for Vibe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-linear-to-br from-primary to-secondary rounded-[40px] p-12 flex items-center justify-between text-white overflow-hidden relative group"
          >
             <div className="relative z-10">
               <div className="text-5xl font-black mb-4 leading-none italic">UNMATCHED<br/>DYNAMICS</div>
               <p className="opacity-80 max-w-sm mb-0">Our creative engine is fueled by data and refined by aesthetic intuition.</p>
             </div>
             <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
               className="absolute -right-20 -top-20 opacity-10 group-hover:opacity-20 transition-opacity"
             >
                <Star className="w-80 h-80 fill-current" />
             </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Floating Kinetic Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-2 h-2 rounded-full bg-primary/20 pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Custom Magic Cursor */}
      <motion.div
        animate={{
          x: cursorPos.x - 24,
          y: cursorPos.y - 24,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 0.3 : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-12 h-12 rounded-full bg-primary z-[9999] pointer-events-none blur-sm"
      />
      <motion.div
        animate={{
          x: cursorPos.x - 4,
          y: cursorPos.y - 4,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 400, mass: 0.2 }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[9999] pointer-events-none"
      />
    </section>
  );
}
