import Breadcrumb from "@/components/Breadcrumb";
import { getSortedPostsData } from "@/lib/post";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "پست‌های وبلاگ | جدیدترین مقالات برنامه‌نویسی و طراحی وب",
  description:
    "لیست کامل پست‌های وبلاگ شامل جدیدترین مقالات برنامه‌نویسی، طراحی وب، سئو و بهینه‌سازی فرانت‌اند. آموزش‌های رایگان و نکات حرفه‌ای در حوزه‌های Next.js، React و توسعه وب.",
  keywords: [
    "پست‌های وبلاگ",
    "مقالات برنامه‌نویسی",
    "آموزش Next.js",
    "آموزش React",
    "توسعه وب",
    "سئو",
    "فرانت‌اند",
  ],
  openGraph: {
    title: "پست‌های وبلاگ | جدیدترین مقالات برنامه‌نویسی و طراحی وب",
    description:
      "لیست کامل پست‌های وبلاگ شامل جدیدترین مقالات برنامه‌نویسی، طراحی وب، سئو و بهینه‌سازی فرانت‌اند. آموزش‌های رایگان و نکات حرفه‌ای در حوزه‌های Next.js، React و توسعه وب.",
    type: "website",
    url: "https://yourblog.com/blog",
    images: [
      {
        url: "https://yourblog.com/og-blog-image.jpg",
        width: 1200,
        height: 630,
        alt: "پست‌های وبلاگ | جدیدترین مقالات برنامه‌نویسی و طراحی وب",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    title: "پست‌های وبلاگ | جدیدترین مقالات برنامه‌نویسی و طراحی وب",
    description:
      "لیست کامل پست‌های وبلاگ شامل جدیدترین مقالات برنامه‌نویسی، طراحی وب، سئو و بهینه‌سازی فرانت‌اند. آموزش‌های رایگان و نکات حرفه‌ای در حوزه‌های Next.js، React و توسعه وب.",
    images: ["https://yourblog.com/twitter-blog-image.jpg"],
  },
};

export default function BlogPosts() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="flex flex-col gap-8">
      <Breadcrumb />
      <h1 className="text-2xl font-bold ">پست‌های من</h1>
      <ul className="grid grid-cols-12 gap-4 ">
        {allPostsData.map(({ id, title, date }) => (
          <li
            key={id}
            className="bg-gray-100 p-4 rounded-lg col-span-12 md:col-span-6  lg:col-span-4 transition-all hover:bg-gray-200"
          >
            <Link
              href={`/blog/${id}`}
              className="font-bold hover:text-blue-500 transition-all"
            >
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
