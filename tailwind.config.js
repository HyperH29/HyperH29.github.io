/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  media: false,
  mode: "jit",
  theme: {
    
    backgroundImage: {
      "tech-bg": "url('https://api.lorem.space/image/fashion?w=1000&h=800')",
    },
    screens: {
      'xs': '500px',

      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    colors: {
      white: "#EFFFFD",
      babyblue: "#B8FFF9",
      brightblue: "#85F4FF",
      darkblue: "#42C2FF",
      black: "#EEE1",
    },
    extend: {},
  },
  plugins: [require("daisyui"), "macros"],
};
