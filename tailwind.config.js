export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2.5rem',
          lg: '5rem',
          xl: '4.375rem',
        },
      },
      colors: {
        primary: {
          50: '#f5f2ff',
          100: '#ece8ff',
          200: '#dbd4ff',
          300: '#c2b1ff',
          400: '#a585ff',
          500: '#834bff',
          600: '#7a30f7',
          700: '#6c1ee3',
          800: '#5a18bf',
          900: '#4b169c',
        },
      },
    },
  },
  plugins: [],
};
