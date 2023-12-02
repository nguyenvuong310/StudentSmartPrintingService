const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '104': '27rem',
      },
      height: {
        '104': '40rem',
      },
      colors: {
        'regal-blue': '#2D3748',
        'cus-blue': '#49454F'
      },
      backgroundImage: {
        "white-fill": "url('/src/assets/white-fill.png')",
        "blue-fill": "url('/src/assets/blue-fill.png')",
        "bkcs2-fill": "url('/src/assets/bkcs2-fill.jpg')",
        "fileimg-fill": "url('/src/assets/fileimg.jpg')",
        "profile-fill": "url('/src/assets/ProfileBg.png')"
      },

    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/line-clamp'), require('tailwind-scrollbar')],

  variants: {
    scrollbar: ['rounded']
  }

});