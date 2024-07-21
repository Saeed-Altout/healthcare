import { getAllSessions } from "@/data/session";
import { OverviewClient } from "./_components/client";

export default async function OverviewPage() {
  const sessions = await getAllSessions();
  return <OverviewClient initialData={sessions} />;
}
