const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {

  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],

  variants: {

  }
});
