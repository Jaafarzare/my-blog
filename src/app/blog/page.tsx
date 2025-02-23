import Breadcrumb from "@/components/Breadcrumb";
import { getSortedPostsData } from "@/lib/post";
import Link from "next/link";

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
