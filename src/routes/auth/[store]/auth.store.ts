import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AuthState, AuthStatus } from '../[interfaces]';

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    token: null,
    status: AuthStatus.Unauthenticated,

    setAuth: (auth) =>
      set((state) => ({ ...state, user: auth.user, token: auth.token, status: AuthStatus.Authenticated })),
  }))
);
