'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/5 border-b border-white/20'
            : 'bg-white/60 backdrop-blur-xl shadow-md shadow-black/5 border-b border-white/10'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gradient">Madeny</span>
                <span className="text-xl font-bold text-foreground ml-1">
                  Digital
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <motion.button
                        className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group flex items-center gap-1"
                        whileHover={{ y: -2 }}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                      </motion.button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden"
                          >
                            <div className="p-2">
                              {services.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    <motion.div
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.05 }}
                                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-all duration-300 cursor-pointer group"
                                    >
                                      <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-5 h-5 text-white" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                          {service.title}
                                        </h4>
                                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                                          {service.shortDesc}
                                        </p>
                                      </div>
                                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                    </motion.div>
                                  </Link>
                                );
                              })}
                            </div>
                            <div className="bg-muted px-4 py-3 border-t border-border">
                              <a
                                href="#services"
                                className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                View All Services
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
                      whileHover={{ y: -2 }}
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <span className="text-white font-bold text-xl">M</span>
                    </div>
                    <span className="text-xl font-bold text-gradient">Madeny</span>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6 overflow-y-auto">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <div key={link.name}>
                        {link.hasDropdown ? (
                          <div>
                            <motion.button
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-all duration-300"
                            >
                              <span className="font-medium">{link.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </motion.button>

                            {/* Mobile Services Submenu */}
                            <AnimatePresence>
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-muted pl-4">
                                    {services.map((service) => {
                                      const Icon = service.icon;
                                      return (
                                        <Link
                                          key={service.id}
                                          href={`/services/${service.id}`}
                                          onClick={() => {
                                            setMobileServicesOpen(false);
                                            setIsMobileMenuOpen(false);
                                          }}
                                        >
                                          <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-all duration-300 group"
                                          >
                                            <div className={`w-8 h-8 rounded-lg bg-linear-to-br ${service.color} flex items-center justify-center shrink-0`}>
                                              <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                                {service.title}
                                              </h4>
                                            </div>
                                          </motion.div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <motion.a
                            href={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-all duration-300"
                          >
                            <span className="font-medium">{link.name}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.a>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-border">
                  <Button
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Get Started
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Calgary, Alberta, Canada
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
