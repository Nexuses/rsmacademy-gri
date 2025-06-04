/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3F9C35',    // Green
        secondary: '#009CDE',  // Blue
        darkGray: '#63666A',   // Dark gray
        mediumGray: '#888B8D', // Medium gray
        navy: '#00153D',       // Navy blue
      }
    },
  },
  plugins: [],
};
