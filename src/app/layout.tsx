import type { Metadata } from "next";

import fonts from "@/src/utils/fonts/createFonts";

export const metadata: Metadata = {
  title: "My App",
  description: "My App is a...",
};

const createdFonts = fonts.map((font) => font.variable).join(" ");
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={createdFonts}>
      <head>
        <title>Discord</title>
        <meta name="description" content="My App is a Discord clone" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
