/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg01: `rgb(var(--bg01) / <alpha-value>)`,
        bg02: `rgb(var(--bg02) / <alpha-value>)`,
      },
    },
  },
  plugins: [],
};
