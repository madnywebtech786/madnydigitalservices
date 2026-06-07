'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

const defaultNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#services', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

function MobileServicesAccordion({ linkName, services, isOpen, onToggle, onSelect }) {
  const panelRef = useRef(null);
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
      >
        <span className="font-medium">{linkName}</span>
        <ChevronDown className={`w-4 h-4 opacity-30 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        ref={panelRef}
        style={{
          maxHeight: isOpen ? `${panelRef.current?.scrollHeight ?? 400}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="pb-2 pl-3 pt-0.5 space-y-0.5">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              onClick={onSelect}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-150 group"
            >
              <span className="text-sm font-medium">{service.title}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header({ data }) {
  const d = data || {};
  const navLinks = (d.navLinks || defaultNavLinks).map(link => ({
    ...link,
    hasDropdown: link.name.toLowerCase() === 'services' || link.hasDropdown,
  }));

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuVisible(false);
    setTimeout(() => setIsMobileMenuOpen(false), 320);
  };

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setMenuVisible(true)));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuVisible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuVisible]);

  return (
    <>
      <header
        className={`header-slide-in fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-lg shadow-black/5 border-b border-white/20'
            : 'bg-white/80 shadow-md shadow-black/5 border-b border-white/10'
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <Image src="/mds-logo.png" alt="Madeny Digital Services" width={500} height={500} className="h-20 w-32 -my-6" priority />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                      className="relative"
                    >
                      <button className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group inline-flex items-center gap-1 py-2 leading-none">
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                      </button>

                      {/* Invisible bridge so mouse can travel into dropdown without it closing */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-full h-3" />
                      )}

                      {/* Dropdown */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-border/60 overflow-hidden animate-[anim-fade-down_0.15s_ease-out_both]">
                          {/* Header strip */}
                          <div className="px-4 py-3 bg-linear-to-r from-primary/8 to-secondary/8 border-b border-border/50">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Our Services</p>
                          </div>
                          <div className="p-2">
                            {services.map((service, i) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.id}
                                  href={`/services/${service.id}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-linear-to-r hover:from-primary/6 hover:to-secondary/6 transition-all duration-150 group"
                                >
                                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-150">
                                    <Icon className="w-4 h-4 text-primary" />
                                  </div>
                                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                                    {service.title}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150 shrink-0 ml-auto" />
                                </Link>
                              );
                            })}
                          </div>
                          {/* Footer strip */}
                          <div className="px-4 py-2.5 border-t border-border/50 bg-muted/40">
                            <a
                              href="/#services"
                              onClick={() => setServicesDropdownOpen(false)}
                              className="text-[11px] font-black uppercase tracking-[0.15em] text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                            >
                              View all services <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => isMobileMenuOpen ? closeMenu() : openMenu()}
              className="lg:hidden w-10 h-10 rounded-xl bg-muted flex items-center justify-center active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu — always in DOM when isMobileMenuOpen, driven by menuVisible for smooth in/out */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={closeMenu}
            className="fixed inset-0 z-59 lg:hidden transition-opacity duration-300"
            style={{
              background: 'rgba(0,0,0,0.35)',
              opacity: menuVisible ? 1 : 0,
            }}
          />

          {/* Drawer — z-[60] beats social widget z-50 */}
          <div
            className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-60 lg:hidden flex flex-col"
            style={{
              transform: menuVisible ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 320ms cubic-bezier(0.32, 0, 0.16, 1)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
              <Image src="/mds-logo.png" alt="Madeny Digital Services" width={500} height={500} className="h-24 w-24 -my-6" />
              <button
                onClick={closeMenu}
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center active:scale-95 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <MobileServicesAccordion
                        linkName={link.name}
                        services={services}
                        isOpen={mobileServicesOpen}
                        onToggle={() => setMobileServicesOpen(!mobileServicesOpen)}
                        onSelect={() => { setMobileServicesOpen(false); closeMenu(); }}
                      />
                    ) : (
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between px-4 py-3 rounded-xl text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                      >
                        <span className="font-medium">{link.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-30" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-border shrink-0">
              <Link href="/contact" onClick={closeMenu}>
                <Button className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                  Get Started
                </Button>
              </Link>
              <p className="text-center text-sm text-muted-foreground mt-4">Calgary, Alberta, Canada</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
