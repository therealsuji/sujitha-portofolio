/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0710",
        "secondary-black": "#110B16",
        secondary: "#909090",
       },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
