/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF5722',
        'brand-blue': '#2196F3',
        'brand-green': '#4CAF50',
        'coconut-white': '#FBF9F6',
        'soft-warm-grey': '#44403C',
        'terracotta': '#C27D38',
        'forest-green': '#4A5745',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'handwriting': ['Dancing Script', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'bounce': 'bounce 2s infinite',
        'slow-zoom': 'slowZoom 20s infinite alternate ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '40%': { transform: 'translateX(-50%) translateY(-10px)' },
          '60%': { transform: 'translateX(-50%) translateY(-5px)' },
        },
        slowZoom: {
          'from': { backgroundSize: '100% auto' },
          'to': { backgroundSize: '105% auto' },
        },
      },
    },
  },
  plugins: [],
};