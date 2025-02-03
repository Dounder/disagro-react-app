import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';
import { getAttendanceByIdAction } from '../[actions]';

export const useAttendanceById = (attendanceId: number) => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['attendances:id', { attendanceId }],
    queryFn: async () => getAttendanceByIdAction(attendanceId),
  });

  const loading = isLoading || isFetching;
  const attendance = useMemo(() => data, [data]);

  useEffect(() => {
    if (isError) console.log('Error');
  }, [isError]);

  return {
    //* Props
    attendance,

    //! Getters
    loading,

    //? Methods
    refetch,
  };
};
