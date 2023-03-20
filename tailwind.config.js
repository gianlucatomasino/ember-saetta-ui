/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.*', './addon/**/*.*'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
