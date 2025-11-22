/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9f1239',
          900: '#831843',
        },
        cream: {
          50: '#fefdfb',
          100: '#fef9f3',
          200: '#fdf2e7',
          300: '#fce8d5',
          400: '#fad8b8',
          500: '#f7c494',
          600: '#f4a96a',
          700: '#f08d3f',
          800: '#e6731a',
          900: '#d45f0a',
        },
        muted: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #fdf2f8 0%, #fef9f3 50%, #fafafa 100%)',
        'gradient-warm': 'linear-gradient(135deg, #fce7f3 0%, #fdf2e7 50%, #f5f5f5 100%)',
      },
    },
  },
  plugins: [],
}

