import { columns } from "@/app/(dashboard)/data/columns";
import { DataTable } from "@/components/ui/data-table";

export const SessionsClient = ({ initialData }: { initialData: any[] }) => {
  return (
    <>
      <h1 className="text-xl">All Sessions</h1>
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
