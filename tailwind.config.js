/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Add a custom breakpoint
      custom: "1100px",
    },
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
        ggSansNormal: ["var(--font-normalggsans)", "sans-serif"],
        ggSansNormalItalic: ["var(--font-normalitalicggsans)", "sans-serif"],
        ggSansMediumItalic: ["var(--font-mediumitalicggsans)", "sans-serif"],
        ggSansBold: ["var(--font-boldggsans)", "sans-serif"],
        ggSansExtraBold: ["var(--font-extraboldggsans)", "sans-serif"],
        ggSansSemiBold: ["var(--font-semiboldggsans)", "sans-serif"],
        ggSansMedium: ["var(--font-mediumggsans)", "sans-serif"],
        abcginto: ["var(--font-abcginto)"], // Assuming serif as a fallback
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

        ".scrollbar-chat": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(40 40 40) rgb(63 63 70)",
          scrollbarHeight: "3px",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
