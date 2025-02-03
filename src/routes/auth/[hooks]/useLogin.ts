import { useNotification } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { loginAction } from '../[actions]';

export const useLogin = () => {
  const { showError } = useNotification();

  const { data, mutate, isSuccess, isPending } = useMutation({
    mutationKey: ['auth:login'],
    mutationFn: loginAction,
    onError: (error) => {
      console.log(error);
      showError({ text: 'Ocurrió un error al iniciar sesión, por favor intenta nuevamente.', confirm: true });
    },
  });

  return {
    data,
    mutate,
    isSuccess,
    isPending,
  };
};
