'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  User,
  Building,
  Sparkles,
  ArrowRight,
  Zap,
  Globe,
  Shield,
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@madenydigital.com',
    description: 'Drop us a line anytime',
    color: 'from-blue-500 to-cyan-500',
    link: 'mailto:hello@madenydigital.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 6pm',
    color: 'from-purple-500 to-pink-500',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'San Francisco, CA',
    description: '123 Innovation Street, Suite 100',
    color: 'from-orange-500 to-red-500',
    link: '#',
  },
];

const benefits = [
  {
    icon: Zap,
    title: 'Quick Response',
    description: 'Get a reply within 24 hours',
  },
  {
    icon: Shield,
    title: 'Your Data is Safe',
    description: 'We respect your privacy',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Available worldwide',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/5 via-white to-secondary/5">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Large gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-200 h-200 rounded-full bg-linear-to-br from-primary/20 via-primary/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-40 -left-40 w-175 h-175 rounded-full bg-linear-to-tr from-secondary/20 via-secondary/10 to-transparent blur-3xl"
          />

          {/* Grid pattern */}
          <motion.div
            animate={{ opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #9f2321 1px, transparent 1px),
                linear-gradient(#9f2321 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-linear-to-r from-primary to-secondary"
              style={{
                left: `${10 + i * 6}%`,
                top: `${20 + (i % 5) * 15}%`,
              }}
              animate={{
                y: [0, -30, -60, -90],
                opacity: [0, 0.5, 1, 0],
                scale: [0, 1, 1.5, 0],
              }}
              transition={{
                duration: 5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-primary/20 shadow-lg shadow-primary/5 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="text-sm font-semibold text-gradient">Let's Build Something Amazing</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-none"
            >
              <span className="text-foreground">Get In</span>{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%] animate-[gradient_3s_ease-in-out_infinite]">
                Touch
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200 shadow-md"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{benefit.title}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 -mt-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-linear-to-br ${info.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                  <div className="relative p-8 rounded-3xl bg-white border-2 border-gray-100 hover:border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${info.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-black mb-2 text-foreground">{info.title}</h3>
                    <p className="text-lg font-semibold text-gradient mb-2">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-24 bg-linear-to-b from-white via-muted/20 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            style={{
              backgroundImage: `
                linear-gradient(90deg, #9f2321 1px, transparent 1px),
                linear-gradient(#9f2321 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
            className="w-full h-full"
          />
        </div>

        {/* Floating orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-96 h-96 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-linear-to-br from-purple-500 to-pink-500 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Send us a Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Tell Us About Your <span className="text-gradient">Project</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Success overlay */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 backdrop-blur-xl rounded-3xl"
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.5 }}
                      className="w-20 h-20 rounded-full bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-black mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-3xl bg-white border-2 border-gray-100 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Company */}
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-bold text-foreground mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all duration-300 bg-white resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-8 rounded-xl bg-linear-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  By submitting this form, you agree to our privacy policy
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">What Happens Next?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Our <span className="text-gradient">Response Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'We Review Your Message',
                description: 'Our team carefully reads your inquiry and identifies the best person to help you.',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: '02',
                title: 'Initial Response',
                description: "You'll hear back from us within 24 hours with next steps or answers to your questions.",
                color: 'from-purple-500 to-pink-500',
              },
              {
                step: '03',
                title: "Let's Connect",
                description: "We'll schedule a call to discuss your project in detail and provide a custom proposal.",
                color: 'from-orange-500 to-red-500',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-linear-to-br ${step.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                <div className="relative p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="text-2xl font-black text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-black mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
