"use client";

import { Plus } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const Heading = () => {
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
      <div className="flex items-center justify-center gap-5 w-full md:w-fit">
        <Button
          className="w-full md:w-fit"
          variant="outline"
          onClick={() => {}}
        >
          <Plus className="h-4 w-4 mr-2" />
          New session
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
    </div>
  );
};
