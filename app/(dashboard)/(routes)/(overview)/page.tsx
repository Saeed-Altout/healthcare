import { getAllSessions, getLastSession } from "@/data/session";
import { OverviewClient } from "./_components/client";

export default async function OverviewPage() {
  const sessions = await getAllSessions();
  const lastSession: any = await getLastSession();

  return <OverviewClient initialData={sessions} currentSession={lastSession} />;
}
