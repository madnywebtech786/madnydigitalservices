'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, Plus, Trash2, ChevronDown, ChevronRight, Copy } from 'lucide-react';
import Button from '@/components/ui/Button';

const TextareaAutosize = (props) => <textarea {...props} rows={props.rows || 3} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`} />;
const Input = (props) => <input {...props} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`} />;

export default function ServicesEditor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [openSection, setOpenSection] = useState('items');
  const [openServiceIndex, setOpenServiceIndex] = useState(null);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/pages/services');
      if (res.ok) {
        const json = await res.json();
        const defaultSections = {
          items: []
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
      const getRes = await fetch('/api/pages/services');
      const pageDoc = await getRes.json();
      
      const payload = { ...pageDoc, sections: data };
      const res = await fetch('/api/pages/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Services page saved successfully!' });
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
  const updateServiceItem = (index, field, value) => {
    setData(prev => {
      const newItems = [...prev.items];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, items: newItems };
    });
  };

  // For nested array of strings
  const updateStringArrayInService = (svcIndex, arrayField, arrIndex, value) => {
    setData(prev => {
      const newItems = [...prev.items];
      const newArr = [...(newItems[svcIndex][arrayField] || [])];
      newArr[arrIndex] = value;
      newItems[svcIndex] = { ...newItems[svcIndex], [arrayField]: newArr };
      return { ...prev, items: newItems };
    });
  };

  // For nested array of objects
  const updateObjArrayInService = (svcIndex, arrayField, arrIndex, field, value) => {
    setData(prev => {
      const newItems = [...prev.items];
      const newArr = [...(newItems[svcIndex][arrayField] || [])];
      newArr[arrIndex] = { ...newArr[arrIndex], [field]: value };
      newItems[svcIndex] = { ...newItems[svcIndex], [arrayField]: newArr };
      return { ...prev, items: newItems };
    });
  };

  const addArrayItemToService = (svcIndex, arrayField, defaultVal) => {
    setData(prev => {
      const newItems = [...prev.items];
      newItems[svcIndex] = { ...newItems[svcIndex], [arrayField]: [...(newItems[svcIndex][arrayField] || []), defaultVal] };
      return { ...prev, items: newItems };
    });
  };

  const removeArrayItemFromService = (svcIndex, arrayField, arrIndex) => {
    setData(prev => {
      const newItems = [...prev.items];
      const newArr = [...(newItems[svcIndex][arrayField] || [])];
      newArr.splice(arrIndex, 1);
      newItems[svcIndex] = { ...newItems[svcIndex], [arrayField]: newArr };
      return { ...prev, items: newItems };
    });
  };

  const addService = () => {
    setData(prev => ({
      ...prev,
      items: [
        {
          id: `new-service-${Date.now()}`,
          title: 'New Service',
          shortDesc: '',
          heroDescription: '',
          image: '',
          features: [],
          pricing: [],
          benefits: [],
          faqs: []
        },
        ...(prev.items || [])
      ]
    }));
    setOpenServiceIndex(0);
  };

  const removeService = (index) => {
    if (confirm('Are you sure you want to delete this service?')) {
      setData(prev => {
        const newItems = [...prev.items];
        newItems.splice(index, 1);
        return { ...prev, items: newItems };
      });
      setOpenServiceIndex(null);
    }
  };

  if (isLoading) return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">Edit Services</h1>
          <p className="text-muted-foreground">Manage your detailed service offerings, pricing, and FAQs.</p>
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
        {/* SERVICES LIST */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between bg-gray-50/50 border-b border-gray-100">
            <h2 className="text-lg font-bold">Detailed Services</h2>
            <button onClick={addService} className="text-sm flex items-center gap-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"><Plus className="w-4 h-4"/> Add Service</button>
          </div>
          <div className="p-6 space-y-4">
            {(!data.items || data.items.length === 0) && <p className="text-muted-foreground text-center py-8">No services found. Create one above.</p>}
            
            {data.items && data.items.map((svc, i) => (
              <div key={svc.id || i} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenServiceIndex(openServiceIndex === i ? null : i)}
                  className="w-full px-4 py-3 bg-gray-50/80 hover:bg-gray-100 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${openServiceIndex === i ? 'rotate-90' : ''}`} />
                    <span className="font-bold">{svc.title || 'Untitled Service'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-mono bg-white px-2 py-1 rounded-md border border-gray-200">{svc.id}</span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openServiceIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white">
                      <div className="p-6 border-t border-gray-100 space-y-8">
                        {/* Service Header Info */}
                        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 space-y-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-black text-blue-900 border-b-2 border-primary inline-block pb-1">Basic Details</h3>
                                <button onClick={() => removeService(i)} className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium px-4 py-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" /> Delete Service
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                            <div><label className="block text-sm font-bold mb-2">Service ID (URL slug)</label><Input value={svc.id || ''} onChange={(e) => updateServiceItem(i, 'id', e.target.value)} className="bg-white" /></div>
                            <div><label className="block text-sm font-bold mb-2">Title</label><Input value={svc.title || ''} onChange={(e) => updateServiceItem(i, 'title', e.target.value)} className="bg-white" /></div>
                            </div>
                            <div><label className="block text-sm font-bold mb-2">Short Description (for cards)</label><TextareaAutosize value={svc.shortDesc || ''} onChange={(e) => updateServiceItem(i, 'shortDesc', e.target.value)} className="bg-white" /></div>
                            <div><label className="block text-sm font-bold mb-2">Main Hero Description (for individual service page)</label><TextareaAutosize value={svc.heroDescription || ''} onChange={(e) => updateServiceItem(i, 'heroDescription', e.target.value)} className="bg-white" /></div>
                            <div><label className="block text-sm font-bold mb-2">Hero Image URL</label><Input value={svc.image || ''} onChange={(e) => updateServiceItem(i, 'image', e.target.value)} className="bg-white" /></div>
                        </div>
                        
                        {/* Nested Arrays */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            
                            {/* Features Array */}
                            <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-md font-black text-purple-900 border-b-2 border-primary inline-block pb-1">Involved Features</h3>
                                    <button onClick={() => addArrayItemToService(i, 'features', {title:'', description:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Feature</button>
                                </div>
                                <div className="space-y-4">
                                    {svc.features && svc.features.map((f, fIdx) => (
                                    <div key={fIdx} className="relative pr-10 space-y-2 bg-white p-4 rounded-xl shadow-sm border border-purple-100">
                                        <button onClick={() => removeArrayItemFromService(i, 'features', fIdx)} className="absolute top-4 right-4 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                                        <Input placeholder="Feature Title" value={f.title || ''} onChange={(e) => updateObjArrayInService(i, 'features', fIdx, 'title', e.target.value)} className="font-bold" />
                                        <TextareaAutosize placeholder="Feature Description" value={f.description || ''} onChange={(e) => updateObjArrayInService(i, 'features', fIdx, 'description', e.target.value)} />
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing Array */}
                            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-md font-black text-emerald-900 border-b-2 border-primary inline-block pb-1">Pricing Table</h3>
                                    <button onClick={() => addArrayItemToService(i, 'pricing', {service:'', price:'', note:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Pricing</button>
                                </div>
                                <div className="space-y-4">
                                    {svc.pricing && svc.pricing.map((p, pIdx) => (
                                    <div key={pIdx} className="relative pr-10 space-y-2 bg-white p-4 rounded-xl shadow-sm border border-emerald-100 grid md:grid-cols-2 gap-4">
                                        <button onClick={() => removeArrayItemFromService(i, 'pricing', pIdx)} className="absolute top-4 right-4 text-red-500 hover:text-red-700 md:-mt-2 md:-mr-2"><Trash2 className="w-4 h-4"/></button>
                                        <div className="col-span-1 md:col-span-2"><Input placeholder="Service Name" value={p.service || ''} onChange={(e) => updateObjArrayInService(i, 'pricing', pIdx, 'service', e.target.value)} /></div>
                                        <div><Input placeholder="Price (e.g. $99)" value={p.price || ''} onChange={(e) => updateObjArrayInService(i, 'pricing', pIdx, 'price', e.target.value)} /></div>
                                        <div><Input placeholder="Note (e.g. Starting at)" value={p.note || ''} onChange={(e) => updateObjArrayInService(i, 'pricing', pIdx, 'note', e.target.value)} /></div>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits Array */}
                            <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 lg:col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-md font-black text-orange-900 border-b-2 border-primary inline-block pb-1">Key Benefits</h3>
                                    <button onClick={() => addArrayItemToService(i, 'benefits', '')} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Benefit String</button>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {svc.benefits && svc.benefits.map((b, bIdx) => (
                                    <div key={bIdx} className="flex gap-2">
                                        <Input placeholder="Benefit text" value={b} onChange={(e) => updateStringArrayInService(i, 'benefits', bIdx, e.target.value)} className="bg-white" />
                                        <button onClick={() => removeArrayItemFromService(i, 'benefits', bIdx)} className="p-3 text-red-500 hover:bg-red-50 rounded-xl bg-white focus:outline-none"><Trash2 className="w-4 h-4"/></button>
                                    </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQs Array */}
                            <div className="bg-gray-100/50 p-6 rounded-2xl border border-gray-200 lg:col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-md font-black text-gray-900 border-b-2 border-primary inline-block pb-1">Frequently Asked Questions</h3>
                                    <button onClick={() => addArrayItemToService(i, 'faqs', {question:'', answer:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add FAQ</button>
                                </div>
                                <div className="space-y-4 max-w-4xl">
                                    {svc.faqs && svc.faqs.map((faq, fIdx) => (
                                    <div key={fIdx} className="relative pr-10 space-y-2 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
                                        <button onClick={() => removeArrayItemFromService(i, 'faqs', fIdx)} className="absolute top-5 right-4 text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                                        <div><label className="text-xs font-bold text-gray-500 mb-1 block">Question</label><Input value={faq.question || ''} onChange={(e) => updateObjArrayInService(i, 'faqs', fIdx, 'question', e.target.value)} /></div>
                                        <div><label className="text-xs font-bold text-gray-500 mb-1 block">Answer</label><TextareaAutosize value={faq.answer || ''} onChange={(e) => updateObjArrayInService(i, 'faqs', fIdx, 'answer', e.target.value)} /></div>
                                    </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
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
