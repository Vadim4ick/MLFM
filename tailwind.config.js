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
      },
      gridTemplateColumns: {
        newItems: "repeat(4, 1fr)",
      },
      fontFamily: {
        main: ["Unbounded"],
        montserrat: ["Montserrat"],
      },

      screens: {
        tablet: "768px",

        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
