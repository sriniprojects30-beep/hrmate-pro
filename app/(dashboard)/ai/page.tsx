'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Sparkles, FileText, Users, Briefcase, HelpCircle, MessageSquare, Mail, Bot, Send } from 'lucide-react';

const aiTools = [
  { id: 1, title: 'Resume Analysis', description: 'Extract skills, experience, and score candidate fit automatically.', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  { id: 2, title: 'Candidate Matching', description: 'Find the best candidates from your pool for a specific job.', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
  { id: 3, title: 'Job Description Generator', description: 'Create engaging JDs based on role, seniority, and requirements.', icon: Briefcase, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  { id: 4, title: 'Interview Question Generator', description: 'Generate tailored technical and behavioral questions.', icon: HelpCircle, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' },
  { id: 5, title: 'Interview Summary', description: 'Transcribe and summarize interview recordings instantly.', icon: MessageSquare, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30' },
  { id: 6, title: 'Email Draft Generator', description: 'Draft personalized outreach, offer, or rejection emails.', icon: Mail, color: 'text-cyan-500', bg: 'bg-cyan-100 dark:bg-cyan-900/30' },
];

export default function AIPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-7xl mx-auto space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">AI Assistant</h1>
            <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 gap-1 flex items-center">
              <Sparkles className="w-3 h-3" /> Beta
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1 text-slate-500">Supercharge your recruitment workflow with generative AI.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Card key={tool.id} className="glass-card group hover:border-indigo-500/50 hover:shadow-md transition-all bg-white/70 dark:bg-slate-900/70">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${tool.bg}`}>
                  <Icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{tool.title}</h3>
                <p className="text-sm text-slate-500 mb-4 min-h-[40px]">{tool.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 group-hover:text-indigo-600 transition-colors">
                  Try it <Sparkles className="w-3 h-3 ml-2 opacity-50" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="glass-card border-indigo-100 dark:border-indigo-900/50 shadow-lg bg-white/80 dark:bg-slate-900/80 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
        <CardHeader className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-indigo-600" /> Recruiter Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 flex flex-col h-[400px]">
          <div className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-700 dark:text-slate-300">
                <p>Hi there! I'm your AI Recruiter Assistant. I can help you draft emails, screen resumes, or write job descriptions. What would you like to do today?</p>
              </div>
            </div>
            
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0 text-xs font-medium">
                Me
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-tr-sm p-4 text-sm text-slate-700 dark:text-slate-300">
                <p>Can you suggest 3 technical interview questions for a mid-level React developer?</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-700 dark:text-slate-300">
                <p className="mb-2">Certainly! Here are 3 technical questions for a mid-level React developer:</p>
                <ol className="list-decimal pl-4 space-y-2">
                  <li><strong>Hooks under the hood:</strong> Can you explain how `useEffect` determines when to re-run, and how you would prevent an infinite rendering loop caused by a dependency?</li>
                  <li><strong>State Management:</strong> When would you choose to use React Context over passing props, and what are the performance implications of using Context for frequently updating data?</li>
                  <li><strong>Component Lifecycle:</strong> How do you handle fetching data in a component, and how do you ensure the component doesn't attempt to update state if it unmounts before the request completes?</li>
                </ol>
                <div className="mt-3 flex">
                  <Badge variant="outline" className="text-[10px] bg-white dark:bg-slate-900 text-indigo-500 border-indigo-200">
                    <Sparkles className="w-3 h-3 mr-1" /> AI Generated
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Input 
              placeholder="Ask the AI assistant..." 
              className="pr-12 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-700 focus-visible:ring-indigo-500 py-6"
            />
            <Button size="icon" className="absolute right-1.5 top-1.5 bg-indigo-600 hover:bg-indigo-700 h-9 w-9">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
