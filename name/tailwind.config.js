/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'secondary':"#1C1F26",
        'primary':"#0E1217",
        'pbroder':"#a8b3cf",

        'ptextcolor':"#9CA7C2"
      }
    }
  },
  plugins: [],
}