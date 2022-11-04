/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ownBlue: {
          900: 'hsl(217, 54%, 11%)',
          800: 'hsl(216, 50%, 16%)',
          700: 'hsl(215, 32%, 27%)',
          600: 'hsl(215, 51%, 70%)',
          500: 'hsl(178, 100%, 50%)',
        },
      },
    },
  },
  plugins: [],
}
