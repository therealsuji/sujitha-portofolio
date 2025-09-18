import "../styles/globals.scss";
import React from "react";
import { FCC } from "../utils/types";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "@/components/ui/Toast";
import { PostHogProvider } from "../components/PostHogProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sujitha Wijewantha | Fullstack Engineer",
  description: "Fullstack Engineer building robust web experiences with modern tech. Specializing in React, Next.js, TypeScript, and Node.js.",
  viewport: "initial-scale=1.0, width=device-width",
  themeColor: "#ffffff",
  metadataBase: new URL('https://sujitha.dev'), // Replace with your actual domain
  openGraph: {
    title: "Sujitha Wijewantha | Fullstack Engineer",
    description: "Fullstack Engineer building robust web experiences with modern tech. Specializing in React, Next.js, TypeScript, and Node.js.",
    url: 'https://sujitha.dev', // Replace with your actual domain
    siteName: 'Sujitha Wijewantha',
    images: [
      {
        url: '/og-image.png', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Sujitha Wijewantha - Fullstack Engineer',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sujitha Wijewantha | Fullstack Engineer",
    description: "Fullstack Engineer building robust web experiences with modern tech.",
    images: ['/og-image.png'], // Same image as OG
    creator: '@therealsuji', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <PostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
};

export default RootLayout;
