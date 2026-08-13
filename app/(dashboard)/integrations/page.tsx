'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, Mail, MessageSquare, Calendar, Blocks } from 'lucide-react';

function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}
import { cn } from '@/lib/utils/cn';

const integrations = [
  { id: 1, name: 'Google Meet', category: 'Video Conferencing', description: 'Schedule and join video interviews directly from candidate profiles.', icon: Video, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { id: 2, name: 'Zoom', category: 'Video Conferencing', description: 'Automatically generate Zoom links for scheduled interviews.', icon: Video, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { id: 3, name: 'Microsoft Teams', category: 'Video Conferencing', description: 'Integrate your interviews with Microsoft Teams.', icon: Video, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
  { id: 4, name: 'Gmail', category: 'Email', description: 'Sync emails with candidates directly to their timeline.', icon: Mail, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20' },
  { id: 5, name: 'Outlook', category: 'Email', description: 'Connect your Outlook inbox to track candidate communications.', icon: Mail, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { id: 6, name: 'Slack', category: 'Communication', description: 'Get notifications for new applicants and interview feedback.', icon: MessageSquare, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
  { id: 7, name: 'LinkedIn', category: 'Sourcing', description: 'Import candidate profiles and sync InMail messages.', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { id: 8, name: 'Google Calendar', category: 'Scheduling', description: 'Two-way sync for interview scheduling and availability.', icon: Calendar, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
];

export default function IntegrationsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-7xl mx-auto space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Integrations</h1>
            <Blocks className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="text-muted-foreground mt-1 text-slate-500">Connect HRMATE PRO with your favorite tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <Card key={integration.id} className="glass-card flex flex-col hover:shadow-md transition-all border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70">
              <CardContent className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", integration.bg)}>
                    <Icon className={cn("w-6 h-6", integration.color)} />
                  </div>
                  <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700">
                    Not Connected
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">{integration.name}</h3>
                <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-2">{integration.category}</p>
                <p className="text-sm text-slate-500 mb-6 flex-1">{integration.description}</p>
                
                <Button variant="outline" className="w-full bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900">
                  Configure
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}
