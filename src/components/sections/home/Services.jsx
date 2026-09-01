"use client";

import {
  Monitor,
  Smartphone,
  Code2,
  Terminal,
  Star,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { useInView } from "@/hooks/useInView";
import ServicesCarousel from "@/components/sections/home/ServicesCarousel";

const servicesMeta = {
  "computer": {
    icon: Monitor,
    gradient: "from-primary to-primary-dark",
    tint: "bg-primary/6",
  },
  "cellphone": {
    icon: Smartphone,
    gradient: "from-secondary to-secondary-dark",
    tint: "bg-secondary/6",
  },
  "software-development": {
    icon: Terminal,
    gradient: "from-primary to-secondary-dark",
    tint: "bg-primary/6",
  },
  "web-development": {
    icon: Code2,
    gradient: "from-secondary to-primary",
    tint: "bg-secondary/6",
  },
};

const defaultServices = [
  {
    id: "computer",
    title: "Computer Repair",
    shortDesc: "Diagnostics, upgrades & data backup",
    description:
      "Professional computer repair and systems design: hardware, software, RAM/SSD upgrades, data recovery.",
    features: ["Hardware Repair", "System Design", "Data Recovery", "Upgrades"],
  },
  {
    id: "cellphone",
    title: "Cell Phone Repair",
    shortDesc: "Screen repair & carrier unlocking",
    description:
      "Fast, reliable phone repair: screens, batteries, charging ports, cameras, and carrier unlocking.",
    features: [
      "Screen Repair",
      "Battery Replacement",
      "Unlocking",
      "Liquid Damage",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDesc: "Custom business software & apps",
    description:
      "Custom software built around your business: management systems, web apps, portals, and databases.",
    features: ["Custom Software", "Web Apps", "Databases", "Automation"],
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "Custom websites & online stores",
    description:
      "Business websites and e-commerce platforms: modern, responsive, built with SEO in mind.",
    features: ["Custom Websites", "E-Commerce", "SEO Ready", "Responsive"],
  },
];

/* ── Section wrapper: badge/title/subtitle header + the ServicesCarousel.
   Follows the standard section contract (data-fallback, useInView reveal) —
   see component-patterns memory. Icon/gradient/tint metadata is resolved
   here from the stable `id` field and passed down as plain props, keeping
   CMS data itself limited to serializable text/arrays. */
export default function Services({ data }) {
  const [sectionRef, inView] = useInView("-80px");

  const d = data || {};
  const services = (d.items ?? defaultServices).map((item) => ({
    ...item,
    ...(servicesMeta[item.id] || servicesMeta["web-development"]),
  }));

  // No overflow-hidden on the section: it would sit as an ancestor of the
  // sticky pinned viewport inside ServicesCarousel and silently break
  // `position: sticky` (any ancestor with overflow other than visible
  // clips the scroll container sticky tracks against).
  return (
    <section id="services" ref={sectionRef} className="relative">
      <Container className="relative z-10 pt-24 lg:pt-32 pb-12">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <div
              data-inview={inView ? "true" : ""}
              className="reveal-scale inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-6 text-[10px] font-black uppercase tracking-[0.25em] text-primary"
            >
              <Star className="w-3 h-3 fill-current" />
              {d.badge || "Our Services"}
            </div>
            <h2
              data-inview={inView ? "true" : ""}
              className="reveal-up anim-delay-1 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.88] tracking-tighter"
            >
              <span className="block text-foreground">
                {d.titleLine1 || "What We"}
              </span>
              <span className="block text-gradient">
                {d.titleLine2 || "Offer"}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              data-inview={inView ? "true" : ""}
              className="reveal-up anim-delay-2 text-muted-foreground leading-relaxed"
            >
              {d.subtitle ||
                "From device repairs to web solutions, comprehensive tech services to keep you connected and your business growing."}
            </p>
            <p className="text-xs text-muted-foreground/50 mt-4 hidden lg:block">
              Scroll to explore →
            </p>
          </div>
        </div>
      </Container>

      {/* Rendered outside Container deliberately — the sticky/pinned scroll
          track needs the full viewport width to work with (it applies its
          own internal max-width mask), not Container's max-w-7xl cap. */}
      <ServicesCarousel services={services} inView={inView} />
    </section>
  );
}
