'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Shield, Download, Calendar } from 'lucide-react';

const mockLogs = [
  { id: 1, user: 'John Doe', action: 'Created', resource: 'Job Posting', details: 'Created "Senior Frontend Engineer"', ip: '192.168.1.1', timestamp: '2 mins ago', date: '2023-10-25' },
  { id: 2, user: 'Jane Smith', action: 'Updated', resource: 'Candidate', details: 'Moved Alice to Interview stage', ip: '192.168.1.5', timestamp: '15 mins ago', date: '2023-10-25' },
  { id: 3, user: 'System', action: 'Automated', resource: 'Email', details: 'Sent interview reminder to Bob', ip: 'internal', timestamp: '1 hour ago', date: '2023-10-25' },
  { id: 4, user: 'Admin User', action: 'Deleted', resource: 'User Role', details: 'Removed "Temp Recruiter" role', ip: '10.0.0.4', timestamp: '3 hours ago', date: '2023-10-25' },
  { id: 5, user: 'John Doe', action: 'Exported', resource: 'Report', details: 'Exported Q3 Hiring Report to CSV', ip: '192.168.1.1', timestamp: '5 hours ago', date: '2023-10-25' },
  { id: 6, user: 'Jane Smith', action: 'Created', resource: 'Task', details: 'Task: Review resumes', ip: '192.168.1.5', timestamp: 'Yesterday', date: '2023-10-24' },
  { id: 7, user: 'Admin User', action: 'Updated', resource: 'Settings', details: 'Changed company timezone', ip: '10.0.0.4', timestamp: 'Yesterday', date: '2023-10-24' },
];

export default function AuditLogsPage() {
  const [search, setSearch] = useState('');
  const [userFilter, setUserFilter] = useState('All');
  const [eventFilter, setEventFilter] = useState('All');

  const filteredLogs = mockLogs.filter(log => {
    const matchesSearch = log.details.toLowerCase().includes(search.toLowerCase()) || log.resource.toLowerCase().includes(search.toLowerCase());
    const matchesUser = userFilter === 'All' || log.user === userFilter;
    const matchesEvent = eventFilter === 'All' || log.action === eventFilter;
    return matchesSearch && matchesUser && matchesEvent;
  });

  const users = ['All', ...Array.from(new Set(mockLogs.map(l => l.user)))];
  const events = ['All', ...Array.from(new Set(mockLogs.map(l => l.action)))];

  const getActionStyle = (action: string) => {
    switch(action) {
      case 'Created': return 'text-success bg-success/10 border-success/20';
      case 'Updated': return 'text-primary bg-primary/10 border-primary/20';
      case 'Deleted': return 'text-danger bg-danger/10 border-danger/20';
      case 'Exported': return 'text-warning bg-warning/10 border-warning/20';
      case 'Automated': return 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Audit Logs</h1>
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground mt-2">
            Detailed tracking of all system activity and security events.
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export Logs
        </Button>
      </div>

      <Card variant="glass" className="border-border/50">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Search</label>
              <Input 
                placeholder="Search resources or details..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={<Search className="w-4 h-4" />}
              />
            </div>
            
            <div className="w-full md:w-48">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">User</label>
              <select 
                className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                value={userFilter}
                onChange={(e) => setUserFilter(e.target.value)}
              >
                {users.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>

            <div className="w-full md:w-48">
              <label className="text-xs font-medium text-muted-foreground mb-1 block">Event Type</label>
              <select 
                className="flex h-10 w-full rounded-xl border border-input bg-surface px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                value={eventFilter}
                onChange={(e) => setEventFilter(e.target.value)}
              >
                {events.map(e => <option key={e} value={e}>{e}</option>)}
              </select>
            </div>

            <Button variant="outline" className="w-full md:w-auto h-10 gap-2">
              <Calendar className="w-4 h-4" />
              Date Range
            </Button>
          </div>
        </CardHeader>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-t border-border/50">
            <thead className="bg-muted/30">
              <tr>
                <th className="px-6 py-4 font-semibold text-muted-foreground">User</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Action</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Resource</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">Details</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground">IP Address</th>
                <th className="px-6 py-4 font-semibold text-muted-foreground text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{log.user}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${getActionStyle(log.action)}`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{log.resource}</td>
                  <td className="px-6 py-4 text-muted-foreground max-w-[200px] truncate" title={log.details}>{log.details}</td>
                  <td className="px-6 py-4">
                    <code className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">{log.ip}</code>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-right text-xs whitespace-nowrap">{log.timestamp}</td>
                </tr>
              ))}
              {filteredLogs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-muted-foreground">
                    <div className="flex flex-col items-center gap-2">
                      <Shield className="w-8 h-8 opacity-20" />
                      <p>No audit logs match your filters.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
