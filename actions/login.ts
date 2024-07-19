"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (data: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { email, password } = validatedFields.data;
};
