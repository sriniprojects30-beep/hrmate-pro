'use client';

import { cn } from '@/lib/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary/10 text-primary',
        secondary: 'bg-secondary/10 text-secondary',
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        danger: 'bg-danger/10 text-danger',
        info: 'bg-info/10 text-info',
        outline: 'border border-border text-foreground',
        muted: 'bg-muted text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export function Badge({ className, variant, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            {
              'bg-primary': variant === 'default' || !variant,
              'bg-secondary': variant === 'secondary',
              'bg-success': variant === 'success',
              'bg-warning': variant === 'warning',
              'bg-danger': variant === 'danger',
              'bg-info': variant === 'info',
              'bg-foreground': variant === 'outline',
              'bg-muted-foreground': variant === 'muted',
            }
          )}
        />
      )}
      {children}
    </span>
  );
}

// Status-specific badge helper
const statusVariantMap: Record<string, VariantProps<typeof badgeVariants>['variant']> = {
  // Candidate statuses
  new: 'info',
  screening: 'warning',
  shortlisted: 'default',
  interview: 'secondary',
  selected: 'success',
  offer: 'success',
  hired: 'success',
  rejected: 'danger',
  'on hold': 'muted',
  // Job statuses
  draft: 'muted',
  open: 'success',
  paused: 'warning',
  closed: 'danger',
  // Application statuses
  applied: 'info',
  // Interview statuses
  scheduled: 'info',
  completed: 'success',
  cancelled: 'danger',
  rescheduled: 'warning',
  'no show': 'danger',
  // Task statuses
  'to do': 'muted',
  'in progress': 'info',
  overdue: 'danger',
};

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  const variant = statusVariantMap[status.toLowerCase()] || 'muted';
  return (
    <Badge variant={variant} dot className={className}>
      {status}
    </Badge>
  );
}
