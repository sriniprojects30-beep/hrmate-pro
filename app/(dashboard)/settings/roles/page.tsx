'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Check, Info } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

const roles = [
  { id: 'owner', name: 'Owner', users: 1, description: 'Full access to all settings and data.' },
  { id: 'admin', name: 'Admin', users: 0, description: 'Can manage users, roles, and all recruitment data.' },
  { id: 'recruitment_manager', name: 'Recruitment Manager', users: 1, description: 'Can manage all jobs, candidates, and team members.' },
  { id: 'recruiter', name: 'Recruiter', users: 2, description: 'Can manage their assigned jobs and candidates.' },
  { id: 'hiring_manager', name: 'Hiring Manager', users: 5, description: 'Can view and review candidates for their departments.' },
  { id: 'interviewer', name: 'Interviewer', users: 12, description: 'Can only submit feedback for assigned interviews.' },
];

const resources = ['Jobs', 'Candidates', 'Interviews', 'Offers', 'Reports', 'Settings'];
const actions = ['Create', 'Read', 'Update', 'Delete', 'Export'];

export default function RolesSettingsPage() {
  const [activeRole, setActiveRole] = useState('recruiter');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-6xl mx-auto space-y-6"
    >
      <div className="flex items-center gap-4 mb-2">
        <Link href="/settings">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Roles & Permissions</h1>
          <p className="text-sm text-slate-500">Configure access controls for your team</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-2">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={cn(
                "w-full text-left p-3 rounded-lg transition-all flex flex-col gap-1 border",
                activeRole === role.id 
                  ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800" 
                  : "bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-blue-300"
              )}
            >
              <div className="flex justify-between items-center w-full">
                <span className="font-medium text-sm text-slate-900 dark:text-slate-100">{role.name}</span>
                <Badge variant="outline" className="text-[10px] bg-slate-100 dark:bg-slate-800">{role.users}</Badge>
              </div>
            </button>
          ))}
          <Button variant="outline" className="w-full mt-4 border-dashed">
            + Create Custom Role
          </Button>
        </div>

        <div className="md:col-span-3">
          <Card className="glass-card bg-white/70 dark:bg-slate-900/70 border-slate-200/60 dark:border-slate-800/60 h-full">
            <CardHeader className="flex flex-row items-start justify-between pb-4">
              <div>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-500" />
                  {roles.find(r => r.id === activeRole)?.name} Permissions
                </CardTitle>
                <p className="text-sm text-slate-500 mt-1">
                  {roles.find(r => r.id === activeRole)?.description}
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md" size="sm">
                Save Changes
              </Button>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-3 rounded-lg flex gap-3 mb-6">
                <Info className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  Changing these permissions will affect {roles.find(r => r.id === activeRole)?.users} users currently assigned to this role.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-slate-50/50 dark:bg-slate-800/50">
                    <tr>
                      <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-medium text-slate-600">Resource</th>
                      {actions.map(action => (
                        <th key={action} className="p-3 border-b border-slate-200 dark:border-slate-700 font-medium text-slate-600 text-center">{action}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {resources.map(resource => (
                      <tr key={resource} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30">
                        <td className="p-3 border-b border-slate-100 dark:border-slate-800 font-medium text-slate-700 dark:text-slate-300">{resource}</td>
                        {actions.map(action => {
                          // Simple mock logic for checked state based on activeRole
                          const isChecked = 
                            activeRole === 'owner' || 
                            activeRole === 'admin' ||
                            (activeRole === 'recruitment_manager' && resource !== 'Settings') ||
                            (activeRole === 'recruiter' && ['Create', 'Read', 'Update'].includes(action) && resource !== 'Settings') ||
                            (activeRole === 'hiring_manager' && action === 'Read' && ['Jobs', 'Candidates', 'Interviews'].includes(resource)) ||
                            (activeRole === 'interviewer' && action === 'Read' && resource === 'Interviews');
                            
                          const isDisabled = activeRole === 'owner' || activeRole === 'admin';

                          return (
                            <td key={`${resource}-${action}`} className="p-3 border-b border-slate-100 dark:border-slate-800 text-center">
                              <label className="inline-flex items-center cursor-pointer">
                                <div className={cn(
                                  "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                  isChecked ? "bg-blue-600 border-blue-600" : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600",
                                  isDisabled ? "opacity-50 cursor-not-allowed" : "hover:border-blue-400"
                                )}>
                                  {isChecked && <Check className="w-3 h-3 text-white" />}
                                </div>
                                <input type="checkbox" className="hidden" defaultChecked={isChecked} disabled={isDisabled} />
                              </label>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
