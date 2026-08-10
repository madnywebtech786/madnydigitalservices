'use client';

import { useState } from 'react';
import {
  Mail, Phone, MapPin, Send, CheckCircle2,
  Linkedin, Twitter, Instagram, Facebook, ArrowUpRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { useInView } from '@/hooks/useInView';

const iconMap = { mail: Mail, phone: Phone, address: MapPin };

const defaultInfo = [
  { icon: 'phone',   title: 'Call Us',     value: '+1 (403) 555-0123' },
  { icon: 'mail',    title: 'Email Us',    value: 'madny786@hotmail.com' },
  { icon: 'address', title: 'Visit Us',    value: 'Calgary, AB — Canada' },
];

const socialLinks = [
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook,  href: '#', label: 'Facebook' },
];

export default function ContactClient({ data }) {
  const d = data || {};
  const hero = d.hero || {};
  const formStr = d.form || {};
  const contactInfo = d.contactInfo?.length ? d.contactInfo : defaultInfo;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [pageRef, pageInView] = useInView('-40px');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <main className="pt-20 min-h-screen page-flow">

      {/* ══════════════════════════════════════════
          HERO — full-width headline
      ══════════════════════════════════════════ */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <div className="anim-fade-up anim-delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/15 mb-8 text-[10px] font-black uppercase tracking-[0.25em] text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary loop-blink inline-block" />
              {hero.badge || 'Get In Touch'}
            </div>
            <h1 className="anim-fade-up anim-delay-2 text-6xl md:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter mb-6">
              <span className="block">{hero.headingPart1 || "Let's Build"}</span>
              <span className="block text-gradient">{hero.headingPart2 || 'Something Great'}</span>
            </h1>
            <p className="anim-fade-up anim-delay-3 text-xl text-muted-foreground max-w-xl leading-relaxed">
              {hero.description || "Tell us about your project. We'll get back to you within 24 hours."}
            </p>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════
          SPLIT — dark info panel + form
      ══════════════════════════════════════════ */}
      <section ref={pageRef} className="relative overflow-hidden pb-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-0 rounded-[40px] overflow-hidden shadow-2xl">

            {/* ── Dark left panel ── */}
            <div
              data-inview={pageInView ? 'true' : ''}
              className="reveal-left anim-delay-2 lg:col-span-4 relative bg-linear-to-br from-primary to-secondary text-white p-10 lg:p-12 flex flex-col justify-between min-h-120"
            >
              {/* Subtle dot grid */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                aria-hidden="true"
              />

              {/* Pulse ring decoration */}
              <div className="absolute top-12 right-10 pointer-events-none" aria-hidden="true">
                <div className="relative w-12 h-12">
                  <div className="ct-ring-pulse absolute inset-0 rounded-full bg-primary" />
                  <div className="absolute inset-0 rounded-full bg-primary/20" />
                  <div className="absolute inset-[6px] rounded-full bg-primary" />
                </div>
              </div>

              {/* Top content */}
              <div className="relative z-10">
                <h2 className="text-2xl font-black mb-2 leading-tight">
                  {d.infoTitle || 'Contact Info'}
                </h2>
                <p className="text-white/40 text-sm mb-10">
                  We&apos;re here to help, 7 days a week.
                </p>

                {/* Info rows */}
                <div className="space-y-6">
                  {contactInfo.map((info, i) => {
                    const Icon = iconMap[info.icon] || Mail;
                    return (
                      <div
                        key={i}
                        data-inview={pageInView ? 'true' : ''}
                        className={`reveal-up anim-delay-${3 + i} ct-info-row flex items-start gap-4 rounded-xl p-3 -mx-3`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">{info.title}</div>
                          <div className="text-white font-semibold text-sm">{info.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom — socials */}
              <div
                data-inview={pageInView ? 'true' : ''}
                className="reveal-up anim-delay-7 relative z-10 pt-10 mt-10 border-t border-white/10"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-4">Follow Us</div>
                <div className="flex gap-2">
                  {socialLinks.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="ct-social w-9 h-9 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center"
                    >
                      <s.icon className="w-4 h-4 text-white/70" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right form panel ── */}
            <div
              data-inview={pageInView ? 'true' : ''}
              className="reveal-right anim-delay-3 lg:col-span-8 bg-white/70 backdrop-blur-xl p-10 lg:p-14"
            >
              {isSubmitted ? (
                /* ── Success state ── */
                <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-5">
                  <div className="ct-success-icon w-20 h-20 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black tracking-tight">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-sm leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-black tracking-tight mb-2">
                      {formStr.title || 'Send a Message'}
                    </h2>
                    <p className="text-muted-foreground text-sm">All fields marked * are required.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Row 1 — name + email */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="ct-input"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="ct-input"
                        />
                      </div>
                    </div>

                    {/* Row 2 — phone */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (403) 555-0000"
                        className="ct-input"
                      />
                    </div>

                    {/* Row 3 — message */}
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-3">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, budget, and timeline…"
                        className="ct-input resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ct-btn w-full h-14 rounded-2xl bg-linear-to-r from-primary to-secondary text-white font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          {formStr.submitLabel || 'Send Message'}
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </Container>
      </section>

    </main>
  );
}
