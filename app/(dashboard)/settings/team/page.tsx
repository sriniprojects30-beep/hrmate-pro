'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, UserPlus, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

const teamMembers = [
  { id: 1, name: 'Admin User', email: 'admin@hrmate.pro', role: 'Owner', status: 'Active', avatar: 'AU' },
  { id: 2, name: 'Sarah Jenkins', email: 'sarah.j@hrmate.pro', role: 'Recruitment Manager', status: 'Active', avatar: 'SJ' },
  { id: 3, name: 'Michael Chen', email: 'm.chen@hrmate.pro', role: 'Recruiter', status: 'Active', avatar: 'MC' },
  { id: 4, name: 'Emily Davis', email: 'emily.d@hrmate.pro', role: 'Hiring Manager', status: 'Invited', avatar: 'ED' },
  { id: 5, name: 'David Wilson', email: 'david.w@hrmate.pro', role: 'Interviewer', status: 'Active', avatar: 'DW' },
];

export default function TeamSettingsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-5xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div className="flex items-center gap-4">
          <Link href="/settings">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Team Management</h1>
            <p className="text-sm text-slate-500">Manage users and roles in your workspace</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
          <UserPlus className="mr-2 h-4 w-4" /> Invite Member
        </Button>
      </div>

      <Card className="glass-card bg-white/70 dark:bg-slate-900/70 border-slate-200/60 dark:border-slate-800/60">
        <CardHeader>
          <CardTitle className="text-lg">Members (5)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Role</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {teamMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-xs font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {member.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-slate-100">{member.name}</div>
                        <div className="text-xs text-slate-500">{member.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <select className="bg-transparent border-none text-sm text-slate-700 dark:text-slate-300 focus:ring-0 cursor-pointer p-0">
                        <option value={member.role} selected>{member.role}</option>
                        <option value="Admin">Admin</option>
                        <option value="Recruitment Manager">Recruitment Manager</option>
                        <option value="Recruiter">Recruiter</option>
                        <option value="Hiring Manager">Hiring Manager</option>
                        <option value="Interviewer">Interviewer</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="outline" className={cn(
                        member.status === 'Active' ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
                      )}>
                        {member.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-700 dark:hover:text-slate-300">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
