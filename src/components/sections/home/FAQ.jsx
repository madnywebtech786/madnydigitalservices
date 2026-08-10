'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const staggerDelays = [
  'anim-delay-1',
  'anim-delay-2',
  'anim-delay-3',
  'anim-delay-4',
  'anim-delay-5',
  'anim-delay-6',
  'anim-delay-7',
  'anim-delay-8',
  'anim-delay-9',
  'anim-delay-10',
];

const defaultFaqs = [
  {
    question: 'How much does computer repair cost in Calgary?',
    answer:
      'Computer repair in Calgary typically starts at $79 for diagnostics and virus removal, with hardware repairs from $99 plus parts. We provide a free diagnostic assessment with every repair, so you always know the exact cost before we begin.',
  },
  {
    question: 'Where can I get my phone unlocked in Calgary?',
    answer:
      'Madny Digital Services unlocks phones from any carrier at our Calgary shop, starting at $29. Carrier unlocking is legal, does not void your manufacturer warranty, and most unlocks are completed the same day, often within the hour.',
  },
  {
    question: 'Do you sell refurbished laptops and phones in Calgary?',
    answer:
      'Yes. We stock certified refurbished laptops, desktops, and smartphones from trusted brands, each tested and backed by a warranty. New devices, accessories, and a trade-in program are also available at our Calgary location.',
  },
  {
    question:
      'Can I hire a software development company in Calgary for a custom business app?',
    answer:
      'Yes. Our Calgary-based software development team builds custom business applications, automation tools, and databases designed around your exact workflow, with a requirements-first approach and testing before every launch.',
  },
  {
    question:
      'How much does a website cost from a Calgary web development company?',
    answer:
      'Business websites start at $1,499, e-commerce stores from $2,999, and landing pages from $499. Every project includes mobile-responsive design, SEO best practices, and a free consultation to scope your exact needs first.',
  },
];

/*
  Homepage FAQ

  Important:
  - Every answer is ALWAYS rendered in the DOM.
  - Closed answers use grid-template-rows: 0fr.
  - Open answers use grid-template-rows: 1fr.
  - No conditional rendering of the answer.
  - This keeps the content available to crawlers while still
    providing a smooth accordion interaction.
*/

export default function FAQ({ data }) {
  const d = data || {};

  const [sectionRef, inView] = useInView('-80px');
  const [openIndex, setOpenIndex] = useState(0);

  const faqs =
    d.items &&
    Array.isArray(d.items) &&
    d.items.length > 0
      ? d.items
      : defaultFaqs;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28"
    >
      <Container size="sm">
        {/* =====================================================
            HEADER
            ===================================================== */}
        <div className="flex flex-col items-center text-center">
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-linear-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
          >
            <HelpCircle className="w-4 h-4" />

            {d.badge || 'Frequently Asked Questions'}
          </div>

          <h2
            data-inview={inView ? 'true' : ''}
            className="reveal-up anim-delay-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            {d.title || 'Calgary Tech Questions, Answered'}
          </h2>

          <p
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-4 mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {d.subtitle ||
              'Straight answers about computer repair, phone unlocking, device sales, software development, and web development in Calgary.'}
          </p>
        </div>

        {/* =====================================================
            FAQ ACCORDION
            ===================================================== */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                data-inview={inView ? 'true' : ''}
                className={`reveal-up ${
                  staggerDelays[index % staggerDelays.length]
                }`}
              >
                <div
                  className={`
                    svc-faq-item
                    border
                    border-foreground/8
                    rounded-2xl
                    overflow-hidden
                    transition-[border-color,box-shadow]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      isOpen
                        ? 'is-open border-primary/25 shadow-[0_6px_24px_rgba(159,35,33,0.075)]'
                        : ''
                    }
                  `}
                >
                  {/* =================================================
                      QUESTION
                      ================================================= */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="
                      w-full
                      flex
                      items-center
                      gap-4
                      p-6
                      text-left
                      cursor-pointer
                      outline-none
                    "
                  >
                    {/* Gradient accent */}
                    <div
                      aria-hidden="true"
                      className={`
                        svc-faq-bar
                        self-stretch
                        shrink-0
                        w-0.75
                        rounded-full
                        bg-linear-to-b
                        from-primary
                        to-secondary
                        origin-center
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          isOpen
                            ? 'is-open scale-y-100 opacity-100'
                            : 'scale-y-0 opacity-0'
                        }
                      `}
                      style={{
                        minHeight: '1.5rem',
                      }}
                    />

                    {/* Question */}
                    <span className="flex-1 min-w-0 font-semibold text-foreground leading-snug">
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <ChevronDown
                      aria-hidden="true"
                      className={`
                        w-5
                        h-5
                        text-primary
                        shrink-0
                        transition-transform
                        duration-400
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        ${
                          isOpen
                            ? 'rotate-180'
                            : 'rotate-0'
                        }
                      `}
                    />
                  </button>

                  {/* =================================================
                      ANSWER

                      IMPORTANT:
                      The answer is ALWAYS mounted.

                      Closed:
                        0fr

                      Open:
                        1fr

                      This means the answer exists in the DOM even
                      when the accordion is closed.
                      ================================================= */}
                  <div
                    className="grid"
                    style={{
                      gridTemplateRows: isOpen
                        ? '1fr'
                        : '0fr',
                      transition:
                        'grid-template-rows 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  >
                    <div
                      className="min-h-0 overflow-hidden"
                    >
                      <p
                        className={`
                          svc-faq-answer
                          pl-12
                          pr-6
                          pb-6
                          text-muted-foreground
                          leading-relaxed
                          transition-all
                          duration-300
                          ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${
                            isOpen
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 -translate-y-2'
                          }
                        `}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}