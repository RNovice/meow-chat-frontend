const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        m1: "#FFB5A7",
        m2: "#FCD5CE",
        m3: "#F8EDEB",
        m4: "#F9DCC4",
        m5: "#FEC89A",
      },
    },
  },
  plugins: [],
};
