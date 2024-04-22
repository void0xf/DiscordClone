/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "elevation-low":
          "0 1px 0 hsl(0, 0%, 0.8%) / 20%, 0 1.5px 0 hsl(240, 7.7%, 2.5%) / 5%, 0 2px 0 hsl(0, 0%, 0.8%) / 5%",
      },
      colors: {
        brandColor: "#404eed",
        notQuiteBlack: "#23272a",
        inputColor: "#1F2021",
        lightBlue: "#5865f2",
        whiteMain: "#F2F3F5",
        darkWhite: "#B5BAC1",
        mainTheme: "#262626",
        veryLightBlue: "#00a8fc",

        //SidebarColors
        SidebarServerWithoutIcon: "#313338",
        SidebarBackground: "#1e1f22",
        SidebarUltityIcon: "#23a559",
        SidebarGulidSeparator: "hsl(228 0.06 32.5% / 0.48)",
        SidebarTooltip: "#111214",
        SidebarTooltipText: "#d5d8dc",

        LightGray: "#313338",

        SelectedFriendTab: "#4E505899",
        SelectedUserTab: "#4E50584C",
        //AppNavbar
        TextGray: "#949ba4",
        HoverText: "#35373c",
        DirectMessageStrangerInfoButton: "#4e5058",
        MessageInputBackground: "#383a40",
        DarkGray: "#232428",

        FriendActionIconBackground: "#2b2b31",

        DmsNavigationBg: "#2b2d31",

        //Auth
        FromBackground: "#313338",
      },
      fontFamily: {
        ggsansNormal: ["ggSansNormal", "sans"],
        ggSansBold: ["ggSansBold", "sans"],
        ggSansMedium: ["ggSansMedium", "sans"],
        abcginto: ["abcginto", "sans"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(0 0 0) rgb(63 63 70)",
          scrollbarHeight: "3px",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgb(31 29 29)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
