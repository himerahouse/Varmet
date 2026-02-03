import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Varmet - Premium Industrial Solutions & Engineering",
  description: "Varmet provides cutting-edge industrial solutions, high-quality engineering services, and reliable industrial equipment. 24/7 expert support for manufacturing and industrial applications.",
  keywords: "industrial solutions, engineering services, industrial equipment, manufacturing, industrial automation",
  authors: [{ name: "Varmet" }],
  robots: "index, follow",
  openGraph: {
    title: "Varmet - Premium Industrial Solutions & Engineering",
    description: "Cutting-edge industrial solutions and engineering services",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Add your OG image path here
        width: 1200,
        height: 630,
        alt: "Varmet Industrial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varmet - Premium Industrial Solutions & Engineering",
    description: "Cutting-edge industrial solutions and engineering services",
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
        {/* Optional: Add favicon links if you have them */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}