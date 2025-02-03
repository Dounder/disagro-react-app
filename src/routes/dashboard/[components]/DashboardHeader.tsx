import { useNavigate } from '@tanstack/react-router';

import CustomBtn from '@/components/CustomBtn';
import { useAuthStore } from '@/routes/auth/[store]';

export default function DashboardHeader() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate({ to: '/asistencias', replace: true });
  };

  return (
    <header className="p-4 h-24 bg-primary text-white flex justify-between items-center">
      <section className="">
        <h1 className="text-2xl font-bold">Disagro</h1>
        <p className="text-xl">Feria de Promociones - 2023</p>
      </section>
      <section className="">
        <CustomBtn
          text="Cerrar sesión"
          className="h-10 flex justify-center cursor-pointer items-center font-bold text-white hover:underline transition duration-300 ease-in-out"
          onClick={handleLogout}
        />
      </section>
    </header>
  );
}
