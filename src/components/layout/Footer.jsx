'use client';

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
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
    { name: 'FAQs',        href: '/faqs' },
    { name: 'Contact',     href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/madnydigitalservices', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/17UsEhwnzo/?mibextid=wwXIfr', label: 'Facebook' },
];

const iconMap = { Instagram, Facebook };

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();
  const d = data || {};

  const companyLinks = d.companyLinks || footerLinks.company;
  const servicesLinks = d.serviceLinks || footerLinks.services;
  const resolvedSocialLinks = (d.socialLinks || socialLinks).map(link => ({
    ...link,
    icon: iconMap[link.platform] || Instagram,
  }));

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex  items-center mb-6 hover:opacity-90 transition-opacity">
              <Image src="/mds-logo.png" alt="Madny Digital Services" width={500} height={200} className="bg-white rounded-2xl p-4 h-30 w-1/2 -ml-6 -mt-2 object-contain" />
            </a>

            <p className="text-white/70 leading-relaxed mb-6 max-w-sm">
              {d.description || "Calgary's premier digital agency specializing in web development, e-commerce solutions, and digital marketing."}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{d.address || '#216, 55 Westwinds Cres NE, Calgary, AB T3J 5H2, Canada'}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${d.email || 'madny786@hotmail.com'}`} className="text-sm hover:text-primary transition-colors">
                  {d.email || 'madny786@hotmail.com'}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${d.phone || '+14037088214'}`} className="text-sm hover:text-primary transition-colors">
                  {d.phone || '+1 (403) 708-8214'}
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
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} {d.copyright || 'Madny Digital Services. All rights reserved.'}
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
