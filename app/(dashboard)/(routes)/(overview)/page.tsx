import { getAllSessions } from "@/data/session";
import { OverviewClient } from "./_components/client";

export default async function OverviewPage() {
  const sessions = await getAllSessions();
  //   const sessions: {
  //     id: number;
  //     glucose: string;
  //     duration: string;
  //     createdAt: Date;
  //     stopTime: Date | null;
  // }[]

  return <OverviewClient initialData={sessions} />;
}
