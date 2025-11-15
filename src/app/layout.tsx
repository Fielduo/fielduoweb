import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./layout.css";
import EarlyBirdPopup from "./Components/EarlyBirdPopup";
import Whatsapp from "./Components/Whatsaap";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.fielduo.com").replace(/\/$/, "");

export const metadata: Metadata = {
  title: {
    default: "Next-Gen Field Service Management Software ",
    template: "%s | Fielduo",
  },
  metadataBase: new URL(siteUrl),
  description:
    "All-in-one Field Service Management Software for efficient scheduling, invoicing, and team tracking. Simplify operations with Fielduo.",
  keywords: [
    "field service management",
    "best field services",
    "FSM software",
    "field service software UK",
    "field service software Europe",
    "dispatching",
    "work order management",
    "mobile workforce",
    "Fielduo",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fielduo - Next-Gen Field Service Management Software",
    description:
      "All-in-one Field Service Management Software for efficient scheduling, invoicing, and team tracking. Simplify operations with Fielduo.",
    siteName: "Fielduo",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Streamline your field operations with Fielduo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fielduo - Future of Field Service Management",
    description:
      "Best field service management software in USA, UK & Europe. Simplify operations, boost productivity, and deliver exceptional customer experiences with our all-in-one FSM platform.",
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
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XMZBQC7QXV`}
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'G-XMZBQC7QXV', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
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
