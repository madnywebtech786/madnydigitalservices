'use client';

import { motion } from 'framer-motion';
import { Home, Info, Phone, FolderOpen, Wrench, Search, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

const quickLinks = [
  { name: 'Edit Home Page', href: '/cms-admin/pages/home', icon: Home, color: 'from-blue-500 to-cyan-500' },
  { name: 'Edit About Page', href: '/cms-admin/pages/about', icon: Info, color: 'from-purple-500 to-pink-500' },
  { name: 'Manage Projects', href: '/cms-admin/pages/projects', icon: FolderOpen, color: 'from-orange-500 to-red-500' },
  { name: 'Manage Services', href: '/cms-admin/pages/services', icon: Wrench, color: 'from-green-500 to-emerald-500' },
  { name: 'Update Contact Info', href: '/cms-admin/pages/contact', icon: Phone, color: 'from-yellow-400 to-orange-500' },
  { name: 'SEO Settings', href: '/cms-admin/pages/seo', icon: Search, color: 'from-indigo-500 to-purple-500' },
  { name: 'Global Content', href: '/cms-admin/pages/global', icon: Globe, color: 'from-primary to-secondary' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back! 👋</h1>
        <p className="text-muted-foreground">Manage your website content, update services, and control your digital presence.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={link.href}>
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{link.name}</h3>
                
                <div className="mt-auto pt-4 flex items-center text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors">
                  Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white shadow-xl shadow-primary/20"
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Need Help Editing?</h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Select any page from the sidebar to start editing its content. All changes are saved directly to the database and will instantly appear on your live website. Please be careful when changing crucial SEO metadata.
          </p>
          <Button variant="outline" className="bg-white text-primary border-transparent hover:bg-white/90">
            View Live Website
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
