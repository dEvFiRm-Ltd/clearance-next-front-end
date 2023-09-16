import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      rectangle: '102 / 43',
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1780px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        gray: '#5d626a',
        black: { primary: '#31353C', secondary: '' },
        ash: '#eae7e4',
        red: {
          400: '#dc2626',
        },
        yellow: {
          400: '#FFD54D',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;

