module.exports = {
  mode: 'jit', // to use arbitrary values
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '320px',
      md: '481px',
      lg: '769px',
      xl: '1440px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
