"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type navItem = {
  id: number;
  title: string;
  link: string;
};

export default function Header() {
  const navItems: navItem[] = [
    { id: 1, title: "صفحه اصلی", link: "/" },
    { id: 2, title: "وبلاگ", link: "/blog" },
    { id: 3, title: "تماس با ما", link: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={clsx("container mx-auto max-w-screen-xl transition-all", {
        "shadow-lg px-4 py-2": isScrolled,
      })}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              className="text-lg flex flex-col gap-1 group"
              key={item.id}
              href={item.link}
            >
              {item.title}
              <span className="h-1 w-0 bg-orange-500 transition-all group-hover:w-full group-hover:rounded-full"></span>
            </Link>
          ))}
        </div>
        <div>
          <Image src={"/logo.png"} alt="logo" width={48} height={48} />
        </div>
      </div>
    </nav>
  );
}
