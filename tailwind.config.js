/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          2: '#162336',
          3: '#1E3A5F',
        },
        teal: {
          DEFAULT: '#0A7373',
          light: '#CCFBF1',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#FEF9E7',
        },
        rose: {
          DEFAULT: '#E11D48',
          light: '#FFE4E6',
        },
        amber: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
        },
        purple: {
          DEFAULT: '#7C3AED',
          light: '#EDE9FE',
        },
        green: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}