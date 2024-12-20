/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EDE8F5',
        primary: '#ADBBDA',
        secondary: '#3D52A0',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.w-combobox-input': {
          width: 'calc(var(--input-width) + var(--button-width))',
        },
      })
    },
  ],
}
