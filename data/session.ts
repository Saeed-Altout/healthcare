import { db } from "@/lib/db";

export const getAllSessions = async () => {
  try {
    return await db.sessions.findMany();
  } catch {
    return [];
  }
};
