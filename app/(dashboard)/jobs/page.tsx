import Link from 'next/link';
import { Search, Filter, Plus, MapPin, Briefcase, Users, MoreHorizontal } from 'lucide-react';

const mockJobs = [
  { id: '1', title: 'Senior Full Stack Developer', department: 'Engineering', location: 'Remote', type: 'Full-time', status: 'Active', applicants: 45 },
  { id: '2', title: 'Product Marketing Manager', department: 'Marketing', location: 'New York, NY', type: 'Full-time', status: 'Draft', applicants: 0 },
  { id: '3', title: 'UX Designer', department: 'Design', location: 'San Francisco, CA', type: 'Contract', status: 'Closed', applicants: 120 },
  { id: '4', title: 'Sales Representative', department: 'Sales', location: 'Austin, TX', type: 'Full-time', status: 'Active', applicants: 23 },
  { id: '5', title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', status: 'Active', applicants: 34 },
];

export default function JobsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Jobs</h1>
          <p className="text-slate-400 text-sm">Manage job postings and track applicants.</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 gap-2 bg-indigo-600 text-white hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
          Create Job
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="flex h-9 w-full rounded-md border border-slate-700 bg-slate-900/50 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 pl-8 text-white glass-card"
          />
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-slate-700 bg-slate-900/50 shadow-sm hover:bg-slate-800 hover:text-slate-100 h-9 px-4 py-2 gap-2 text-slate-300 glass-card">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockJobs.map((job) => (
          <Link href={`/jobs/${job.id}`} key={job.id} className="block group">
            <div className="glass-card rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 hover:bg-slate-800/50 transition-all duration-200 hover:border-indigo-500/50 h-full flex flex-col relative overflow-hidden backdrop-blur-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-white group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{job.department}</p>
                </div>
                <button className="text-slate-500 hover:text-slate-300 transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-2 mt-auto mb-6">
                <div className="flex items-center text-sm text-slate-300">
                  <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-slate-300">
                  <Briefcase className="h-4 w-4 mr-2 text-slate-500" />
                  {job.type}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
                <div className="flex items-center text-sm font-medium text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
                  <Users className="h-4 w-4 mr-1.5 text-indigo-400" />
                  {job.applicants}
                </div>
                
                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  job.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 
                  job.status === 'Draft' ? 'bg-slate-500/10 text-slate-400 border border-slate-500/20' :
                  'bg-rose-500/10 text-rose-500 border border-rose-500/20'
                }`}>
                  {job.status}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
