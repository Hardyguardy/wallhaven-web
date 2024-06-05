/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222532",
          60: "rgba(34,37,50,0.6)",
        },
        secondary: "#282C3E",
        tertiary: "#474C65",
        quaternary: "#141724",
      },
    },
    fontFamily: {
      body: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        "@font-face": [
          {
            fontFamily: "Poppins",
            fontWeight: 400,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Poppins-Regular.woff2") format("woff2")',
          },
          {
            fontFamily: "Poppins",
            fontWeight: 600,
            fontDisplay: "swap",
            fontStyle: "normal",
            src: 'url("/fonts/Poppins-SemiBold.woff2") format("woff2")',
          },
        ],
      });
    }),
  ],
};
