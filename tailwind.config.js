/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: '#404eed',
        notQuiteBlack: '#23272a',
        lightBlue: '#5865f2',
        whiteMain: '#F2F3F5',
        darkWhite: '#B5BAC1',
        mainTheme: '#262626',
        veryLightBlue: '#00a8fc',

      },
    fontFamily: {
      ggsansNormal: ['ggSansNormal', 'sans'],
      ggSansBold: ['ggSansBold', 'sans'],
      ggSansMedium: ['ggSansMedium', 'sans'],
      abcginto: ['abcginto', 'sans'],
      },

    },
  },
  plugins: [
    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin":{
          scrollbarWidth:"thin",
          scrollbarColor:"rgb(0 0 0) rgb(63 63 70)",
          scrollbarHeight:"3px"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width:"8px"
          },
          "&::-webkit-scrollbar-track":{
            background:"rgb(31 29 29)"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor:"rgb(31 41 55)",
            borderRadius:"20px",
            border : "1px solid white"
          }
        }
      }
      addUtilities(newUtilities,["responsive","hover"])
    }
  ],
}

