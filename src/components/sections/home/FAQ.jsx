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
    question: 'What computer and technology services do you provide in Calgary?',
    answer:
      'We provide computer systems design, hardware and software solutions, system upgrades, data backup and recovery, technical support, software development, web development, and other digital solutions for businesses and individuals.',
  },
  {
    question: 'Do you develop custom software for businesses?',
    answer:
      'Yes. We develop custom software solutions based on specific business requirements, including web applications, database solutions, business systems, and other tailored digital tools.',
  },
  {
    question: 'Do you provide web application development in Calgary?',
    answer:
      'Yes. We design and develop custom web applications with a focus on functionality, performance, usability, and scalability to support different business requirements.',
  },
  {
    question: 'Do you design and develop business websites?',
    answer:
      'Yes. We develop professional business websites, e-commerce stores, custom web portals, and other web solutions. Our websites are designed to be responsive, user friendly, and aligned with your business goals.',
  },
  {
    question: 'Do you provide SEO and digital marketing services?',
    answer:
      'Yes. Our digital services include search engine optimization (SEO), digital marketing, Google Ads/PPC, website optimization, and ongoing website support to help businesses strengthen their online presence.',
  },
  {
    question: 'Do you provide computer upgrades and data recovery?',
    answer:
      'Yes. We provide computer hardware and software support, RAM and storage upgrades, HDD and SSD solutions, data backup and recovery, and system performance improvements.',
  },
  {
    question: 'Do you sell computers, laptops, and mobile devices?',
    answer:
      'Yes. We offer a selection of new and refurbished computers, laptops, and mobile devices, along with setup and technical support services.',
  },
  {
    question: 'Do you repair computers, laptops, and cellphones?',
    answer:
      'Yes. We provide professional computer, laptop, and cellphone repair services, including screen, battery, charging port, keyboard, back glass, and other hardware-related repairs.',
  },
  {
    question: 'Do you provide cellphone unlocking services?',
    answer:
      'Yes. Cellphone unlocking services are available for supported devices and networks. Contact our team with your device details to confirm availability.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based in Calgary and provide technology, digital, computer, and device services to customers and businesses in Calgary and nearby areas.',
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
            {d.title || 'FAQs'}
          </h2>

          <p
            data-inview={inView ? 'true' : ''}
            className="reveal-blur anim-delay-4 mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {d.subtitle ||
              'Straightforward answers about computer systems, software development, web development, digital solutions, and technical services in Calgary.'}
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