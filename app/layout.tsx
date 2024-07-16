import "../styles/globals.scss";
import React from "react";
import { FCC } from "../utils/types";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "@/components/ui/Toast";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sujitha Wijewantha",
  description: "Sujitha Wijewantha",
  viewport: "initial-scale=1.0, width=device-width",
  themeColor: "#ffffff",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-96x96.png",
    apple: "/apple-icon-180x180.png",
    other: [
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-120x120.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon-precomposed", url: "/apple-icon-152x152.png" },
    ],
  },
};

const RootLayout: FCC = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
