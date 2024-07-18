import { RadialGlucose } from "@/components/charts/radial-glucose";
import { AreaGlucose } from "@/components/charts/area-glucose";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/(dashboard)/data/columns";
import { Heading } from "@/components/heading";

export const OverviewClient = ({ initialData }: { initialData: any[] }) => {
  return (
    <>
      <Heading />
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RadialGlucose />
        <AreaGlucose />
      </div>
      <Separator />
      <h1>Last Sessions</h1>
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
