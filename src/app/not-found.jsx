import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export const metadata = {
  title: '404 — Page Not Found | Madeny Digital Services',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">404 Error</p>
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter text-foreground mb-4 leading-none">
          Page<br />Not Found
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-primary to-secondary text-white text-sm font-black uppercase tracking-[0.15em] shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-sm font-black uppercase tracking-[0.15em] text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
