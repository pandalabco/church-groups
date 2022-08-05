/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./**/*.tsx", "./**/*.html"],
  theme: {
    colors: {
      ...colors,
      bgColor: "#EFF5F5",
    },
    extend: {
      backgroundImage: () => ({
        home: "url('/images/background.jpg')",
      }),
    },
  },
  plugins: [],
}
