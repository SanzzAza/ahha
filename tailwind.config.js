/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d' },
        dark: { bg: '#0f1117', card: '#1a1d27', border: '#2a2d3a', text: '#e4e4e7', muted: '#71717a' },
      },
    },
  },
  plugins: [],
};
