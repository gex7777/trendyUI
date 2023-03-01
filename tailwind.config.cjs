/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: " #14172B",
        "border-gradient-top": "#303448",
        "border-gradient-bottom": "#ECF0FF1A",
      },
    },
    plugins: [],
  },
};
