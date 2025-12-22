import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linkesti",
  description: "Препознатлив моден избор во Битола со доследност, искреност и квалитет.",
  icons: {
    icon: "/linkesti-logo.jpg", 
    shortcut: "/linkesti-logo.jpg",
    apple: "/linkesti-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        <Navbar />

        {/* Page content */}
        <main className="pt-24"> 
          {/* Add padding-top so content isn't hidden behind fixed navbar */}
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
