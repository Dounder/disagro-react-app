import { useMutation } from '@tanstack/react-query';
import { createAttendanceAction } from '../[actions]';
import { useNotification } from '@/hooks';

export const useAttendanceCreation = () => {
  const { showSuccess, showError } = useNotification();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ['attendance:create'],
    mutationFn: createAttendanceAction,
    onSuccess: () => {
      showSuccess({
        text: 'Gracias por registrar tu asistencia, en breve te estará llegando un correo de confirmación y el link para acceder a la plataforma.',
        confirm: true,
      });
    },
    onError: (error) => {
      console.log(error);
      showError({
        text: 'Ocurrió un error al registrar tu asistencia, por favor intenta nuevamente.',
        confirm: true,
      });
    },
  });

  return {
    mutate,
    isSuccess,
    isPending,
  };
};
