/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg01: `rgb(var(--bg01) / <alpha-value>)`,
        bg02: `rgb(var(--bg02) / <alpha-value>)`,

        color01: `rgb(var(--color01) / <alpha-value>)`,
        color02: `rgb(var(--color02) / <alpha-value>)`,

        border01: `rgb(var(--border01) / <alpha-value>)`,
        border02: `rgb(var(--border02) / <alpha-value>)`,

        grayish01: `rgb(var(--grayish01) / <alpha-value>)`,

        accent01: `rgb(var(--accent01) / <alpha-value>) !important`,
        accent02: `rgb(var(--accent02) / <alpha-value>) !important`,
      },
    },
  },
  plugins: [],
};
