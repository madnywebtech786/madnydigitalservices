'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const staggerDelays = ['anim-delay-1', 'anim-delay-2', 'anim-delay-3', 'anim-delay-4', 'anim-delay-5', 'anim-delay-6'];

const defaultFaqs = [
  {
    question: 'Is Madny Digital Services a real Calgary company?',
    answer: 'Yes. Madny Digital Services is based in Calgary, Alberta, with a physical shop serving local residents and businesses. We offer computer repair, phone repair, device sales, software development, and web development under one roof.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Yes. Our repair technicians hold CompTIA A+ and Apple certifications, and our developers follow modern software and web development standards. Every repair and project is backed by testing and a clear warranty.',
  },
  {
    question: 'Do you serve areas outside Calgary, like Airdrie or Cochrane?',
    answer: 'Yes. While our shop is based in Calgary, we regularly serve customers and businesses in Airdrie, Cochrane, and surrounding areas for repairs, device sales, and web or software development projects.',
  },
];

/* ── About page FAQ: short company-level Q&A (who we are, certifications,
   service area), distinct from the service-specific FAQs on the homepage
   and /services pages, so content isn't duplicated across the site.
   Reuses the same .svc-faq-item / .svc-faq-bar accordion CSS as
   ServiceClient.jsx and the homepage FAQ section for a consistent pattern.
   JSON-LD FAQPage schema is rendered by the parent page for GEO/AI search. */
export default function AboutFAQ({ data }) {
  const d = data || {};
  const [sectionRef, inView] = useInView('-80px');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = d.items && Array.isArray(d.items) && d.items.length > 0 ? d.items : defaultFaqs;

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative overflow-hidden">
      <Container size="sm">
        <div className="flex flex-col items-center text-center mb-14">
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 font-bold text-primary uppercase tracking-wider text-xs"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            {d.badge || 'Frequently Asked Questions'}
          </div>
          <h2
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-2 text-4xl md:text-5xl font-black mb-4 leading-tight"
          >
            {d.title || 'Getting to Know Madny Digital'}
          </h2>
          <p
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-3 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {d.subtitle || 'Common questions about who we are and how we work, before you book a repair or start a project.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                data-inview={inView ? 'true' : ''}
                className={`reveal-up ${staggerDelays[index % staggerDelays.length]}`}
              >
                <div className={`svc-faq-item border border-foreground/8 rounded-2xl ${isOpen ? 'is-open' : ''}`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 p-6 text-left"
                  >
                    <div className={`svc-faq-bar self-stretch shrink-0 ${isOpen ? 'is-open' : ''}`} style={{ minHeight: '1.5rem' }} />
                    <span className="flex-1 font-semibold text-foreground leading-snug">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="svc-faq-answer pl-12 pr-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
