import { z } from 'zod';

interface EnvVars {
  VITE_API_URL: string;
}

/**
 * Schema for validating environment variables using Zod.
 *
 * @remarks
 * This schema enforces the presence of required environment variables
 * and allows for additional unknown variables to exist.
 *
 * @property {string} VITE_API_URL - The API URL for the application (Required)
 *
 * @example
 * ```env
 * VITE_API_URL=https://api.example.com
 * ```
 */
const envSchema = z
  .object({
    VITE_API_URL: z.string().min(1, 'VITE_API_URL is required'),
  })
  .passthrough(); // Allows additional unknown properties

// Validate the environment variables
const result = envSchema.safeParse(import.meta.env);

if (!result.success) {
  throw new Error(`Config validation error: ${result.error.message}`);
}

const envVars: EnvVars = result.data;

/**
 * Environment configuration object.
 * @remarks This configuration uses Vite's environment variables and import.meta.env
 * @property {string} apiUrl - The API URL from environment variables
 * @property {string} mode - Current mode of the application (development/production)
 * @property {boolean} isDev - Boolean flag indicating if application is in development mode
 */
export const envs = {
  apiUrl: envVars.VITE_API_URL,
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
};
