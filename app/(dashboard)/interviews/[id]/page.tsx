'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StatusBadge, Badge } from '@/components/ui/badge';
import { ChevronRight, Calendar, Clock, Video, Users, CheckCircle2, XCircle, RefreshCw, Star, FileText } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MOCK_INTERVIEW = {
  id: 1,
  candidate: 'Alice Smith',
  job: 'Senior Frontend Developer',
  type: 'Technical Interview',
  date: 'Oct 30, 2023',
  time: '10:00 AM - 11:00 AM (EST)',
  status: 'Scheduled',
  link: 'https://meet.google.com/abc-defg-hij',
  interviewers: [
    { name: 'Sarah J.', role: 'Engineering Manager', status: 'Accepted' },
    { name: 'Mike T.', role: 'Senior Developer', status: 'Pending' }
  ],
  notes: 'Focus on React state management and performance optimization techniques.'
};

export default function InterviewDetailsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center text-sm text-muted-foreground mb-2">
        <Link href="/interviews" className="hover:text-primary transition-colors">Interviews</Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium">{MOCK_INTERVIEW.candidate}</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card border border-border p-6 rounded-xl shadow-sm">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold tracking-tight">{MOCK_INTERVIEW.candidate}</h1>
            <StatusBadge status={MOCK_INTERVIEW.status} />
          </div>
          <p className="text-muted-foreground">{MOCK_INTERVIEW.job} • {MOCK_INTERVIEW.type}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" /> Reschedule
          </Button>
          <Button variant="outline" className="text-danger hover:bg-danger/10 hover:text-danger border-danger/20">
            Cancel
          </Button>
          <Button variant="success">
            <CheckCircle2 className="w-4 h-4 mr-2" /> Complete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card variant="glass">
            <CardHeader>
              <CardTitle>Meeting Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Date</p>
                    <p className="font-semibold">{MOCK_INTERVIEW.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Time</p>
                    <p className="font-semibold">{MOCK_INTERVIEW.time}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-xl border border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3 w-full overflow-hidden">
                  <Video className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <a href={MOCK_INTERVIEW.link} className="text-primary hover:underline truncate text-sm">
                    {MOCK_INTERVIEW.link}
                  </a>
                </div>
                <Button className="w-full sm:w-auto flex-shrink-0">Join Meeting</Button>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Internal Notes
                </h4>
                <p className="text-sm p-4 bg-surface rounded-xl border border-border">
                  {MOCK_INTERVIEW.notes}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader>
              <CardTitle>Interview Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground space-y-4">
                <Star className="w-12 h-12 text-muted mx-auto" />
                <p>Feedback will be available after the interview is completed.</p>
                <Button variant="outline">Submit Feedback</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card variant="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                Interviewers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {MOCK_INTERVIEW.interviewers.map((interviewer, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-border bg-surface">
                  <div>
                    <p className="font-medium text-sm">{interviewer.name}</p>
                    <p className="text-xs text-muted-foreground">{interviewer.role}</p>
                  </div>
                  {interviewer.status === 'Accepted' ? (
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  ) : (
                    <Clock className="w-4 h-4 text-warning" />
                  )}
                </div>
              ))}
              <Button variant="ghost" className="w-full text-sm mt-2 border border-dashed border-border">
                + Add Interviewer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
