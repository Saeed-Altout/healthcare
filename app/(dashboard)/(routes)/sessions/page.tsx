import { data } from "@/config";
import { SessionsClient } from "./_components/client";

export default function SessionsPage() {
  return (
    <main className="flex flex-col gap-5">
      <SessionsClient initialData={data} />
    </main>
  );
}
