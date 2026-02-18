/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f6eee3',
        charcoal: '#333333',
        accent: '#0099ff',
        'accent-dark': '#0077cc',
      },
      fontFamily: {
        display: ['"Just Me Again Down Here"', 'cursive'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
      },
    },
  },
  plugins: [],
}
