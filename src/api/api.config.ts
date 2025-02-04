import { envs } from '@/config/envs';
import axios from 'axios';

const api = axios.create({
  baseURL: envs.apiUrl,
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
