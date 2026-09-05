"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const GAP_PX = 24;
const MOBILE_PEEK_PCT = 8;

/* ================================================================
   SERVICE CARD
   ================================================================ */

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon;

  return (
    <div
      data-inview={inView ? "true" : ""}
      style={{
        animationDelay: `${Math.min(index, 4) * 0.1}s`,
      }}
      className={cn(
        "w-full h-full rounded-[28px] border border-border p-8 sm:p-10",
        "flex flex-col justify-between reveal-up",
        service.tint,
      )}
    >
      <div>
        {/* Number + Icon */}
        <div className="flex items-start justify-between mb-8">
          <span className="text-sm font-black tracking-[0.2em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-linear-to-br",
              service.gradient,
            )}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.05] mb-3">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-sm font-semibold text-primary mb-4">
          {service.shortDesc}
        </p>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {service.features?.map((feature) => (
            <span
              key={feature}
              className="
                inline-flex
                items-center
                gap-1
                text-[11px]
                font-semibold
                px-2.5
                py-1
                rounded-full
                bg-background
                border
                border-border
              "
            >
              <Check className="w-3 h-3 text-primary shrink-0" />
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* View service */}
      <Link
        href={`/services/${service.id}`}
        className="
          inline-flex
          items-center
          gap-2
          mt-8
          text-sm
          font-black
          uppercase
          tracking-[0.15em]
          group
        "
      >
        View Service
        <ArrowUpRight
          className="
            w-4
            h-4
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </Link>
    </div>
  );
}

/* ================================================================
   CTA CARD
   ================================================================ */

function CtaCard({ inView, delay }) {
  return (
    <div
      data-inview={inView ? "true" : ""}
      style={{
        animationDelay: `${delay}s`,
      }}
      className="
        reveal-up
        w-full
        h-full
        rounded-[28px]
        bg-linear-to-br
        from-primary
        to-secondary
        p-8
        sm:p-10
        flex
        flex-col
        justify-center
        items-start
        text-white
      "
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4 opacity-80">
        Need something else?
      </p>

      <h3 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
        We tailor solutions beyond the list . Tell us what you need.
      </h3>

      <Link href="/contact">
        <Button variant="primary" className="group">
          Get In Touch
          <ArrowUpRight
            className="
              w-4
              h-4
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </Button>
      </Link>
    </div>
  );
}

/* ================================================================
   SERVICES CAROUSEL
   ================================================================ */

export default function ServicesCarousel({ services, inView }) {
  const trackWrapRef = useRef(null);
  const viewportRef = useRef(null);
  const rowRef = useRef(null);

  const [slotsPerView, setSlotsPerView] = useState(1);

  const [scrollDistance, setScrollDistance] = useState(0);

  /*
   * Sticky positioning is handled directly here.
   *
   * Mobile: 96px  = 6rem
   * MD:     128px = 8rem
   * LG:     216px = 13.5rem
   */
  const [stickyTop, setStickyTop] = useState(96);

  const slideCount = services.length + 1;

  /* ================================================================
     RESPONSIVE BREAKPOINTS
     ================================================================ */

  useEffect(() => {
    const smQuery = window.matchMedia("(min-width: 40rem)");
    const mdQuery = window.matchMedia("(min-width: 48rem)");
    const lgQuery = window.matchMedia("(min-width: 64rem)");

    const updateResponsiveValues = () => {
      const isSm = smQuery.matches;
      const isMd = mdQuery.matches;
      const isLg = lgQuery.matches;

      /*
       * Number of visible cards
       *
       * Mobile = 1
       * SM+    = 2
       */
      setSlotsPerView(isSm ? 2 : 1);

      /*
       * Sticky offset
       *
       * Mobile = 96px
       * MD     = 128px
       * LG     = 216px
       */
      if (isLg) {
        setStickyTop(216);
      } else if (isMd) {
        setStickyTop(128);
      } else {
        setStickyTop(96);
      }
    };

    updateResponsiveValues();

    smQuery.addEventListener("change", updateResponsiveValues);
    mdQuery.addEventListener("change", updateResponsiveValues);
    lgQuery.addEventListener("change", updateResponsiveValues);

    return () => {
      smQuery.removeEventListener("change", updateResponsiveValues);
      mdQuery.removeEventListener("change", updateResponsiveValues);
      lgQuery.removeEventListener("change", updateResponsiveValues);
    };
  }, []);

  /* ================================================================
     CARD WIDTH
     ================================================================ */

  const slotWidth =
    slotsPerView === 1
      ? `calc(${100 - MOBILE_PEEK_PCT}% - ${GAP_PX}px)`
      : `calc(${100 / slotsPerView}% - ${
          (GAP_PX * (slotsPerView - 1)) / slotsPerView
        }px)`;

  /* ================================================================
     MEASURE HORIZONTAL DISTANCE
     ================================================================ */

  useEffect(() => {
    const measure = () => {
      const row = rowRef.current;
      const viewport = viewportRef.current;

      if (!row || !viewport) return;

      const distance = row.scrollWidth - viewport.clientWidth;

      setScrollDistance(Math.max(0, distance));
    };

    const frame = requestAnimationFrame(measure);

    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [services.length, slotsPerView]);

  /* ================================================================
     VERTICAL SCROLL PROGRESS
     ================================================================ */

  const { scrollYProgress } = useScroll({
    target: trackWrapRef,
    offset: ["start start", "end end"],
  });

  /* ================================================================
     HORIZONTAL MOVEMENT
     ================================================================ */

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  /* ================================================================
     STICKY VIEWPORT HEIGHT
     ================================================================ */

  const stickyHeight = `calc(100vh - ${stickyTop}px)`;

  return (
    <div
      ref={trackWrapRef}
      style={{
        height: `calc(var(--svc-track-vh, 80vh) * ${slideCount})`,
      }}
      className="
        [--svc-track-vh:80vh]
        sm:[--svc-track-vh:60vh]
        relative
      "
    >
      {/* ============================================================
          STICKY VIEWPORT

          IMPORTANT:
          top and height are intentionally INLINE.

          We are NOT relying on:
          top-24
          md:top-32
          lg:top-[13.5rem]

          This completely bypasses the CSS issue you were seeing.
          ============================================================ */}

      <div
        ref={viewportRef}
        className="
          sticky
          flex
          items-center
          overflow-hidden
        "
        style={{
          top: `${stickyTop}px`,
          height: stickyHeight,
        }}
      >
        {/* ==========================================================
            HORIZONTAL TRACK
            ========================================================== */}
        <div
          className="w-full"
          style={{
            transform: "translateY(-30px)",
          }}
        >
          <motion.div
            ref={rowRef}
            style={{ x }}
            className="
            flex
            w-full
            pl-4
            sm:pl-6
            lg:pl-8
            pr-4
            sm:pr-6
            lg:pr-8
          "
          >
            {/* ========================================================
              SERVICE CARDS
              ======================================================== */}

            {services.map((service, index) => (
              <div
                key={service.id}
                className="
                shrink-0
                h-115
                md:h-140 lg:h-125
              "
                style={{
                  width: slotWidth,
                  marginRight: GAP_PX,
                }}
              >
                <ServiceCard service={service} index={index} inView={inView} />
              </div>
            ))}

            {/* ========================================================
              TRAILING CTA
              ======================================================== */}

            <div
              className="
              shrink-0
              h-115
              md:h-140
              lg:h-125
            "
              style={{
                width: slotWidth,
              }}
            >
              <CtaCard
                inView={inView}
                delay={Math.min(services.length, 4) * 0.1}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
