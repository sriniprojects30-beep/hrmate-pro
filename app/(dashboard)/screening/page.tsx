'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge, Badge } from '@/components/ui/badge';
import { Filter, Search, Sparkles, CheckCircle2, Clock, XCircle, BrainCircuit } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

const MOCK_SCREENINGS = [
  { id: 1, name: 'Alice Smith', job: 'Senior Frontend Developer', exp: '6 years', score: 92, status: 'Completed', recruiter: 'Sarah J.' },
  { id: 2, name: 'Bob Johnson', job: 'Product Manager', exp: '4 years', score: 75, status: 'In Progress', recruiter: 'Mike T.' },
  { id: 3, name: 'Charlie Davis', job: 'UX Designer', exp: '3 years', score: 88, status: 'Completed', recruiter: 'Sarah J.' },
  { id: 4, name: 'Diana Prince', job: 'DevOps Engineer', exp: '8 years', score: 0, status: 'Pending', recruiter: 'Alex W.' },
  { id: 5, name: 'Ethan Hunt', job: 'Marketing Director', exp: '10 years', score: 65, status: 'Completed', recruiter: 'Mike T.' },
  { id: 6, name: 'Fiona Gallagher', job: 'Senior Frontend Developer', exp: '5 years', score: 0, status: 'Pending', recruiter: 'Sarah J.' },
  { id: 7, name: 'George Costanza', job: 'Sales Representative', exp: '2 years', score: 45, status: 'Completed', recruiter: 'Alex W.' },
  { id: 8, name: 'Hannah Abbott', job: 'Data Scientist', exp: '4 years', score: 82, status: 'In Progress', recruiter: 'Mike T.' },
];

export default function ScreeningPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Screening Dashboard</h1>
          <p className="text-muted-foreground">Automated candidate evaluation and scoring.</p>
        </div>
        <Button>
          <Sparkles className="w-4 h-4 mr-2" />
          Run Batch Screening
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card variant="glass">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-muted rounded-xl text-muted-foreground">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending</p>
              <h3 className="text-2xl font-bold">12</h3>
            </div>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-info/10 text-info rounded-xl">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">In Progress</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-success/10 text-success rounded-xl">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Completed</p>
              <h3 className="text-2xl font-bold">148</h3>
            </div>
          </CardContent>
        </Card>
        <Card variant="glass">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Avg. Score</p>
              <h3 className="text-2xl font-bold">76%</h3>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card variant="glass">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Screening Queue</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search..." className="w-[200px]" icon={<Search className="w-4 h-4" />} />
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-y border-border">
                <tr>
                  <th className="p-4 font-medium">Candidate</th>
                  <th className="p-4 font-medium">Job Role</th>
                  <th className="p-4 font-medium">Experience</th>
                  <th className="p-4 font-medium">AI Score</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Recruiter</th>
                  <th className="p-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {MOCK_SCREENINGS.map((item, index) => (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-muted/30"
                  >
                    <td className="p-4 font-medium">{item.name}</td>
                    <td className="p-4 text-muted-foreground">{item.job}</td>
                    <td className="p-4 text-muted-foreground">{item.exp}</td>
                    <td className="p-4">
                      {item.score > 0 ? (
                        <div className="flex items-center gap-2">
                          <span className={`font-semibold ${item.score >= 85 ? 'text-success' : item.score >= 70 ? 'text-warning' : 'text-danger'}`}>
                            {item.score}%
                          </span>
                          <Badge variant="outline" className="text-[10px] py-0 gap-1 border-primary/20 text-primary">
                            <Sparkles className="w-3 h-3" /> AI
                          </Badge>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <StatusBadge status={item.status === 'Completed' ? 'shortlisted' : item.status === 'In Progress' ? 'screening' : 'to do'} />
                    </td>
                    <td className="p-4 text-muted-foreground">{item.recruiter}</td>
                    <td className="p-4 text-right">
                      {item.status === 'Pending' ? (
                        <Button variant="ghost" size="sm" className="text-primary">Start</Button>
                      ) : item.status === 'In Progress' ? (
                        <Button variant="ghost" size="sm">View</Button>
                      ) : (
                        <Button variant="ghost" size="sm">Details</Button>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
