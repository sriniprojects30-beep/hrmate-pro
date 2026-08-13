"use client";

import React from 'react';
import { Briefcase, Calendar, MoreHorizontal, Mail, MessageSquare } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const APPLICATION_STATUSES = [
  { id: 'applied', label: 'Applied', color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
  { id: 'screening', label: 'Screening', color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' },
  { id: 'interview', label: 'Interview', color: 'bg-purple-500/10 text-purple-500 border-purple-500/20' },
  { id: 'offer', label: 'Offer', color: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
  { id: 'hired', label: 'Hired', color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' },
  { id: 'rejected', label: 'Rejected', color: 'bg-rose-500/10 text-rose-500 border-rose-500/20' },
];

const MOCK_APPLICATIONS = [
  { id: '1', candidateName: 'Alice Smith', jobTitle: 'Frontend Developer', status: 'applied', date: '2 days ago', avatar: 'AS' },
  { id: '2', candidateName: 'Bob Johnson', jobTitle: 'Product Manager', status: 'screening', date: '1 day ago', avatar: 'BJ' },
  { id: '3', candidateName: 'Charlie Davis', jobTitle: 'UI/UX Designer', status: 'interview', date: '3 days ago', avatar: 'CD' },
  { id: '4', candidateName: 'Diana Evans', jobTitle: 'Backend Engineer', status: 'offer', date: '5 days ago', avatar: 'DE' },
  { id: '5', candidateName: 'Ethan Ford', jobTitle: 'DevOps Engineer', status: 'applied', date: 'Just now', avatar: 'EF' },
  { id: '6', candidateName: 'Fiona Grant', jobTitle: 'Frontend Developer', status: 'interview', date: '4 days ago', avatar: 'FG' },
];

export default function KanbanBoard() {
  return (
    <div className="h-full flex overflow-x-auto pb-4 gap-6 scrollbar-hide">
      {APPLICATION_STATUSES.map((status) => {
        const columnApplications = MOCK_APPLICATIONS.filter(app => app.status === status.id);
        
        return (
          <div key={status.id} className="flex flex-col flex-shrink-0 w-80">
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-sm text-foreground">{status.label}</h3>
                <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium border", status.color)}>
                  {columnApplications.length}
                </span>
              </div>
              <button className="p-1 hover:bg-muted rounded-md text-muted-foreground transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Column Body - Glass Card container */}
            <div className="flex-1 flex flex-col gap-3 p-3 rounded-xl bg-background/40 backdrop-blur-md border border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] overflow-y-auto">
              {columnApplications.map((app) => (
                <div 
                  key={app.id}
                  className="group relative flex flex-col gap-3 p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all cursor-grab hover:border-primary/30"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-medium text-sm border border-primary/20">
                        {app.avatar}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-card-foreground">{app.candidateName}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                          <Briefcase className="w-3 h-3" />
                          <span>{app.jobTitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{app.date}</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="text-muted-foreground hover:text-primary transition-colors">
                         <Mail className="w-3.5 h-3.5" />
                       </button>
                       <button className="text-muted-foreground hover:text-primary transition-colors">
                         <MessageSquare className="w-3.5 h-3.5" />
                       </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {columnApplications.length === 0 && (
                <div className="h-24 flex items-center justify-center border-2 border-dashed border-border/50 rounded-lg">
                  <span className="text-xs text-muted-foreground">No applications</span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
