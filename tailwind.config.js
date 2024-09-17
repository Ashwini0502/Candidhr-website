/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify your component paths
  ],
  theme: {
    extend: {
      animation: {
        'text-animate': 'text-animate 1s ease-out',
      },
    },
  },
  plugins: [],
}
