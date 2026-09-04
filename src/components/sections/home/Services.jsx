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
    title: "Computer Services",
    shortDesc: "Computer systems, sales, support & repair",
    description:
      "Complete computer solutions for businesses and individuals in Calgary. From computer systems design and hardware and software support to laptop sales, upgrades, data backup and recovery, and professional repair services, we help keep your technology reliable and working efficiently.",
    features: [
      "Computer Systems Design",
      "Hardware & Software",
      "Sales & Service",
      "Upgrades & Repairs",
      "Data Backup & Recovery",
    ],
  },
  {
    id: "cellphone",
    title: "Cellphone Services",
    shortDesc: "Sales, setup, support & repair",
    description:
      "Complete cellphone solutions for everyday and business needs. We offer brand-new and refurbished phones, professional device setup, accessories, unlocking, troubleshooting, and repair services for many supported cellphone models.",
    features: [
      "Brand-New & Refurbished Phones",
      "Cellphone Setup & Support",
      "Screen & Battery Replacement",
      "Charging Port & Audio Repair",
      "Liquid Damage Service",
      "Unlocking & Accessories",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDesc: "Custom software built for your business",
    description:
      "Custom software solutions designed to improve business operations, streamline workflows, and support growth. We develop reliable web applications, business management systems, databases, dashboards, portals, and other software tailored to your requirements.",
    features: [
      "Custom Software Development",
      "Web Application Development",
      "Database Development",
      "Software Testing & Maintenance",
      "Business Systems & Automation",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "Professional websites built for your business",
    description:
      "Modern, responsive, and user-friendly web solutions designed to strengthen your online presence. We build business websites, e-commerce stores, custom web portals, and provide ongoing website maintenance and digital marketing solutions.",
    features: [
      "Website Design & Development",
      "ECommerce Development",
      "Custom Web Portals",
      "Website Maintenance",
      "SEO & Digital Marketing",
      "PPC & Google Ads",
    ],
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
                "Computer systems design, software development, web development, digital solutions, computer and cellphone sales, technical support, and professional repair services for businesses and individuals in Calgary and nearby areas."}
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
