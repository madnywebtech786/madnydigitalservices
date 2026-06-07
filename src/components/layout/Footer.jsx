'use client';

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';

const footerLinks = {
  services: [
    { name: 'Computer Repair',           href: '/services/computer-repair' },
    { name: 'Cell Phone Repair',          href: '/services/cell-phone-repair' },
    { name: 'Mobile & Computer Sales',    href: '/services/device-sales' },
    { name: 'Web Development',            href: '/services/web-development' },
  ],
  company: [
    { name: 'About Us',    href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Contact',     href: '/contact' },
  ],
  support: [
    { name: 'Privacy Policy',    href: '#' },
    { name: 'Terms of Service',  href: '#' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const iconMap = { LinkedIn: Linkedin, Twitter: Twitter, Instagram: Instagram, Facebook: Facebook };

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();
  const d = data || {};

  const companyLinks = d.companyLinks || footerLinks.company;
  const servicesLinks = d.serviceLinks || footerLinks.services;
  const supportLinks = d.supportLinks || footerLinks.support;
  const resolvedSocialLinks = (d.socialLinks || socialLinks).map(link => ({
    ...link,
    icon: iconMap[link.platform] || Linkedin,
  }));

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex  items-center mb-6 hover:opacity-90 transition-opacity">
              <Image src="/mds-logo.png" alt="Madeny Digital Services" width={200} height={200} className="bg-white p-4 h-[120px] w-[120px] -ml-6 -mt-2 brightness-0 invert" />
            </a>

            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              {d.description || "Calgary's premier digital agency specializing in web development, e-commerce solutions, and digital marketing."}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{d.address || 'Calgary, AB T2P 1J9, Canada'}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${d.email || 'hello@madenydigital.ca'}`} className="text-sm hover:text-primary transition-colors">
                  {d.email || 'hello@madenydigital.ca'}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${d.phone || '+14035550123'}`} className="text-sm hover:text-primary transition-colors">
                  {d.phone || '+1 (403) 555-0123'}
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {resolvedSocialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-linear-to-br hover:from-primary hover:to-secondary transition-all duration-300 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="font-medium text-sm mb-3">Subscribe to Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-sm placeholder:text-white/40 focus:border-primary focus:outline-none transition-colors"
                />
                <button className="px-4 py-2 rounded-xl bg-linear-to-r from-primary to-secondary text-sm font-medium active:scale-95 transition-transform">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} {d.copyright || 'Madeny Digital Services. All rights reserved.'}
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary mx-1" /> in Calgary, Canada
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
