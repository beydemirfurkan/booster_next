/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ['Oswald', 'sans-serif'],
            serif: ['Poppins', 'serif'],
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
