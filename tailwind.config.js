/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        bgColor: '#F7F7F7',
        primary: '#282828',
        secondary: '#F7F7F7',
        gray: '#F1F1F1',
        blue: '#0147FF',
        dark: '#1D1D1B',
      },
      fontFamily: {
        'robotoFlex': ['Roboto Flex', 'sans-serif'],
        'robotoCondensed': ['Roboto Condensed', 'sans-serif'],
        'bebasNeue': ['Bebas Neue', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
