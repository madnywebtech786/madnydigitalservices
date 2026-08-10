'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, ChevronDown, Plus, Trash2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const Input = (props) => <input {...props} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`} />;
const TextareaAutosize = (props) => <textarea {...props} rows={props.rows || 3} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`} />;

const defaultGlobal = {
  header: {
    brandName: 'Madny Digital',
    navLinks: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/#services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  footer: {
    description: '',
    address: '',
    email: '',
    phone: '',
    copyright: '',
    serviceLinks: [],
    companyLinks: [],
    supportLinks: [],
    socialLinks: [
      { platform: 'LinkedIn', href: '' },
      { platform: 'Twitter', href: '' },
      { platform: 'Instagram', href: '' },
      { platform: 'Facebook', href: '' },
    ],
  },
  socialWidget: {
    facebook: '',
    instagram: '',
    whatsapp: '',
  },
};

export default function GlobalEditor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [openSection, setOpenSection] = useState('header');

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/global');
      if (res.ok) {
        let json = await res.json();
        if (Array.isArray(json)) json = json[0];
        setData({
          header: { ...defaultGlobal.header, ...json?.header },
          footer: { ...defaultGlobal.footer, ...json?.footer },
          socialWidget: { ...defaultGlobal.socialWidget, ...json?.socialWidget },
        });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to load global data.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      const token = localStorage.getItem('cms_token');
      const res = await fetch('/api/global', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setMessage({ type: 'success', text: 'Global settings saved successfully!' });
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

  const updateHeader = (field, value) => setData(prev => ({ ...prev, header: { ...prev.header, [field]: value } }));
  const updateFooter = (field, value) => setData(prev => ({ ...prev, footer: { ...prev.footer, [field]: value } }));
  const updateSocialWidget = (field, value) => setData(prev => ({ ...prev, socialWidget: { ...prev.socialWidget, [field]: value } }));

  // Nav links helpers
  const updateNavLink = (index, field, value) => {
    setData(prev => {
      const links = [...(prev.header.navLinks || [])];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, header: { ...prev.header, navLinks: links } };
    });
  };
  const addNavLink = () => setData(prev => ({ ...prev, header: { ...prev.header, navLinks: [...(prev.header.navLinks || []), { name: '', href: '' }] } }));
  const removeNavLink = (index) => setData(prev => {
    const links = [...(prev.header.navLinks || [])];
    links.splice(index, 1);
    return { ...prev, header: { ...prev.header, navLinks: links } };
  });

  // Footer link list helpers (serviceLinks, companyLinks, supportLinks)
  const updateFooterLink = (listKey, index, field, value) => {
    setData(prev => {
      const links = [...(prev.footer[listKey] || [])];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, footer: { ...prev.footer, [listKey]: links } };
    });
  };
  const addFooterLink = (listKey) => setData(prev => ({ ...prev, footer: { ...prev.footer, [listKey]: [...(prev.footer[listKey] || []), { name: '', href: '' }] } }));
  const removeFooterLink = (listKey, index) => setData(prev => {
    const links = [...(prev.footer[listKey] || [])];
    links.splice(index, 1);
    return { ...prev, footer: { ...prev.footer, [listKey]: links } };
  });

  // Social links (footer socialLinks array)
  const updateSocialLink = (index, field, value) => {
    setData(prev => {
      const links = [...(prev.footer.socialLinks || [])];
      links[index] = { ...links[index], [field]: value };
      return { ...prev, footer: { ...prev.footer, socialLinks: links } };
    });
  };

  if (isLoading) return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">Edit Global Settings</h1>
          <p className="text-muted-foreground">Manage Header, Footer, Social Widget, and Site-wide Data.</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} icon={isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}>
          {isSaving ? 'Saving...' : 'Save Global Data'}
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

      <div className="space-y-4">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'header' ? null : 'header')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Header Configuration</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'header' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'header' && data.header && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Brand Name</label><Input value={data.header.brandName || ''} onChange={(e) => updateHeader('brandName', e.target.value)} /></div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-bold">Navigation Links</label>
                      <button onClick={addNavLink} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Link</button>
                    </div>
                    <div className="space-y-3">
                      {(data.header.navLinks || []).map((link, i) => (
                        <div key={i} className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl">
                          <Input placeholder="Label (e.g. About)" value={link.name || ''} onChange={(e) => updateNavLink(i, 'name', e.target.value)} />
                          <Input placeholder="URL (e.g. /about)" value={link.href || ''} onChange={(e) => updateNavLink(i, 'href', e.target.value)} />
                          <button onClick={() => removeNavLink(i)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0"><Trash2 className="w-4 h-4"/></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'footer' ? null : 'footer')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Footer Configuration</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'footer' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'footer' && data.footer && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <div><label className="block text-sm font-bold mb-2">Company Description</label><TextareaAutosize value={data.footer.description || ''} onChange={(e) => updateFooter('description', e.target.value)} /></div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div><label className="block text-sm font-bold mb-2">Address (single line)</label><Input value={data.footer.address || ''} onChange={(e) => updateFooter('address', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Email</label><Input type="email" value={data.footer.email || ''} onChange={(e) => updateFooter('email', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Phone</label><Input value={data.footer.phone || ''} onChange={(e) => updateFooter('phone', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Copyright Text</label><Input value={data.footer.copyright || ''} onChange={(e) => updateFooter('copyright', e.target.value)} /></div>
                  </div>

                  {/* Social Links (footer icons) */}
                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-sm font-bold mb-3">Social Media Links (Footer Icons)</label>
                    <div className="space-y-3">
                      {(data.footer.socialLinks || []).map((link, i) => (
                        <div key={i} className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl">
                          <div className="w-28 shrink-0"><Input placeholder="Platform" value={link.platform || ''} onChange={(e) => updateSocialLink(i, 'platform', e.target.value)} /></div>
                          <Input placeholder="URL (e.g. https://linkedin.com/...)" value={link.href || ''} onChange={(e) => updateSocialLink(i, 'href', e.target.value)} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Link Lists */}
                  {[
                    { key: 'serviceLinks', label: 'Services Links' },
                    { key: 'companyLinks', label: 'Company Links' },
                    { key: 'supportLinks', label: 'Support Links' },
                  ].map(({ key, label }) => (
                    <div key={key} className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-bold">{label}</label>
                        <button onClick={() => addFooterLink(key)} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add</button>
                      </div>
                      <div className="space-y-2">
                        {(data.footer[key] || []).map((link, i) => (
                          <div key={i} className="flex gap-3 items-center bg-gray-50 p-3 rounded-xl">
                            <Input placeholder="Label" value={link.name || ''} onChange={(e) => updateFooterLink(key, i, 'name', e.target.value)} />
                            <Input placeholder="URL" value={link.href || ''} onChange={(e) => updateFooterLink(key, i, 'href', e.target.value)} />
                            <button onClick={() => removeFooterLink(key, i)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg shrink-0"><Trash2 className="w-4 h-4"/></button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SOCIAL WIDGET */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'socialWidget' ? null : 'socialWidget')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Floating Social Media Widget</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'socialWidget' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'socialWidget' && data.socialWidget && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-6">
                  <p className="text-sm text-muted-foreground">These links appear on the floating widget on the right side of every page. Leave blank to keep defaults.</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div><label className="block text-sm font-bold mb-2">Facebook URL</label><Input value={data.socialWidget.facebook || ''} onChange={(e) => updateSocialWidget('facebook', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Instagram URL</label><Input value={data.socialWidget.instagram || ''} onChange={(e) => updateSocialWidget('instagram', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">WhatsApp URL</label><Input value={data.socialWidget.whatsapp || ''} onChange={(e) => updateSocialWidget('whatsapp', e.target.value)} /></div>
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
          {isSaving ? 'Saving...' : 'Save Global Data'}
        </Button>
      </motion.div>
    </div>
  );
}
