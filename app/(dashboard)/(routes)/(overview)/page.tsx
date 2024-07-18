import { data } from "@/config";
import { OverviewClient } from "./_components/client";

export default async function OverviewPage() {
  return (
    <main className="flex flex-col gap-5">
      <OverviewClient initialData={data} />
    </main>
  );
}
