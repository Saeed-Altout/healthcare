import { columns } from "./columns";
import { Heading } from "./heading";

import { RadialGlucose } from "@/components/charts/radial-glucose";
import { AreaGlucose } from "@/components/charts/area-glucose";

import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { Sessions } from "@prisma/client";

export interface Session extends Sessions {
  points: { id: any; value: any }[];
}

export const OverviewClient = ({
  initialData,
  currentSession,
}: {
  initialData: Sessions[];
  currentSession: Session;
}) => {
  return (
    <>
      <Heading />
      <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RadialGlucose data={currentSession} />
        <AreaGlucose data={currentSession} />
      </div>
      <Separator />
      <h1 className="text-xl font-medium">Last Sessions</h1>
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
