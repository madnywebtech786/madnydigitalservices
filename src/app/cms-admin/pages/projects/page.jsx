'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, AlertCircle, CheckCircle2, Loader2, Plus, Trash2, ChevronDown, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const TextareaAutosize = (props) => <textarea {...props} rows={props.rows || 3} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y min-h-[80px] ${props.className || ''}`} />;
const Input = (props) => <input {...props} className={`w-full p-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all ${props.className || ''}`} />;

export default function ProjectsEditor() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [openSection, setOpenSection] = useState('items');
  const [openProjectIndex, setOpenProjectIndex] = useState(null);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/pages/projects');
      if (res.ok) {
        const json = await res.json();
        const defaultSections = {
          hero: {
            badge: 'Portfolio Showcase', headingPart1: 'Our', headingHighlight: 'Amazing', headingPart2: 'Work',
            description: 'Discover cutting-edge digital solutions that transform businesses and delight users',
            stats: [{ label: 'Projects', value: '50+' }, { label: 'Clients', value: '200+' }, { label: 'Rating', value: '4.8' }],
          },
          categories: [
            { id: 'all', name: 'All Projects' }, { id: 'web', name: 'Web Development' },
            { id: 'mobile', name: 'Mobile Apps' }, { id: 'ecommerce', name: 'E-Commerce' },
            { id: 'saas', name: 'SaaS Platforms' }, { id: 'ai', name: 'AI/ML' },
          ],
          items: [
            { id: 1, title: 'E-Commerce Fashion Store', category: 'ecommerce', description: 'A modern, responsive e-commerce platform with real-time inventory management.', longDescription: 'Built with Next.js and integrated with Stripe for seamless transactions.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'], demoUrl: '#', githubUrl: '#', featured: true, stats: { users: '50K+', rating: '4.8/5', performance: '98/100' }, features: ['Responsive design for all devices', 'Real-time inventory management', 'Secure Stripe payment integration', 'Product filtering and wishlist', 'Order tracking and admin dashboard'], projectImpact: { title: 'Project Impact', description: 'This platform increased client revenue by 40% in the first quarter, with a 60% reduction in cart abandonment rate and seamless shopping across all devices.' } },
            { id: 2, title: 'Restaurant Management System', category: 'web', description: 'Complete restaurant solution with online ordering and kitchen management.', longDescription: 'Features real-time order tracking, customer reviews, and integrated delivery system.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'], demoUrl: '#', githubUrl: '#', featured: true, stats: { users: '30K+', rating: '4.9/5', performance: '95/100' }, features: ['Real-time order tracking with Socket.io', 'Online ordering and table reservations', 'Kitchen display system integration', 'Customer reviews and ratings', 'Integrated delivery management'], projectImpact: { title: 'Project Impact', description: 'Streamlined restaurant operations reduced order processing time by 50%, increased customer satisfaction scores by 35%, and enabled seamless delivery management.' } },
            { id: 3, title: 'Real Estate Marketplace', category: 'web', description: 'Comprehensive property listing platform with advanced search filters.', longDescription: 'Features mortgage calculators, neighborhood insights, and 3D property tours.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', tags: ['Vue.js', 'Laravel', 'Three.js', 'MySQL'], demoUrl: '#', githubUrl: '#', featured: true, stats: { users: '75K+', rating: '4.6/5', performance: '94/100' }, features: ['Advanced property search and filters', 'Interactive 3D virtual property tours', 'Mortgage calculator and affordability tools', 'Direct agent communication system', 'Neighborhood insights and analytics'], projectImpact: { title: 'Project Impact', description: 'Helped 75K+ buyers find their dream homes with 3D virtual tours reducing in-person visits by 30%, saving time for both buyers and agents while accelerating sales.' } },
          ]
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
      const getRes = await fetch('/api/pages/projects');
      const pageDoc = await getRes.json();
      
      const payload = { ...pageDoc, sections: data };
      const res = await fetch('/api/pages/projects', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Projects page saved successfully!' });
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
  const updateProjectItem = (index, field, value) => {
    setData(prev => {
      const newItems = [...prev.items];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, items: newItems };
    });
  };

  const updateArrayInProject = (projIndex, arrayField, arrIndex, value) => {
    setData(prev => {
      const newItems = [...prev.items];
      const newArr = [...(newItems[projIndex][arrayField] || [])];
      newArr[arrIndex] = value;
      newItems[projIndex] = { ...newItems[projIndex], [arrayField]: newArr };
      return { ...prev, items: newItems };
    });
  };

  const addArrayItemToProject = (projIndex, arrayField, defaultVal) => {
    setData(prev => {
      const newItems = [...prev.items];
      newItems[projIndex] = { ...newItems[projIndex], [arrayField]: [...(newItems[projIndex][arrayField] || []), defaultVal] };
      return { ...prev, items: newItems };
    });
  };

  const removeArrayItemFromProject = (projIndex, arrayField, arrIndex) => {
    setData(prev => {
      const newItems = [...prev.items];
      const newArr = [...(newItems[projIndex][arrayField] || [])];
      newArr.splice(arrIndex, 1);
      newItems[projIndex] = { ...newItems[projIndex], [arrayField]: newArr };
      return { ...prev, items: newItems };
    });
  };

  const addProject = () => {
    setData(prev => ({
      ...prev,
      items: [
        {
          id: `new-project-${Date.now()}`,
          title: 'New Project',
          category: 'web',
          description: '',
          longDescription: '',
          image: '',
          tags: [],
          demoUrl: '',
          githubUrl: '',
          featured: false,
          features: [],
          projectImpact: { title: 'Project Impact', description: '' },
        },
        ...(prev.items || [])
      ]
    }));
    setOpenProjectIndex(0);
  };

  const removeProject = (index) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setData(prev => {
        const newItems = [...prev.items];
        newItems.splice(index, 1);
        return { ...prev, items: newItems };
      });
      setOpenProjectIndex(null);
    }
  };

  if (isLoading) return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold">Edit Projects Page</h1>
          <p className="text-muted-foreground">Manage portfolio items and showcase stats.</p>
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><label className="block text-sm font-bold mb-2">Heading Part 1</label><Input value={data.hero.headingPart1 || ''} onChange={(e) => updateSection('hero', 'headingPart1', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Heading Highlight</label><Input value={data.hero.headingHighlight || ''} onChange={(e) => updateSection('hero', 'headingHighlight', e.target.value)} /></div>
                    <div><label className="block text-sm font-bold mb-2">Heading Part 2</label><Input value={data.hero.headingPart2 || ''} onChange={(e) => updateSection('hero', 'headingPart2', e.target.value)} /></div>
                  </div>
                  <div><label className="block text-sm font-bold mb-2">Description</label><TextareaAutosize value={data.hero.description || ''} onChange={(e) => updateSection('hero', 'description', e.target.value)} /></div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-bold">Hero Stats</label>
                      <button onClick={() => addArrayItemToProject(-1, 'heroStats', {label:'', value:''})} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Stat</button>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      {data.hero.stats && data.hero.stats.map((s, i) => (
                        <div key={i} className="bg-gray-50 p-3 rounded-xl border border-gray-100 relative pr-10">
                           <button onClick={() => {
                             const newStats = [...data.hero.stats];
                             newStats.splice(i, 1);
                             updateSection('hero', 'stats', newStats);
                           }} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-50 rounded-md"><Trash2 className="w-4 h-4"/></button>
                           <Input placeholder="Label (e.g. Clients)" value={s.label || ''} onChange={(e) => {
                             const newStats = [...data.hero.stats];
                             newStats[i] = { ...newStats[i], label: e.target.value };
                             updateSection('hero', 'stats', newStats);
                           }} className="mb-2 text-xs" />
                           <Input placeholder="Value (e.g. 200+)" value={s.value || ''} onChange={(e) => {
                             const newStats = [...data.hero.stats];
                             newStats[i] = { ...newStats[i], value: e.target.value };
                             updateSection('hero', 'stats', newStats);
                           }} className="text-xs font-bold" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CATEGORIES */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <button onClick={() => setOpenSection(openSection === 'categories' ? null : 'categories')} className="w-full px-6 py-4 flex items-center justify-between bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <h2 className="text-lg font-bold">Project Categories</h2>
            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'categories' ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openSection === 'categories' && data.categories && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="p-6 border-t border-gray-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">Define categories for filtering projects.</p>
                    <button onClick={() => {
                        const newCats = [...(data.categories || []), { id: '', name: '' }];
                        setData(prev => ({ ...prev, categories: newCats }));
                    }} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Category</button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.categories.map((cat, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-xl border border-gray-100 relative pr-8">
                         <button onClick={() => {
                             const newCats = [...data.categories];
                             newCats.splice(i, 1);
                             setData(prev => ({ ...prev, categories: newCats }));
                         }} className="absolute top-2 right-2 p-1 text-red-500 hover:bg-red-50 rounded-md"><Trash2 className="w-4 h-4"/></button>
                         <Input placeholder="ID (all, web...)" value={cat.id || ''} onChange={(e) => {
                             const newCats = [...data.categories];
                             newCats[i] = { ...newCats[i], id: e.target.value };
                             setData(prev => ({ ...prev, categories: newCats }));
                         }} className="mb-2 text-xs" />
                         <Input placeholder="Name (Web Dev)" value={cat.name || ''} onChange={(e) => {
                             const newCats = [...data.categories];
                             newCats[i] = { ...newCats[i], name: e.target.value };
                             setData(prev => ({ ...prev, categories: newCats }));
                         }} className="text-xs font-bold" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PROJECTS LIST */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 flex items-center justify-between bg-gray-50/50 border-b border-gray-100">
            <h2 className="text-lg font-bold">Portfolio Projects</h2>
            <button onClick={addProject} className="text-sm flex items-center gap-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"><Plus className="w-4 h-4"/> Add Project</button>
          </div>
          <div className="p-6 space-y-4">
            {(!data.items || data.items.length === 0) && <p className="text-muted-foreground text-center py-8">No projects found. Create one above.</p>}
            
            {data.items && data.items.map((proj, i) => (
              <div key={proj.id || i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenProjectIndex(openProjectIndex === i ? null : i)}
                  className="w-full px-4 py-3 bg-gray-50/80 hover:bg-gray-100 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${openProjectIndex === i ? 'rotate-90' : ''}`} />
                    <span className="font-bold">{proj.title || 'Untitled Project'}</span>
                    <span className="text-xs text-muted-foreground bg-gray-200 px-2 py-1 rounded-full">{proj.category || 'Uncategorized'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-mono">{proj.id}</span>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openProjectIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white">
                      <div className="p-6 border-t border-gray-100 space-y-6">
                        <div className="flex justify-end mb-4">
                          <button onClick={() => removeProject(i)} className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium px-4 py-2 bg-red-50 hover:bg-red-100 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4" /> Delete Project
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div><label className="block text-sm font-bold mb-2">Project ID (URL slug)</label><Input value={proj.id || ''} onChange={(e) => updateProjectItem(i, 'id', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Title</label><Input value={proj.title || ''} onChange={(e) => updateProjectItem(i, 'title', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Category (web, mobile, ecommerce...)</label><Input value={proj.category || ''} onChange={(e) => updateProjectItem(i, 'category', e.target.value)} /></div>
                          <div>
                            <label className="block text-sm font-bold mb-2">Featured Project?</label>
                            <label className="flex items-center gap-2 mt-4 cursor-pointer">
                              <input type="checkbox" checked={!!proj.featured} onChange={(e) => updateProjectItem(i, 'featured', e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                              <span className="text-sm">Show as Featured</span>
                            </label>
                          </div>
                          <div><label className="block text-sm font-bold mb-2">Image URL</label><Input value={proj.image || ''} onChange={(e) => updateProjectItem(i, 'image', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Client Name</label><Input value={proj.client || ''} onChange={(e) => updateProjectItem(i, 'client', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">Demo URL</label><Input value={proj.demoUrl || ''} onChange={(e) => updateProjectItem(i, 'demoUrl', e.target.value)} /></div>
                          <div><label className="block text-sm font-bold mb-2">GitHub URL</label><Input value={proj.githubUrl || ''} onChange={(e) => updateProjectItem(i, 'githubUrl', e.target.value)} /></div>
                        </div>

                        <div><label className="block text-sm font-bold mb-2">Short Description (Cards)</label><TextareaAutosize value={proj.description || ''} onChange={(e) => updateProjectItem(i, 'description', e.target.value)} /></div>
                        <div><label className="block text-sm font-bold mb-2">Long Description (Detail Page)</label><TextareaAutosize value={proj.longDescription || ''} onChange={(e) => updateProjectItem(i, 'longDescription', e.target.value)} /></div>
                        
                        <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                          {/* Tags Array */}
                          <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center justify-between mb-2">
                              <label className="block text-sm font-bold">Tags (for Search & Cards)</label>
                              <button onClick={() => addArrayItemToProject(i, 'tags', '')} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Tag</button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {proj.tags && proj.tags.map((t, tIdx) => (
                                <div key={tIdx} className="flex gap-2">
                                  <Input value={t} onChange={(e) => updateArrayInProject(i, 'tags', tIdx, e.target.value)} className="w-32 py-2" />
                                  <button onClick={() => removeArrayItemFromProject(i, 'tags', tIdx)} className="p-2 text-red-500 hover:bg-red-50 rounded-xl"><Trash2 className="w-4 h-4"/></button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Key Features */}
                        <div className="pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between mb-3">
                            <label className="block text-sm font-bold">Key Features (Detail Page)</label>
                            <button onClick={() => addArrayItemToProject(i, 'features', '')} className="text-sm flex items-center gap-1 text-primary font-medium hover:underline"><Plus className="w-4 h-4"/> Add Feature</button>
                          </div>
                          <div className="space-y-2">
                            {(proj.features || []).map((feat, fIdx) => (
                              <div key={fIdx} className="flex gap-2 items-center">
                                <Input value={feat} onChange={(e) => updateArrayInProject(i, 'features', fIdx, e.target.value)} placeholder="e.g. Responsive design for all devices" />
                                <button onClick={() => removeArrayItemFromProject(i, 'features', fIdx)} className="p-2 text-red-500 hover:bg-red-50 rounded-xl shrink-0"><Trash2 className="w-4 h-4"/></button>
                              </div>
                            ))}
                            {(!proj.features || proj.features.length === 0) && (
                              <p className="text-sm text-muted-foreground italic">No features added yet. Click "Add Feature" to start.</p>
                            )}
                          </div>
                        </div>

                        {/* Project Impact */}
                        <div className="pt-4 border-t border-gray-100 p-4 bg-emerald-50/40 rounded-xl">
                          <label className="block text-sm font-bold mb-3">Project Impact Card (Detail Page)</label>
                          <div className="space-y-3">
                            <div>
                              <label className="block text-xs font-semibold text-muted-foreground mb-1">Card Title</label>
                              <Input
                                value={proj.projectImpact?.title || ''}
                                onChange={(e) => updateProjectItem(i, 'projectImpact', { ...proj.projectImpact, title: e.target.value })}
                                placeholder="e.g. Project Impact"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-semibold text-muted-foreground mb-1">Impact Description</label>
                              <TextareaAutosize
                                value={proj.projectImpact?.description || ''}
                                onChange={(e) => updateProjectItem(i, 'projectImpact', { ...proj.projectImpact, description: e.target.value })}
                                placeholder="Describe the impact this project had on users or the business..."
                                rows={3}
                              />
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
