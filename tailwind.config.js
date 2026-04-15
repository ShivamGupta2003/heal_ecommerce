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
          50: '#f0f9f6',
          100: '#dcf0e8',
          200: '#bbe2d3',
          300: '#8dcdb8',
          400: '#5ab098',
          500: '#38937d',
          600: '#2a7564',
          700: '#245f52',
          800: '#204d43',
          900: '#1d4039',
          950: '#0c2420',
        },
        accent: {
          400: '#f0b429',
          500: '#de9f1a',
        },
        cream: '#faf7f2',
        sand: '#f0ebe0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
