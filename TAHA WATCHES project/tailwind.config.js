/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      width: {
        '1/10': '10%', // Custom width for 10 logos per row
      }
    }
  },
  plugins: [],
}

