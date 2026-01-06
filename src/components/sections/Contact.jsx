'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const contactInfo = [
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
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM'],
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export default function Contact() {
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
    // Simulate form submission
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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something Amazing"
          subtitle="Ready to start your project? Contact us today and let's discuss how we can help transform your digital presence."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-8 border-t border-border"
            >
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-muted flex items-center justify-center hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2 opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    Calgary, Alberta, Canada
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-2">Send Us a Message</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                      placeholder="+1 (403) 555-0123"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Website Development</option>
                      <option value="ecommerce">E-Commerce Solutions</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="branding">Brand Identity</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  icon={
                    isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )
                  }
                  disabled={isSubmitting}
                >
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
