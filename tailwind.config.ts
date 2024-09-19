import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'gray-182': '#b6b6b4',
      },
      fontFamily: {
        // Agrega tus fuentes personalizadas aquí
        'brandon-grotesque': ['Brandon Grotesque', 'sans-serif'],
        'droid-serif': ['Droid Serif', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
