'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, Plus, Trash2, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const TextareaAutosize = (props) => (
  <textarea {...props} rows={props.rows || 3} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`} />
);

const Input = (props) => (
  <input {...props} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`} />
);

export default function AboutEditor() {
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
      const res = await fetch('/api/pages/about');
      if (res.ok) {
        const json = await res.json();
        const defaultSections = {
          hero: { badge: 'About Madny Digital', headingPart1: 'Crafting Digital', headingPart2: 'Excellence', description: "We're a team of passionate innovators transforming ideas into powerful digital experiences that drive real business growth", ctaPrimary: 'Our Projects', ctaSecondary: 'Contact Us' },
          stats: [{ value: '500+', label: 'Happy Clients' }, { value: '50+', label: 'Awards Won' }, { value: '1000+', label: 'Projects Completed' }, { value: '99%', label: 'Success Rate' }],
          whyChooseUs: {
            badge: 'The Madny Edge', title: 'Engineered for Digital Dominance',
            description: "We don't just build websites; we architect digital powerhouses.",
            features: [
              { title: 'Technical Excellence', description: 'Zero-compromise code quality using the latest Next.js architectures.', metric: '99.9%', benefit: 'System Uptime' },
              { title: 'Strategic Innovation', description: 'We align every pixel with your business objectives.', metric: '400%', benefit: 'Avg. Engagement' },
              { title: 'Hyper-Performance', description: 'Optimized for core web vitals and conversion.', metric: '< 1s', benefit: 'LCP Speed' },
            ],
          },
          mission: {
            badge: 'Our Mission', title: 'Transforming Ideas Into Digital Reality',
            description: "We exist to bridge the gap between imagination and execution.",
            bulletPoints: ['Empower businesses with cutting-edge technology', 'Deliver measurable results and lasting value', 'Build partnerships based on trust and transparency'],
          },
          vision: {
            badge: 'Our Vision', titlePart1: 'A World Where Technology', titlePart2: 'Elevates Everyone',
            description: 'We envision a future where innovative digital solutions are accessible to all businesses.',
            pillars: [{ label: 'Global Impact' }, { label: 'Innovation First' }, { label: 'Human-Centered' }, { label: 'Sustainable Growth' }],
          },
          process: {
            badge: 'Our Process', title: 'How We Transform Ideas',
            description: 'A proven methodology that turns vision into exceptional digital products',
            steps: [
              { step: '01', title: 'Discovery & Strategy', description: 'We dive deep into your business goals to craft a strategic roadmap.', duration: '1-2 weeks', deliverables: ['Comprehensive project roadmap', 'Competitive analysis report', 'Technical architecture plan'] },
              { step: '02', title: 'Design & Prototype', description: 'Our designers create stunning, user-centric interfaces.', duration: '2-3 weeks', deliverables: ['Interactive prototypes & mockups', 'Design system & style guide', 'User feedback integration'] },
              { step: '03', title: 'Development & Testing', description: 'Expert developers build your solution with rigorous testing.', duration: '4-6 weeks', deliverables: ['Fully tested codebase', 'Performance optimization', 'Security & code reviews'] },
              { step: '04', title: 'Launch & Support', description: 'Seamless deployment with ongoing support and monitoring.', duration: 'Ongoing', deliverables: ['Live deployment & documentation', 'Training & knowledge transfer', '24/7 monitoring & support'] },
            ],
          },
          faq: {
            badge: 'Frequently Asked Questions', title: 'Getting to Know Madny Digital',
            subtitle: 'Common questions about who we are and how we work, before you book a repair or start a project.',
            items: [
              { question: 'Is Madny Digital Services a real Calgary company?', answer: 'Yes. Madny Digital Services is based in Calgary, Alberta, with a physical shop serving local residents and businesses.' },
            ],
          },
          cta: { badge: 'Ready to Build Something Amazing?', heading: 'Ready to Build Something Amazing?', description: "Let's collaborate and turn your vision into reality.", ctaPrimary: 'Start Your Project', ctaSecondary: 'Schedule a Call' }
        };
        setData({ ...defaultSections, ...json.sections });
      }
    } catch (error) {
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
      const getRes = await fetch('/api/pages/about');
      const pageDoc = await getRes.json();
      
      const payload = { ...pageDoc, sections: data };
      const res = await fetch('/api/pages/about', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'About page saved successfully!' });
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
    setData((prev) => ({ ...prev, [sectionName]: { ...prev[sectionName], [field]: value } }));
  };

  const updateArrayItem = (sectionName, arrayName, index, field, value) => {
    setData((prev) => {
      const newArray = [...prev[sectionName][arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [sectionName]: { ...prev[sectionName], [arrayName]: newArray } };
    });
  };

  const updateStringArray = (sectionName, arrayName, index, value) => {
    setData((prev) => {
      const newArray = [...prev[sectionName][arrayName]];
      newArray[index] = value;
      return { ...prev, [sectionName]: { ...prev[sectionName], [arrayName]: newArray } };
    });
  };

  const addArrayItem = (sectionName, arrayName, defaultItem) => {
    setData((prev) => ({ ...prev, [sectionName]: { ...prev[sectionName], [arrayName]: [...(prev[sectionName][arrayName] || []), defaultItem] } }));
  };

  const removeArrayItem = (sectionName, arrayName, index) => {
    setData((prev) => {
      const newArray = [...prev[sectionName][arrayName]];
      newArray.splice(index, 1);
      return { ...prev, [sectionName]: { ...prev[sectionName], [arrayName]: newArray } };
    });
  };

  if (isLoading) return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">Edit About Page</h1>
          <p className="text-muted-foreground">Manage your agency's story, values, and statistics.</p>
        </div>
    
      </div>

      <AnimatePresence>
        {message && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'} border`}>
            {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-4">
        {/* HERO SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'hero' ? null : 'hero')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Main About Content</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'hero' ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {openSection === 'hero' && data.hero && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.hero.badge || ''} onChange={(e) => updateSection('hero', 'badge', e.target.value)} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="block text-sm font-bold mb-2">Heading Part 1</label><Input value={data.hero.headingPart1 || ''} onChange={(e) => updateSection('hero', 'headingPart1', e.target.value)} /></div>
                      <div><label className="block text-sm font-bold mb-2">Heading Part 2</label><Input value={data.hero.headingPart2 || ''} onChange={(e) => updateSection('hero', 'headingPart2', e.target.value)} /></div>
                    </div>
                  </div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.hero.description || ''} onChange={(e) => updateSection('hero', 'description', e.target.value)} /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-bold mb-2">Primary Button Text</label><Input value={data.hero.ctaPrimary || ''} onChange={(e) => updateSection('hero', 'ctaPrimary', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Secondary Button Text</label><Input value={data.hero.ctaSecondary || ''} onChange={(e) => updateSection('hero', 'ctaSecondary', e.target.value)} /></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* STATS SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'stats' ? null : 'stats')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Company Stats</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'stats' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'stats' && data.stats && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-bold">Key Metrics</label>
                    <button onClick={() => {
                        const newArr = [...(data.stats || []), {value: '', label: ''}];
                        setData((prev) => ({ ...prev, stats: newArr }));
                    }} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Stat</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.stats.map((stat, i) => (
                      <div key={i} className="flex gap-4 items-center bg-gray-50 p-4 border rounded-xl relative pr-12">
                        <Input placeholder="Value (e.g. 500+)" value={stat.value || ''} onChange={(e) => {
                            const newArr = [...data.stats];
                            newArr[i] = { ...newArr[i], value: e.target.value };
                            setData((prev) => ({ ...prev, stats: newArr }));
                        }} />
                        <Input placeholder="Label (e.g. Projects)" value={stat.label || ''} onChange={(e) => {
                            const newArr = [...data.stats];
                            newArr[i] = { ...newArr[i], label: e.target.value };
                            setData((prev) => ({ ...prev, stats: newArr }));
                        }} />
                        <button onClick={() => {
                            const newArr = [...data.stats];
                            newArr.splice(i, 1);
                            setData((prev) => ({ ...prev, stats: newArr }));
                        }} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-5 h-5"/></button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WHY CHOOSE US */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'whyUs' ? null : 'whyUs')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Why Choose Us</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'whyUs' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'whyUs' && data.whyChooseUs && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.whyChooseUs.badge || ''} onChange={(e) => updateSection('whyChooseUs', 'badge', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.whyChooseUs.title || ''} onChange={(e) => updateSection('whyChooseUs', 'title', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.whyChooseUs.description || ''} onChange={(e) => updateSection('whyChooseUs', 'description', e.target.value)} /></div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-bold">Feature Cards</label>
                      <button onClick={() => addArrayItem('whyChooseUs', 'features', {title:'', description:'', metric:'', benefit:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Feature</button>
                    </div>
                    <div className="grid gap-4">
                      {data.whyChooseUs.features && data.whyChooseUs.features.map((f, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                           <button onClick={() => removeArrayItem('whyChooseUs', 'features', i)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                           <div className="grid md:grid-cols-2 gap-4 mb-4">
                             <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Title</label><Input value={f.title || ''} onChange={(e) => updateArrayItem('whyChooseUs', 'features', i, 'title', e.target.value)} /></div>
                             <div>
                               <label className="text-xs font-semibold text-gray-500 mb-1 block">Metric Bubble Value (e.g. 40% Faster)</label>
                               <Input value={f.metric || ''} onChange={(e) => updateArrayItem('whyChooseUs', 'features', i, 'metric', e.target.value)} />
                             </div>
                             <div className="md:col-span-2"><label className="text-xs font-semibold text-gray-500 mb-1 block">Description</label><TextareaAutosize value={f.description || ''} onChange={(e) => updateArrayItem('whyChooseUs', 'features', i, 'description', e.target.value)} /></div>
                             <div className="md:col-span-2">
                               <label className="text-xs font-semibold text-gray-500 mb-1 block">Metric Sub-label (e.g. Time Saved)</label>
                               <Input value={f.benefit || ''} onChange={(e) => updateArrayItem('whyChooseUs', 'features', i, 'benefit', e.target.value)} />
                             </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MISSION & VISION */}
        <div className="grid md:grid-cols-1 gap-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button onClick={() => setOpenSection(openSection === 'mission' ? null : 'mission')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
                <h2 className="text-lg font-bold">Mission</h2>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'mission' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {openSection === 'mission' && data.mission && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 border-t border-gray-100 space-y-6">
                    <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.mission.badge || ''} onChange={(e) => updateSection('mission', 'badge', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.mission.title || ''} onChange={(e) => updateSection('mission', 'title', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.mission.description || ''} onChange={(e) => updateSection('mission', 'description', e.target.value)} /></div>
                    
                    <div>
                        <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-bold">Bullet Points</label>
                        <button onClick={() => addArrayItem('mission', 'bulletPoints', '')} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Point</button>
                        </div>
                        <div className="space-y-2">
                        {data.mission.bulletPoints && data.mission.bulletPoints.map((bp, i) => (
                            <div key={i} className="flex gap-2">
                            <Input value={bp} onChange={(e) => updateStringArray('mission', 'bulletPoints', i, e.target.value)} />
                            <button onClick={() => removeArrayItem('mission', 'bulletPoints', i)} className="p-2 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-4 h-4"/></button>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <button onClick={() => setOpenSection(openSection === 'vision' ? null : 'vision')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
                <h2 className="text-lg font-bold">Vision</h2>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'vision' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {openSection === 'vision' && data.vision && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 border-t border-gray-100 space-y-6">
                    <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.vision.badge || ''} onChange={(e) => updateSection('vision', 'badge', e.target.value)} /></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-bold mb-2">Title 1</label><Input value={data.vision.titlePart1 || ''} onChange={(e) => updateSection('vision', 'titlePart1', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Title 2</label><Input value={data.vision.titlePart2 || ''} onChange={(e) => updateSection('vision', 'titlePart2', e.target.value)} /></div>
                    </div>
                    <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.vision.description || ''} onChange={(e) => updateSection('vision', 'description', e.target.value)} /></div>
                    
                    <div>
                        <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-bold">Pillars</label>
                        <button onClick={() => addArrayItem('vision', 'pillars', {label: ''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Pillar</button>
                        </div>
                        <div className="space-y-2">
                        {data.vision.pillars && data.vision.pillars.map((p, i) => (
                            <div key={i} className="flex gap-2">
                            <Input value={p.label || ''} onChange={(e) => updateArrayItem('vision', 'pillars', i, 'label', e.target.value)} />
                            <button onClick={() => removeArrayItem('vision', 'pillars', i)} className="p-2 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-4 h-4"/></button>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>

        {/* PROCESS SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'process' ? null : 'process')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Our Process</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'process' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'process' && data.process && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.process.badge || ''} onChange={(e) => updateSection('process', 'badge', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.process.title || ''} onChange={(e) => updateSection('process', 'title', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.process.description || ''} onChange={(e) => updateSection('process', 'description', e.target.value)} /></div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-bold">Process Steps</label>
                      <button onClick={() => addArrayItem('process', 'steps', {step:'', title:'', description:'', duration:'', deliverables:[]})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Step</button>
                    </div>
                    <div className="grid gap-4">
                      {data.process.steps && data.process.steps.map((st, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                           <button onClick={() => removeArrayItem('process', 'steps', i)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                           <div className="grid md:grid-cols-2 gap-4 mb-4">
                             <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Step Indicator (e.g. 01)</label><Input value={st.step || ''} onChange={(e) => updateArrayItem('process', 'steps', i, 'step', e.target.value)} /></div>
                             <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Title</label><Input value={st.title || ''} onChange={(e) => updateArrayItem('process', 'steps', i, 'title', e.target.value)} /></div>
                             <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Duration (e.g. 1-2 weeks)</label><Input value={st.duration || ''} onChange={(e) => updateArrayItem('process', 'steps', i, 'duration', e.target.value)} /></div>
                             <div className="md:col-span-2"><label className="text-xs font-semibold text-gray-500 mb-1 block">Description</label><TextareaAutosize value={st.description || ''} onChange={(e) => updateArrayItem('process', 'steps', i, 'description', e.target.value)} /></div>
                             <div className="md:col-span-2">
                               <label className="text-xs font-semibold text-gray-500 mb-1 block">Deliverables (comma separated)</label>
                               <Input value={(st.deliverables || []).join(', ')} onChange={(e) => {
                                   const newArray = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                                   updateArrayItem('process', 'steps', i, 'deliverables', newArray);
                               }} />
                             </div>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'faq' ? null : 'faq')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">FAQ Section</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'faq' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'faq' && data.faq && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.faq.badge || ''} onChange={(e) => updateSection('faq', 'badge', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.faq.title || ''} onChange={(e) => updateSection('faq', 'title', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Subtitle</label><TextareaAutosize value={data.faq.subtitle || ''} onChange={(e) => updateSection('faq', 'subtitle', e.target.value)} /></div>
                  <p className="text-xs text-gray-500 bg-blue-50 border border-blue-100 p-3 rounded-xl">Keep these company-level questions (certifications, service area) rather than repeating service-specific FAQs already on the homepage.</p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-bold">Questions & Answers</label>
                      <button onClick={() => addArrayItem('faq', 'items', { question: '', answer: '' })} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add FAQ</button>
                    </div>
                    <div className="grid gap-4">
                      {(data.faq.items || []).map((item, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-12">
                          <button onClick={() => removeArrayItem('faq', 'items', i)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                          <div className="mb-3"><label className="text-xs font-semibold text-gray-500 mb-1 block">Question</label><Input placeholder="Is Madny Digital Services a real Calgary company?" value={item.question || ''} onChange={(e) => updateArrayItem('faq', 'items', i, 'question', e.target.value)} /></div>
                          <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Answer</label><TextareaAutosize placeholder="Direct, concise answer..." value={item.answer || ''} onChange={(e) => updateArrayItem('faq', 'items', i, 'answer', e.target.value)} /></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'cta' ? null : 'cta')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Call to Action (CTA)</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'cta' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'cta' && data.cta && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.cta?.badge || ''} onChange={(e) => updateSection('cta', 'badge', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Heading</label><Input value={data.cta?.heading || ''} onChange={(e) => updateSection('cta', 'heading', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.cta?.description || ''} onChange={(e) => updateSection('cta', 'description', e.target.value)} /></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-bold mb-2">Primary Button Text</label><Input value={data.cta?.ctaPrimary || ''} onChange={(e) => updateSection('cta', 'ctaPrimary', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Secondary Button Text</label><Input value={data.cta?.ctaSecondary || ''} onChange={(e) => updateSection('cta', 'ctaSecondary', e.target.value)} /></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
