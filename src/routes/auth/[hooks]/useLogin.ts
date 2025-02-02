import { useNotification } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { loginAction } from '../[actions]';

export const useLogin = () => {
  const { showError } = useNotification();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ['auth:login'],
    mutationFn: loginAction,
    onError: (error) => {
      console.log(error);
      showError('Ocurrió un error al iniciar sesión, por favor intenta nuevamente.', true);
    },
  });

  return {
    mutate,
    isSuccess,
    isPending,
  };
};
