"use client";

import { submitContact } from "@/actions/contact";
import { FormState } from "@/lib/types";
import { Button } from "./ui/button";
import { useActionState } from "react";

export default function ContactForm() {
  const initialState: FormState = {
    errors: {},
    message: undefined,
  };
  const [state, formAction] = useActionState(submitContact, initialState);
  return (
    <form action={formAction}>
      <div className=" flex flex-col gap-8 rounded-lg bg-gray-50 px-6 pb-4 pt-8 justify-center w-[600px] mx-auto">
        <h1 className="text-2xl">تماس با ما</h1>

        <div className="grid gap-4">
          <div>
            <label htmlFor="email" className=" mb-3 text-gray-900">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="  w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          {state.errors?.email?.map((error) => (
            <p key={error} className="text-red-500 text-sm mt-1">
              {error}
            </p>
          ))}

          <div>
            <label htmlFor="name" className="mb-3 text-gray-900">
              نام
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="  w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            {state.errors?.name?.map((error) => (
              <p key={error} className="text-red-500 text-sm mt-1">
                {error}
              </p>
            ))}
          </div>

          <div>
            <label htmlFor="message" className=" mb-3 text-gray-900">
              پیام
            </label>
            <textarea
              name="message"
              id="message"
              className="  w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            ></textarea>
            {state.errors?.message?.map((error) => (
              <p key={error} className="text-red-500 text-sm mt-1">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div>
          <Button type="submit" disabled={state.status === "submitting"}>
            {state.status === "submitting" ? "در حال ارسال..." : "ارسال پیام"}
          </Button>
        </div>

        {state.message && (
          <p
            className={`text-sm ${
              state.status === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
