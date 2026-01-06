'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  className,
  icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_40px_rgba(159,35,33,0.4)] hover:-translate-y-1',
    secondary: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white hover:-translate-y-1',
    ghost: 'bg-transparent text-foreground hover:bg-muted',
    outline: 'bg-white/80 backdrop-blur-sm border border-border text-foreground hover:border-primary hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-full gap-1.5',
    default: 'px-6 py-3 text-base rounded-full gap-2',
    lg: 'px-8 py-4 text-lg rounded-full gap-2.5',
    xl: 'px-10 py-5 text-xl rounded-full gap-3',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  );
}
