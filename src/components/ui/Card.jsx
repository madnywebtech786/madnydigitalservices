'use client';

import { cn } from '@/lib/utils';

export default function Card({
  children,
  variant = 'default',
  hover = true,
  className,
  ...props
}) {
  const variants = {
    default: 'bg-white border border-border shadow-sm',
    glass: 'bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg',
    gradient: 'bg-gradient-to-br from-white to-muted border border-border',
    elevated: 'bg-white shadow-xl border-0',
    outlined: 'bg-transparent border-2 border-primary/20',
  };

  const hoverEffect = hover
    ? 'hover:shadow-xl hover:-translate-y-2 hover:border-primary/30'
    : '';

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variants[variant],
        hoverEffect,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return (
    <h3 className={cn('text-xl font-bold text-foreground', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className }) {
  return (
    <p className={cn('text-muted-foreground mt-2', className)}>{children}</p>
  );
}

export function CardContent({ children, className }) {
  return <div className={cn('', className)}>{children}</div>;
}

export function CardFooter({ children, className }) {
  return <div className={cn('mt-4 pt-4 border-t border-border', className)}>{children}</div>;
}
