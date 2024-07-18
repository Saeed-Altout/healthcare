"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, Info, Trash } from "lucide-react";

export type Session = {
  id: string;
  sequence: string;
  date: string;
  time: string;
  duration: "1x" | "2x" | "3x" | "4x";
  status: "High" | "Low" | "Normal" | "Unknown";
  glucose: string;
};

export const columns: ColumnDef<Session>[] = [
  {
    accessorKey: "sequence",
    header: "ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "glucose",
    header: "Glucose",
  },
  {
    accessorKey: "status",
    header: "Status",
  },

  {
    accessorKey: "id",
    header: "",
    cell: () => (
      <div className="flex items-center gap-2 justify-end">
        <Button variant="outline" size="icon">
          <Copy className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon">
          <Info className="h-5 w-5" />
        </Button>
        <Button variant="destructive" size="icon">
          <Trash className="h-5 w-5" />
        </Button>
      </div>
    ),
  },
];
