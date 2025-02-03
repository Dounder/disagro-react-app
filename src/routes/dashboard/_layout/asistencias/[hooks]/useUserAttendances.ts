import { useAuthStore } from '@/routes/auth/[store]';
import { useQuery } from '@tanstack/react-query';
import { getAttendancesByUserAction } from '../[actions]';
import { useEffect, useMemo } from 'react';

export const useUserAttendances = () => {
  const userId = useAuthStore((state) => state.user?.id) || 0;

  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['attendances: user', { userId }],
    queryFn: async () => getAttendancesByUserAction(userId),
  });

  const loading = isLoading || isFetching;
  const attendances = useMemo(() => data || [], [data]);

  useEffect(() => {
    if (isError) console.log('Error');
  }, [isError]);

  return {
    //* Props
    attendances,

    //! Getters
    loading,

    //? Methods
    refetch,
  };
};
