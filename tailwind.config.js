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
      animation: {
        "fade-in-bottom":
          "fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },

      // that is actual animation
      keyframes: (theme) => ({
        "fade-in-bottom": {
          "0%": {
            "-webkit-transform": "translateY(50px);",
            transform: "translateY(50px);",
            opacity: "0;",
          },
          "100%": {
            "-webkit-transform": "translateY(0);",
            transform: "translateY(0);",
            opacity: "1;",
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
