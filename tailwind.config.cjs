/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],

  theme: {
    colors: {
      newRed: '#FE4655',
      newBlack: '#111',
      newWhite: '#EBE8E1',
      newOrange: '#FF9F5C',
      newPurple: '#BE28CB'
    },
    extend: {
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    }
  },
  darkMode: 'class',
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    // styled: false
  },
}
