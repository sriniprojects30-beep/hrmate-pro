import Link from 'next/link';
import { ArrowLeft, Edit, MapPin, Briefcase, Calendar, Globe, Users, CheckCircle, Clock, XCircle } from 'lucide-react';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // Mock data for the specific job
  const job = {
    id: params.id,
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    status: 'Active',
    postedDate: 'Oct 24, 2026',
    description: `We are looking for an experienced Senior Full Stack Developer to join our core engineering team. You will be responsible for architecting and building highly scalable web applications. You'll work closely with product managers and designers to deliver exceptional user experiences.`,
    requirements: [
      '5+ years of experience with React and Node.js',
      'Strong understanding of Next.js and server-side rendering',
      'Experience with PostgreSQL and ORMs like Prisma or Drizzle',
      'Familiarity with cloud platforms (AWS/GCP/Vercel)'
    ],
    pipeline: [
      { stage: 'Sourced', count: 45, icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
      { stage: 'Screening', count: 12, icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
      { stage: 'Interview', count: 5, icon: Calendar, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
      { stage: 'Offer', count: 1, icon: CheckCircle, color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20' },
      { stage: 'Hired', count: 0, icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' }
    ]
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-6xl mx-auto w-full">
      <div className="flex items-center text-sm text-slate-400 mb-2">
        <Link href="/jobs" className="flex items-center hover:text-indigo-400 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Jobs
        </Link>
      </div>

      {/* Header */}
      <div className="glass-card rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold tracking-tight text-white">{job.title}</h1>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                {job.status}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-4">
              <div className="flex items-center"><MapPin className="h-4 w-4 mr-1.5" />{job.location}</div>
              <div className="flex items-center"><Briefcase className="h-4 w-4 mr-1.5" />{job.type}</div>
              <div className="flex items-center"><Globe className="h-4 w-4 mr-1.5" />{job.department}</div>
              <div className="flex items-center"><Calendar className="h-4 w-4 mr-1.5" />Posted {job.postedDate}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-slate-700 bg-slate-900/50 shadow-sm hover:bg-slate-800 hover:text-slate-100 h-10 px-4 py-2 gap-2 text-slate-300 glass-card">
              <Edit className="h-4 w-4" />
              Edit Job
            </button>
            <button className="flex-1 md:flex-none inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2 shadow-md">
              View Applicants
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 md:p-8 backdrop-blur-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Job Description</h2>
            <div className="prose prose-invert max-w-none text-slate-300">
              <p>{job.description}</p>
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-4 mt-8">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start text-slate-300">
                  <CheckCircle className="h-5 w-5 mr-3 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass-card rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white mb-6">Pipeline Overview</h2>
            <div className="space-y-4">
              {job.pipeline.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-lg border ${stage.bg} ${stage.border}`}>
                        <Icon className={`h-5 w-5 ${stage.color}`} />
                      </div>
                      <span className="font-medium text-slate-200">{stage.stage}</span>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-sm font-semibold text-white">
                      {stage.count}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="glass-card rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white mb-4">Hiring Team</h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold border-2 border-slate-900">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-slate-400">Hiring Manager</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold border-2 border-slate-900">
                AS
              </div>
              <div>
                <p className="text-sm font-medium text-white">Alice Smith</p>
                <p className="text-xs text-slate-400">Recruiter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
