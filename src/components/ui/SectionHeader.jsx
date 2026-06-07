import { cn } from '@/lib/utils';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  inView = true,
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-16', alignments[align], className)}>
      {badge && (
        <span
          data-inview={inView ? 'true' : ''}
          className="reveal-scale anim-delay-1 inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20"
        >
          {badge}
        </span>
      )}
      <h2
        data-inview={inView ? 'true' : ''}
        className="reveal-up anim-delay-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p
          data-inview={inView ? 'true' : ''}
          className="reveal-blur anim-delay-4 mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
