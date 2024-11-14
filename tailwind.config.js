/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        fondo: "url('../src/assets/img/fondo.webp')",
        fondoContact:
          "url('https://www.transparenttextures.com/patterns/black-mamba.png')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
