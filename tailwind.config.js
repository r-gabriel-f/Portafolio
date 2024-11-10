/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('../src/assets/img/fondo.webp')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}