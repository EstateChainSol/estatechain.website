/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#1E293B',
          dark: '#0F172A',
        },
        accent: {
          DEFAULT: '#38BDF8',
          dark: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

