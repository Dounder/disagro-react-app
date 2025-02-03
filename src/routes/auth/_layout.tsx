import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/_layout')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex w-svw h-svh">
      <div className="flex flex-col flex-grow min-h-0 min-w-0">
        <div className="flex-grow overflow-auto min-w-0">
          <div className="max-w-[1200px] w-full h-full mx-auto p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
