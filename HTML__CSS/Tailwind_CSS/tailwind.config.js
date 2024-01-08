/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      tablet: "624px",
      // => @media (min-width: 624px) { ... }

      laptop: "800px",
      // => @media (min-width: 800px) { ... }
    },
  },
  plugins: [],
};
