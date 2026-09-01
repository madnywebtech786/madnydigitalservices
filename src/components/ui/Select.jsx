'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Custom dropdown select — one shared look reused across every form on the
 * site (rounded bordered box, matching `.contact-input`), so a service
 * picker looks identical on the homepage and the /contact page.
 */
export default function Select({
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef(null);
  const listId = useId();

  const selected = options.find((opt) => opt.value === value) || null;

  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectOption = (option) => {
    onChange?.({ target: { name, value: option.value } });
    setIsOpen(false);
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(true);
      setActiveIndex(options.findIndex((opt) => opt.value === value));
    }
  };

  const handleListKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      selectOption(options[activeIndex]);
    }
  };

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      {/* Hidden field so the value participates in native form submission/validation */}
      <input type="hidden" name={name} value={value || ''} required={required} />

      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="contact-input w-full px-4 py-3 rounded-xl border border-border bg-white flex items-center justify-between text-left cursor-pointer"
      >
        <span className={selected ? '' : 'text-muted-foreground'}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-primary shrink-0 ml-2 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          id={listId}
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          className="absolute z-20 top-full left-0 right-0 mt-2 py-2 bg-white rounded-2xl shadow-2xl border border-foreground/8 max-h-64 overflow-y-auto animate-[anim-fade-down_0.15s_ease-out_both]"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === activeIndex;
            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => selectOption(option)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    'w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors',
                    isSelected ? 'text-primary font-semibold' : 'text-foreground',
                    isActive ? 'bg-primary/6' : ''
                  )}
                >
                  {option.label}
                  {isSelected && <Check className="w-4 h-4 text-primary shrink-0" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
