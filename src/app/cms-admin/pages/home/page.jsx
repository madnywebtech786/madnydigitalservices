'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, ChevronDown, Plus, Trash2 } from 'lucide-react';
import Button from '@/components/ui/Button';

// A helper to auto-resize textareas
const TextareaAutosize = (props) => {
  return (
    <textarea
      {...props}
      rows={props.rows || 3}
      className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`}
    />
  );
};

// A helper for normal inputs
const Input = (props) => {
  return (
    <input
      {...props}
      className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`}
    />
  );
};

export default function HomeEditor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [openSection, setOpenSection] = useState('hero');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/pages/home');
      if (res.ok) {
        const json = await res.json();
        // Fallback structures if empty
        const defaultSections = {
          hero: {
            badge: "Calgary's Trusted Tech Partner",
            headingLine1: 'Your One-Stop', headingLine2: 'Tech Solution', headingLine3: 'Center',
            subheading: 'Expert computer & cell phone repair, quality device sales, and professional web development services. All under one roof in Calgary, Alberta.',
            ctaPrimary: 'Get Free Quote', ctaSecondary: '(403) 555-0123',
            stats: [{ value: '5k+', label: 'Devices Repaired' }, { value: '1k+', label: 'Web Projects' }, { value: '1.5k+', label: 'Happy Customers' }, { value: '20+', label: 'Years of Experience' }],
            floatingCard1Title: 'Website Development', floatingCard1Subtitle: 'Custom & responsive',
            floatingCard2Title: 'Computer System Design', floatingCard2Subtitle: 'Hardware and Software',
          },
          services: {
            badge: 'Our Services', title: 'What We Offer',
            subtitle: 'Computer systems design, software development, web development, digital solutions, computer and cellphone sales, technical support, and professional repair services for businesses and individuals in Calgary and nearby areas.',
            items: [
              { id: 'computer', title: 'Computer Services', shortDesc: 'Computer systems, sales, support & repair', description: 'Complete computer solutions for businesses and individuals in Calgary. From computer systems design and hardware and software support to laptop sales, upgrades, data backup and recovery, and professional repair services, we help keep your technology reliable and working efficiently.', features: ['Computer Systems Design', 'Hardware & Software', 'Sales & Service', 'Upgrades & Repairs', 'Data Backup & Recovery'] },
              { id: 'cellphone', title: 'Cellphone Services', shortDesc: 'Sales, setup, support & repair', description: 'Complete cellphone solutions for everyday and business needs. We offer brand-new and refurbished phones, professional device setup, accessories, unlocking, troubleshooting, and repair services for many supported cellphone models.', features: ['Brand-New & Refurbished Phones', 'Cellphone Setup & Support', 'Screen & Battery Replacement', 'Charging Port & Audio Repair', 'Liquid Damage Service', 'Unlocking & Accessories'] },
              { id: 'software-development', title: 'Software Development', shortDesc: 'Custom software built for your business', description: 'Custom software solutions designed to improve business operations, streamline workflows, and support growth. We develop reliable web applications, business management systems, databases, dashboards, portals, and other software tailored to your requirements.', features: ['Custom Software Development', 'Web Application Development', 'Database Development', 'Software Testing & Maintenance', 'Business Systems & Automation'] },
              { id: 'web-development', title: 'Web Development', shortDesc: 'Professional websites built for your business', description: 'Modern, responsive, and user-friendly web solutions designed to strengthen your online presence. We build business websites, e-commerce stores, custom web portals, and provide ongoing website maintenance and digital marketing solutions.', features: ['Website Design & Development', 'ECommerce Development', 'Custom Web Portals', 'Website Maintenance', 'SEO & Digital Marketing', 'PPC & Google Ads'] },
            ],
          },
          about: {
            badge: 'About Us', title: 'Madny Digital Services', titlePrefix: 'We Are',
            paragraph1: "Madny Digital Services is a Calgary-based technology company providing professional computer systems and digital solutions to businesses and individuals. We specialize in computer systems design, custom software development, web application development, website development, database solutions, and ongoing technical support.",
            paragraph2: 'Our digital services include e-commerce development, custom web portals, website maintenance, SEO, digital marketing, and Google Ads. We focus on developing reliable, practical, and scalable technology solutions tailored to the needs of each client. In addition to our core technology and digital services, we provide computer and cellphone sales, hardware and software support, system upgrades, data backup and recovery, and professional device repair services.',
            features: ['Free Diagnose', 'Warranty on all repairs and devices sold', 'Transparent, upfront pricing', 'Same-day service available', 'Onsite service option available', 'Quality replacement parts'],
            values: [{ title: 'Mission', description: 'To deliver reliable and innovative computer systems, software, web, and digital solutions that help businesses and individuals use technology more effectively. We are committed to quality service, practical solutions, and long-term client relationships, supported by professional technical and device repair services.' }, { title: 'Vision', description: 'To become a trusted technology and digital solutions provider recognized for delivering modern, reliable, and scalable solutions that help businesses grow, adapt, and succeed in an evolving digital world.' }],
            achievements: [{ number: '1k+', label: 'Projects Completed' }, { number: '1.5k+', label: 'Happy Clients' }, { number: '20+', label: 'Years Experience' }],
            floatingCard1Value: '20+', floatingCard1Label: 'Years of Excellence',
            floatingCard2Value: '1.5k+', floatingCard2Label: 'Happy Clients',
          },
          projects: {
            badge: 'Portfolio', title: 'Featured Projects',
            subtitle: 'A selection of our best work across web development, e-commerce, and digital solutions.',
            items: [
              { id: 1, title: 'E-Commerce Fashion Store', category: 'ecommerce', description: 'A modern, responsive e-commerce platform.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', tags: ['Next.js', 'Stripe', 'Tailwind CSS'], url: '#', featured: true },
              { id: 2, title: 'Restaurant Management System', category: 'web', description: 'Complete restaurant solution with online ordering.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', tags: ['React', 'Node.js', 'MongoDB'], url: '#', featured: true },
              { id: 3, title: 'Real Estate Marketplace', category: 'web', description: 'Comprehensive property listing platform.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', tags: ['Vue.js', 'Laravel', 'MySQL'], url: '#', featured: true },
            ],
          },
          gallery: {
            badge: 'Gallery', title: 'Innovation Discovery',
            items: [
              { image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', title: 'Web Development' },
              { image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80', title: 'Mobile Apps' },
              { image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80', title: 'Restaurant System' },
              { image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80', title: 'E-Commerce' },
              { image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80', title: 'Computer Repair' },
              { image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80', title: 'Phone Repair' },
            ],
          },
          contact: {
            badge: 'Get In Touch', title: "Let's Build Something Amazing",
            subtitle: "Ready to start your project? Contact us today.",
            contactInfo: [
              { title: 'Visit Us', details: ['123 Innovation Drive', 'Calgary, AB T2P 1J9', 'Canada'] },
              { title: 'Email Us', details: ['madny786@hotmail.com'] },
              { title: 'Call Us', details: ['+1 (403) 555-0123', '+1 (403) 555-0124'] },
            ],
          },
          faqs: {
            badge: 'Frequently Asked Questions', title: 'FAQs',
            subtitle: 'Straightforward answers about computer systems, software development, web development, digital solutions, and technical services in Calgary.',
            items: [
              { question: 'What computer and technology services do you provide in Calgary?', answer: 'We provide computer systems design, hardware and software solutions, system upgrades, data backup and recovery, technical support, software development, web development, and other digital solutions for businesses and individuals.' },
              { question: 'Do you develop custom software for businesses?', answer: 'Yes. We develop custom software solutions based on specific business requirements, including web applications, database solutions, business systems, and other tailored digital tools.' },
              { question: 'Do you provide web application development in Calgary?', answer: 'Yes. We design and develop custom web applications with a focus on functionality, performance, usability, and scalability to support different business requirements.' },
              { question: 'Do you design and develop business websites?', answer: 'Yes. We develop professional business websites, e-commerce stores, custom web portals, and other web solutions. Our websites are designed to be responsive, user friendly, and aligned with your business goals.' },
              { question: 'Do you provide SEO and digital marketing services?', answer: 'Yes. Our digital services include search engine optimization (SEO), digital marketing, Google Ads/PPC, website optimization, and ongoing website support to help businesses strengthen their online presence.' },
              { question: 'Do you provide computer upgrades and data recovery?', answer: 'Yes. We provide computer hardware and software support, RAM and storage upgrades, HDD and SSD solutions, data backup and recovery, and system performance improvements.' },
              { question: 'Do you sell computers, laptops, and mobile devices?', answer: 'Yes. We offer a selection of new and refurbished computers, laptops, and mobile devices, along with setup and technical support services.' },
              { question: 'Do you repair computers, laptops, and cellphones?', answer: 'Yes. We provide professional computer, laptop, and cellphone repair services, including screen, battery, charging port, keyboard, back glass, and other hardware-related repairs.' },
              { question: 'Do you provide cellphone unlocking services?', answer: 'Yes. Cellphone unlocking services are available for supported devices and networks. Contact our team with your device details to confirm availability.' },
              { question: 'What areas do you serve?', answer: 'We are based in Calgary and provide technology, digital, computer, and device services to customers and businesses in Calgary and nearby areas.' },
            ],
          },
          testimonials: {
            badge: 'Testimonials', title: 'What Our Clients Say',
            description: "Don't just take our word for it. Here's what Calgary businesses and individuals have to say.",
            bottomText: 'satisfied customers in Calgary', bottomCount: '1.5k+',
            items: [],
          },
          cta: {
            badge: 'Ready to Transform Your Business?', heading: "Let's Create Something Extraordinary Together",
            description: "Whether you need a stunning website, a powerful e-commerce platform, or a complete digital transformation, we're here to make it happen.",
            ctaPrimary: 'Start Your Project', ctaSecondary: 'Schedule a Call',
          },
          diagonalBanners: { text1: 'Computer Systems Design ✦ Software and Hardware ✦ Data Recovery ✦ Web Development ✦ ECommerce Solutions ✦ Database Development ✦ SEO & Digital Marketing ✦ Computer Sales & Service ✦ Device Repair & Support ✦ Sales and Service ✦ ', text2: 'Computer Systems Design ✦ Software and Hardware ✦ Data Recovery ✦ Web Development ✦ ECommerce Solutions ✦ Database Development ✦ SEO & Digital Marketing ✦ Computer Sales & Service ✦ Device Repair & Support ✦ Sales and Service ✦ ' }
        };
        setData({ ...defaultSections, ...json.sections });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage({ type: 'error', text: 'Failed to load data.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      const token = localStorage.getItem('cms_token');
      // We need to fetch the whole page document first to keep meta, or just send sections.
      // Wait, our API PUT /api/pages/home expects the full object.
      // Let's get the whole page first, then update sections.
      const getRes = await fetch('/api/pages/home');
      const pageDoc = await getRes.json();
      
      const payload = { ...pageDoc, sections: data };

      const res = await fetch('/api/pages/home', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Home page content saved successfully!' });
        setTimeout(() => setMessage(''), 3000);
      } else {
        const err = await res.json();
        setMessage({ type: 'error', text: err.error || 'Failed to save.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while saving.' });
    } finally {
      setIsSaving(false);
    }
  };

  const updateSection = (sectionName, field, value) => {
    setData((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        [field]: value
      }
    }));
  };

  const updateArrayItem = (sectionName, arrayName, index, field, value) => {
    setData((prev) => {
      const newArray = [...prev[sectionName][arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return {
        ...prev,
        [sectionName]: {
          ...prev[sectionName],
          [arrayName]: newArray
        }
      };
    });
  };

  const addArrayItem = (sectionName, arrayName, defaultItem) => {
    setData((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        [arrayName]: [...(prev[sectionName][arrayName] || []), defaultItem]
      }
    }));
  };

  const removeArrayItem = (sectionName, arrayName, index) => {
    setData((prev) => {
      const newArray = [...prev[sectionName][arrayName]];
      newArray.splice(index, 1);
      return {
        ...prev,
        [sectionName]: {
          ...prev[sectionName],
          [arrayName]: newArray
        }
      };
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const sectionsList = [
    { id: 'hero', title: 'Hero Section' },
    { id: 'services', title: 'Services Overview' },
    { id: 'about', title: 'About Snippet' },
    { id: 'projects', title: 'Featured Projects Showcase' },
    { id: 'diagonalBanners', title: 'Diagonal Banners' },
    { id: 'gallery', title: 'Gallery Section' },
    { id: 'contact', title: 'Contact Section' },
    { id: 'faqs', title: 'FAQ Section' },
    { id: 'testimonials', title: 'Testimonials' },
    { id: 'cta', title: 'Call to Action' },
  ];

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">Edit Home Page</h1>
          <p className="text-muted-foreground">Modify the content sections of the main landing page.</p>
        </div>
 
      </div>

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl flex items-center gap-3 ${
              message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {message.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {sectionsList.map((section) => (
          <div key={section.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button
              onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-lg font-bold">{section.title}</h2>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === section.id ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {openSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 border-t border-gray-100 space-y-6">
                    {/* Hero Section Fields */}
                    {section.id === 'hero' && data.hero && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.hero.badge || ''} onChange={(e) => updateSection('hero', 'badge', e.target.value)} /></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div><label className="block text-sm font-bold mb-2">Heading Line 1</label><Input value={data.hero.headingLine1 || ''} onChange={(e) => updateSection('hero', 'headingLine1', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Heading Line 2</label><Input value={data.hero.headingLine2 || ''} onChange={(e) => updateSection('hero', 'headingLine2', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Heading Line 3</label><Input value={data.hero.headingLine3 || ''} onChange={(e) => updateSection('hero', 'headingLine3', e.target.value)} /></div>
                        </div>
                        <div><label className="block text-sm font-bold mb-2">Subheading</label><TextareaAutosize value={data.hero.subheading || ''} onChange={(e) => updateSection('hero', 'subheading', e.target.value)} /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div><label className="block text-sm font-bold mb-2">Primary CTA Button</label><Input value={data.hero.ctaPrimary || ''} onChange={(e) => updateSection('hero', 'ctaPrimary', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Secondary CTA Button</label><Input value={data.hero.ctaSecondary || ''} onChange={(e) => updateSection('hero', 'ctaSecondary', e.target.value)} /></div>
                        </div>

                        {/* Array editing for stats */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Hero Stats</label>
                            <button onClick={() => addArrayItem('hero', 'stats', { value: '', label: '' })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Stat</button>
                          </div>
                          <div className="space-y-3">
                            {data.hero.stats && data.hero.stats.map((stat, i) => (
                              <div key={i} className="flex gap-4 items-start bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <div className="flex-1 grid grid-cols-2 gap-4">
                                  <Input placeholder="Value (e.g. 500+)" value={stat.value || ''} onChange={(e) => updateArrayItem('hero', 'stats', i, 'value', e.target.value)} />
                                  <Input placeholder="Label (e.g. Happy Clients)" value={stat.label || ''} onChange={(e) => updateArrayItem('hero', 'stats', i, 'label', e.target.value)} />
                                </div>
                                <button onClick={() => removeArrayItem('hero', 'stats', i)} className="p-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors"><Trash2 className="w-5 h-5"/></button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Floating Cards inside Hero */}
                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4">
                          <div><label className="text-sm font-bold mb-2 block text-primary">Floating Card 1 (Computer Repair)</label>
                            <div className="space-y-3">
                              <Input placeholder="Title" value={data.hero.floatingCard1Title || ''} onChange={(e) => updateSection('hero', 'floatingCard1Title', e.target.value)} />
                              <Input placeholder="Subtitle" value={data.hero.floatingCard1Subtitle || ''} onChange={(e) => updateSection('hero', 'floatingCard1Subtitle', e.target.value)} />
                            </div>
                          </div>
                          <div><label className="text-sm font-bold mb-2 block text-secondary">Floating Card 2 (Phone Repair)</label>
                            <div className="space-y-3">
                              <Input placeholder="Title" value={data.hero.floatingCard2Title || ''} onChange={(e) => updateSection('hero', 'floatingCard2Title', e.target.value)} />
                              <Input placeholder="Subtitle" value={data.hero.floatingCard2Subtitle || ''} onChange={(e) => updateSection('hero', 'floatingCard2Subtitle', e.target.value)} />
                            </div>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* Services Section Fields */}
                    {section.id === 'services' && data.services && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.services.badge || ''} onChange={(e) => updateSection('services', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.services.title || ''} onChange={(e) => updateSection('services', 'title', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Subtitle</label><TextareaAutosize value={data.services.subtitle || ''} onChange={(e) => updateSection('services', 'subtitle', e.target.value)} /></div>
                        
                        {/* Note: the actual service cards are fetched from the Services page document, or hardcoded depending on the implementation plan. Looking at the seed data, Home page services.items is actually an array referencing the services! We'll just let them edit title/desc here if they exist. */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Service Cards Overview</label>
                            <button onClick={() => addArrayItem('services', 'items', { id: '', title: '', description: '' })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Card Summary</button>
                          </div>
                          <div className="space-y-3">
                            {data.services.items && data.services.items.map((item, i) => (
                              <div key={i} className="grid gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                                <button onClick={() => removeArrayItem('services', 'items', i)} className="absolute top-2 right-2 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4"/></button>
                                <div className="grid grid-cols-2 gap-4 pr-10">
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Title</label><Input placeholder="Title" value={item.title || ''} onChange={(e) => updateArrayItem('services', 'items', i, 'title', e.target.value)} /></div>
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Slug / ID</label><Input placeholder="slug (e.g. computer-repair)" value={item.id || ''} onChange={(e) => updateArrayItem('services', 'items', i, 'id', e.target.value)} /></div>
                                </div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Short Description</label><TextareaAutosize placeholder="Description..." value={item.description || ''} onChange={(e) => updateArrayItem('services', 'items', i, 'description', e.target.value)} /></div>

                                {/* Features Array */}
                                <div>
                                  <div className="flex items-center justify-between mb-2 mt-4">
                                    <label className="text-xs font-semibold text-gray-500 block">Features (Checkmarks)</label>
                                    <button onClick={() => {
                                      const newItems = [...data.services.items];
                                      const newFeatures = [...(item.features || []), ''];
                                      newItems[i] = { ...newItems[i], features: newFeatures };
                                      updateSection('services', 'items', newItems);
                                    }} className="text-xs flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-3 h-3"/> Add Feature</button>
                                  </div>
                                  <div className="space-y-2">
                                    {(item.features || []).map((f, fIdx) => (
                                      <div key={fIdx} className="flex gap-2">
                                        <Input placeholder="Feature Text" value={f || ''} onChange={(e) => {
                                          const newItems = [...data.services.items];
                                          const newFeatures = [...item.features];
                                          newFeatures[fIdx] = e.target.value;
                                          newItems[i] = { ...newItems[i], features: newFeatures };
                                          updateSection('services', 'items', newItems);
                                        }} className="py-2 text-sm" />
                                        <button onClick={() => {
                                          const newItems = [...data.services.items];
                                          const newFeatures = [...item.features];
                                          newFeatures.splice(fIdx, 1);
                                          newItems[i] = { ...newItems[i], features: newFeatures };
                                          updateSection('services', 'items', newItems);
                                        }} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* About Snippet Section Fields */}
                    {section.id === 'about' && data.about && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.about.badge || ''} onChange={(e) => updateSection('about', 'badge', e.target.value)} /></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><label className="block text-sm font-bold mb-2">Title Prefix</label><Input value={data.about.titlePrefix || ''} onChange={(e) => updateSection('about', 'titlePrefix', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Main Title</label><Input value={data.about.title || ''} onChange={(e) => updateSection('about', 'title', e.target.value)} /></div>
                        </div>
                        <div><label className="block text-sm font-bold mb-2">Paragraph 1</label><TextareaAutosize value={data.about.paragraph1 || ''} onChange={(e) => updateSection('about', 'paragraph1', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Paragraph 2</label><TextareaAutosize value={data.about.paragraph2 || ''} onChange={(e) => updateSection('about', 'paragraph2', e.target.value)} /></div>

                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div><label className="text-sm font-bold mb-2 block text-primary">Floating Card 1 (Bottom-Right)</label>
                            <div className="space-y-3">
                              <Input placeholder="Value (e.g. 10+)" value={data.about.floatingCard1Value || ''} onChange={(e) => updateSection('about', 'floatingCard1Value', e.target.value)} />
                              <Input placeholder="Label (e.g. Years of Excellence)" value={data.about.floatingCard1Label || ''} onChange={(e) => updateSection('about', 'floatingCard1Label', e.target.value)} />
                            </div>
                          </div>
                          <div><label className="text-sm font-bold mb-2 block text-secondary">Floating Card 2 (Top-Left)</label>
                            <div className="space-y-3">
                              <Input placeholder="Value (e.g. 50+)" value={data.about.floatingCard2Value || ''} onChange={(e) => updateSection('about', 'floatingCard2Value', e.target.value)} />
                              <Input placeholder="Label (e.g. Happy Clients)" value={data.about.floatingCard2Label || ''} onChange={(e) => updateSection('about', 'floatingCard2Label', e.target.value)} />
                            </div>
                          </div>
                        </div>

                        {/* Features List */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Key Features (Checkmarks)</label>
                            <button onClick={() => addArrayItem('about', 'features', '')} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Feature</button>
                          </div>
                          <div className="space-y-2">
                            {(data.about.features || []).map((feature, i) => (
                              <div key={i} className="flex gap-2">
                                <Input value={feature} onChange={(e) => {
                                  const newArr = [...data.about.features];
                                  newArr[i] = e.target.value;
                                  updateSection('about', 'features', newArr);
                                }}/>
                                <button onClick={() => removeArrayItem('about', 'features', i)} className="p-3 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-5 h-5"/></button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Values List */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Mission / Vision Cards</label>
                            <button onClick={() => addArrayItem('about', 'values', {title:'', description:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Card</button>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            {(data.about.values || []).map((v, i) => (
                              <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-10">
                                 <button onClick={() => removeArrayItem('about', 'values', i)} className="absolute top-2 right-2 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                                 <Input placeholder="Title (e.g. Mission)" value={v.title || ''} onChange={(e) => updateArrayItem('about', 'values', i, 'title', e.target.value)} className="mb-2 font-bold" />
                                 <TextareaAutosize placeholder="Description..." value={v.description || ''} onChange={(e) => updateArrayItem('about', 'values', i, 'description', e.target.value)} />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements Stats Header */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Achievements Banner</label>
                            <button onClick={() => addArrayItem('about', 'achievements', {number:'', label:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Stat</button>
                          </div>
                          <div className="space-y-3">
                            {(data.about.achievements || []).map((a, i) => (
                              <div key={i} className="flex gap-4 items-center">
                                <Input placeholder="Number (e.g. 150+)" value={a.number || ''} onChange={(e) => updateArrayItem('about', 'achievements', i, 'number', e.target.value)} />
                                <Input placeholder="Label (e.g. Projects)" value={a.label || ''} onChange={(e) => updateArrayItem('about', 'achievements', i, 'label', e.target.value)} />
                                <button onClick={() => removeArrayItem('about', 'achievements', i)} className="p-3 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-5 h-5"/></button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Featured Projects Showcase Section */}
                    {section.id === 'projects' && data.projects && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.projects.badge || ''} onChange={(e) => updateSection('projects', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.projects.title || ''} onChange={(e) => updateSection('projects', 'title', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Subtitle</label><TextareaAutosize value={data.projects.subtitle || ''} onChange={(e) => updateSection('projects', 'subtitle', e.target.value)} /></div>
                        <p className="text-xs text-gray-500 bg-blue-50 border border-blue-100 p-3 rounded-xl">Only projects with <strong>featured: true</strong> will appear in the homepage showcase. Use the Projects page editor for the full project list.</p>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Featured Projects</label>
                            <button onClick={() => addArrayItem('projects', 'items', { id: Date.now(), title: '', description: '', image: '', tags: [], url: '#', featured: true })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Project</button>
                          </div>
                          <div className="space-y-4">
                            {(data.projects.items || []).map((item, i) => (
                              <div key={i} className="grid gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                                <button onClick={() => removeArrayItem('projects', 'items', i)} className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                                <div className="grid grid-cols-2 gap-4">
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Title</label><Input placeholder="Project Title" value={item.title || ''} onChange={(e) => updateArrayItem('projects', 'items', i, 'title', e.target.value)} /></div>
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Demo URL</label><Input placeholder="https://..." value={item.url || ''} onChange={(e) => updateArrayItem('projects', 'items', i, 'url', e.target.value)} /></div>
                                </div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Image URL</label><Input placeholder="https://images.unsplash.com/..." value={item.image || ''} onChange={(e) => updateArrayItem('projects', 'items', i, 'image', e.target.value)} /></div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Description</label><TextareaAutosize placeholder="Project description..." value={item.description || ''} onChange={(e) => updateArrayItem('projects', 'items', i, 'description', e.target.value)} /></div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Tags (comma-separated)</label><Input placeholder="Next.js, Stripe, MongoDB" value={(item.tags || []).join(', ')} onChange={(e) => updateArrayItem('projects', 'items', i, 'tags', e.target.value.split(',').map(t => t.trim()).filter(Boolean))} /></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Gallery Section Fields */}
                    {section.id === 'gallery' && data.gallery && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.gallery.badge || ''} onChange={(e) => updateSection('gallery', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.gallery.title || ''} onChange={(e) => updateSection('gallery', 'title', e.target.value)} /></div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Gallery Images</label>
                            <button onClick={() => addArrayItem('gallery', 'items', { image: '', title: '' })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Image</button>
                          </div>
                          <div className="space-y-3">
                            {(data.gallery.items || []).map((item, i) => (
                              <div key={i} className="flex gap-3 items-start bg-gray-50 p-3 rounded-xl border border-gray-100">
                                <div className="flex-1 grid grid-cols-2 gap-3">
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Image URL</label><Input placeholder="https://..." value={item.image || ''} onChange={(e) => updateArrayItem('gallery', 'items', i, 'image', e.target.value)} /></div>
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Alt Text / Title</label><Input placeholder="Image description" value={item.title || ''} onChange={(e) => updateArrayItem('gallery', 'items', i, 'title', e.target.value)} /></div>
                                </div>
                                <button onClick={() => removeArrayItem('gallery', 'items', i)} className="p-3 text-red-500 hover:bg-red-50 rounded-xl mt-5"><Trash2 className="w-4 h-4"/></button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Contact Section Fields (Homepage) */}
                    {section.id === 'contact' && data.contact && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.contact.badge || ''} onChange={(e) => updateSection('contact', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.contact.title || ''} onChange={(e) => updateSection('contact', 'title', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Subtitle</label><TextareaAutosize value={data.contact.subtitle || ''} onChange={(e) => updateSection('contact', 'subtitle', e.target.value)} /></div>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Contact Info Cards</label>
                            <button onClick={() => addArrayItem('contact', 'contactInfo', { title: '', details: [''] })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Card</button>
                          </div>
                          <div className="space-y-4">
                            {(data.contact.contactInfo || []).map((info, i) => (
                              <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                                <button onClick={() => removeArrayItem('contact', 'contactInfo', i)} className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Card Title</label><Input placeholder="Visit Us / Email Us / Call Us" value={info.title || ''} onChange={(e) => updateArrayItem('contact', 'contactInfo', i, 'title', e.target.value)} /></div>
                                <div className="mt-2"><label className="text-xs font-semibold text-gray-500 mb-1 block">Details (one per line)</label><TextareaAutosize placeholder="123 Innovation Drive&#10;Calgary, AB T2P 1J9" value={(info.details || []).join('\n')} onChange={(e) => updateArrayItem('contact', 'contactInfo', i, 'details', e.target.value.split('\n').filter(Boolean))} rows={3} /></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* FAQ Section Fields */}
                    {section.id === 'faqs' && data.faqs && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.faqs.badge || ''} onChange={(e) => updateSection('faqs', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.faqs.title || ''} onChange={(e) => updateSection('faqs', 'title', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Subtitle</label><TextareaAutosize value={data.faqs.subtitle || ''} onChange={(e) => updateSection('faqs', 'subtitle', e.target.value)} /></div>
                        <p className="text-xs text-gray-500 bg-blue-50 border border-blue-100 p-3 rounded-xl">Phrase questions the way someone would ask a voice assistant (e.g. "How much does...", "Where can I..."). Keep answers direct and around 40-60 words so search and AI engines can quote them.</p>
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Questions & Answers</label>
                            <button onClick={() => addArrayItem('faqs', 'items', { question: '', answer: '' })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add FAQ</button>
                          </div>
                          <div className="space-y-4">
                            {(data.faqs.items || []).map((item, i) => (
                              <div key={i} className="grid gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                                <button onClick={() => removeArrayItem('faqs', 'items', i)} className="absolute top-3 right-3 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Question</label><Input placeholder="How much does computer repair cost in Calgary?" value={item.question || ''} onChange={(e) => updateArrayItem('faqs', 'items', i, 'question', e.target.value)} /></div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Answer</label><TextareaAutosize placeholder="Direct, concise answer..." value={item.answer || ''} onChange={(e) => updateArrayItem('faqs', 'items', i, 'answer', e.target.value)} /></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Testimonials Section Fields */}
                    {section.id === 'testimonials' && data.testimonials && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.testimonials.badge || ''} onChange={(e) => updateSection('testimonials', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.testimonials.title || ''} onChange={(e) => updateSection('testimonials', 'title', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.testimonials.description || ''} onChange={(e) => updateSection('testimonials', 'description', e.target.value)} /></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div><label className="block text-sm font-bold mb-2">Bottom Count (e.g. 500+)</label><Input placeholder="500+" value={data.testimonials.bottomCount || ''} onChange={(e) => updateSection('testimonials', 'bottomCount', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Bottom Text</label><Input placeholder="satisfied customers in Calgary" value={data.testimonials.bottomText || ''} onChange={(e) => updateSection('testimonials', 'bottomText', e.target.value)} /></div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-sm font-bold">Testimonial Reviews</label>
                            <button onClick={() => addArrayItem('testimonials', 'items', { name: '', role: '', content: '', image: '' })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Testimonial</button>
                          </div>
                          <div className="space-y-4">
                            {data.testimonials.items && data.testimonials.items.map((item, i) => (
                              <div key={i} className="grid grid-cols-1 gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                                <button onClick={() => removeArrayItem('testimonials', 'items', i)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4"/></button>
                                <div className="grid grid-cols-2 gap-4">
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Author Name</label><Input placeholder="John Doe" value={item.name || ''} onChange={(e) => updateArrayItem('testimonials', 'items', i, 'name', e.target.value)} /></div>
                                  <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Role/Company</label><Input placeholder="CEO at TechCorp" value={item.role || ''} onChange={(e) => updateArrayItem('testimonials', 'items', i, 'role', e.target.value)} /></div>
                                </div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Image URL</label><Input placeholder="https://..." value={item.image || ''} onChange={(e) => updateArrayItem('testimonials', 'items', i, 'image', e.target.value)} /></div>
                                <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Review Content</label><TextareaAutosize placeholder="Amazing service..." value={item.content || ''} onChange={(e) => updateArrayItem('testimonials', 'items', i, 'content', e.target.value)} /></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Section Fields */}
                    {section.id === 'cta' && data.cta && (
                      <div className="grid gap-6">
                        <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.cta.badge || ''} onChange={(e) => updateSection('cta', 'badge', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Heading</label><Input value={data.cta.heading || ''} onChange={(e) => updateSection('cta', 'heading', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.cta.description || ''} onChange={(e) => updateSection('cta', 'description', e.target.value)} /></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div><label className="block text-sm font-bold mb-2">Primary Button Text</label><Input value={data.cta.ctaPrimary || ''} onChange={(e) => updateSection('cta', 'ctaPrimary', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Secondary Button Text</label><Input value={data.cta.ctaSecondary || ''} onChange={(e) => updateSection('cta', 'ctaSecondary', e.target.value)} /></div>
                        </div>
                      </div>
                    )}

                    {/* Diagonal Banners Section Fields */}
                    {section.id === 'diagonalBanners' && data.diagonalBanners && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div><label className="block text-sm font-bold mb-2">Banner 1 Text</label><Input value={data.diagonalBanners.text1 || ''} onChange={(e) => updateSection('diagonalBanners', 'text1', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Banner 2 Text</label><Input value={data.diagonalBanners.text2 || ''} onChange={(e) => updateSection('diagonalBanners', 'text2', e.target.value)} /></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Floating Save Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all rounded-full px-6 py-4"
          icon={isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
        >
          {isSaving ? 'Saving...' : 'Save Changes'}
        </Button>
      </motion.div>
    </div>
  );
}
