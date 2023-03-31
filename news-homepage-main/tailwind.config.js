/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  // safelist: [
  //   {
  //     pattern: /.*/,
  //   },
  // ],
  theme: {
    colors: {
      // Primary
      softOrange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",

      // Neutral
      offWhite: "hsl(36, 100%, 99%)",
      greyBlue: "hsl(233, 8%, 79%)",
      darkGreyBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
    },
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 700,
        bold: 800,
      },
    },
  },
  plugins: [],
};
