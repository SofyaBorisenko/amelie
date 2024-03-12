import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#EFEFED',
        'blue-gray': '#626F75',
        'flesh-color': '#E5DFD8',
        'light-blue': '#9EC5C8',
        'pale-blue': '#8C9DA5',
      },
    },
  },
  plugins: [],
};
export default config;
