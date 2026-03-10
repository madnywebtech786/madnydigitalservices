'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const defaultContactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['123 Innovation Drive', 'Calgary, AB T2P 1J9', 'Canada'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['hello@madeneydigital.ca', 'support@madeneydigital.ca'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (403) 555-0123', '+1 (403) 555-0124'],
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

const iconMap = { 'Visit Us': MapPin, 'Email Us': Mail, 'Call Us': Phone };

export default function Contact({ data }) {
  const d = data || {};
  const rawContactInfo = d.contactInfo || defaultContactInfo;
  const contactInfo = rawContactInfo.map(info => ({
    ...info,
    icon: info.icon || iconMap[info.title] || MapPin,
  }));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-muted/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <SectionHeader
          badge={d.badge || "Get In Touch"}
          title={d.title || "Let's Build Something Amazing"}
          subtitle={d.subtitle || "Ready to start your project? Contact us today and let's discuss how we can help transform your digital presence."}
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    {info.details?.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center hover:bg-linear-to-br hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-white" />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
