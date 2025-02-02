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
