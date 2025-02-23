import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const farYekan = localFont({
  src: "../../public/fonts/Far_Yekan.ttf",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${farYekan.className} antialiased`}
      >
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen grid-cols-12 gap-4">
          {/* هدر */}
          <header className="col-span-12 sticky top-0 z-20 transition-all bg-white/80 border-gray-200 backdrop-blur-lg">
            <Header />
          </header>

          {/* محتوای اصلی */}
          <div className="col-span-12 container mx-auto max-w-screen-xl shadow-md rounded-lg p-4">
            {children}
          </div>

          {/* فوتر */}
          <footer className="col-span-12 p-4">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
