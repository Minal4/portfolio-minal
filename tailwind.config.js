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
      },
      colors: {
        "primary-color": "var(--primary-color)",

        "secondary-color": "var(--secondary-color)",

        "dark-color": "var(--dark-color)",

        "color-light": "var(--color-light)",

        "btn-background": "var(--btn-background)",

        "background-primary-color": "var(--background-primary-color)",

        "background-secondary-color": "var(--background-secondary-color)",

        "background-dark-color": "var(--background-dark-color)",

        "background-button": "var(--background-button)",

        "button-color": "var(--button-color)",

        "background-hover-button": "var(--background-hover-button)",

        "border-color": "var(--border-color)"
      }
    },

  },
  plugins: [],
}