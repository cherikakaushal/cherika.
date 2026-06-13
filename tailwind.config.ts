import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};

export default config;
