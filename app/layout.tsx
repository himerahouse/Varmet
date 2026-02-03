  import type { Metadata } from "next";
  import { Geist, Geist_Mono } from "next/font/google";
  import "./globals.css";
import Nav from "./components/Nav";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Varmet – Industrial & Environmental Solutions",
    description:
      "Varmet provides industrial and environmental solutions tailored for modern businesses.",
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
  <header className="border-b">
    <Nav />
  </header>

  <main className="min-h-screen">
    {children}
  </main>

  <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-white/70">
            © {new Date().getFullYear()} Varmet. All rights reserved.
          </p>
        </div>
      </footer>
</body>

      </html>
    );
  }
