import { useQuery } from '@tanstack/react-query';
import { getServicesAction } from '../[actions]';
import { useEffect, useMemo } from 'react';

export const useServices = () => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['services'],
    queryFn: getServicesAction,
  });

  const loading = isLoading || isFetching;
  const services = useMemo(() => data || [], [data]);

  useEffect(() => {
    if (isError) {
      console.log('Error');
    }
  }, [isError]);

  return {
    //* Props
    services,

    //! Getters
    loading,

    //? Methods
    refetch,
  };
};
