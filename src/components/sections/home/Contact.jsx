'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { useInView } from '@/hooks/useInView';

const defaultContactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['#216, 55 Westwinds Cres NE', 'Calgary, AB T3J 5H2', 'Canada'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['madny786@hotmail.com'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+1 (403) 708-8214', '+1 (403) 493-7500'],
  },
];

const socialLinks = [
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook,  href: '#', label: 'Facebook' },
];

const iconMap = { 'Visit Us': MapPin, 'Email Us': Mail, 'Call Us': Phone };

const infoDelays = ['anim-delay-3', 'anim-delay-5', 'anim-delay-7'];

export default function Contact({ data }) {
  const d = data || {};
  const rawContactInfo = d.contactInfo || defaultContactInfo;
  const contactInfo = rawContactInfo.map(info => ({
    ...info,
    icon: info.icon || iconMap[info.title] || MapPin,
  }));

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [sectionRef, inView] = useInView('-60px');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section relative overflow-hidden"
    >
      {/* Subtle side tint — lets page-flow canvas breathe through */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-muted/30 to-transparent" />
      </div>

      <Container className="relative z-10">
        <SectionHeader
          inView={inView}
          badge={d.badge || 'Get In Touch'}
          title={d.title || "Let's Build Something Amazing"}
          subtitle={d.subtitle || "Ready to start your project? Contact us today and let's discuss how we can help transform your digital presence."}
        />

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left — contact info + socials */}
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-left anim-delay-2 lg:col-span-2"
          >
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  data-inview={inView ? 'true' : ''}
                  className={`reveal-left ${infoDelays[index]} contact-info-row flex gap-4 p-4 rounded-2xl`}
                >
                  <div className="contact-info-icon w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary flex items-center justify-center shrink-0 shadow-md">
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

            {/* Socials */}
            <div
              data-inview={inView ? 'true' : ''}
              className="reveal-up anim-delay-9 mt-8 pt-8 border-t border-border"
            >
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="contact-social w-11 h-11 rounded-xl bg-muted flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            data-inview={inView ? 'true' : ''}
            className="reveal-right anim-delay-4 lg:col-span-3"
          >
            <div className="contact-form-card glass-card rounded-3xl p-8 md:p-10">

              {/* Success state */}
              {isSubmitted ? (
                <div className="contact-success-pop flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="contact-input w-full px-4 py-3 rounded-xl border border-border bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="contact-input w-full px-4 py-3 rounded-xl border border-border bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="contact-input w-full px-4 py-3 rounded-xl border border-border bg-white resize-none"
                    />
                  </div>

                  <div className="hover-lift">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                      icon={isSubmitting ? null : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                          Sending…
                        </span>
                      ) : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
