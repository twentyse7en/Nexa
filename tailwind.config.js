/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#4C49ED',
        'secondary': '#A29EBC'
      },
      boxShadow: {
        'card': '0px 0px 1.0342px 0px rgba(0, 0, 0, 0.04), 0px 2.0684px 6.20521px 0px rgba(0, 0, 0, 0.04), 0px 16.54721px 24.82082px 0px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
};
