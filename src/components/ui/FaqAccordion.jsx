"use client";

import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ faq, open, onToggle, className = "" }) {
  return (
    <div
      className={`
        svc-faq-item
        overflow-hidden
        border
        border-foreground/8
        rounded-2xl
        transition-[border-color,box-shadow]
        duration-300
        ease-out
        ${
          open
            ? "is-open border-primary/25 shadow-[0_4px_18px_rgba(159,35,33,0.07)]"
            : ""
        }
        ${className}
      `}
    >
      {/* =====================================================
          QUESTION
          ===================================================== */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="
          relative
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
        <span
          aria-hidden="true"
          className={`
            svc-faq-bar
            block

            w-[3px]
            h-7
            rounded-full
            bg-linear-to-b
            from-primary
            to-secondary
            origin-center
            transition-transform
            duration-300
            ease-out
            ${open ? "is-open scale-y-100" : "scale-y-0"}
          `}
        />

        {/* Question */}
        <span
          className={`
            flex-1
            min-w-0
            font-semibold
            text-foreground
            leading-snug
            transition-[padding]
            duration-200
            ease-out
            gap-4
            ${open ? "pl-5" : "pl-0"}
          `}
        >
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
            duration-250
            ease-out
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </button>

      {/* =====================================================
          ANSWER

          IMPORTANT:
          This is ALWAYS in the DOM.

          Closed:
            grid-template-rows: 0fr

          Open:
            grid-template-rows: 1fr

          This gives us the smooth accordion animation without
          removing the answer from the DOM.
          ===================================================== */}
      <div
        className="grid"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          transition:
            "grid-template-rows 300ms cubic-bezier(0.25, 0.8, 0.25, 1)",
        }}
      >
        <div className="min-h-0 overflow-hidden">
          <p
            className={`
              svc-faq-answer
              pl-12
              pr-6
              pb-6
              text-muted-foreground
              leading-relaxed
              transition-opacity
              duration-150
              ease-out
              ${open ? "opacity-100" : "opacity-0"}
            `}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
