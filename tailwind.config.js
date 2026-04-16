
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        gold: {
          50: '#fdf8e8',
          100: '#f9efc5',
          200: '#f3df8e',
          300: '#e8c84d',
          400: '#d4a853',
          500: '#c9a84c',
          600: '#b08a2e',
          700: '#8f6b24',
          800: '#755624',
          900: '#634822',
        },
        blush: {
          50: '#fef7f0',
          100: '#fce4ec',
          200: '#f9e8e0',
          300: '#f5c6c6',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf8f0',
          200: '#faf3e6',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
