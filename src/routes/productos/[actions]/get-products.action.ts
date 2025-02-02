import { api } from '@/api';
import { ProductList } from '../[interfaces]';

export const getProductsAction = async (): Promise<ProductList[]> => {
  try {
    const { data } = await api.get<ProductList[]>('/products');

    return data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Unexpected error');
  }
};
