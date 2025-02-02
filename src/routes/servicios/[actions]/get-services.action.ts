import { api } from '@/api';
import { ServiceList } from '../[interfaces]';

export const getServicesAction = async (): Promise<ServiceList[]> => {
  try {
    const { data } = await api.get<ServiceList[]>('/services');

    return data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Unexpected error');
  }
};
