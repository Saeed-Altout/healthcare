"use client";

import { Plus } from "lucide-react";
import { columns } from "./columns";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { useSessionModal } from "@/hooks/use-session-modal";
import { Sessions } from "@prisma/client";

export const SessionsClient = ({
  initialData,
}: {
  initialData: Sessions[];
}) => {
  const sessionModal = useSessionModal();
  return (
    <>
      <Heading
        title="All Sessions"
        description="Showing all sessions from one place."
      >
        <Button variant="outline" onClick={() => sessionModal.onOpen()}>
          <Plus className="h-4 w-4 mr-2" />
          New Session
        </Button>
      </Heading>
      <Separator />
      <DataTable columns={columns} data={initialData} />
    </>
  );
};
