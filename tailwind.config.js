/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      text: ["Poppins Regular"],
      title: ["Poppins SemiBold"],
    },
  },
  plugins: [],
};
