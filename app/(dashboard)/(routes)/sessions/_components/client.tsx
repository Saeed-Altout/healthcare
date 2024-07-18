import { Plus } from "lucide-react";

import { columns } from "./columns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

export const SessionsClient = ({ initialData }: { initialData: any[] }) => {
  return (
    <>
      <Heading
        title="All Sessions"
        description="Showing all sessions from one place."
      >
        <div className="flex items-center justify-end gap-5 w-fit">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New Session
          </Button>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="x1 - 1min" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="x1">x1 - 1min</SelectItem>
              <SelectItem value="x2">x2 - 2min</SelectItem>
              <SelectItem value="x3">x3 - 3min</SelectItem>
              <SelectItem value="x4">x4 - 4min</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Heading>
      <Separator />
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
