import {
  CANDIDATE_STATUSES,
  JOB_STATUSES,
  APPLICATION_STATUSES,
  INTERVIEW_STATUSES,
  USER_ROLES,
  TASK_PRIORITIES,
  TASK_STATUSES
} from '../lib/utils/constants';

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface SearchParams {
  query: string;
  filters?: Record<string, unknown>;
}

export type StatusBadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

export type UserRole = typeof USER_ROLES[number];
export type CandidateStatus = typeof CANDIDATE_STATUSES[number];
export type JobStatus = typeof JOB_STATUSES[number];
export type ApplicationStatus = typeof APPLICATION_STATUSES[number];
export type InterviewStatus = typeof INTERVIEW_STATUSES[number];
export type TaskPriority = typeof TASK_PRIORITIES[number];
export type TaskStatus = typeof TASK_STATUSES[number];
