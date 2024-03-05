/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grayMain: "rgba(var(--gray))",
        grayTints: "rgba(var(--gray-tints))",
        grayShades: "rgba(var(--gray-shades))",

        yellowMain: "rgba(var(--yellow))",
        yellowTints: "rgba(var(--yellow-tints))",
        yellowShades: "rgba(var(--yellow-shades))",

        orangeMain: "rgba(var(--orange))",
        orangeTints: "rgba(var(--orange-tints))",
        orangeShades: "rgba(var(--orange-shades))",

        greenMain: "rgba(var(--green))",
        greenTints: "rgba(var(--green-tints))",
        greenShades: "rgba(var(--green-shades))",
      },
    },
  },
  plugins: [],
};
