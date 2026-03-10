'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

const TextareaAutosize = (props) => <textarea {...props} rows={props.rows || 3} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`} />;
const Input = (props) => <input {...props} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`} />;

const PAGE_SLUGS = ['home', 'about', 'contact', 'projects', 'services'];

export default function SeoEditor() {
  const [pagesData, setPagesData] = useState({});
  const [selectedSlug, setSelectedSlug] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => { fetchAllPages(); }, []);

  const fetchAllPages = async () => {
    setIsLoading(true);
    try {
      const results = {};
      await Promise.all(PAGE_SLUGS.map(async (slug) => {
        const res = await fetch(`/api/pages/${slug}`);
        if (res.ok) {
          const json = await res.json();
          results[slug] = json;
        }
      }));
      setPagesData(results);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to load SEO data.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      const token = localStorage.getItem('cms_token');
      // Save just the currently selected page
      const payload = pagesData[selectedSlug];
      
      const res = await fetch(`/api/pages/${selectedSlug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage({ type: 'success', text: `SEO metadata for '${selectedSlug}' page saved successfully!` });
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

  const updateMeta = (field, value) => {
    setPagesData(prev => ({
      ...prev,
      [selectedSlug]: {
        ...prev[selectedSlug],
        meta: {
          ...(prev[selectedSlug]?.meta || {}),
          [field]: value
        }
      }
    }));
  };

  if (isLoading) return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  const currentMeta = pagesData[selectedSlug]?.meta || {};

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">SEO & Metadata Editor</h1>
          <p className="text-muted-foreground">Manage search engine optimization tags for each individual page.</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} icon={isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}>
          {isSaving ? 'Saving...' : `Save ${selectedSlug.charAt(0).toUpperCase() + selectedSlug.slice(1)} SEO`}
        </Button>
      </div>

      <AnimatePresence>
        {message && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'} border`}>
            {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Page Selector Sidebar */}
        <div className="w-full md:w-64 shrink-0 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm sticky top-24">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Select Page</h3>
          <div className="space-y-1">
            {PAGE_SLUGS.map(slug => (
              <button
                key={slug}
                onClick={() => setSelectedSlug(slug)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors flex items-center gap-3
                  ${slug === selectedSlug ? 'bg-primary text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Globe className="w-4 h-4" />
                {slug.charAt(0).toUpperCase() + slug.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Editor Area */}
        <div className="flex-1 w-full space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Editing <span className="text-gradient capitalize">{selectedSlug}</span> Metadata
              </h2>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Browser Title Tag</label>
              <Input placeholder="Madeny Digital Services | ..." value={currentMeta.title || ''} onChange={(e) => updateMeta('title', e.target.value)} />
              <p className="text-xs text-gray-500 mt-2">Recommended 50-60 characters. This appears in the browser tab and Google search results.</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Meta Description</label>
              <TextareaAutosize placeholder="Write a compelling description..." value={currentMeta.description || ''} onChange={(e) => updateMeta('description', e.target.value)} />
              <p className="text-xs text-gray-500 mt-2">Recommended 150-160 characters. A brief summary of the page to encourage clicks.</p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Meta Keywords</label>
              <TextareaAutosize placeholder="web development, mobile apps, calgary..." value={currentMeta.keywords || ''} onChange={(e) => updateMeta('keywords', e.target.value)} />
              <p className="text-xs text-gray-500 mt-2">Comma-separated list of keywords. Note: Google mostly ignores this, but it's good for internal tagging.</p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold mb-4">OpenGraph Tags (Social Sharing)</h3>
              <div className="grid gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">OG Title</label>
                  <Input placeholder="Usually same as Browser Title" value={currentMeta.ogTitle || ''} onChange={(e) => updateMeta('ogTitle', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">OG Description</label>
                  <TextareaAutosize placeholder="Usually same as Meta Description" value={currentMeta.ogDescription || ''} onChange={(e) => updateMeta('ogDescription', e.target.value)} />
                </div>
              </div>
            </div>

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
          {isSaving ? 'Saving...' : `Save ${selectedSlug.charAt(0).toUpperCase() + selectedSlug.slice(1)} SEO`}
        </Button>
      </motion.div>
    </div>
  );
}
