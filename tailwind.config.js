/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        __yellow: "#ffde59",
        __black: "#100f08",
        __blue: "#0884cf",
        __white: "#000"
      }
    },
  },
  plugins: [],
}