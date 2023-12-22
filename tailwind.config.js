/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#374151',
        'content-bg': '#1A1B21',
        'footer-bg': '#161619d',
        'sub-name': '#F3BF99',
        'link': '#5093E2',
        'dragon': '#161619;'
      },
      font: {
        'font': 'Inter',
      },
      fontSize: {
        'sml': '10.24px'
      }
    },
  },
  plugins: [],
}

