'use client';

import { useEffect, useRef, useState } from 'react';

// Shared observer pool keyed by rootMargin string.
// Reusing one observer per margin value cuts active observers from ~30 to ~4.
const observerPool = new Map();

function getSharedObserver(margin) {
  if (observerPool.has(margin)) return observerPool.get(margin);

  const callbacks = new Map();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb();
            callbacks.delete(entry.target);
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { rootMargin: margin }
  );

  observerPool.set(margin, { observer, callbacks });
  return { observer, callbacks };
}

export function useInView(margin = '-80px') {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { observer, callbacks } = getSharedObserver(margin);
    callbacks.set(el, () => setInView(true));
    observer.observe(el);

    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, [margin]);

  return [ref, inView];
}
