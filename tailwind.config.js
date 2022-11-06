module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    fontFamily: {
      bebas: 'Bebas Neue, League Gothic, sans-serif',
      glory: 'Glory, League Gothic, sans-serif',
      racing: 'Racing Sans One, League Gothic, sans-serif',
    },
  },
  plugins: [],
};
