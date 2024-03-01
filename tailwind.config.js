// /** @type {import('tailwindcss').Config} */

// tailwind.config = {
// theme: {
//   extend: {
//     colors: {
//       brown: "rgb(164, 45, 42)",
//     },
//     gridTemplateColumns: {
//       newItems: "repeat(4, 1fr)",
//     },
//   },
// },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        secondary: "#B41C21",
        primary: "#ffffff",
        third: "#F4EAC8",

        red: "#CD3836",
        red2: "#A42D2A",
      },
      gridTemplateColumns: {
        newItems: "repeat(4, 1fr)",
        buyImage: "1.35fr 0.55fr",
        buyImageMobile: "1fr 100px",
        catalogItem: "1fr 410px",
      },
      fontFamily: {
        main: ["Unbounded"],
        montserrat: ["Montserrat"],
      },

      screens: {
        mobile: "460px",
        tablet: "768px",

        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
