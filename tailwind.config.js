/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1A2F",
          dark: "#061220",
        },
        gold: {
          DEFAULT: "#C8A45D",
          muted: "#B8924A",
        },
        charcoal: "#1A1A1A",
        "soft-gray": "#F4F4F4",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 20px rgba(10, 26, 47, 0.08)",
        "card-hover": "0 8px 28px rgba(10, 26, 47, 0.12)",
      },
    },
  },
  plugins: [],
};
