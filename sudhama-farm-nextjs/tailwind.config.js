/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#44403C',
        'background': '#F9F9F7',
        'primary': '#2F5233', // A guess for --green-color
        'accent': '#B85C38', // A guess for --accent-color (Terracotta)
        'peacock-blue': '#005F73', // A guess from the logo description
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        handwriting: ['Dancing Script', 'cursive'],
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
      },
      keyframes: {
        'slow-zoom': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};
