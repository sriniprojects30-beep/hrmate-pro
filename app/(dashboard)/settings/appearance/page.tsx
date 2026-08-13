'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Monitor, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export default function AppearanceSettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [compactMode, setCompactMode] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-3xl mx-auto space-y-6"
    >
      <div className="flex items-center gap-4 mb-2">
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Appearance</h1>
          <p className="text-sm text-slate-500">Customize how HRMATE PRO looks</p>
        </div>
      </div>

      <Card className="glass-card bg-white/70 dark:bg-slate-900/70 border-slate-200/60 dark:border-slate-800/60">
        <CardHeader>
          <CardTitle className="text-lg">Theme Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Interface Theme</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button 
                onClick={() => setTheme('light')}
                className={cn("flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all", theme === 'light' ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700")}
              >
                <div className="w-full h-24 bg-slate-100 rounded-md border border-slate-200 p-2 flex flex-col gap-2">
                  <div className="h-4 w-full bg-white rounded shadow-sm"></div>
                  <div className="flex gap-2 h-full">
                    <div className="w-1/3 bg-white rounded shadow-sm h-full"></div>
                    <div className="w-2/3 bg-white rounded shadow-sm h-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-medium text-sm text-slate-700 dark:text-slate-300">
                  <Sun className="w-4 h-4" /> Light
                </div>
              </button>
              
              <button 
                onClick={() => setTheme('dark')}
                className={cn("flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all", theme === 'dark' ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700")}
              >
                <div className="w-full h-24 bg-slate-900 rounded-md border border-slate-800 p-2 flex flex-col gap-2">
                  <div className="h-4 w-full bg-slate-800 rounded shadow-sm"></div>
                  <div className="flex gap-2 h-full">
                    <div className="w-1/3 bg-slate-800 rounded shadow-sm h-full"></div>
                    <div className="w-2/3 bg-slate-800 rounded shadow-sm h-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-medium text-sm text-slate-700 dark:text-slate-300">
                  <Moon className="w-4 h-4" /> Dark
                </div>
              </button>
              
              <button 
                onClick={() => setTheme('system')}
                className={cn("flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all", theme === 'system' ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700")}
              >
                <div className="w-full h-24 bg-gradient-to-br from-slate-100 to-slate-900 rounded-md border border-slate-300 dark:border-slate-700 p-2 flex flex-col gap-2">
                  <div className="h-4 w-full bg-white/50 rounded shadow-sm"></div>
                  <div className="flex gap-2 h-full">
                    <div className="w-1/3 bg-white/50 rounded shadow-sm h-full"></div>
                    <div className="w-2/3 bg-white/50 rounded shadow-sm h-full"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2 font-medium text-sm text-slate-700 dark:text-slate-300">
                  <Monitor className="w-4 h-4" /> System
                </div>
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-slate-900 dark:text-white">Compact Mode</h4>
                <p className="text-xs text-slate-500">Reduce spacing and padding to fit more content on screen.</p>
              </div>
              <button 
                onClick={() => setCompactMode(!compactMode)}
                className={cn("w-11 h-6 rounded-full transition-colors relative", compactMode ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700")}
              >
                <span className={cn("absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform", compactMode ? "translate-x-5" : "translate-x-0")}></span>
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Font Size</label>
            <select className="flex h-10 w-full sm:w-64 rounded-md border border-slate-200 bg-white/50 dark:bg-slate-950/50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300">
              <option value="sm">Small (12px)</option>
              <option value="base" selected>Default (14px)</option>
              <option value="lg">Large (16px)</option>
            </select>
          </div>
          
          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              Save Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
