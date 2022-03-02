module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
          poppin: ['Poppins', 'san-serif']
      },
    },
    colors: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [ module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ]
  } ],
}