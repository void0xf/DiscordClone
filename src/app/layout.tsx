import type { Metadata } from "next";
import "@/index.css";
import fonts from "@/utils/fonts/createFonts";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/FirebaseConfig";
import StoreProvider from "../store/StoreProvider";
import AuthProvider from "@/components/common/AuthProvider";

export const metadata: Metadata = {
  title: {
    default: "Discord",
    template: "Discord | %s"
  },
  description: "Discord Clone - A modern communication app",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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
        <meta name="description" content="My App is a Discord clone" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <StoreProvider>
          <AuthProvider>
            <div id="root" className={createdFonts}>
              {children}
            </div>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
