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
        primary: '#000000',     
        secondary: '#935A38',   
        accent: '#1F2937',  
        bt_hover: '501A00',
      },
    },
  },
  plugins: [],
}