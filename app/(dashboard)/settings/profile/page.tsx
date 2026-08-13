'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { User, Upload, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfileSettingsPage() {
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
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Profile Settings</h1>
          <p className="text-sm text-slate-500">Update your personal information</p>
        </div>
      </div>

      <Card className="glass-card bg-white/70 dark:bg-slate-900/70 border-slate-200/60 dark:border-slate-800/60">
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-950 shadow-sm">
                <User className="w-10 h-10 text-slate-400" />
              </div>
              <button className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Upload className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex-1 w-full space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                  <Input defaultValue="Admin" className="bg-white/50 dark:bg-slate-950/50" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                  <Input defaultValue="User" className="bg-white/50 dark:bg-slate-950/50" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address (Read-only)</label>
                <Input defaultValue="admin@hrmate.pro" readOnly className="bg-slate-50 dark:bg-slate-900 text-slate-500" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                <Input defaultValue="+1 (555) 123-4567" className="bg-white/50 dark:bg-slate-950/50" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Timezone</label>
                <select className="flex h-10 w-full rounded-md border border-slate-200 bg-white/50 dark:bg-slate-950/50 px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300">
                  <option value="pst">Pacific Time (US & Canada)</option>
                  <option value="est">Eastern Time (US & Canada)</option>
                  <option value="utc">UTC</option>
                  <option value="ist">India Standard Time</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
