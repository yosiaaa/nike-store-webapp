/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1200px'},
      'xl': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '550px'},
      'xs': {'max': '375px'},
    }
  },
  plugins: [],
};
