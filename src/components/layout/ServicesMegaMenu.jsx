'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesNav } from '@/data/servicesNav';

const accentClasses = {
  primary: { dot: 'bg-primary', text: 'text-primary', hoverBg: 'hover:bg-primary/6' },
  secondary: { dot: 'bg-secondary', text: 'text-secondary', hoverBg: 'hover:bg-secondary/6' },
  tertiary: { dot: 'bg-tertiary', text: 'text-tertiary', hoverBg: 'hover:bg-tertiary/6' },
  ink: { dot: 'bg-foreground', text: 'text-foreground', hoverBg: 'hover:bg-foreground/5' },
};

function CategoryColumn({ category, onNavigate }) {
  const colors = accentClasses[category.accent] || accentClasses.primary;

  return (
    // Fixed pixel width, not a fraction — each column owns its own box
    // and can never be squeezed or overlapped by a sibling column.
    <div className="w-[210px] shrink-0 flex flex-col overflow-hidden">
      {/* Column header */}
      <Link
        href={`/services/${category.id}`}
        onClick={onNavigate}
        className="group flex items-center gap-2 mb-3 pb-3 border-b border-border/60 min-w-0"
      >
        <span className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`} />
        <span className="text-sm font-black uppercase tracking-[0.1em] text-foreground group-hover:opacity-70 transition-opacity truncate min-w-0">
          {category.name}
        </span>
      </Link>

      <div className="flex flex-col gap-0.5 min-w-0">
        {category.children.map((child) =>
          child.children ? (
            <div key={child.id} className="mb-2 min-w-0">
              <Link
                href={`/services/${category.id}/${child.id}`}
                onClick={onNavigate}
                className={`block px-2 py-1.5 rounded-lg text-sm leading-snug ${colors.text} ${colors.hoverBg} transition-colors`}
              >
                {child.name}
              </Link>
              <div className="flex flex-col min-w-0">
                {child.children.map((item) => (
                  <Link
                    key={item.id}
                    href={`/services/${category.id}/${child.id}/${item.id}`}
                    onClick={onNavigate}
                    className="block px-2 py-1.5 rounded-lg text-sm leading-snug text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={child.id}
              href={`/services/${category.id}/${child.id}`}
              onClick={onNavigate}
              className="block px-2 py-1.5 rounded-lg text-sm leading-snug text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {child.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function ServicesMegaMenu({ onNavigate }) {
  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-border/60 overflow-hidden animate-[anim-fade-down_0.15s_ease-out_both]"
      style={{ width: 'max-content', maxWidth: '95vw' }}
    >
      {/* Header strip */}
      <div className="px-6 py-3 bg-linear-to-r from-primary/8 via-tertiary/8 to-secondary/8 border-b border-border/50">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          Browse All Services
        </p>
      </div>

      {/* 4 fixed-width columns laid out with flex, not a grid fraction —
          each column's width is self-determined (see CategoryColumn),
          so there is no shared-track math that can collapse under
          content of very different heights/lengths across columns. */}
      <div className="flex items-start gap-8 p-6 max-h-[70vh] overflow-y-auto">
        {servicesNav.map((category) => (
          <CategoryColumn key={category.id} category={category} onNavigate={onNavigate} />
        ))}
      </div>

      {/* Footer strip */}
      <div className="px-6 py-2.5 border-t border-border/50 bg-muted/40">
        <a
          href="/#services"
          onClick={onNavigate}
          className="text-[11px] font-black uppercase tracking-[0.15em] text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
        >
          View services overview <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
