import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import EarlyBirdPopup from "./Components/EarlyBirdPopup";
import Whatsapp from "./Components/Whatsaap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fielduo – Future of Field Service Management",
    template: "%s | Fielduo",
  },
  description:
    "Simplify your operations, boost productivity, and deliver exceptional customer experiences with our all-in-one FSM platform.",
  openGraph: {
    title: "Fielduo – Future of Field Service Management",
    description:
      "Simplify your operations, boost productivity, and deliver exceptional customer experiences with our all-in-one FSM platform.",
    siteName: "Fielduo",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Fielduo – Future of Field Service Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fielduo – Future of Field Service Management",
    description:
      "Simplify your operations, boost productivity, and deliver exceptional customer experiences with our all-in-one FSM platform.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
            <EarlyBirdPopup />
            <Whatsapp />
      </body>
    </html>
  );
}
