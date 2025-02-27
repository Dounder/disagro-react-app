import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { FormEvent, useState } from 'react';
import { ZodError } from 'zod';

import CustomBtn from '@/components/CustomBtn';
import CustomInput from '@/components/CustomInput';
import CustomInputPassword from '@/components/CustomInputPassword';
import { useNotification } from '@/hooks';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { loginDto, loginSchema } from '../[schemas]';
import { useAuthStore } from '../[store]';

export const Route = createFileRoute('/auth/_layout/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { showLoading, showError, showSuccess, dismissNotification } = useNotification();
  const login = useAuthStore((state) => state.login);

  const [loginForm, setLoginForm] = useState<loginDto>({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validate();

    if (!isValid) {
      setErrors(errors);
      return;
    }

    setErrors({});

    try {
      showLoading();
      await login(loginForm);

      showSuccess({ text: 'Inicio de sesión exitoso', timer: 1000 });
      navigate({ to: '/dashboard', replace: true });
    } catch (error: any) {
      console.log('Error: ', error);
      showError({ text: error.message || 'Ocurrió un error inesperado' });
    }
  };

  const validate = () => {
    try {
      loginSchema.parse(loginForm);

      return { isValid: true, errors: {} };
    } catch (error) {
      let errors: Record<string, string> = {};

      if (error instanceof ZodError) {
        errors = error.errors.reduce(
          (acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          },
          {} as Record<string, string>
        );

        return { isValid: false, errors };
      }

      return { isValid: false, errors };
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-center text-2xl mb-5">Inicio de Sesión</h1>
      <div className="bg-white shadow w-full sm:w-[25rem] md:w-[30rem] lg:w-[40rem] rounded-lg divide-y divide-gray-200">
        <form onSubmit={handleSubmit} className="px-5 py-7 flex flex-col gap-6">
          <CustomInput
            id="email"
            label="Email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            error={errors.email}
          />
          <CustomInputPassword
            id="password"
            label="Password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            error={errors.password}
          />
          <CustomBtn
            type="submit"
            text="Inicio de Sesión"
            className="w-full flex justify-center cursor-pointer items-center bg-secondary rounded-full font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-secondary/80">
            <RightArrow fill="#fff" size="20px" />
          </CustomBtn>
        </form>
      </div>
      <div className="py-5">
        <Link to="/asistencias">
          <button className="transition duration-200 px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset ">
            <LeftArrow />
            <span className="inline-block ml-1">Regresar</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
