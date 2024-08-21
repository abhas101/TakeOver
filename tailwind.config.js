/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pink" : "#FF9898",
        "takeover" : "#373737"
      },
      fontFamily :{
        main : ["Hammersmith One", "sans-serif"],
        hero : ["Karantina", "sans-serif"]
      }
    }
  },
  plugins: [],
}