const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "white-fill": "url('/src/assets/white-fill.png')",
        "blue-fill": "url('/src/assets/blue-fill.png')",
        "bkcs2-fill": "url('/src/assets/bkcs2-fill.jpg')",
      },
    },
  },
  plugins: [],
});
