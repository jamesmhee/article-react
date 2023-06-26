/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {},
    fontFamily : {
      'custom' : ['font-family', 'Kanit','sans-serif'],
    },
    screens: {
      'xxs': '350px',
      'xs': '580px',
      'sm': '640px',
      'md': '768px',
      'lg': '1280',
      'xl': '1400',
      'xxl': '1600'
    },
    boxShadow: {
      '0':'0px 0px 10px'
    },
  },
  plugins: [],
}

