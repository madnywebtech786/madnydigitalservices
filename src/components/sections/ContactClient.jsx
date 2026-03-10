'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, User, Building, Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ContactClient({ data }) {
  const d = data || {};
  const contactInfo = d.contactInfo || [];
  const hero = d.hero || {};
  const formStr = d.form || {};

  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <section className="relative py-24 bg-linear-to-br from-primary/5 to-secondary/5">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-black mb-6">{hero.headingPart1} <span className="text-gradient">{hero.headingPart2}</span></h1>
            <p className="text-xl text-muted-foreground">{hero.description}</p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8">{formStr.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" placeholder="Name" className="w-full p-4 border rounded-xl" />
                <input type="email" placeholder="Email" className="w-full p-4 border rounded-xl" />
                <textarea rows={6} placeholder="Message" className="w-full p-4 border rounded-xl" />
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
            <div>
              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary"><Mail /></div>
                    <div>
                      <h4 className="font-bold">{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
