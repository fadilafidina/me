module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: require('tailwindcss/colors'),
    fontFamily: {
      'sans': ['Lato', 'ui-sans-serif', 'system-ui'],
    }
  },
  plugins: [],
}