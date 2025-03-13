/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#f3e8ff',
          200: '#e0b3ff',
          300: '#d08aff',
          400: '#a85ef6',
          500: '#9333ea',  // Add this if you want to use bg-purple-500
          600: '#7c22d6',  // This is the `bg-purple-600` value
          700: '#5a1d9d',
          800: '#3a1070',
          900: '#220c46',
        },
      },
    },
  },
  plugins: [],
}
