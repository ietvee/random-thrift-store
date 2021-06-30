module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    filter: {
      // defaults to {}
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
  },
  variants: {
    extend: {
      filter: ["responsive"], // defaults to ['responsive']
      backdropFilter: ["responsive"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("tailwindcss-filters")],
};
