"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

type BreadcrumbProps = {
  postTitle?: string;
};

export default function Breadcrumb({ postTitle }: BreadcrumbProps) {
  const pathname = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<
    Array<{ name: string; href: string }>
  >([]);

  useEffect(() => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment && segment !== "blog");
    const pathArray = pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");
      return {
        name: segment,
        href,
      };
    });

    setBreadcrumbs([
      { name: "خانه", href: "/" },
      { name: "وبلاگ", href: "/blog" },
      ...pathArray,
    ]);
  }, [pathname]);

  return (
    <nav className="text-black py-3" aria-label="breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center">
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link
                  href={breadcrumb.href}
                  className="text-orange-600 hover:text-orange-700 transition-all"
                >
                  {breadcrumb.name}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <span className="font-semibold">
                {postTitle || breadcrumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
