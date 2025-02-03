import { api } from '@/api';
import axios from 'axios';
import { AuthResponse } from '../[interfaces]';
import { useAuthStore } from '../[store]/auth.store';

const ErrorMessages = {
  INVALID_TOKEN: 'Token inválido o no proporcionado',
  SESSION_VERIFICATION_FAILED: 'No se pudo verificar la sesión',
  UNEXPECTED_ERROR: 'Ocurrió un error inesperado',
};

const validateToken = (token: string | null): boolean => {
  return !!token && token.length >= 10;
};

export const checkAuthAction = async (): Promise<AuthResponse> => {
  const context = checkAuthAction.name;
  const localToken = localStorage.getItem('token');

  if (!validateToken(localToken)) throw new Error(ErrorMessages.INVALID_TOKEN);

  try {
    const { data } = await api.get<AuthResponse>('/auth/verify');

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401)
      throw new Error(ErrorMessages.SESSION_VERIFICATION_FAILED);

    console.log({ context, error });
    throw new Error(ErrorMessages.UNEXPECTED_ERROR);
  }
};
