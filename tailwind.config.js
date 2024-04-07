/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#fcfafa",
        white: "#fff",
        teal: "#407056",
        darkslategray: "#31483b",
        black: "#000",
        gray: {
          "100": "#0b2027",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        dimgray: "#646060",
      },
      spacing: {},
      fontFamily: {
        "playfair-display": "'Playfair Display'",
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "5xl": "24px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
