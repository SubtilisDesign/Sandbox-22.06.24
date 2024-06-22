/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#d9d9d9",
        darkgray: "#ababab",
        lightgray: "#d5d5d5",
        black: "#000",
        royalblue: "#5e87ff",
        gray: "#fffefe",
      },
      spacing: {},
      fontFamily: {
        "text-italic": "Raleway",
        "headline-1-bold": "Roboto",
      },
      borderRadius: {
        "81xl": "100px",
        "181xl": "200px",
        "61xl": "80px",
        xl: "20px",
      },
    },
    fontSize: {
      lg: "18px",
      "mid-1": "17.1px",
      "11xl-4": "30.4px",
      "5xl": "24px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "2xl": "21px",
      "31xl": "50px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
