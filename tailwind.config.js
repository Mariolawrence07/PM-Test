/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pmred: {
          50: "#fdecea",
          100: "#f9c9c7",
          200: "#f39a99",
          300: "#ed6b6a",
          400: "#e43d3b",
          500: "#ED1D25",
          600: "#c3181f",
          700: "#971215",
          800: "#670d0f",
          900: "#360708"
        }
      }
    }
  },
  plugins: [],
}
