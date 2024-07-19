"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { db } from "@/lib/db";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Sign in success" };
  } catch (error) {
    return { error: "Sign in failed" };
  }
};
