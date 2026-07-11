/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        rubik: ['"Rubik Bubbles"', 'sans-serif'],
        Oswald:['Oswald' , 'cursive'],
        Poppins:['Poppins', 'sans-serif'],
			  BebasNeue:['Bebas Neue'],
			  AlumniSansSC:['Alumni Sans SC'],
			  Lobster:['Lobster'],
			  PermanentMarker:['Permanent Marker'],
			  Special:['Special Gothic Expanded One'],
			  UnicaOne:['Unica One'],
      },
    },
  },
  plugins: [],
}
