/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Montserrat"', 'sans-serif']
    }
  },
  plugins: [
      daisyui,
  ],
  daisyui: {
    themes: ["light", "dark", "dracula", "valentine", "garden","forest"],
  },
}

