'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';
import { centerArea, surroundingAreas } from '@/data/workingAreas';
import { slugifyAreaName } from '@/lib/areas';

function Tile({ city, hero = false, index }) {
  const content = (
    <>
      <Image
        src={city.img}
        alt={`${city.name}, Alberta`}
        fill
        loading="lazy"
        sizes={hero ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 16vw, 50vw'}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/72 via-black/10 to-transparent" />

      {hero ? (
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-[10px] font-black uppercase tracking-[0.15em] text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Headquarters
        </span>
      ) : (
        <span className="absolute top-3.5 right-3.5 text-[10px] font-extrabold tracking-widest text-white/65">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}

      <div className="absolute left-4 right-4 bottom-4">
        <h3 className={`font-black text-white tracking-tight ${hero ? 'text-3xl lg:text-4xl' : 'text-lg lg:text-xl'}`}>
          {city.name}
        </h3>
        <p className={`text-white/70 font-medium mt-0.5 ${hero ? 'text-sm' : 'text-[11px] lg:text-xs'}`}>
          {city.description || 'Serving local homes & businesses'}
        </p>
      </div>
    </>
  );

  const className = `relative block rounded-[20px] overflow-hidden ${
    hero ? 'h-55 lg:h-110' : 'h-37.5 lg:h-[213px]'
  }`;

  if (hero) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={`/areas/${slugifyAreaName(city.name)}`} className={className}>
      {content}
    </Link>
  );
}

export default function WorkingAreas({ data }) {
  const d = data || {};
  const center = d.centerArea || centerArea;
  const areas = d.surroundingAreas?.length ? d.surroundingAreas : surroundingAreas;

  const [sectionRef, inView] = useInView('-80px');

  return (
    <section ref={sectionRef} className="section relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-4">
          <span
            data-inview={inView ? 'true' : ''}
            className="reveal-scale anim-delay-1 inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-black uppercase tracking-[0.2em] rounded-full bg-primary/10 border border-primary/20 text-primary"
          >
            Where We Work
          </span>
          <h2
            data-inview={inView ? 'true' : ''}
            className="reveal-up anim-delay-2 text-4xl md:text-5xl font-black tracking-tight text-foreground"
          >
            Serving Calgary & Surrounding Communities
          </h2>
        </div>

        {/* Mobile / tablet — stacked: Calgary full-width, then 2-col grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
          <div className="col-span-2">
            <Tile city={center} hero />
          </div>
          {areas.map((city, i) => (
            <Tile key={city.name} city={city} index={i} />
          ))}
        </div>

        {/* Desktop — unified bento grid, Calgary large + 6 equal tiles.
            5 columns total: Calgary is one grid item spanning cols 1-2 at
            full 440px height. The 6 surrounding cities are laid out as a
            separate 3-column x 2-row sub-grid (213px rows) placed in the
            remaining cols 3-5 — avoids relying on row-span across the
            outer grid, using explicit heights on every tile instead. */}
        <div className="hidden lg:grid mt-14 grid-cols-5 gap-3.5">
          <div className="col-span-2">
            <Tile city={center} hero />
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-3.5">
            {areas.map((city, i) => (
              <Tile key={city.name} city={city} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
