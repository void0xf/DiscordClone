/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'elevation-low': '0 1px 0 hsl(0, 0%, 0.8%) / 20%, 0 1.5px 0 hsl(240, 7.7%, 2.5%) / 5%, 0 2px 0 hsl(0, 0%, 0.8%) / 5%',
      },
      colors: {
        brandColor: '#404eed',
        notQuiteBlack: '#23272a',
        lightBlue: '#5865f2',
        //SidebarColors
        SidebarServerWithoutIcon: '#313338',
        SidebarBackground: '#1e1f22',
        SidebarUltityIcon: '#23a559',
        SidebarGulidSeparator: 'hsl(228 0.06 32.5% / 0.48)',
        SidebarTooltip: '#111214',
        SidebarTooltipText: '#d5d8dc',

        //AppNavbar
        TextGray: '#949ba4',
        HoverText: '#35373c',


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

