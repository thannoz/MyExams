module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#3fbaeb",
          dark: "#0c87b8",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
