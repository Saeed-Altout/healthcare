import {
  BarChart,
  Calendar,
  Clock,
  Hash,
  Info,
  Timer,
  Trash,
} from "lucide-react";

import { AreaGlucose } from "@/components/charts/area-glucose";
import { RadialGlucose } from "@/components/charts/radial-glucose";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { getSessionById } from "@/data/session";

export default async function SessionPage({
  params,
}: {
  params: { id: string };
}) {
  const session: any = await getSessionById(+params.id);

  return (
    <>
      <Heading
        title="Session"
        description="All information about this session you will find here."
      >
        <Button variant="destructive" size="icon">
          <Trash className="h-4 w-4" />
          <span className="sr-only">Trash</span>
        </Button>
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <p className="font-medium flex items-center justify-start">
          <Hash className="h-4 w-4 mr-2" />
          ID: <span>{params.id}</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Calendar className="h-4 w-4 mr-2" />
          Date: <span>14 - jun 2024</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Clock className="h-4 w-4 mr-2" />
          Time: <span>12 : 15 PM</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Timer className="h-4 w-4 mr-2" />
          Duration: <span>1x</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <BarChart className="h-4 w-4 mr-2" />
          Glucose: <span>90 mg</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Info className="h-4 w-4 mr-2" />
          Status: <span>Normal</span>
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RadialGlucose data={session} />
        <AreaGlucose data={session} />
      </div>
    </>
  );
}
