/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'serif'],
        'bebas-neue': ['"Bebas Neue", serif '],
        'anton': ['Anton', 'sans-serif'],
        'spartan': ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

