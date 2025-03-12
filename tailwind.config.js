/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E0AAFF",
        light: {
          100: "#7B2CBF",
          200: "#9D4EDD",
          300: "#C77DFF",
        },
        dark: {
          100: "#5A189A",
          200: "#3C096C",
          300: "#240046",
        },
        accent: "#C77DFF",
      },
    },
  },
  plugins: [],
};
