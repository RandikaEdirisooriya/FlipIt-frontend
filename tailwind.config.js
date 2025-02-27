/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeYellow: '#FFC000',
        themePurple: '#502ec3'
    },
  },
  plugins: [],
}
}