'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink, Monitor, Smartphone } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

/* ── Scrolling preview image component ── */
export function ScrollPreview({ src, alt, width = 1920, height = 12000 }) {
  const [active, setActive] = useState(false);
  const timerRef = useRef(null);

  const handleTouchToggle = () => setActive(prev => !prev);
  const handleMouseEnter = () => { timerRef.current = setTimeout(() => setActive(true), 80); };
  const handleMouseLeave = () => { clearTimeout(timerRef.current); setActive(false); };

  return (
    <div className="relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/90 backdrop-blur-sm border border-white/10 shadow-lg text-white text-[10px] font-black uppercase tracking-[0.2em]">
          <Monitor className="w-3 h-3 opacity-60" />
          Hover to preview
        </div>
        <div className="flex sm:hidden items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/90 backdrop-blur-sm border border-white/10 shadow-lg text-white text-[10px] font-black uppercase tracking-[0.2em]">
          <Smartphone className="w-3 h-3 opacity-60" />
          Hold to preview
        </div>
      </div>

      <div
        className="pdp-preview-window relative overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleTouchToggle}
        aria-label={active ? 'Collapse preview' : 'Expand preview'}
      >
        <div className="pdp-browser-bar flex items-center gap-2 px-4 py-3 bg-foreground/95 border-b border-white/8 shrink-0">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-3 h-6 rounded-md bg-white/8 flex items-center px-3">
            <span className="text-white/30 text-[10px] font-mono truncate">{alt}</span>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-white/20" />
        </div>

        <div className="pdp-preview-scroll-area relative overflow-hidden" style={{ height: '320px' }}>
          <div key={active ? 'scrolling' : 'idle'} className={`pdp-preview-inner w-full ${active ? 'pdp-preview-scrolling' : ''}`}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-auto object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          {!active && (
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
          )}
          {active && (
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent pdp-scan-line pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Related project mini card ── */
export function RelatedCard({ project, category }) {
  const [sRef, inV] = useInView('-40px');
  return (
    <div ref={sRef}>
      <Link href={`/projects/${project.id}`}>
        <div
          data-inview={inV ? 'true' : ''}
          className="reveal-up anim-delay-2 group relative rounded-2xl overflow-hidden border border-foreground/8 hover:border-primary/20 transition-colors duration-300"
        >
          <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            {category && (
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                {category.name}
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h4 className="text-white font-black text-base leading-tight mb-2">{project.shortTitle || project.title}</h4>
              <div className="flex items-center gap-1.5 text-white/70 text-xs font-bold">
                <span>View Project</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
