import { api } from '@/api';
import { loginDto } from '../[schemas]';
import { AuthResponse } from '../[interfaces]';

export const loginAction = async (login: loginDto): Promise<AuthResponse> => {
  try {
    const { data } = await api.post<AuthResponse>('/auth/login', login);

    return data;
  } catch (error) {
    console.log('Error: ', error);
    throw new Error('Unexpected error');
  }
};
