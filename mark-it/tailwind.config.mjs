/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Calibre', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      colors: {
        secondary: '#002642',
        tertiary: '#67EB3B',
        accent: '#e59500',

        dkbg1: '#0f0f0f',
        dkbg2: '#1f1f1f',
        dkbg3: '#2f2f2f',

        ltbg1: '#f5f5f5',
        ltbg2: '#e5e5e5',

        black2: 'hsl(0, 0%, 12%)',
        white2: 'hsl(0, 0%, 90%)',

        neutral: {
          1: 'hsl(var(--neutral-hue), var(--neutral-saturation), 92%)',
          2: 'hsl(var(--neutral-hue), var(--neutral-saturation), 88%)',
          3: 'hsl(var(--neutral-hue), var(--neutral-saturation), 78%)',
          4: 'hsl(var(--neutral-hue), var(--neutral-saturation), 67%)',
          5: 'hsl(var(--neutral-hue), var(--neutral-saturation), 46%)',
          6: 'hsl(var(--neutral-hue), var(--neutral-saturation), 31%)',
          7: 'hsl(var(--neutral-hue), var(--neutral-saturation), 20%)',
          8: 'hsl(var(--neutral-hue), var(--neutral-saturation), 12%)',
          9: 'hsl(var(--neutral-hue), var(--neutral-saturation), 8%)'
        },
        primary: {
          1: 'hsl(var(--primary-hue), var(--primary-saturation), 92%)',
          2: 'hsl(var(--primary-hue), var(--primary-saturation), 88%)',
          3: 'hsl(var(--primary-hue), var(--primary-saturation), 78%)',
          4: 'hsl(var(--primary-hue), var(--primary-saturation), 67%)',
          5: 'hsl(var(--primary-hue), var(--primary-saturation), 46%)',
          6: 'hsl(var(--primary-hue), var(--primary-saturation), 31%)',
          7: 'hsl(var(--primary-hue), var(--primary-saturation), 20%)',
          8: 'hsl(var(--primary-hue), var(--primary-saturation), 12%)',
          9: 'hsl(var(--primary-hue), var(--primary-saturation), 8%)',
        },
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