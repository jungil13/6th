/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#f9f7f0',
          200: '#f4f1e1',
          300: '#eee8cf',
        },
        tan: {
          50: '#f7f3f0',
          100: '#ece3db',
          200: '#dfd1c3',
          300: '#d1baaa',
          400: '#b89987',
        },
        khaki: {
          100: '#f0e68c',
          200: '#bdb76b',
          300: '#ae9b7a',
          400: '#8b7d6b',
        },
        brown: {
          50: '#fdf8f5',
          100: '#f3e5d8',
          200: '#e1c8b4',
          300: '#c6a38b',
          400: '#a67c52',
          500: '#8b5e34',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e9eee9',
          200: '#d3ddd3',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
