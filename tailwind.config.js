/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,ts,tsx,jsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
