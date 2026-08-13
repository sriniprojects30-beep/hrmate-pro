import { 
  Users, 
  UserPlus, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  FileText, 
  Briefcase, 
  Award 
} from 'lucide-react';

export default function DashboardPage() {
  const metrics = [
    { label: 'Total Candidates', value: '2,845', change: '+12.5%', icon: Users, positive: true },
    { label: 'New Candidates', value: '142', change: '+5.2%', icon: UserPlus, positive: true },
    { label: 'Screening', value: '86', change: '-2.1%', icon: Filter, positive: false },
    { label: 'Interviews', value: '24', change: '+18.4%', icon: Calendar, positive: true },
    { label: 'Shortlisted', value: '18', change: '+4.3%', icon: CheckCircle2, positive: true },
    { label: 'Offers', value: '12', change: '+20.0%', icon: FileText, positive: true },
    { label: 'Hired', value: '8', change: '+33.3%', icon: Award, positive: true },
    { label: 'Open Jobs', value: '15', change: '-6.5%', icon: Briefcase, positive: false },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome back</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your recruitment today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="glass-card p-5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <span className={`text-xs font-medium ${metric.positive ? 'text-success' : 'text-danger'}`}>
                  {metric.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="glass-card p-6 min-h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Interviews</h2>
          <div className="flex flex-1 items-center justify-center text-muted-foreground text-sm border-2 border-dashed border-border/50 rounded-lg">
            Placeholder for interviews feed
          </div>
        </div>
        <div className="glass-card p-6 min-h-[300px] flex flex-col">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="flex flex-1 items-center justify-center text-muted-foreground text-sm border-2 border-dashed border-border/50 rounded-lg">
            Placeholder for activity feed
          </div>
        </div>
      </div>
    </div>
  );
}
