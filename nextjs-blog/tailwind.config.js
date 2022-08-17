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
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['24px', '28px'],
      xl: ['36px', '32px'],
    }
  },
  plugins: [],
}