export const APP_NAME = 'HRMATE PRO';

export const CANDIDATE_STATUSES = [
  'New',
  'Screening',
  'Shortlisted',
  'Interview',
  'Selected',
  'Offer',
  'Hired',
  'Rejected',
  'On Hold'
] as const;

export const JOB_STATUSES = ['Draft', 'Open', 'Paused', 'Closed'] as const;

export const APPLICATION_STATUSES = [
  'Applied',
  'Screening',
  'Shortlisted',
  'Interview',
  'Selected',
  'Offer',
  'Hired',
  'Rejected'
] as const;

export const INTERVIEW_STATUSES = [
  'Scheduled',
  'Completed',
  'Cancelled',
  'Rescheduled',
  'No Show'
] as const;

export const TASK_PRIORITIES = ['Low', 'Medium', 'High', 'Urgent'] as const;

export const TASK_STATUSES = ['To Do', 'In Progress', 'Completed', 'Overdue'] as const;

export const USER_ROLES = [
  'Super Admin',
  'Admin',
  'Recruiter',
  'Hiring Manager',
  'Interviewer',
  'Viewer'
] as const;

export const NAVIGATION_ITEMS = [
  { label: 'Dashboard', href: '/', icon: 'layout-dashboard' },
  { label: 'Candidates', href: '/candidates', icon: 'users' },
  { label: 'Jobs', href: '/jobs', icon: 'briefcase' },
  { label: 'Applications', href: '/applications', icon: 'file-text' },
  { label: 'Screening', href: '/screening', icon: 'filter' },
  { label: 'Interviews', href: '/interviews', icon: 'calendar-clock' },
  { label: 'Calendar', href: '/calendar', icon: 'calendar-days' },
  { label: 'Tasks', href: '/tasks', icon: 'check-square' },
  { label: 'Communications', href: '/communications', icon: 'message-square' },
  { label: 'Cloud Storage', href: '/storage', icon: 'hard-drive' },
  { label: 'AI Assistant', href: '/ai', icon: 'bot' },
  { label: 'Reports', href: '/reports', icon: 'bar-chart-3' },
  { label: 'Audit Logs', href: '/audit-logs', icon: 'clipboard-list' },
  { label: 'Integrations', href: '/integrations', icon: 'blocks' },
  { label: 'Settings', href: '/settings', icon: 'settings' }
];
