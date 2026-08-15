/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f5fa',
          100: '#d9e5f2',
          200: '#b3cbe5',
          300: '#7ea6d1',
          400: '#4a7bb5',
          500: '#2f5c96',
          600: '#234a7d',
          700: '#1c3a63',
          800: '#152b49',
          900: '#0d1b30',
          950: '#070f1c',
        },
        orange: {
          400: '#ff8a3d',
          500: '#ff6b00',
          600: '#e85f00',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'scale-in': 'scale-in 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
