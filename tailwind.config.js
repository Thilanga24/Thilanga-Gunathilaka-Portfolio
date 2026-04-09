/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#030014',
          cyan: '#22d3ee',
          teal: '#0d9488',
          purple: '#c084fc',
          indigo: '#4f46e5',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        logo: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
