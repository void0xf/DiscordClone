import localFont from "next/font/local";

const ggSansBold = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-Bold.woff2",
    },
  ],
  variable: "--font-boldggsans",
});

// ggsans Normal
const ggSansNormal = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-Normal.woff2",
    },
  ],
  variable: "--font-normalggsans",
});

// ggsans ExtraBold
const ggSansExtraBold = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-ExtraBold.woff2",
    },
  ],
  variable: "--font-extraboldggsans",
});

// ggsans Medium
const ggSansMedium = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-Medium.woff2",
    },
  ],
  variable: "--font-mediumggsans",
});

// ggsans Medium Italic
const ggSansMediumItalic = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-MediumItalic.woff2",
    },
  ],
  variable: "--font-mediumitalicggsans",
});

// ggsans Normal Italic
const ggSansNormalItalic = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-NormalItalic.woff2",
    },
  ],
  variable: "--font-normalitalicggsans",
});

// ggsans SemiBold
const ggSansSemiBold = localFont({
  src: [
    {
      path: "../../assets/fonts/ggsans-Semibold.woff2",
    },
  ],
  variable: "--font-semiboldggsans",
});

const abcginto = localFont({
  src: [
    {
      path: "../../assets/fonts/ABCGintoNord.otf",
    },
  ],
  variable: "--font-abcginto",
});

export default [
  ggSansBold,
  abcginto,
  ggSansExtraBold,
  ggSansMedium,
  ggSansMediumItalic,
  ggSansNormalItalic,
  ggSansSemiBold,
  ggSansNormal,
];
