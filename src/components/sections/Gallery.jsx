'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const defaultItems = [
  {
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80',
    title: 'Tech Workstation Setup',
    tag: 'Workspace',
  },
  {
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    title: 'Computer Repair Lab',
    tag: 'Workshop',
  },
  {
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80',
    title: 'Mobile Device Repair',
    tag: 'Service',
  },
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    title: 'Web Development',
    tag: 'Digital',
  },
  {
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&q=80',
    title: 'Device Collection',
    tag: 'Sales',
  },
  {
    image: 'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=800&q=80',
    title: 'Customer Service',
    tag: 'Support',
  },
];

/* ── Lightbox ── */
function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = items[index];
  return (
    <div
      className="glb-backdrop fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glb-panel relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-video bg-black">
          <Image
            src={item.image}
            alt={item.title || ''}
            fill
            className="object-cover opacity-95"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          {/* Frame corners */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/50" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/50" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/50" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/50" />
          {/* Frame number */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-[0.3em] text-white/40 uppercase">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
        </div>

        {/* Caption bar */}
        <div className="bg-[#0c0c0e] px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/70 mb-0.5">{item.tag}</div>
            <div className="text-white text-sm font-bold">{item.title}</div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onPrev} className="glb-btn w-9 h-9 rounded-full border border-white/10 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button onClick={onNext} className="glb-btn w-9 h-9 rounded-full border border-white/10 flex items-center justify-center">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
      >
        <X className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

/* ── Gallery Frame Card ── */
function FrameCard({ item, index, inView, onClick }) {
  const delays = ['anim-delay-2','anim-delay-3','anim-delay-4','anim-delay-5','anim-delay-6','anim-delay-7'];
  const delay = delays[index % delays.length];

  return (
    <button
      data-inview={inView ? 'true' : ''}
      className={`glry-frame reveal-up ${delay} relative group cursor-pointer text-left w-full`}
      onClick={() => onClick(index)}
      aria-label={`View ${item.title}`}
    >
      {/* Frame number — top left */}
      <div className="absolute -top-3 left-3 z-20 flex items-center gap-1.5">
        <span className="text-[8px] font-black tracking-[0.35em] text-foreground/25 uppercase">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="w-8 h-px bg-foreground/15" />
      </div>

      {/* Photo area */}
      <div className="glry-img-wrap relative overflow-hidden rounded-xl" style={{ aspectRatio: index % 3 === 1 ? '4/5' : '3/4' }}>
        {/* Scan-line texture */}
        <div className="glry-scanlines absolute inset-0 z-10 pointer-events-none" aria-hidden="true" />

        <Image
          src={item.image}
          alt={item.title || `Gallery ${index + 1}`}
          fill
          className="glry-img object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />

        {/* Gradient overlay — always faintly visible at bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent z-10" />

        {/* Hover reveal */}
        <div className="glry-hover-overlay absolute inset-0 z-20 flex flex-col items-center justify-center gap-2">
          <div className="glry-zoom-icon w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <ZoomIn className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Tag + Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-3">
          <span className="glry-tag text-[8px] font-black uppercase tracking-[0.3em] text-primary/80 bg-primary/10 border border-primary/25 px-2 py-0.5 rounded-full">
            {item.tag}
          </span>
          {item.title && (
            <p className="glry-caption text-white text-xs font-bold mt-1.5 leading-tight">
              {item.title}
            </p>
          )}
        </div>

        {/* Corner brackets on hover */}
        <div className="glry-corner-tl absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
        <div className="glry-corner-tr absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
        <div className="glry-corner-bl absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
        <div className="glry-corner-br absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
      </div>
    </button>
  );
}

/* ── Main export ── */
export default function Gallery({ data }) {
  const d = data || {};
  const items = (d.items?.length ? d.items : defaultItems);
  const [sectionRef, inView] = useInView('-60px');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () => setLightboxIndex(i => (i - 1 + items.length) % items.length);
  const nextItem = () => setLightboxIndex(i => (i + 1) % items.length);

  return (
    <section ref={sectionRef} id="gallery" className="py-24 lg:py-32 relative overflow-hidden">

      <Container className="relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 lg:mb-20">
          <div>
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
            >
              {/* Film strip dots */}
              <span className="flex gap-0.5">
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span className="w-1 h-1 rounded-full bg-primary" />
              </span>
              {d.badge || 'Our Gallery'}
            </div>

            <h2
              data-inview={inView ? 'true' : ''}
              className="reveal-blur anim-delay-2 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tighter"
            >
              <span className="block text-foreground">{d.titleLine1 || 'Work &'}</span>
              <span className="block text-gradient">{d.titleLine2 || 'Space'}</span>
            </h2>
          </div>

          {/* Frame count indicator */}
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-right anim-delay-3 hidden sm:flex items-center gap-3 pb-2"
          >
            <div className="glry-filmstrip flex gap-1 items-center">
              {items.map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-6 rounded-sm bg-foreground/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-b from-primary/40 to-secondary/40 scale-y-0 origin-bottom transition-transform duration-300"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
              {String(items.length).padStart(2, '0')} frames
            </span>
          </div>
        </div>

        {/* ── Grid — masonry-style columns ── */}
        {items.length > 0 && (
          <>
            {/* Desktop: 3 columns with staggered heights */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 items-start">
              {items.map((item, i) => (
                <FrameCard
                  key={i}
                  item={item}
                  index={i}
                  inView={inView}
                  onClick={openLightbox}
                />
              ))}
            </div>

            {/* Mobile: featured first + 2-col compact strip */}
            <div className="sm:hidden">
              {/* Featured first image — large */}
              {items[0] && (
                <button
                  data-inview={inView ? 'true' : ''}
                  className="reveal-up anim-delay-2 w-full relative group cursor-pointer mb-4"
                  onClick={() => openLightbox(0)}
                >
                  <div className="absolute -top-3 left-3 z-20 flex items-center gap-1.5">
                    <span className="text-[8px] font-black tracking-[0.35em] text-foreground/25 uppercase">01</span>
                    <div className="w-8 h-px bg-foreground/15" />
                  </div>
                  <div className="glry-img-wrap relative overflow-hidden rounded-xl aspect-video">
                    <div className="glry-scanlines absolute inset-0 z-10 pointer-events-none" aria-hidden="true" />
                    <Image
                      src={items[0].image}
                      alt={items[0].title || 'Gallery 1'}
                      fill
                      className="glry-img object-cover"
                      sizes="100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent z-10" />
                    <div className="glry-hover-overlay absolute inset-0 z-20 flex items-center justify-center">
                      <div className="glry-zoom-icon w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-3">
                      {items[0].tag && (
                        <span className="glry-tag text-[8px] font-black uppercase tracking-[0.3em] text-primary/80 bg-primary/10 border border-primary/25 px-2 py-0.5 rounded-full">
                          {items[0].tag}
                        </span>
                      )}
                      {items[0].title && (
                        <p className="text-white text-sm font-bold mt-1.5">{items[0].title}</p>
                      )}
                    </div>
                    {/* Corner brackets */}
                    <div className="glry-corner-tl absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
                    <div className="glry-corner-tr absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
                    <div className="glry-corner-bl absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
                    <div className="glry-corner-br absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-white/0 z-20 transition-[border-color] duration-300 group-hover:border-white/50" />
                  </div>
                </button>
              )}

              {/* Remaining in 2-col grid */}
              <div className="grid grid-cols-2 gap-4 gap-y-8">
                {items.slice(1).map((item, i) => (
                  <FrameCard
                    key={i + 1}
                    item={item}
                    index={i + 1}
                    inView={inView}
                    onClick={openLightbox}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {/* Bottom rule */}
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-expand-x anim-delay-10 mt-16 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent"
        />
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </section>
  );
}
