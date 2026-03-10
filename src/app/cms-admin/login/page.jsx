'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem('cms_token', data.token);
        router.push('/cms-admin');
      } else {
        setError(data.error || 'Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20"
          >
            <ShieldCheck className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold mb-2">Madeny Digital <span className="text-gradient">CMS</span></h1>
          <p className="text-muted-foreground">Sign in to manage your website content</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm font-medium"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all "
                  placeholder="admin@example.com"
                  required
                />
                <Mail className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all "
                  placeholder="••••••••"
                  required
                />
                <Lock className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <Button 
              type="submit"
              className="w-full py-3"
              disabled={isLoading}
              icon={!isLoading && <ArrowRight className="w-5 h-5" />}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
