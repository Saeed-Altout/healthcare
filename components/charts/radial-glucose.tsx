"use client";

import { BarChart } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Session } from "@/app/(dashboard)/(routes)/(overview)/_components/client";
import { format } from "date-fns";

const chartConfig = {
  glucose: {
    label: "glucose",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export const RadialGlucose = ({ data }: { data: Session }) => {
  const chartData = [
    {
      browser: "safari",
      glucose: +data?.glucose || 0,
      fill: "var(--color-safari)",
    },
  ];

  return (
    <Card className="flex flex-col col-span-1">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart - Glucose</CardTitle>
        <CardDescription>
          {format(data?.createdAt, "dd - MMM - YYY")}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={+data.glucose || 0}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="glucose" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {Number(data.glucose).toFixed(2)}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          mg/dl
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Glucose <BarChart className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total glucose for the last session
        </div>
      </CardFooter>
    </Card>
  );
};
