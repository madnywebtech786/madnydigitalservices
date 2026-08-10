'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, Plus, Trash2, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

const TextareaAutosize = (props) => <textarea {...props} rows={props.rows || 3} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`} />;
const Input = (props) => <input {...props} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`} />;

export default function ContactEditor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [openSection, setOpenSection] = useState('hero');

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/pages/contact');
      if (res.ok) {
        const json = await res.json();
        const defaultSections = {
          hero: {
            badge: "Let's Build Something Amazing", headingPart1: 'Get In', headingPart2: 'Touch',
            description: "Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.",
            benefits: [{ title: 'Quick Response', description: 'Get a reply within 24 hours' }, { title: 'Your Data is Safe', description: 'We respect your privacy' }, { title: 'Global Support', description: 'Available worldwide' }],
          },
          contactInfo: [
            { title: 'Email Us', value: 'madny786@hotmail.com', description: 'Drop us a line anytime', link: 'mailto:madny786@hotmail.com' },
            { title: 'Call Us', value: '+1 (403) 555-0123', description: 'Mon-Fri from 8am to 6pm', link: 'tel:+14035550123' },
            { title: 'Visit Us', value: 'Calgary, AB', description: '123 Innovation Drive, Suite 100', link: '#' },
          ],
          form: { badge: 'Send us a Message', title: 'Tell Us About Your Project', description: "Fill out the form below and we'll get back to you within 24 hours", privacyText: 'By submitting this form, you agree to our privacy policy' },
          responseProcess: {
            badge: 'What Happens Next?', title: 'Our Response Process',
            steps: [
              { step: '01', title: 'We Review Your Message', description: 'Our team carefully reads your inquiry and identifies the best person to help you.' },
              { step: '02', title: 'Initial Response', description: "You'll hear back from us within 24 hours with next steps." },
              { step: '03', title: 'Kickoff Call', description: "We'll schedule a call to discuss your project in detail." },
            ],
          }
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
      const getRes = await fetch('/api/pages/contact');
      const pageDoc = await getRes.json();
      
      const payload = { ...pageDoc, sections: data };
      const res = await fetch('/api/pages/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Contact page saved successfully!' });
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

  const updateSection = (sectionName, field, value) => setData(prev => ({ ...prev, [sectionName]: { ...prev[sectionName], [field]: value } }));
  const updateArrayItem = (arrayPath, index, field, value) => {
    setData(prev => {
      const parts = arrayPath.split('.');
      if (parts.length === 1) {
        const newArray = [...prev[parts[0]]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prev, [parts[0]]: newArray };
      } else if (parts.length === 2) {
        const newArray = [...prev[parts[0]][parts[1]]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prev, [parts[0]]: { ...prev[parts[0]], [parts[1]]: newArray } };
      }
      return prev;
    });
  };

  const addArrayItem = (arrayPath, defaultItem) => {
    setData(prev => {
      const parts = arrayPath.split('.');
      if (parts.length === 1) {
        return { ...prev, [parts[0]]: [...(prev[parts[0]] || []), defaultItem] };
      } else if (parts.length === 2) {
        return { ...prev, [parts[0]]: { ...prev[parts[0]], [parts[1]]: [...(prev[parts[0]][parts[1]] || []), defaultItem] } };
      }
      return prev;
    });
  };

  const removeArrayItem = (arrayPath, index) => {
    setData(prev => {
      const parts = arrayPath.split('.');
      if (parts.length === 1) {
        const newArray = [...prev[parts[0]]];
        newArray.splice(index, 1);
        return { ...prev, [parts[0]]: newArray };
      } else if (parts.length === 2) {
        const newArray = [...prev[parts[0]][parts[1]]];
        newArray.splice(index, 1);
        return { ...prev, [parts[0]]: { ...prev[parts[0]], [parts[1]]: newArray } };
      }
      return prev;
    });
  };

  if (isLoading) return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">Edit Contact Page</h1>
          <p className="text-muted-foreground">Manage your contact information, locations, and form details.</p>
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
        {/* HERO */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'hero' ? null : 'hero')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Hero Section</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'hero' ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {openSection === 'hero' && data.hero && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.hero.badge || ''} onChange={(e) => updateSection('hero', 'badge', e.target.value)} /></div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-bold mb-2">Heading Line 1</label><Input value={data.hero.headingPart1 || ''} onChange={(e) => updateSection('hero', 'headingPart1', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Heading Line 2 (Highlighted)</label><Input value={data.hero.headingPart2 || ''} onChange={(e) => updateSection('hero', 'headingPart2', e.target.value)} /></div>
                  </div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.hero.description || ''} onChange={(e) => updateSection('hero', 'description', e.target.value)} /></div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-bold">Benefits Cards</label>
                      <button onClick={() => addArrayItem('hero.benefits', {title:'', description:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Benefit</button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {data.hero.benefits && data.hero.benefits.map((b, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-10">
                           <button onClick={() => removeArrayItem('hero.benefits', i)} className="absolute top-2 right-2 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                           <Input placeholder="Title" value={b.title || ''} onChange={(e) => updateArrayItem('hero.benefits', i, 'title', e.target.value)} className="mb-2" />
                           <TextareaAutosize placeholder="Description..." value={b.description || ''} onChange={(e) => updateArrayItem('hero.benefits', i, 'description', e.target.value)} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CONTACT INFO */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'contactInfo' ? null : 'contactInfo')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Contact Info Cards</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'contactInfo' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'contactInfo' && data.contactInfo && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-muted-foreground">These are the cards showing Email, Phone, and Address.</p>
                    <button onClick={() => addArrayItem('contactInfo', {title:'', value:'', description:'', link:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Card</button>
                  </div>
                  <div className="space-y-4">
                    {data.contactInfo.map((info, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-14 grid md:grid-cols-2 gap-4">
                         <button onClick={() => removeArrayItem('contactInfo', i)} className="absolute top-4 right-4 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-5 h-5"/></button>
                         <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Title (e.g. Email Us)</label><Input value={info.title || ''} onChange={(e) => updateArrayItem('contactInfo', i, 'title', e.target.value)} /></div>
                         <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Value (e.g. hello@url.com)</label><Input value={info.value || ''} onChange={(e) => updateArrayItem('contactInfo', i, 'value', e.target.value)} /></div>
                         <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Link (mailto:, tel:)</label><Input value={info.link || ''} onChange={(e) => updateArrayItem('contactInfo', i, 'link', e.target.value)} /></div>
                         <div><label className="text-xs font-semibold text-gray-500 mb-1 block">Description</label><Input value={info.description || ''} onChange={(e) => updateArrayItem('contactInfo', i, 'description', e.target.value)} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'form' ? null : 'form')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Form Text</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'form' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'form' && data.form && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.form.badge || ''} onChange={(e) => updateSection('form', 'badge', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.form.title || ''} onChange={(e) => updateSection('form', 'title', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.form.description || ''} onChange={(e) => updateSection('form', 'description', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Privacy Policy Text</label><Input value={data.form.privacyText || ''} onChange={(e) => updateSection('form', 'privacyText', e.target.value)} /></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RESPONSE PROCESS */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'responseProcess' ? null : 'responseProcess')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Response Process Section</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'responseProcess' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'responseProcess' && data.responseProcess && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Badge Text</label><Input value={data.responseProcess.badge || ''} onChange={(e) => updateSection('responseProcess', 'badge', e.target.value)} /></div>
                  <div><label className="block text-sm font-bold mb-2">Title</label><Input value={data.responseProcess.title || ''} onChange={(e) => updateSection('responseProcess', 'title', e.target.value)} /></div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-bold">Process Steps</label>
                      <button onClick={() => addArrayItem('responseProcess.steps', {step:'', title:'', description:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Step</button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {data.responseProcess.steps && data.responseProcess.steps.map((s, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative pr-10">
                           <button onClick={() => removeArrayItem('responseProcess.steps', i)} className="absolute top-2 right-2 p-2 text-red-500 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                           <Input placeholder="Step (01)" value={s.step || ''} onChange={(e) => updateArrayItem('responseProcess.steps', i, 'step', e.target.value)} className="mb-2 font-mono h-8" />
                           <Input placeholder="Title" value={s.title || ''} onChange={(e) => updateArrayItem('responseProcess.steps', i, 'title', e.target.value)} className="mb-2 font-bold" />
                           <TextareaAutosize placeholder="Description..." value={s.description || ''} onChange={(e) => updateArrayItem('responseProcess.steps', i, 'description', e.target.value)} />
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
