import { useQuery } from '@tanstack/react-query';
import { getProductsAction } from '../[actions]';
import { useEffect, useMemo } from 'react';

export const useProducts = () => {
  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsAction,
  });

  const loading = isLoading || isFetching;
  const products = useMemo(() => data || [], [data]);

  useEffect(() => {
    if (isError) {
      console.log('Error');
    }
  }, [isError]);

  return {
    //* Props
    products,

    //! Getters
    loading,

    //? Methods
    refetch,
  };
};
