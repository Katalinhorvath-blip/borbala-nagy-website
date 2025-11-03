import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://borbalanagy.com'), // Update with your actual domain
  title: {
    default: "Borbála Nagy - Award-Winning Filmmaker & Director",
    template: "%s | Borbála Nagy - Filmmaker"
  },
  description: "Borbála Nagy is an acclaimed filmmaker and director creating powerful stories through the female gaze. Winner of German Short Film Award, Hungarian Film Critics Prize, and Cannes Producers Network Award.",
  keywords: [
    "filmmaker", "director", "female gaze", "Hungarian cinema", "German cinema", 
    "short films", "feature films", "awards", "Cannes", "Berlinale", "DFFB Berlin",
    "Borbála Nagy", "female director", "European cinema", "art house films",
    "film festival", "screenwriter", "independent cinema", "women in film"
  ],
  authors: [{ name: "Borbála Nagy", url: "https://borbalanagy.com" }],
  creator: "Borbála Nagy",
  publisher: "Borbála Nagy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://borbalanagy.com',
    siteName: 'Borbála Nagy - Filmmaker',
    title: 'Borbála Nagy - Award-Winning Filmmaker & Director',
    description: 'Acclaimed filmmaker creating powerful stories through the female gaze. Winner of German Short Film Award and Hungarian Film Critics Prize.',
    images: [
      {
        url: '/images/about/ABOUT IMAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'Borbála Nagy - Award-Winning Filmmaker and Director',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Borbála Nagy - Award-Winning Filmmaker & Director',
    description: 'Acclaimed filmmaker creating powerful stories through the female gaze. Winner of multiple international awards.',
    images: ['/images/about/ABOUT IMAGE.jpg'],
    creator: '@bori_nagy', // Update with actual Twitter handle
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
        <StructuredData />
      </head>
      <body className={`${outfit.variable}`} style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
