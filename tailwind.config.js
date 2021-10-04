module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        heading: '#ec4524'
      },
      textColor: {
        passion: '#ec4524'
      },
      boxShadow: {
        all: '0 0 23px 0 rgb(62 28 131 / 13%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
