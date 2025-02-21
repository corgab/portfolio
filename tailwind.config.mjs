/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#353941',
          200: '#1C1C1C',
        },
        secondary: {
          100: '#90B8F8',
          200: '#5F85DB',
        },
      },
    },
    fontFamily: {
      // josefin: ['Josefin Sans', 'sans-serif'],
      // satisfy: ['satisfy', 'cursive'],
      josefin: ['var(--font-josefin)', 'sans-serif'],
      satisfy: ['var(--font-satisfy)', 'cursive'],
    },
  },
  plugins: [],
};
