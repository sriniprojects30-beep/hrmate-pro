import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { StatusBadge } from '@/components/ui/badge';
import { Search, Plus, Calendar, Clock, Video, User } from 'lucide-react';
import Link from 'next/link';

// Mock interviews data
const INTERVIEWS = [
  {
    id: '1',
    candidate: 'Alice Smith',
    role: 'Senior Frontend Engineer',
    type: 'Technical',
    date: 'Oct 24, 2026',
    time: '10:00 AM - 11:00 AM',
    interviewer: 'Jane Doe',
    status: 'Scheduled',
    link: 'https://meet.google.com/xxx-xxxx-xxx'
  },
  {
    id: '2',
    candidate: 'Bob Jones',
    role: 'Product Manager',
    type: 'Culture Fit',
    date: 'Oct 24, 2026',
    time: '02:00 PM - 02:30 PM',
    interviewer: 'John Smith',
    status: 'Completed',
    link: 'https://meet.google.com/yyy-yyyy-yyy'
  },
  {
    id: '3',
    candidate: 'Charlie Brown',
    role: 'Backend Developer',
    type: 'Initial Screen',
    date: 'Oct 25, 2026',
    time: '09:00 AM - 09:45 AM',
    interviewer: 'Sarah Connor',
    status: 'Cancelled',
    link: 'https://meet.google.com/zzz-zzzz-zzz'
  }
];

export default function InterviewsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Interviews</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your upcoming and past interviews.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Schedule Interview
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="w-full sm:max-w-sm">
          <Input 
            placeholder="Search interviews..." 
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-background/50">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            Date Range
          </Button>
          <Button variant="outline" className="bg-background/50">
            Status
          </Button>
        </div>
      </div>

      {/* Interviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INTERVIEWS.map((interview) => (
          <Card key={interview.id} variant="glass" hover className="flex flex-col">
            <CardContent className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{interview.candidate}</h3>
                  <p className="text-sm text-muted-foreground">{interview.role}</p>
                </div>
                <StatusBadge status={interview.status} />
              </div>
              
              <div className="space-y-3 flex-1 mb-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{interview.date}</p>
                    <p className="text-xs text-muted-foreground">{interview.type}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-secondary" />
                  </div>
                  <p className="font-medium">{interview.time}</p>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <User className="h-4 w-4 text-accent" />
                  </div>
                  <p className="font-medium">{interview.interviewer}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary gap-2 p-0 h-auto font-medium">
                  <Link href={interview.link} target="_blank">
                    <Video className="h-4 w-4" />
                    Join Call
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
