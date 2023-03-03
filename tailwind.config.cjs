/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(20, 23, 43, 1)",
        "border-gradient-top": "#303448",
        "border-gradient-bottom": "#ECF0FF1A",
      },
    },
    plugins: [],
  },
};
