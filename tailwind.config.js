/** @type {import('tailwindcss').Config} */
module.exports = {
  // We control dark mode via `html.dark` in ThemeEffect.
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
