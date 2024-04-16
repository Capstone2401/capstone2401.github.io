/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "#F1D492",
        secondary: "#F0E86E",
        accent: "#F0B96E",
        base: "#231f1f",
        neutral: "#FFFFFF",
      },
    },
  },
};
