import type { Metadata } from "next";
import "@/index.css";
import fonts from "@/utils/fonts/createFonts";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/FirebaseConfig";
import StoreProvider from "../store/StoreProvider";
import AuthProvider from "@/components/common/AuthProvider";

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
