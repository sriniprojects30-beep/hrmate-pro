'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge, StatusBadge } from '@/components/ui/badge';
import { CheckSquare, Search, Plus, Calendar, User, Clock, MoreVertical, Filter } from 'lucide-react';

const TASKS = [
  { id: '1', title: 'Review Alice Smith technical assessment', assignee: 'Jane Doe', candidate: 'Alice Smith', priority: 'High', status: 'To Do', due: 'Today, 5:00 PM' },
  { id: '2', title: 'Schedule final interview with Bob Jones', assignee: 'Jane Doe', candidate: 'Bob Jones', priority: 'Urgent', status: 'In Progress', due: 'Tomorrow, 12:00 PM' },
  { id: '3', title: 'Send offer letter to Charlie Brown', assignee: 'Jane Doe', candidate: 'Charlie Brown', priority: 'High', status: 'To Do', due: 'Oct 26' },
  { id: '4', title: 'Prepare interview questions for Sr. Frontend role', assignee: 'Jane Doe', candidate: null, priority: 'Medium', status: 'Completed', due: 'Oct 20' },
  { id: '5', title: 'Follow up with passive candidates', assignee: 'Jane Doe', candidate: null, priority: 'Low', status: 'Overdue', due: 'Yesterday' },
];

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage your recruitment workflow and to-dos.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Task
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 bg-muted/20 p-4 rounded-xl border border-border">
        <div className="flex-1 max-w-md">
          <Input 
            placeholder="Search tasks..." 
            icon={<Search className="h-4 w-4" />}
            className="bg-background"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-background">
            <Filter className="h-4 w-4 text-muted-foreground" />
            Filter
          </Button>
          <div className="flex bg-background border border-border rounded-xl p-1">
            <Button variant="ghost" size="sm" className="rounded-lg bg-muted text-foreground">My Tasks</Button>
            <Button variant="ghost" size="sm" className="rounded-lg text-muted-foreground">Team Tasks</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Task Columns (Like Kanban, but simpler) */}
        {['To Do', 'In Progress', 'Completed'].map((statusColumn) => (
          <div key={statusColumn} className="md:col-span-1 space-y-4">
            <div className="flex justify-between items-center px-1">
              <h3 className="font-semibold text-sm">{statusColumn}</h3>
              <Badge variant="muted">{TASKS.filter(t => t.status === statusColumn).length}</Badge>
            </div>
            
            <div className="space-y-3">
              {TASKS.filter(t => t.status === statusColumn).map((task) => (
                <Card key={task.id} variant="glass" hover className="cursor-pointer group">
                  <CardContent className="p-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                          {task.status === 'Completed' ? (
                            <div className="w-4 h-4 rounded bg-success/20 flex items-center justify-center">
                              <div className="w-2 h-2 rounded bg-success" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded border-2 border-muted-foreground/30 hover:border-primary/50" />
                          )}
                        </div>
                        <p className={`text-sm font-medium leading-snug ${task.status === 'Completed' ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon-sm" className="opacity-0 group-hover:opacity-100 -mr-2 -mt-2">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      {task.priority === 'Urgent' && <Badge variant="danger" className="text-[10px] px-1.5 py-0">Urgent</Badge>}
                      {task.priority === 'High' && <Badge variant="warning" className="text-[10px] px-1.5 py-0">High</Badge>}
                      {task.priority === 'Medium' && <Badge variant="info" className="text-[10px] px-1.5 py-0">Med</Badge>}
                      
                      {task.candidate && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-md">
                          <User className="h-3 w-3" />
                          {task.candidate}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span className={task.due.includes('Yesterday') ? 'text-danger font-medium' : ''}>{task.due}</span>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30 text-[9px] font-bold text-secondary" title={task.assignee}>
                        {task.assignee.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
