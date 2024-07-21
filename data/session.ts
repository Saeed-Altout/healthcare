import { db } from "@/lib/db";

export const getAllSessions = async () => {
  try {
    return await db.sessions.findMany();
  } catch {
    return [];
  }
};

export const getLastSession = async () => {
  try {
    return await db.sessions.findFirst({
      orderBy: { id: "desc" },
      include: { points: true },
    });
  } catch {
    return null;
  }
};

export const getSessionById = async (id: number) => {
  try {
    return await db.sessions.findUnique({
      include: { points: true },
      where: { id },
    });
  } catch {
    return null;
  }
};
