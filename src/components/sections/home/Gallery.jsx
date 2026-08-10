'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const AUTO_ADVANCE_MS = 3000;

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

// Breakpoints as plain numbers (not Tailwind classes) — the carousel needs
// these values in JS for both the drag math (getCarouselConfig) and the
// card/stage pixel sizing below, so one numeric source of truth drives
// both instead of keeping a JS copy in sync with Tailwind's sm/lg by hand.
const BREAKPOINTS = { sm: 640, lg: 1024 };

// Card + stage pixel sizes per breakpoint. Plain numbers set via inline
// style, not Tailwind h-*/w-* utility classes — the stage's only children
// are position:absolute cards, so it has no in-flow content to size
// against and must receive an explicit height directly.
const SIZES = {
  base: { cardW: 224, cardH: 320, stageH: 352 },
  sm:   { cardW: 288, cardH: 384, stageH: 464 },
  lg:   { cardW: 320, cardH: 416, stageH: 528 },
};

function sizesFor(width) {
  if (width >= BREAKPOINTS.lg) return SIZES.lg;
  if (width >= BREAKPOINTS.sm) return SIZES.sm;
  return SIZES.base;
}

// Drag-driven stacked carousel — cards fan out from center by their signed
// distance from the active index, drag/flick shifts that distance with
// momentum, and a spring settles it back onto a whole card.
// xMultiplier is tuned relative to each breakpoint's card width (see
// SIZES above) so neighboring cards overlap by roughly a third rather
// than floating apart with daylight between them. yMultiplier is kept
// small so the fanned card tips never clip against the stage's own
// overflow-hidden edge.
//
// visibleWindow caps how many cards either side of center can ever be
// visible, independent of the slide count: a small window on mobile keeps
// only the active card (plus a sliver of its neighbors) on screen, while a
// wider window on desktop spreads more of the deck into view at once.
function getCarouselConfig(width) {
  if (width < BREAKPOINTS.sm) {
    return {
      distanceDivisor: 90,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 108,
      yMultiplier: 8,
      rotationMultiplier: 6,
      scaleReduction: 0.1,
      visibleWindow: 1.4,
    };
  }
  if (width < BREAKPOINTS.lg) {
    return {
      distanceDivisor: 130,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 118,
      yMultiplier: 14,
      rotationMultiplier: 9,
      scaleReduction: 0.08,
      visibleWindow: 1.5,
    };
  }
  return {
    distanceDivisor: 170,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 150,
    yMultiplier: 18,
    rotationMultiplier: 10,
    scaleReduction: 0.09,
    visibleWindow: 2.5,
  };
}

function Card({ slide, index, total, progress, config, size }) {
  // Signed circular distance from the active (centered) index: wraps
  // around both ends of the deck so the first and last cards are treated
  // as neighbors, same as the rest of the fan-out math expects.
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : o * config.rotationMultiplier));
  const y = useTransform(offset, (o) => (Math.abs(o) < 0.05 ? 0 : Math.abs(o) * config.yMultiplier));
  const scale = useTransform(offset, (o) => 1 - Math.abs(o) * config.scaleReduction);

  // Cards fade out past `visibleWindow` steps from center, regardless of
  // how many total slides exist — this is what actually controls how many
  // cards are visible at once per breakpoint, independent of `total`.
  const visibleWindow = Math.min(config.visibleWindow, total / 2);
  const opacity = useTransform(
    offset,
    [-visibleWindow, -visibleWindow + 0.4, 0, visibleWindow - 0.4, visibleWindow],
    [0, 1, 1, 1, 0]
  );
  const zIndex = useTransform(offset, (o) => Math.round(100 - Math.abs(o) * 10));
  const scrimOpacity = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.5, 0.2, 0, 0.2, 0.5]);
  const captionOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{
        x, rotate, y, scale, opacity, zIndex,
        width: size.cardW,
        height: size.cardH,
        marginTop: -size.cardH / 2,
        marginLeft: -size.cardW / 2,
      }}
      className="group pointer-events-none absolute top-1/2 left-1/2 overflow-hidden rounded-2xl bg-black/10"
    >
      <Image
        src={slide.image}
        alt={slide.title || ''}
        fill
        loading="lazy"
        sizes={`${size.cardW}px`}
        className="pointer-events-none object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <motion.div style={{ opacity: scrimOpacity }} className="pointer-events-none absolute inset-0 bg-black" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      {slide.tag && (
        <span className="absolute right-4 top-4 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-black backdrop-blur-md">
          {slide.tag}
        </span>
      )}

      {slide.title && (
        <div className="absolute inset-x-4 bottom-5 text-white">
          <motion.p
            style={{ opacity: captionOpacity }}
            className="text-base font-bold leading-tight tracking-tight drop-shadow-md"
          >
            {slide.title}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function StackedCarousel({ slides }) {
  const progress = useMotionValue(0);
  const startProgress = useRef(0);
  const windowWidth = useWindowWidth();
  const total = slides.length;
  const config = useMemo(() => getCarouselConfig(windowWidth), [windowWidth]);
  // Falls back to the base (mobile) size before the width effect runs on
  // mount, same "measure after mount" approach getCarouselConfig already
  // uses — avoids an SSR/hydration mismatch from reading window up front.
  const size = useMemo(() => sizesFor(windowWidth), [windowWidth]);
  const prefersReducedMotion = useReducedMotion();

  // Auto-advance one card at a time on a fixed interval. Any user drag
  // resets the timer (via the effect's own restartAutoAdvance dependency
  // below) so a card doesn't get yanked out from under an in-progress
  // interaction — same "don't fight the user" rule the rest of the site's
  // scroll-driven sections already follow.
  const [autoAdvanceTick, setAutoAdvanceTick] = useState(0);
  const restartAutoAdvance = () => setAutoAdvanceTick((t) => t + 1);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    const id = setInterval(() => {
      animate(progress, Math.round(progress.get()) + 1, {
        type: 'spring',
        stiffness: 200,
        damping: 30,
        mass: 1,
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoAdvanceTick, prefersReducedMotion]);

  const handleDragStart = () => {
    startProgress.current = progress.get();
  };

  const handleDrag = (_, info) => {
    const delta = -info.delta.x / config.sensitivity;
    progress.set(progress.get() + delta);
  };

  const handleDragEnd = (_, info) => {
    const distanceShift = -info.offset.x / config.distanceDivisor;
    const velocityShift = -info.velocity.x / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(progress, target, { type: 'spring', stiffness: 200, damping: 30, mass: 1 });
    restartAutoAdvance();
  };

  return (
    <div
      style={{ height: size.stageH }}
      className="relative w-full select-none overflow-hidden"
    >
      {/* Invisible drag-capture layer: doesn't move itself
          (dragConstraints locked to 0,0) — it only exists to read pointer
          delta/velocity and feed it into `progress`, which is what
          actually moves the cards via each Card's own transforms. */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
      />

      {slides.map((slide, i) => (
        <Card key={slide.image + i} slide={slide} index={i} total={total} progress={progress} config={config} size={size} />
      ))}
    </div>
  );
}

/* ── ServiceGallery ──
   A second, stacked-drag-carousel presentation of the same gallery data
   Gallery.jsx renders as a grid — meant to sit directly below it on the
   homepage. Follows the standard section contract (data-fallback,
   useInView reveal) — see component-patterns memory. Header block matches
   Gallery.jsx's own badge/title conventions (Container, reveal-* classes,
   brand palette) rather than inventing new copy/colors. */
export default function Gallery({ data }) {
  const [sectionRef, inView] = useInView('-60px');
  const d = data || {};
  const items = d.items?.length ? d.items : defaultItems;

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 lg:py-32">
      <Container className="relative z-10">
        <div
          data-inview={inView ? 'true' : ''}
          className="reveal-scale inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
        >
          <span className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="w-1 h-1 rounded-full bg-primary/50" />
            <span className="w-1 h-1 rounded-full bg-primary" />
          </span>
          {d.badge || 'In The Field'}
        </div>

        <h2
          data-inview={inView ? 'true' : ''}
          className="reveal-up anim-delay-1 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tighter mb-4"
        >
          <span className="block text-foreground">{d.titleLine1 || 'As Drawn,'}</span>
          <span className="block text-gradient">{d.titleLine2 || 'As Built'}</span>
        </h2>

        <p
          data-inview={inView ? 'true' : ''}
          className="reveal-up anim-delay-2 text-muted-foreground max-w-md"
        >
          {d.subtitle || 'Drag to browse.'}
        </p>
      </Container>

      <div className="mt-10 lg:mt-14">
        <StackedCarousel slides={items} />
      </div>
    </section>
  );
}
