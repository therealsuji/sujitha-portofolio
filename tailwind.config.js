/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#140E14",
        "secondary-black": "#100B10",
        secondary: "#909090",
        background: "#140E14",
      },
    },
  },
  plugins: [],
};
