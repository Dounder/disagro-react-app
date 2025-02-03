import { useAuthStore } from '@/routes/auth/[store]/auth.store';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  // get token from local storage
  const token = localStorage.getItem('token');

  // if token exists, add it to the headers
  if (token) config.headers.Authorization = `Bearer ${token}`;

  // return the config
  return config;
});

export { api };
