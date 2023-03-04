/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffce00",
        secondary: "#fe4880",
        dark: "#212121",
        light: "#f3f3f3",
      },
      fontFamily: {
        body: ['"Odibee Sans"', "cursive"],
      },
    },
  },
  plugins: [],
};
