import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AuthState, AuthStatus } from '../[interfaces]';
import { checkAuthAction, loginAction } from '../[actions]';

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    token: null,
    status: AuthStatus.Checking,

    login: async (loginDto) => {
      try {
        const { user, token } = await loginAction(loginDto);
        localStorage.setItem('token', token);
        set({ status: AuthStatus.Authenticated, user, token });
      } catch (error) {
        set({ status: AuthStatus.Unauthenticated, user: null, token: null });
        console.log(error);
        throw 'Unauthorized';
      }
    },

    logout: () => set({ status: AuthStatus.SessionClosed, user: null, token: null }),

    checkAuthStatus: async () => {
      try {
        const { user, token } = await checkAuthAction();
        localStorage.setItem('token', token);
        set({ status: AuthStatus.Authenticated, user, token });
      } catch (error) {
        set({ status: AuthStatus.Unauthenticated, user: null, token: null });
        console.log(error);
        throw 'Unauthorized';
      }
    },
  }))
);
