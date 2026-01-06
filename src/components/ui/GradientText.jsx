'use client';

import { cn } from '@/lib/utils';

export default function GradientText({ children, className, reverse = false }) {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent',
        reverse
          ? 'bg-gradient-to-r from-secondary to-primary'
          : 'bg-gradient-to-r from-primary to-secondary',
        className
      )}
    >
      {children}
    </span>
  );
}
