import { z } from "zod";

//ساختار داده
export const ContactSchema = z.object({
  name: z.string().min(3, "نام باید حداقل 3 حرف باشد"),
  email: z.string().email("ایمیل نا معتبر است"),
  message: z.string().min(10, "پیام باید حداقل 10 حرف باشد"),
});

export type ContactType = z.infer<typeof ContactSchema>;

// ساختار نتیجه
export type FormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string;
  status?: "idle" | "submitting" | "success" | "error";
};
