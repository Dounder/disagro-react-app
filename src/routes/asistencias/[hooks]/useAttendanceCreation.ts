import { useMutation } from '@tanstack/react-query';
import { createAttendanceAction } from '../[actions]';

export const useAttendanceCreation = () => {
  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ['attendance:create'],
    mutationFn: createAttendanceAction,
    onSuccess: (data) => {
      console.log('🚀 ~ useAttendanceCreation ~ data:', data);
    },
  });

  return {
    mutate,
    isSuccess,
    isPending,
  };
};
