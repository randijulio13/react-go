/** @type {import('tailwindcss').Config} */

const wewak = {
  50: "#fdf3f4",
  100: "#fbe8eb",
  200: "#f6d5da",
  300: "#ea9daa",
  400: "#e58799",
  500: "#d75c77",
  600: "#c13d60",
  700: "#a22e4f",
  800: "#882947",
  900: "#752642",
  950: "#411020",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: wewak,
      },
    },
  },
  plugins: [],
};
