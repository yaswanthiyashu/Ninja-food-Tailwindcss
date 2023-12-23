/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontSize: {
        mammoth: '2rem'
      },
      fontFamily :{
        body : ['Nunito']
      },
    },
  },
  
  plugins: [],
}

