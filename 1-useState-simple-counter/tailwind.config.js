
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
        ],
  theme: {
    screens: {
      "3xs": "320px",
      xxs: "375px",
      xs: "480px",
      ...defaultTheme.screens,
      "2xl": "1440px",
      "3xl": "1800px",
      fhd: "1920px",
    },
    fontFamily: {
      sans: ["-apple-system", "system-ui", "sans-serif"],
    },
    extend: {
      fontSize: {},
      width: {},
      height: {},
      spacing: {},
      aspectRatio: {
        portrait: "12 / 16",
        rectangle: "16 / 12",
      },
      gridTemplateRows: {
        auto1fr: "auto 1fr",
      },
    },
  },
  plugins: [],
};