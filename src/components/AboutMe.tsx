import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section>
      <div className="flex items-center gap-8 px-5">
        <div className="md:basis-7/12 flex flex-col gap-6">
          <div className="flex flex-col gap-4 ">
            <p>سلام</p>
            <p className="text-orange-500 text-lg">من جعفر زارع هستم</p>
            <p className="text-4xl font-bold">برنامه نویس</p>
            <p className="text-4xl font-bold">Next.js</p>
            <p>
              رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن
              در تعامل هستید. این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها،
              منوهای ناوبری و سایر عناصر بصری است. تجربه کاربر (UX) به کل تعامل
              شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.
            </p>
          </div>

          <div>
            <Link href={"/contact"}>
              <Button className="text-lg">با من تماس بگیر</Button>
            </Link>
          </div>
        </div>
        <div className="md:basis-5/12 hidden md:flex">
          <Image src={"/mejob.png"} alt="programing" width={800} height={800} />
        </div>
      </div>
    </section>
  );
}
