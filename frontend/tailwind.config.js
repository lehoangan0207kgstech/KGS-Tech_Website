/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'beVietnam': ['Be Vietnam', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'notoSansJP': ['Noto Sans JP', 'sans-serif'],
      },
      colors: {
        primary: '#1F2937',     
        secondary: '#FFC470',   
        accent: '#FFB000',  
      },
    },
  },
  plugins: [],
}