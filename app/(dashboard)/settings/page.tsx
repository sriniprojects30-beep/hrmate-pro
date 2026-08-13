'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building, Users, GitMerge, Mail, Save, Plus, Trash2, CheckCircle2 } from 'lucide-react';

type Tab = 'organization' | 'team' | 'stages' | 'templates';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('organization');

  const tabs = [
    { id: 'organization', label: 'Organization Profile', icon: <Building className="w-4 h-4" /> },
    { id: 'team', label: 'Team Members', icon: <Users className="w-4 h-4" /> },
    { id: 'stages', label: 'Custom Hiring Stages', icon: <GitMerge className="w-4 h-4" /> },
    { id: 'templates', label: 'Email Templates', icon: <Mail className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="flex flex-col h-full space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your organization settings, team members, and preferences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:w-64 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <div className="flex-1 space-y-6 max-w-4xl">
          {activeTab === 'organization' && <OrganizationSettings />}
          {activeTab === 'team' && <TeamSettings />}
          {activeTab === 'stages' && <StagesSettings />}
          {activeTab === 'templates' && <TemplatesSettings />}
        </div>
      </div>
    </div>
  );
}

function OrganizationSettings() {
  return (
    <Card variant="glass" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader>
        <CardTitle>Organization Profile</CardTitle>
        <CardDescription>Update your company details and branding.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <Input defaultValue="Acme Corp" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Website</label>
              <Input defaultValue="https://acmecorp.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Description</label>
            <textarea
              className="flex w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 min-h-[100px]"
              defaultValue="We are a leading technology company focused on building innovative solutions."
            />
          </div>
          
          <div className="flex items-center justify-between p-4 border border-border rounded-xl bg-background/50">
            <div>
              <p className="font-medium">Company Logo</p>
              <p className="text-sm text-muted-foreground">Update your organization's logo</p>
            </div>
            <Button variant="outline" size="sm">Upload Logo</Button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamSettings() {
  return (
    <Card variant="glass" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage who has access to your workspace.</CardDescription>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Invite Member
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[
            { name: 'Alice Smith', email: 'alice@acmecorp.com', role: 'Admin' },
            { name: 'Bob Johnson', email: 'bob@acmecorp.com', role: 'Recruiter' },
            { name: 'Charlie Davis', email: 'charlie@acmecorp.com', role: 'Interviewer' },
          ].map((member, i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {member.role}
                </span>
                <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-danger">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function StagesSettings() {
  return (
    <Card variant="glass" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Hiring Stages</CardTitle>
          <CardDescription>Customize your recruitment pipeline stages.</CardDescription>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Stage
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {['Applied', 'Screening', 'Technical Interview', 'Culture Fit', 'Offer'].map((stage, i) => (
            <div key={i} className="flex items-center gap-4 p-3 border border-border rounded-xl bg-background/30">
              <div className="flex-1 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  {i + 1}
                </div>
                <Input defaultValue={stage} className="h-9" />
              </div>
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground hover:text-danger">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
          <div className="flex justify-end pt-4">
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              Save Pipeline
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TemplatesSettings() {
  return (
    <Card variant="glass" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <CardHeader>
        <CardTitle>Email Templates</CardTitle>
        <CardDescription>Manage automated email communications.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Template</label>
            <select className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20">
              <option>Interview Invitation</option>
              <option>Application Received</option>
              <option>Rejection Letter</option>
              <option>Offer Letter</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Subject Line</label>
            <Input defaultValue="Invitation to Interview with Acme Corp" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Body</label>
            <textarea
              className="flex w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground transition-all duration-200 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 min-h-[200px]"
              defaultValue="Hi {{candidate_name}},&#10;&#10;We were very impressed by your application for the {{job_title}} role at Acme Corp.&#10;&#10;We would like to invite you for a 30-minute introductory call.&#10;&#10;Please let us know your availability for next week.&#10;&#10;Best,&#10;The Acme Corp Team"
            />
            <p className="text-xs text-muted-foreground">
              Available variables: <code className="bg-muted px-1 py-0.5 rounded">{'{{candidate_name}}'}</code>, <code className="bg-muted px-1 py-0.5 rounded">{'{{job_title}}'}</code>, <code className="bg-muted px-1 py-0.5 rounded">{'{{company_name}}'}</code>
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline">Send Test Email</Button>
          <Button className="gap-2">
            <Save className="w-4 h-4" />
            Save Template
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
