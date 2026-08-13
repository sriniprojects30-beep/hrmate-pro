'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Users, Video } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { hapticFeedback } from '@/lib/utils/haptic';

// Mock schedule data for a single day
const SCHEDULE = [
  { id: '1', time: '09:00 AM', duration: 45, title: 'Initial Screen: Charlie Brown', type: 'interview', color: 'bg-primary/20 text-primary border-primary/30' },
  { id: '2', time: '10:00 AM', duration: 60, title: 'Technical Interview: Alice Smith', type: 'interview', color: 'bg-secondary/20 text-secondary border-secondary/30' },
  { id: '3', time: '11:30 AM', duration: 30, title: 'Sync with Hiring Manager', type: 'meeting', color: 'bg-accent/20 text-accent border-accent/30' },
  { id: '4', time: '02:00 PM', duration: 30, title: 'Culture Fit: Bob Jones', type: 'interview', color: 'bg-success/20 text-success border-success/30' },
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const HOURS = Array.from({ length: 9 }, (_, i) => i + 9); // 9 AM to 5 PM

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevDay = () => {
    hapticFeedback('tap');
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNextDay = () => {
    hapticFeedback('tap');
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    hapticFeedback('tap');
    setCurrentDate(new Date());
  };

  // Simple formatting for demo
  const formattedDate = currentDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric',
    year: 'numeric' 
  });

  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your daily schedule and interviews.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleToday} className="bg-background/50">
            Today
          </Button>
          <div className="flex items-center bg-background/50 rounded-xl border border-border p-1">
            <Button variant="ghost" size="icon" onClick={handlePrevDay} className="h-8 w-8 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium px-4 min-w-[140px] text-center">
              {formattedDate}
            </span>
            <Button variant="ghost" size="icon" onClick={handleNextDay} className="h-8 w-8 rounded-lg">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
        {/* Left Sidebar - Mini Calendar & Up Next */}
        <div className="space-y-6 lg:col-span-1 overflow-y-auto custom-scrollbar pr-2">
          <Card variant="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-primary" />
                Mini Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 text-center text-xs text-muted-foreground mb-2">
                {WEEKDAYS.map(day => <div key={day}>{day}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1 text-sm">
                {/* Dummy calendar days */}
                {Array.from({ length: 35 }).map((_, i) => {
                  const day = i - 2; // Offset for demo
                  const isToday = day === currentDate.getDate();
                  const isCurrentMonth = day > 0 && day <= 31;
                  return (
                    <div 
                      key={i} 
                      className={cn(
                        "aspect-square flex items-center justify-center rounded-md text-xs",
                        isToday ? "bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20" : 
                        isCurrentMonth ? "hover:bg-muted cursor-pointer" : "text-muted-foreground/30"
                      )}
                    >
                      {isCurrentMonth ? day : ''}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card variant="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" />
                Up Next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {SCHEDULE.map(event => (
                <div key={event.id} className="flex gap-3 relative before:absolute before:left-[11px] before:top-6 before:bottom-[-16px] before:w-[2px] before:bg-border last:before:hidden">
                  <div className="mt-1 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-xs font-semibold text-primary mb-0.5">{event.time}</p>
                    <div className="bg-muted/50 rounded-lg p-3 border border-border/50">
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{event.duration} min</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Main Schedule View */}
        <Card variant="glass" className="lg:col-span-3 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border flex items-center gap-4 bg-muted/20">
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Daily Schedule</h2>
              <p className="text-sm text-muted-foreground">4 events scheduled for today</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-background">
                <Video className="h-4 w-4" />
                Connect Zoom
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar relative p-4 bg-gradient-to-b from-transparent to-muted/10">
            <div className="absolute inset-0 z-0">
              {/* Hour lines */}
              {HOURS.map((hour, i) => (
                <div key={hour} className="absolute w-full border-t border-border/50 flex" style={{ top: `${i * 100}px` }}>
                  <div className="w-16 -mt-3 pl-2 pr-4 text-xs text-muted-foreground font-medium text-right bg-transparent">
                    {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                  </div>
                </div>
              ))}
              
              {/* Current time indicator (mocked at 10:30 AM) */}
              <div className="absolute w-full flex items-center z-20 pointer-events-none" style={{ top: '150px' }}>
                <div className="w-16 flex justify-end pr-2">
                  <span className="text-[10px] font-bold text-danger bg-background px-1 rounded">10:30</span>
                </div>
                <div className="flex-1 h-[2px] bg-danger relative">
                  <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-danger"></div>
                </div>
              </div>

              {/* Mock Events plotted on grid (100px per hour) */}
              <div className="absolute left-16 right-4 top-0 bottom-0 pointer-events-none">
                {/* 9:00 AM - 45 min */}
                <div className={cn("absolute left-4 right-4 rounded-xl border p-3 shadow-sm pointer-events-auto transition-transform hover:scale-[1.01] cursor-pointer backdrop-blur-md", SCHEDULE[0].color)} style={{ top: '0px', height: '75px' }}>
                  <p className="font-semibold text-sm">{SCHEDULE[0].title}</p>
                  <p className="text-xs opacity-80 mt-1">{SCHEDULE[0].time} • {SCHEDULE[0].duration} min</p>
                </div>
                
                {/* 10:00 AM - 60 min */}
                <div className={cn("absolute left-4 right-4 rounded-xl border p-3 shadow-sm pointer-events-auto transition-transform hover:scale-[1.01] cursor-pointer backdrop-blur-md", SCHEDULE[1].color)} style={{ top: '100px', height: '100px' }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm">{SCHEDULE[1].title}</p>
                      <p className="text-xs opacity-80 mt-1">{SCHEDULE[1].time} • {SCHEDULE[1].duration} min</p>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-background border-2 border-secondary flex items-center justify-center text-[10px] font-bold">AS</div>
                      <div className="w-6 h-6 rounded-full bg-background border-2 border-secondary flex items-center justify-center text-[10px] font-bold">JD</div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="mt-2 h-6 text-[10px] px-2 bg-background/50 border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors">
                    Join Video Call
                  </Button>
                </div>

                {/* 11:30 AM - 30 min */}
                <div className={cn("absolute left-4 right-4 rounded-xl border p-3 shadow-sm pointer-events-auto transition-transform hover:scale-[1.01] cursor-pointer backdrop-blur-md", SCHEDULE[2].color)} style={{ top: '250px', height: '50px' }}>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <p className="font-semibold text-sm">{SCHEDULE[2].title}</p>
                  </div>
                </div>

                {/* 2:00 PM - 30 min */}
                <div className={cn("absolute left-4 right-4 rounded-xl border p-3 shadow-sm pointer-events-auto transition-transform hover:scale-[1.01] cursor-pointer backdrop-blur-md", SCHEDULE[3].color)} style={{ top: '500px', height: '50px' }}>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{SCHEDULE[3].title}</p>
                    <p className="text-xs font-medium bg-background/50 px-2 py-0.5 rounded border border-success/30">Confirmed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Provide empty space at the bottom to scroll past the last hour */}
            <div style={{ height: `${HOURS.length * 100 + 100}px` }}></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
