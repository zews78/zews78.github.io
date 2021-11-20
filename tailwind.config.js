module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container:{
      padding: '2rem',
    },
    extend: {},
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
