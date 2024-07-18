import { AreaGlucose } from "@/components/charts/area-glucose";
import { RadialGlucose } from "@/components/charts/radial-glucose";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BarChart,
  Calendar,
  Clock,
  Hash,
  Info,
  Timer,
  Trash,
} from "lucide-react";

export default function SessionPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-full space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl">Session {params.id}</h3>
          <Button variant="destructive" size="icon">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
        <Separator />
        <h1 className="text-xl">Information</h1>
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
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RadialGlucose />
        <AreaGlucose />
      </div>
    </>
  );
}
