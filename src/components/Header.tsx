import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header className="p-4 h-24 bg-primary text-white flex justify-between items-center">
      <section className="">
        <h1 className="text-2xl font-bold">Disagro</h1>
        <p className="text-xl">Feria de Promociones - 2023</p>
      </section>
      <section className="">
        <Link
          to="/auth/login"
          className="h-10 flex justify-center cursor-pointer items-center font-bold text-white hover:underline transition duration-300 ease-in-out">
          <span>Iniciar Sesión</span>
        </Link>
      </section>
    </header>
  );
}
