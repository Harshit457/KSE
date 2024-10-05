/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors:{
        homebg: "#D4DEEB"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline-black': {
          'text-shadow': '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black',
        },
        // Add more colors as needed
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-xl': {
          'text-shadow': '4px 4px 8px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-2xl': {
          'text-shadow': '5px 5px 10px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },],
}
