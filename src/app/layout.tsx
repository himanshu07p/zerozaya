import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Zerozaya - Discover Local Food",
  description: "Explore the best local food spots near you. Browse menus, discover dishes, and find your next favorite meal.",
  keywords: ["food", "restaurant", "menu", "local food", "discover", "zerozaya"],
  authors: [{ name: "Zerozaya" }],
  openGraph: {
    title: "Zerozaya - Discover Local Food",
    description: "Explore the best local food spots near you.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#ffffff",
};


import SmoothScroll from "@/components/providers/SmoothScroll";
import BottomNav from "@/components/layout/BottomNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pb-16 md:pb-0">{children}</main>
          <BottomNav />
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
