/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   customBlue: '#0d3bff',
    //   dark: '#24232a',
    //   customGray: '#c0bdbe',
    //   darkYellow: '#c18514',
    //   whites: '#ffffff',
    //   blacks: '#000000',
    // },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
  },
  plugins: [],
}
