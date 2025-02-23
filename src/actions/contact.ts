"use server";

import { ContactSchema, FormState } from "../lib/types";

export async function submitContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // تبدیل FormData به object

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  // اعتبارسنجی
  const validatedFields = ContactSchema.safeParse(rawData);

  // برگرداندن خطاها
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "فیلدها را به درستی پر کنید",
      status: "error",
    };
  }

  // const { name, email, message } = validatedFields.data;

  try {
    // 4. ذخیره در دیتابیس
    // await db.contact.create({ data: { name, email, message } })

    // 5. برگرداندن پیام موفقیت

    return {
      message: "پیام شما با موفقیت ارسال شد",
    };
  } catch (error) {
    return {
      message: "خطا در ارسال پیام",
      status: "error",
    };
  }
}
