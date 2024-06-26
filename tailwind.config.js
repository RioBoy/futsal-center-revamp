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
        neutral: {
          50: '#f6f7f8',
          100: '#eaecef',
          200: '#d9dee4',
          300: '#b5bec9',
          400: '#a1abb9',
          500: '#8994a8',
          600: '#788198',
          700: '#6b728a',
          800: '#5b6072',
          900: '#4b505d',
        },
        gray: {
          50: '#f7f7f7',
          100: '#ededed',
          200: '#dfdfdf',
          300: '#c8c8c8',
          400: '#b2b2b2',
          500: '#999999',
          600: '#888888',
          700: '#7b7b7b',
          800: '#676767',
          900: '#545454',
        },
      },
      fontSize: {
        '5xl': ['2.625rem', { lineHeight: '3.938rem' }],
      },
      screens: {
        xsm: { max: '376px' },
        sm: { max: '426px' },
      },
      opacity: {
        35: '0.35',
      },
    },
  },
  plugins: [],
};
