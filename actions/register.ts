"use server";

import * as z from "zod";
import { registerSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const register = async (data: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(data);
  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { name, email, password } = validatedFields.data;

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email is taken." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return { success: "Sign up success" };
  } catch (error) {
    return { error: "Sign up failed" };
  }
};
