/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#FF385C",
            dark: "#222222",
         },
         fontFamily: {
            body: ["Montserrat"],
         },
      },
   },
   plugins: [],
}
