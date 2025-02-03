import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRoute, redirect, useNavigate, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import FullscreenLoader from '@/components/FullscreenLoader';
import { AuthStatus } from './auth/[interfaces]';
import { useAuthStore } from './auth/[store]';
import { useEffect } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

const PUBLIC_ROUTES = ['/asistencias', '/auth/login'];

function RootComponent() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const authStatus = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  // Call checkAuthStatus in a useEffect
  useEffect(() => {
    if (authStatus === AuthStatus.Checking) checkAuthStatus();
  }, [authStatus, checkAuthStatus]);

  if (authStatus === AuthStatus.Checking) return <FullscreenLoader />;

  if (authStatus === AuthStatus.Authenticated && routerState.location.pathname.includes('/auth')) {
    navigate({ to: '/asistencias', replace: true });
    return <Outlet />;
  }

  if (authStatus === AuthStatus.Unauthenticated && PUBLIC_ROUTES.includes(routerState.location.pathname))
    return <Outlet />;

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </>
  );
}
