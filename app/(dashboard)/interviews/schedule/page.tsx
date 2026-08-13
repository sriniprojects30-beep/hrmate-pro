'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Calendar as CalendarIcon, Clock, Video, Users } from 'lucide-react';
import Link from 'next/link';

export default function ScheduleInterviewPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center text-sm text-muted-foreground mb-2">
        <Link href="/interviews" className="hover:text-primary transition-colors">Interviews</Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium">Schedule</span>
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">Schedule Interview</h1>
        <p className="text-muted-foreground">Set up an interview with a candidate.</p>
      </div>

      <Card variant="glass">
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b border-border pb-2">
              <Users className="w-5 h-5 text-primary" /> Candidate & Role
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Candidate</label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                  <option value="">Select Candidate...</option>
                  <option value="1">Alice Smith</option>
                  <option value="2">Bob Johnson</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Role</label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                  <option value="">Select Job...</option>
                  <option value="1">Senior Frontend Developer</option>
                  <option value="2">Product Manager</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium">Interview Type</label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                  <option>Initial Screening</option>
                  <option>Technical Interview</option>
                  <option>Cultural Fit</option>
                  <option>Portfolio Review</option>
                  <option>Final Interview</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b border-border pb-2">
              <CalendarIcon className="w-5 h-5 text-primary" /> Date & Time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <Input type="time" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Duration</label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 border-b border-border pb-2">
              <Video className="w-5 h-5 text-primary" /> Meeting Details
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Platform</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="platform" value="google" defaultChecked className="text-primary focus:ring-primary" /> Google Meet
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="platform" value="zoom" className="text-primary focus:ring-primary" /> Zoom
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="platform" value="teams" className="text-primary focus:ring-primary" /> MS Teams
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="platform" value="manual" className="text-primary focus:ring-primary" /> Manual Link
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interviewers</label>
                <Input placeholder="Search team members..." />
                <div className="flex gap-2 mt-2">
                  <div className="bg-muted px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    Sarah J. <button className="hover:text-danger">&times;</button>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Notes for Interviewers (Internal)</label>
                <textarea 
                  className="flex min-h-[100px] w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  placeholder="Add any specific areas to focus on..."
                />
              </div>
            </div>
          </div>
        </CardContent>
        <div className="p-6 border-t border-border flex justify-end gap-2 bg-muted/20 rounded-b-xl">
          <Link href="/interviews">
            <Button variant="outline">Cancel</Button>
          </Link>
          <Button>Schedule Interview</Button>
        </div>
      </Card>
    </div>
  );
}
