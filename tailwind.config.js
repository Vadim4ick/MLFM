/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        third: "#F4EAC8",
        gray: "#c5c5c5",
        gray2: "#B1B1B1",
        grayLight: "#E5EAED",
        darkGray: "#565656",
        darkGray2: "#505050",

        red2: "#A42D2A",
        "red2-hover": "#c71010",
      },
      gridTemplateColumns: {
        newItems: "repeat(4, 1fr)",
        buyImage: "1.35fr 0.55fr",
        buyImageMobile: "1fr 100px",
        catalogItem: "1fr 410px",
        aside: "275px 1fr",
        giftCart: "618px 1fr",
        delivery: "49% 51%",
      },
      borderRadius: {
        main: "34px",
      },
      fontFamily: {
        main: ["Unbounded"],
        montserrat: ["Montserrat"],
        roboto: ["Roboto"],
        inter: ["Inter"],
      },

      container: {
        center: true,
        padding: "1rem",
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
