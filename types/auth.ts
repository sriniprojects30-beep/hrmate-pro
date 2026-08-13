import { UserRole } from './common';

export interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  role: UserRole;
  organizationId: string;
}

export interface Session {
  user: User;
  expiresAt: string;
  accessToken: string;
  refreshToken?: string;
}

export interface AuthState {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: Error | null;
}

export interface Permission {
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'manage';
}

export interface UserPermissions {
  role: UserRole;
  permissions: Permission[];
}
