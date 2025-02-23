"use client";

import { Project, projectCategories } from "@/data/data";
import Image from "next/image";
import { useState } from "react";

export default function MyProjects() {
  const categories = Object.keys(projectCategories);

  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="text-center flex flex-col gap-4">
          <div className="text-center text-5xl font-bold">
            <h3>پروژه های من</h3>
          </div>
          <div>
            <p>
              رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن
              در تعامل هستید. <br /> این شامل صفحه نمایش، دکمه ها، کلیدها،
              نمادها، منوهای ناوبری و سایر عناصر بصری است.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center border-b">
            {categories.map((category) => (
              <button
                key={category}
                className={`py-2 px-4 ${
                  activeTab === category
                    ? "border-b-2 border-orange-500 text-orange-500"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projectCategories[activeTab].map((project: Project) => (
                <div
                  key={project.id}
                  className="border rounded-lg p-4 flex flex-col items-center gap-2"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover rounded-md"
                    width={400}
                    height={600}
                  />
                  <h3 className=" text-lg font-semibold">{project.title}</h3>
                  <p className=" text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
