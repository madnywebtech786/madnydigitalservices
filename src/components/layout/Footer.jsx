'use client';

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Instagram,
  Facebook,
} from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { servicesNav } from '@/data/servicesNav';

const footerLinks = {
  company: [
    { name: 'Home',        href: '/' },
    { name: 'About Us',    href: '/about' },
    { name: 'Projects',    href: '/projects' },
    { name: 'Careers',     href: '/careers' },
    { name: 'Contact Us',  href: '/contact' },
  ],
  legal: [
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy',       href: '/privacy-policy' },
    { name: 'Disclaimer',           href: '/disclaimer' },
  ],
};

// A short curated list for the single footer "Our Services" column — the
// 4 top-level categories plus a few of their most-searched children, read
// directly off servicesNav.js (the real tree the header mega menu uses) so
// names/hrefs can't drift out of sync with the actual service pages.
function findChild(categoryId, childId) {
  const category = servicesNav.find((c) => c.id === categoryId);
  const child = category?.children.find((c) => c.id === childId);
  return child ? { name: child.name, href: `/services/${categoryId}/${childId}` } : null;
}

const popularServices = [
  { name: 'Computer Repair', href: '/services/computer' },
  { name: 'Cellphone Repair', href: '/services/cellphone' },
  findChild('web-development', 'website-design-development'),
  findChild('software-development', 'custom-software-development'),
  findChild('web-development', 'ecommerce-development'),
  findChild('web-development', 'seo'),
].filter(Boolean);

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/madnydigitalservices', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/share/17UsEhwnzo/?mibextid=wwXIfr', label: 'Facebook' },
];

const iconMap = { Instagram, Facebook };

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();
  const d = data || {};

  const companyLinks = d.companyLinks || footerLinks.company;
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
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center mb-6 hover:opacity-90 transition-opacity">
              <Image src="/mds-logo.png" alt="Madny Digital Services" width={500} height={200} className="bg-white rounded-2xl p-3 h-20 w-auto object-contain" />
            </a>

            <p className="text-white/70 leading-relaxed mb-4 max-w-sm">
              {d.description || 'Professional computer systems and digital solutions for businesses and individuals. Specializing in software development, web development, IT solutions, digital services, computer and mobile device sales, support, and repairs.'}
            </p>

            <p className="text-white/50 text-sm font-medium mb-6">
              {d.serviceArea || 'Serving Calgary & Nearby Areas'}
            </p>

            <div className="flex gap-3">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
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

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {popularServices.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors duration-300 flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{d.address || '#216, 55 Westwinds Cres NE, Calgary, AB T3J 5H2, Canada'}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${d.phone || '+14037088214'}`} className="text-sm hover:text-primary transition-colors">
                  {d.phone || '+1 (403) 708-8214'}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${d.email || 'madny786@hotmail.com'}`} className="text-sm hover:text-primary transition-colors">
                  {d.email || 'madny786@hotmail.com'}
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
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
          <p className="text-white/60 text-sm text-center md:text-left">
            &copy; {currentYear} {d.copyright || 'Madny Digital Services Group Ltd. All Rights Reserved.'}
          </p>
        </div>
      </Container>
    </footer>
  );
}
