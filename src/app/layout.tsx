import type { Metadata } from "next";
import "@/src/index.css";
import fonts from "@/src/utils/fonts/createFonts";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/FirebaseConfig";
import StoreProvider from "../store/StoreProvider";

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
  initializeApp(firebaseConfig);
  return (
    <html lang="en">
      <head>
        <title>Discord</title>
        <meta name="description" content="My App is a Discord clone" />
      </head>
      <body>
        <StoreProvider>
          <div id="root" className={createdFonts}>
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
