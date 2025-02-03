import { createFileRoute, Outlet } from '@tanstack/react-router';
import Footer from '@/components/Footer';

import DashboardBody from './[components]/DashboardBody';
import DashboardHeader from './[components]/DashboardHeader';

export const Route = createFileRoute('/dashboard/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex w-svw h-svh">
      <div className="flex flex-col flex-grow min-h-0 min-w-0">
        <DashboardHeader />

        <DashboardBody>
          <Outlet />
        </DashboardBody>

        <Footer />
      </div>
    </div>
  );
}
