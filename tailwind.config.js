/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      customBlue: '#0d3bff',
      dark: '#24232a',
      customGray: '#c0bdbe',
      darkYellow: '#c18514',
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
