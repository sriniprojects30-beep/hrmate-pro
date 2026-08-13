'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, PieChart, TrendingUp, Users, Clock, Award, Download, Calendar } from 'lucide-react';

const reportTypes = [
  { id: 1, title: 'Candidate Analytics', description: 'Source breakdown, demographics, and conversion rates.', icon: Users },
  { id: 2, title: 'Hiring Funnel', description: 'Track candidates through pipeline stages and identify bottlenecks.', icon: BarChart3 },
  { id: 3, title: 'Recruitment Performance', description: 'Time-to-hire, cost-per-hire, and overall efficiency metrics.', icon: TrendingUp },
  { id: 4, title: 'Interview Analytics', description: 'Interview scores, feedback turnaround time, and interviewer workload.', icon: Clock },
  { id: 5, title: 'Recruiter Performance', description: 'Individual and team metrics for sourcing and placement success.', icon: Award },
  { id: 6, title: 'Source Analytics', description: 'ROI analysis for job boards, referrals, and agencies.', icon: PieChart },
];

export default function ReportsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="p-6 max-w-7xl mx-auto space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1 text-slate-500">Insights and metrics for your hiring process.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
            <Calendar className="mr-2 h-4 w-4" /> Last 30 Days
          </Button>
          <Button className="glass-button bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportTypes.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.id} className="glass-card cursor-pointer hover:border-blue-500/50 hover:shadow-md transition-all bg-white/70 dark:bg-slate-900/70">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{report.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{report.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card bg-white/70 dark:bg-slate-900/70 shadow-sm border-slate-200/60 dark:border-slate-800/60">
          <CardHeader>
            <CardTitle className="text-lg">Hiring Funnel Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/20">
              <div className="text-center text-slate-400">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>Funnel Chart Placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card bg-white/70 dark:bg-slate-900/70 shadow-sm border-slate-200/60 dark:border-slate-800/60">
          <CardHeader>
            <CardTitle className="text-lg">Candidates by Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50/50 dark:bg-slate-800/20">
              <div className="text-center text-slate-400">
                <PieChart className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p>Pie Chart Placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
