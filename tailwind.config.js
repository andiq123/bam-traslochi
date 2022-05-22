module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#B8E0D2",
          secondary: "#D6EADF",
          accent: "#55db9f",
          neutral: "#1E2029",
          "base-100": "#F0F3F4",
          info: "#568ED2",
          success: "#1BD09C",
          warning: "#91610D",
          error: "#F26485",
        },
      },
    ],
  },
};
