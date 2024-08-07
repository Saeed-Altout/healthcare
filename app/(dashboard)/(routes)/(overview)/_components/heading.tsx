"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSessionModal } from "@/hooks/use-session-modal";

export const Heading = () => {
  const sessionModal = useSessionModal();

  return (
    <div className="flex flex-col justify-center items-start gap-y-10 bg-[url('/hero-img.jpg')] h-[450px] bg-top bg-cover rounded-md overflow-hidden p-10 text-center md:text-left">
      <div className="flex flex-col gap-y-1">
        <h1 className="tracking-wide text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-white">
          Welcome, <span className="font-semibold">Mr. Ahmad Ali</span>
        </h1>
        <p className="text-white max-w-3xl tracking-wide">
          Discover the future of healthcare with HB3S. Our platform leverages
          advanced Near Infrared (NIR) technology to provide precise and
          non-invasive glucose measurements. Manage your health effortlessly
          from a single place.
        </p>
      </div>
      <Button
        className="w-full md:w-fit"
        variant="outline"
        onClick={() => sessionModal.onOpen()}
      >
        <Plus className="h-4 w-4 mr-2" />
        New session
      </Button>
    </div>
  );
};
