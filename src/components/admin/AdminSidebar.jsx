'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Home,
  Info,
  Phone,
  FolderOpen,
  Wrench,
  Search,
  Globe,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/cms-admin', icon: LayoutDashboard },
  { name: 'Home Page', href: '/cms-admin/pages/home', icon: Home },
  { name: 'About Page', href: '/cms-admin/pages/about', icon: Info },
  { name: 'Contact Page', href: '/cms-admin/pages/contact', icon: Phone },
  { name: 'Projects', href: '/cms-admin/pages/projects', icon: FolderOpen },
  { name: 'Services', href: '/cms-admin/pages/services', icon: Wrench },
  { name: 'SEO Settings', href: '/cms-admin/pages/seo', icon: Search },
  { name: 'Global Content', href: '/cms-admin/pages/global', icon: Globe },
];

export default function AdminSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('cms_token');
    router.push('/cms-admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isOpen ? '280px' : '0px',
          x: isOpen && isMobile ? 0 : isMobile ? '-100%' : 0
        }}
        transition={{ duration: 0.3, type: 'spring', bounce: 0, damping: 25 }}
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col bg-[#0f172a] text-gray-600 shadow-2xl lg:relative overflow-hidden",
          !isOpen && !isMobile && 'lg:w-[80px]'
        )}
        style={{ width: isOpen && !isMobile ? '280px' : isOpen && isMobile ? '280px' : !isMobile ? '80px' : '0px' }}
      >
        <div className="flex items-center justify-between h-20 px-6 border-b border-gray-800 shrink-0">
          {(isOpen || isMobile) && (
            <span className="text-xl font-bold text-black whitespace-nowrap overflow-hidden">
              <span className="text-primary">Madeny</span> CMS
            </span>
          )}
          {!isOpen && !isMobile && (
            <span className="text-xl font-bold text-white mx-auto">M</span>
          )}
          {isMobile && (
            <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-500 hover:text-black transition-colors">
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        <div className="flex-1 py-6 overflow-y-auto no-scrollbar">
          <nav className="px-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <div className={cn(
                    "flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative",
                    isActive ? "bg-primary text-white shadow-lg shadow-primary/20" : "hover:bg-gray-100 hover:text-black text-gray-500"
                  )}>
                    <item.icon className={cn("w-5 h-5 shrink-0 transition-transform duration-200", isActive ? "text-white" : "group-hover:scale-110", !isOpen && !isMobile && "mx-auto")} />
                    {(isOpen || isMobile) && (
                      <span className="font-medium truncate">{item.name}</span>
                    )}

                    {/* Tooltip for collapsed state */}
                    {!isOpen && !isMobile && (
                      <div className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-black rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 border border-gray-800 shadow-xl">
                        {item.name}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-800 shrink-0">
          <button
            onClick={handleLogout}
            className={cn(
              "flex items-center gap-4 w-full px-3 py-3 rounded-xl text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-colors group relative",
              !isOpen && !isMobile && "justify-center"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {(isOpen || isMobile) && (
              <span className="font-medium">Sign Out</span>
            )}
            {!isOpen && !isMobile && (
              <div className="absolute left-full ml-4 px-3 py-1.5 bg-gray-900 text-black rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 border border-gray-800 shadow-xl">
                Sign Out
              </div>
            )}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        <header className="h-20 bg-white border-b border-gray-200 flex items-center px-6 gap-4 sticky top-0 z-30 shadow-sm shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-black font-bold shadow-md">
              A
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-sm">Admin User</div>
              <div className="text-xs text-muted-foreground">admin@madenydigital.com</div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 p-6 md:p-8 overflow-y-auto w-full">
          <div className="max-w-6xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
