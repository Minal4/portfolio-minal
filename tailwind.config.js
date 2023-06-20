/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      transitionProperty: {
        'height': 'height',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      }
    },

  },
  plugins: [],
}