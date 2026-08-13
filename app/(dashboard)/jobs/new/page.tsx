'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Save, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewJobPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center text-sm text-muted-foreground mb-2">
        <Link href="/jobs" className="hover:text-primary transition-colors">Jobs</Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium">New Job</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Create New Job</h1>
          <p className="text-muted-foreground">Fill in the details to publish a new job opening.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Save Draft
          </Button>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <Card variant="glass">
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Job Title</label>
                <Input placeholder="e.g. Senior Frontend Developer" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Department</label>
                <Input placeholder="e.g. Engineering" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="e.g. Remote, New York" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Employment Type</label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Openings</label>
                <Input type="number" min="1" defaultValue="1" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Min Experience (Years)</label>
                <Input type="number" min="0" placeholder="0" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Max Experience (Years)</label>
                <Input type="number" min="0" placeholder="5" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Min Salary</label>
                <Input type="number" placeholder="50000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Max Salary</label>
                <Input type="number" placeholder="80000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Currency</label>
                <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant="glass">
          <CardHeader>
            <CardTitle>Description & Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Job Description</label>
              <textarea 
                className="flex min-h-[120px] w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="Describe the role and responsibilities..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Requirements</label>
              <textarea 
                className="flex min-h-[120px] w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="List the required skills and qualifications..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Benefits</label>
              <textarea 
                className="flex min-h-[120px] w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                placeholder="What perks do you offer?"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
