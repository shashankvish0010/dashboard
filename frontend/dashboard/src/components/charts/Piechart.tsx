"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export const description = "A donut chart with text";
const chartConfig = {
  pendingTasks: {
    label: "Pending Tasks",
  },
  litigation: {
    label: "Litigation",
    color: "hsl(var(--chart-1))",
  },
  corporate: {
    label: "Corporate",
    color: "hsl(var(--chart-2))",
  },
  familyLaw: {
    label: "Family Law",
    color: "hsl(var(--chart-3))",
  },
  criminal: {
    label: "Criminal",
    color: "hsl(var(--chart-4))",
  },
  realEstate: {
    label: "Real Estate",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

// const chartConfig = {
//   tasks: {
//     label: "tasks",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;
interface PieType {
  title: string;
  primary: string;
  chartData: [
    {
      month: string;
      tasks: number;
    }
  ];
}
export const Piechart: React.FC<PieType> = ({ title, primary, chartData }) => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.tasks, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="tasks"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
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
                          className={`${primary} text-3xl font-bold`}
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {title}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium">{title}</div>
        </CardFooter>
      </div>
    </div>
  );
};
