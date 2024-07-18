import { columns } from "@/app/(dashboard)/data/columns";
import { DataTable } from "@/components/ui/data-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
export const SessionsClient = ({ initialData }: { initialData: any[] }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">All Sessions</h1>
        <div className="flex items-center justify-center gap-5 w-full md:w-fit">
          <Button className="w-full md:w-fit" variant="outline">
            <Plus className="h-4 w-4 mr-2" /> Session
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="x1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x1">x1</SelectItem>
              <SelectItem value="x2">x2</SelectItem>
              <SelectItem value="x3">x3</SelectItem>
              <SelectItem value="x4">x4</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
