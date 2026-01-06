'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import { services, getServiceById } from '@/data/services';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function ServicePage() {
  const params = useParams();
  const service = getServiceById(params.slug);
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link href="/#services">
              <Button>Back to Services</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary/20 to-transparent blur-3xl"
            />
            {/* Animated grid */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `radial-gradient(circle, #9f2321 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <Container className="relative z-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Services</span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl`}
                >
                  <ServiceIcon className="w-10 h-10 text-white" />
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-gradient">{service.title}</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {service.heroDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" icon={<Phone className="w-5 h-5" />}>
                    Call Now
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    Get a Quote
                  </Button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="font-bold">5.0 Rating</div>
                      <div className="text-xs text-muted-foreground">
                        100+ Reviews
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">{service.title}</span>{' '}
                Services
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <FeatureIcon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5"
            />
          </div>

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Competitive</span> Rates
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {service.pricing.map((item, index) => (
                  <motion.div
                    key={item.service}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-5 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-semibold">{item.service}</h4>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    </div>
                    <div className="text-2xl font-bold text-gradient">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <Container className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Why Choose Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative overflow-hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Common</span> Questions
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-100 bg-white shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <h3 className="font-semibold pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" />
              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                  Contact us today for a free consultation. We&apos;re here to help
                  with all your {service.title.toLowerCase()} needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-primary border-white hover:bg-white/90"
                    icon={<Phone className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    (403) 555-0123
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white border-2 border-white/30 hover:bg-white/10"
                    icon={<MapPin className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    Visit Our Store
                  </Button>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Other Services */}
        <section className="py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold">
                Explore Our <span className="text-gradient">Other Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {services
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((otherService, index) => {
                  const OtherIcon = otherService.icon;
                  return (
                    <motion.div
                      key={otherService.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={`/services/${otherService.id}`}>
                        <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${otherService.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <OtherIcon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-bold mb-2 group-hover:text-gradient transition-all">
                            {otherService.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {otherService.shortDesc}
                          </p>
                          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                            Learn More{' '}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
