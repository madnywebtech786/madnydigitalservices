"use client";

import { useMemo, useState } from "react";
import {
  HelpCircle,
  Search,
  X,
  Monitor,
  Smartphone,
  ShoppingBag,
  Terminal,
  Code,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { useInView } from "@/hooks/useInView";
import { faqGroups, allFaqs } from "@/data/faqs";

// Same per-service icon mapping as ServiceClient.jsx's getIconForService,
// extended with the two topic groups that have no service equivalent.
const groupIcons = {
  general: HelpCircle,
  "computer-repair": Monitor,
  "cell-phone-repair": Smartphone,
  "device-sales": ShoppingBag,
  "software-development": Terminal,
  "web-development": Code,
  "trust-comparisons-local": ShieldCheck,
};

export default function FaqPageClient() {
  const [heroRef, heroInView] = useInView("-80px");
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openByGroup, setOpenByGroup] = useState({});
  // ^ { [groupId]: openIndexWithinGroup | null } — each group's accordion
  // opens/closes independently. Every question starts closed.

  const normalizedQuery = query.trim().toLowerCase();

  const visibleGroups = useMemo(() => {
    return faqGroups
      .filter(
        (group) => activeCategory === "all" || group.id === activeCategory,
      )
      .map((group) => ({
        ...group,
        questions: group.questions.filter((faq) => {
          if (!normalizedQuery) return true;
          return (
            faq.question.toLowerCase().includes(normalizedQuery) ||
            faq.answer.toLowerCase().includes(normalizedQuery)
          );
        }),
      }))
      .filter((group) => group.questions.length > 0);
  }, [activeCategory, normalizedQuery]);

  const totalVisible = visibleGroups.reduce(
    (sum, g) => sum + g.questions.length,
    0,
  );

  const scrollToGroup = (id) => {
    setActiveCategory("all");
    requestAnimationFrame(() => {
      const el = document.getElementById(`faq-group-${id}`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 112;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };

  return (
    <main className="page-flow pt-20">
      {/* ══ HERO ══ */}
      <section ref={heroRef} className="relative overflow-hidden pt-16 pb-12">
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <Container size="sm">
          <div className="flex flex-col items-center text-center">
            <div
              data-inview={heroInView ? "true" : ""}
              className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-1.5 mb-5 text-sm font-medium rounded-full bg-linear-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
            >
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h1
              data-inview={heroInView ? "true" : ""}
              className="reveal-up anim-delay-2 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95]"
            >
              Got a Question? <span className="text-gradient">We&rsquo;ve Got You</span>
            </h1>
            <p
              data-inview={heroInView ? "true" : ""}
              className="reveal-blur anim-delay-4 mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Before you book a repair, buy a device, or start a software or web project, find out what it costs, how long it takes, and what&rsquo;s covered , no call needed.
            </p>

            <div
              data-inview={heroInView ? "true" : ""}
              className="reveal-up anim-delay-5 mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-muted-foreground/70"
            >
              <span>{faqGroups.length} Topics</span>
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
              <span>{allFaqs.length} Questions</span>
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
              <span>Calgary-Based</span>
            </div>

            {/* Search */}
            <div
              data-inview={heroInView ? "true" : ""}
              className="reveal-up anim-delay-6 mt-8 w-full max-w-lg relative"
            >
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a question, e.g. warranty, pricing, unlock…"
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-foreground/4 border border-foreground/8 focus:border-primary/30 focus:bg-white outline-none transition-all duration-200 text-sm placeholder:text-muted-foreground/40"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-foreground/8 flex items-center justify-center"
                >
                  <X className="w-3 h-3 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ══ CATEGORY PILLS (sticky) ══ */}
      <div className="sticky top-16 z-30 py-4 bg-background/85 backdrop-blur-xl border-y border-foreground/8">
        <Container size="sm">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <button
              onClick={() => {
                setActiveCategory("all");
                setQuery("");
              }}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] transition-all duration-200 ${
                activeCategory === "all"
                  ? "bg-linear-to-r from-primary to-secondary text-white shadow-md shadow-primary/20"
                  : "bg-foreground/5 border border-foreground/8 text-muted-foreground hover:border-primary/20 hover:text-primary"
              }`}
            >
              All Topics
            </button>
            {faqGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => scrollToGroup(group.id)}
                className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.15em] bg-foreground/5 border border-foreground/8 text-muted-foreground hover:border-primary/20 hover:text-primary transition-all duration-200"
              >
                {group.name}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* ══ FAQ GROUPS ══ */}
      <section className="py-16 lg:py-20">
        <Container size="sm">
          {totalVisible === 0 ? (
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-full bg-foreground/5 border border-foreground/10 mx-auto mb-6 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground/40" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                No questions match &ldquo;{query}&rdquo;
              </h3>
              <p className="text-muted-foreground mb-6">
                Try a different search term, or clear the search to see every
                question.
              </p>
              <button
                onClick={() => setQuery("")}
                className="px-5 py-2.5 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-black uppercase tracking-[0.15em] shadow-md shadow-primary/20"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="space-y-20">
              {visibleGroups.map((group) => {
                const GroupIcon = groupIcons[group.id] || HelpCircle;
                return (
                  <div
                    key={group.id}
                    id={`faq-group-${group.id}`}
                    className="scroll-mt-40"
                  >
                    {/* Topic heading */}
                    <div className="flex items-center gap-4 mt-10 mb-10">
                      <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/15 flex items-center justify-center shrink-0">
                        <GroupIcon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-black tracking-tight min-w-0 truncate">
                        {group.name}
                      </h2>
                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/8 text-xs font-black text-muted-foreground tabular-nums">
                        {group.questions.length}
                      </span>
                      <div className="hidden sm:block h-px flex-1 bg-foreground/10" />
                    </div>

                    <div className="space-y-3">
                      {group.questions.map((faq, index) => {
                        const isOpen =
                          (openByGroup[group.id] ?? null) === index;

                        return (
                          <FaqAccordion
                            key={faq.question}
                            faq={faq}
                            open={isOpen}
                            onToggle={() =>
                              setOpenByGroup((prev) => ({
                                ...prev,
                                [group.id]: isOpen ? null : index,
                              }))
                            }
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
