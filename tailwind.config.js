/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Clash Display', 'ui-sans-serif', 'system-ui'],
        'body': ['Archivo', 'ui-monospace', 'system-ui'],
      }
    },
  },
  plugins: [],
}
