import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { FormEvent, useEffect, useState } from 'react';
import { ZodError } from 'zod';

import CustomBtn from '@/components/CustomBtn';
import CustomInput from '@/components/CustomInput';
import { useNotification } from '@/hooks';
import LeftArrow from '@/icons/LeftArrow';
import RightArrow from '@/icons/RightArrow';
import { useLogin } from '../[hooks]';
import { loginDto, loginSchema } from '../[schemas]';
import { useAuthStore } from '../[store]/auth.store';

export const Route = createFileRoute('/auth/_layout/login')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { showLoading, showSuccess, dismissNotification } = useNotification();
  const { data, mutate, isSuccess, isPending } = useLogin();
  const setAuth = useAuthStore((state) => state.setAuth);

  const [login, setLogin] = useState<loginDto>({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { isValid, errors } = validate();

    if (!isValid) {
      setErrors(errors);
      return;
    }

    setErrors({});
    mutate(login);
  };

  const validate = () => {
    try {
      loginSchema.parse(login);

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

  useEffect(() => {
    if (isPending) showLoading();
  }, [isPending]);

  useEffect(() => {
    if (isSuccess && data) {
      setAuth(data);
      showSuccess({ text: 'Inicio de sesión exitoso' });
      setTimeout(() => {
        dismissNotification();
        navigate({ to: '/dashboard' });
      }, 2000);
    }
  }, [isSuccess]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="font-bold text-center text-2xl mb-5">Inicio de Sesión</h1>
      <div className="bg-white shadow w-[40rem] rounded-lg divide-y divide-gray-200">
        <form onSubmit={handleSubmit} className="px-5 py-7 flex flex-col gap-6">
          <CustomInput
            id="email"
            label="Email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            error={errors.email}
          />
          <CustomInput
            id="password"
            label="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
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
        <Link to="/">
          <button className="transition duration-200 px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset ">
            <LeftArrow />
            <span className="inline-block ml-1">Regresar</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
