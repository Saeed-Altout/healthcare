import {
  BarChart,
  Calendar,
  Clock,
  Hash,
  Hourglass,
  Info,
  Timer,
  Trash,
} from "lucide-react";

import { AreaGlucose } from "@/components/charts/area-glucose";
import { RadialGlucose } from "@/components/charts/radial-glucose";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { getSessionById } from "@/data/session";
import { date } from "zod";
import { format } from "date-fns";

export default async function SessionPage({
  params,
}: {
  params: { id: string };
}) {
  const session: any = await getSessionById(+params.id);
  const renderStatus = (level: number) => {
    if (level > 120) {
      return "High";
    } else if (level < 80) {
      return "Low";
    } else {
      return "Normal";
    }
  };
  return (
    <>
      <Heading
        title={`Session (${session?.id || 1})`}
        description="All information about this session you will find here."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <p className="font-medium flex items-center justify-start">
          <Hash className="h-4 w-4 mr-2" />
          ID: <span>{params.id}</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Calendar className="h-4 w-4 mr-2" />
          Date: <span>{format(session?.createdAt, "dd - MMM - YYY")}</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Timer className="h-4 w-4 mr-2" />
          Time: <span> {format(session?.createdAt, "hh:mm a")}</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Hourglass className="h-4 w-4 mr-2" />
          Duration:
          <span>
            {+session?.duration == 60
              ? "1x"
              : +session?.duration == 120
              ? "2x"
              : +session?.duration == 180
              ? "3x"
              : +session?.duration == 240
              ? "4x"
              : "unknown"}
          </span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <BarChart className="h-4 w-4 mr-2" />
          Glucose: <span>{session?.glucose} mg/dl</span>
        </p>
        <p className="font-medium flex items-center justify-start">
          <Info className="h-4 w-4 mr-2" />
          Status: <span>{renderStatus(+session?.glucose || 0)}</span>
        </p>
      </div>
      <div className="mt-5 grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RadialGlucose data={session} />
        <AreaGlucose data={session} />
      </div>
    </>
  );
}
