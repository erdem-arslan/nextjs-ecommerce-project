/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default-bg': '#f5f5f7',
      },
      boxShadow: {
        'inset-shadow': 'inset 0px 1px 3px #013',
        'shadow-2': '-12px -5px 7px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}
