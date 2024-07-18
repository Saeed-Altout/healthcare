"use client";

import { ColumnDef } from "@tanstack/react-table";
import { RowActions } from "./row-actions";

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
    cell: ({ row }) => <RowActions data={row.original} />,
  },
];
