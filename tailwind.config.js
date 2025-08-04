/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f0',
          100: '#faf0e0',
          200: '#f4ddb8',
          300: '#ecc48b',
          400: '#e3a55c',
          500: '#d48806',
          600: '#b76f05',
          700: '#9a5a08',
          800: '#7d480c',
          900: '#663b0d',
        },
        luxury: {
          dark: '#0a0a0a',
          charcoal: '#1a1a1a',
          gold: '#d4af37',
          cream: '#f8f6f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        luxury: {
          primary: '#d4af37',
          secondary: '#1a1a1a',
          accent: '#d48806',
          neutral: '#0a0a0a',
          'base-100': '#ffffff',
          'base-200': '#f8f6f0',
          'base-300': '#e5e5e5',
        },
      },
    ],
  },
};