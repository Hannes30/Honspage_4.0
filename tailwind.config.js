const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: { fontFamily: { sans: ["Inter var"] } },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: {
        100: "#EBFFF8",
        200: "#C2FFEA",
        300: "#99FFDB",
        400: "#70FFCD",
        500: "#47FFBF",
        600: "#1FFFB0",
        700: "#00F59F",
        800: "#00A36A",
        900: "#007A50",
      },
      secondary: {
        300: "#4ac0dd",
        700: "#011421",
      },
    },
  },
  plugins: [],
};
