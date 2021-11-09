module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "3.125rem 1fr 3.125rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
