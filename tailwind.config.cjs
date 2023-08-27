/** @type {import('tailwindcss').Config} */
const { default: daisyui } = require('daisyui')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      newRed: '#FE4655',
      newBlack: '#111',
      newWhite: '#EBE8E1'
    },
    extend: {}
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    base: false

  }
}
