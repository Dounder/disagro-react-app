import { createFileRoute } from '@tanstack/react-router';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';

import Form from './[component]/Form';

export const Route = createFileRoute('/asistencias/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex w-svw h-svh">
      <div className="flex flex-col flex-grow min-h-0 min-w-0">
        <Header />

        <Main>
          <Form />
        </Main>

        <Footer />
      </div>
    </div>
  );
}
