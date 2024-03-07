/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: '#404eed',
        notQuiteBlack: '#23272a',
        lightBlue: '#5865f2'
      },
    fontFamily: {
      ggsansNormal: ['ggSansNormal', 'sans'],
      ggSansBold: ['ggSansBold', 'sans'],
      ggSansMedium: ['ggSansMedium', 'sans'],
      abcginto: ['abcginto', 'sans'],
      },

    },
  },
  plugins: [],
}

