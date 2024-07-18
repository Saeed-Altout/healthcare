"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { id: 1, glucose: 90 },
  { id: 2, glucose: 85 },
  { id: 3, glucose: 88 },
  { id: 4, glucose: 92 },
  { id: 5, glucose: 89 },
  { id: 6, glucose: 91 },
  { id: 7, glucose: 87 },
  { id: 8, glucose: 95 },
  { id: 9, glucose: 80 },
  { id: 10, glucose: 86 },
  { id: 11, glucose: 91 },
  { id: 12, glucose: 83 },
  { id: 13, glucose: 88 },
  { id: 14, glucose: 90 },
  { id: 15, glucose: 85 },
  { id: 16, glucose: 92 },
  { id: 17, glucose: 89 },
  { id: 18, glucose: 94 },
  { id: 19, glucose: 82 },
  { id: 20, glucose: 87 },
  { id: 21, glucose: 93 },
  { id: 22, glucose: 84 },
  { id: 23, glucose: 88 },
  { id: 24, glucose: 91 },
  { id: 25, glucose: 86 },
  { id: 26, glucose: 89 },
  { id: 27, glucose: 90 },
  { id: 28, glucose: 92 },
  { id: 29, glucose: 85 },
  { id: 30, glucose: 87 },
  { id: 31, glucose: 93 },
  { id: 32, glucose: 88 },
  { id: 33, glucose: 90 },
  { id: 34, glucose: 91 },
  { id: 35, glucose: 84 },
  { id: 36, glucose: 87 },
  { id: 37, glucose: 92 },
  { id: 38, glucose: 89 },
  { id: 39, glucose: 85 },
  { id: 40, glucose: 91 },
  { id: 41, glucose: 88 },
  { id: 42, glucose: 86 },
  { id: 43, glucose: 90 },
  { id: 44, glucose: 93 },
  { id: 45, glucose: 87 },
  { id: 46, glucose: 91 },
  { id: 47, glucose: 84 },
  { id: 48, glucose: 89 },
  { id: 49, glucose: 92 },
  { id: 50, glucose: 86 },
  { id: 51, glucose: 90 },
  { id: 52, glucose: 88 },
  { id: 53, glucose: 91 },
  { id: 54, glucose: 85 },
  { id: 55, glucose: 93 },
  { id: 56, glucose: 87 },
  { id: 57, glucose: 92 },
  { id: 58, glucose: 90 },
  { id: 59, glucose: 88 },
  { id: 60, glucose: 91 },
];

const chartConfig = {
  glucose: {
    label: "Glucose",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function AreaGlucose() {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-3">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Glucose</CardTitle>
          <CardDescription>Showing glucose levels</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillGlucose" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.glucose.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="100%"
                  stopColor={chartConfig.glucose.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="id"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => `${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => `${value} value`}
                  indicator="line"
                />
              }
            />
            <Area
              dataKey="glucose"
              type="natural"
              fill="url(#fillGlucose)"
              stroke={chartConfig.glucose.color}
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
