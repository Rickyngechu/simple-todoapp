/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "Bright-Blue": "hsl(220, 98%, 61%)",
        linearbg1: "hsl(192, 100%, 67%)",
        linearbg2: "hsl(280, 87%, 65%)",

        "Very-Dark-Blue": "hsl(235, 21%, 11%)",
        "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
        "Light-Grayish-Blue-dark": "hsl(234, 39%, 85%)",
        "Light-Grayish-Blue-hover": "hsl(236, 33%, 92%)",
        "Dark-Grayish-Blue-dark": "hsl(234, 11%, 52%)",
        "Very-Dark-Grayish-Blue-dark": "hsl(233, 14%, 35%)",
        "Very-Dark-Grayish-Blue2": "hsl(237, 14%, 26%)",

        // For light theme
        "Very-Light-Gray": "hsl(0, 0%, 98%)",
        "Very-Light-Grayish-Blue": "hsl(236, 33%, 92%)",
        "Light-Grayish-Blue-light": "hsl(233, 11%, 84%)",
        "Dark-Grayish-Blue-light": "hsl(236, 9%, 61%)",
        "Very-Dark-Grayish-Blue-light": "hsl(235, 19%, 35%)",
      },
    },
  },
  plugins: [],
};
