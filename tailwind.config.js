/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: '#0d3bff',
      white: '#fff',
      black: '#000',
      dark: '#24232a',
      gray: {
        100: '#b0b0b0',
        200: '#d6d2d2',
      }
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
  },
  plugins: [],
}
