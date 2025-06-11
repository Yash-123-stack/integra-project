/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      colors: {
        primary: "#ff6a00",
        secondary: "#fbd400",
        lightPurple: "#c5aaff",
        darkBg: "#0d0d0d",
      },
    },
  },
  plugins: [],
};
