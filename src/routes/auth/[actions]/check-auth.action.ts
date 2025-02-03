import { api } from '@/api';
import axios from 'axios';
import { AuthResponse } from '../[interfaces]';

interface CheckError {
  ok: false;
  message: string;
}

interface CheckSuccess {
  ok: true;
  user: AuthResponse['user'];
  token: string;
}

type CheckAuthResult = CheckError | CheckSuccess;

const ErrorMessages = {
  INVALID_TOKEN: 'Token inválido o no proporcionado',
  SESSION_VERIFICATION_FAILED: 'No se pudo verificar la sesión',
  UNEXPECTED_ERROR: 'Ocurrió un error inesperado',
};

const validateToken = (token: string | null): boolean => {
  return !!token && token.length >= 10;
};

export const checkAuthAction = async (): Promise<CheckAuthResult> => {
  const context = checkAuthAction.name;
  const localToken = localStorage.getItem('token');

  if (!validateToken(localToken)) return { ok: false, message: ErrorMessages.INVALID_TOKEN };

  try {
    const { data } = await api.get<AuthResponse>('/auth/verify');
    return { ok: true, user: data.user, token: data.token };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401)
      return { ok: false, message: ErrorMessages.SESSION_VERIFICATION_FAILED };

    console.log({ context, error });
    return { ok: false, message: ErrorMessages.UNEXPECTED_ERROR };
  }
};
