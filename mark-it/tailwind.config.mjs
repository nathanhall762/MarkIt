/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Calibre', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        black: '#0f0f0f',
        white: '#f5f5f5',
        primary: '#67EB3B',
        secondary: '#002642',
        tertiary: '#67EB3B',
        accent: '#e59500',
        dkbg1: '#0f0f0f',
        dkbg2: '#1f1f1f',
        dkbg3: '#2f2f2f',
        ltbg1: '#f5f5f5',
        ltbg2: '#e5e5e5',
      },
      height: {
        '3/4vh': '75vh',
      },
      transitionDuration: {
        2000: '2000ms',
      },
    },
  },
  plugins: [],
};
