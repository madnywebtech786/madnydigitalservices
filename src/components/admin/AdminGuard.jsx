'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('cms_token');
    
    // Allow access to login page without token
    if (pathname === '/cms-admin/login') {
      if (token) {
        // If already logged in, redirect away from login
        router.push('/cms-admin');
      } else {
        setIsAuthenticated(true);
        setIsLoading(false);
      }
      return;
    }

    // Require token for all other /cms-admin routes
    if (!token) {
      router.push('/cms-admin/login');
    } else {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, [pathname, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!isAuthenticated && pathname !== '/cms-admin/login') return null;

  return <>{children}</>;
}
