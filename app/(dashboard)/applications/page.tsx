import { Metadata } from 'next';
import KanbanBoard from '@/components/applications/kanban-board';

export const metadata: Metadata = {
  title: 'Applications - HRMATE PRO',
  description: 'Manage job applications in a Kanban view.',
};

export default function ApplicationsPage() {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Applications</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and track candidate applications across all stages.</p>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <KanbanBoard />
      </div>
    </div>
  );
}
