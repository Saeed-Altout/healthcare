import { getAllSessions } from "@/data/session";
import { SessionsClient } from "./_components/client";

export default async function SessionsPage() {
  const sessions = await getAllSessions();

  return <SessionsClient initialData={sessions} />;
}
