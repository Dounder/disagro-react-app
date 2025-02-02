export interface AuthResponse {
  user: User;
  token: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  userRoles: UserRole[];
}

export interface UserRole {
  role: Role;
}

export interface Role {
  id: number;
  name: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  status: AuthStatus;

  setAuth: (auth: AuthResponse) => void;
}

export enum AuthStatus {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
  Checking = 'Checking',
  SessionClosed = 'SessionClosed',
}
