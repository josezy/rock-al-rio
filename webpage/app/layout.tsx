import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Festival Internacional Rock al Río | 20 años de historia cultural",
  description: "El festival de rock más grande del oriente antioqueño. 20 años de historia cultural en Rionegro, Antioquia con más de 300 bandas participantes desde 2009. Un catalizador de desarrollo socioeconómico y cultural.",
  keywords: [
    "Rock al Río",
    "Festival Internacional Rock al Río",
    "festival rock Colombia",
    "Rionegro Antioquia",
    "oriente antioqueño",
    "música rock",
    "festival cultural",
    "bandas nacionales",
    "bandas internacionales",
    "20 años historia",
    "300 bandas",
    "desarrollo cultural",
    "Alberto Grisales",
    "Rock Colombia"
  ],
  authors: [{ name: "Festival Internacional Rock al Río" }],
  creator: "Festival Internacional Rock al Río",
  publisher: "Festival Internacional Rock al Río",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rockalriocolombia.org'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Festival Internacional Rock al Río | 20 años de historia cultural",
    description: "El festival de rock más grande del oriente antioqueño. 20 años uniendo generaciones a través de la música en Rionegro, Antioquia.",
    url: 'https://rockalriocolombia.org',
    siteName: 'Festival Internacional Rock al Río',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Festival Internacional Rock al Río',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Festival Internacional Rock al Río | 20 años de historia cultural",
    description: "El festival de rock más grande del oriente antioqueño. 20 años uniendo generaciones a través de la música.",
    images: ['/banner.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
