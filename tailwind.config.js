module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "pop-up": "popUp .8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { right: "-200px", opacity: 0.2 },
          "100%": { right: "0px", opacity: 1 },
        },
        popUp: {
          "0%": { transform: "scale(0.7)" },
          "100%": { transform: "scale(1)" },
        },
      },
      gridTemplateRows: {
        layout: "3.125rem 1fr 3.125rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "odd", "even"],
    },
  },
  plugins: [],
};
