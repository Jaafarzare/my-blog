import { Button } from "./ui/button";

export default function DesignTogether() {
  return (
    <div className="flex  flex-col gap-12 mb-5">
      <div className="text-center flex flex-col gap-4">
        <div className="text-center text-5xl font-bold">
          <h3> بیا باهم طراحی کنیم</h3>
        </div>
        <div>
          <p>
            رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در
            تعامل هستید. <br />
            این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها، منوهای ناوبری و سایر
            عناصر بصری است.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4   ">
        <input
          type="text"
          name="contact"
          id="contact"
          placeholder="ایمیلت را وارد کن"
          className="py-2 px-4 rounded-lg basis-96 border border-gray-200"
        />
        <Button type="submit" name="contact">
          با من تماس بگیر
        </Button>
      </div>
    </div>
  );
}
