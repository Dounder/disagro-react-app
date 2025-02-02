import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.indigo,
        danger: colors.red,
        success: colors.lime,
      },
    },
  },
  plugins: [forms],
} satisfies Config;
