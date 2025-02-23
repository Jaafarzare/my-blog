import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
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
  title: "وبلاگ تکنولوژی | مقالات تخصصی برنامه‌نویسی و طراحی وب",
  description:
    "جدیدترین مقالات برنامه‌نویسی و طراحی وب با تمرکز بر Next.js، React، سئو، و بهینه‌سازی فرانت‌اند. نکات حرفه‌ای و آموزش‌های رایگان در وبلاگ ما بخوانید.",
  keywords: [
    "برنامه‌نویسی",
    "Next.js",
    "React",
    "فرانت‌اند",
    "توسعه وب",
    "آموزش سئو",
    "مقالات تخصصی",
  ],
  openGraph: {
    title: "وبلاگ تخصصی برنامه‌نویسی و توسعه وب",
    description:
      "آموزش‌های حرفه‌ای برنامه‌نویسی و طراحی وب با Next.js، React و سئو. جدیدترین تکنیک‌ها و مقالات تخصصی را در اینجا بخوانید.",
    type: "website",
    url: "https://yourblog.com",
    images: [
      {
        url: "https://yourblog.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "وبلاگ تخصصی برنامه‌نویسی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "وبلاگ برنامه‌نویسی | جدیدترین مقالات و آموزش‌های Next.js و React",
    description:
      "مقالات آموزشی و تخصصی درباره توسعه وب، Next.js، سئو و فرانت‌اند را در وبلاگ ما بخوانید.",
    images: ["https://yourblog.com/twitter-image.jpg"],
  },
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
