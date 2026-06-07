'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">Something went wrong</p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-foreground mb-4 leading-none">
          Unexpected<br />Error
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10">
          An unexpected error occurred. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-black uppercase tracking-[0.15em] shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-sm font-black uppercase tracking-[0.15em] text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
