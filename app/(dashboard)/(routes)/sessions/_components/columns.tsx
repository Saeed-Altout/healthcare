"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";
import { Sessions } from "@prisma/client";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Sessions>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <p className="text-nowrap">
        {format(row.original.createdAt, "dd - MMM - YYY")}
      </p>
    ),
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "glucose",
    header: "Glucose",
    cell: ({ row }) => (
      <p className="text-nowrap">{Number(row.original.glucose).toFixed(2)}</p>
    ),
  },
  {
    accessorKey: "glucose",
    header: "Status",
    cell: ({ row }) => {
      const level = +row.original.glucose;
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
        <p
          className={cn(
            level > 120 && "text-red-400",
            level < 80 && "text-gray-400",
            "text-emerald-400"
          )}
        >
          {renderStatus(level)}
        </p>
      );
    },
  },

  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => <RowActions data={row.original} />,
  },
];
