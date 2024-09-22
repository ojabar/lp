/** @type {import('tailwindcss').Config} */

import settings from "./bd/settings";

export default {
  darkMode: "class",
  content: [
    // Add your paths here
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: () => settings.colors,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1280px",
        "2xl": "1574px",
        xsMax: { max: "639.98px" },
        smMax: { max: "767.98px" },
        mdMax: { max: "991.98px" },
        lgMax: { max: "1279.98px" },
        xlMax: { max: "1573.98px" },
      },
      fontFamily: {
        primary: "var(--font-primary)",
        secondary: "var(--font-secondary)",
      },
      fontSize: {
        xxs: [
          "0.625rem",
          {
            lineHeight: "1.111",
          },
        ],
      },
    },
  },
  plugins: [],
};
