"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export const description = "A simple area chart";

const chartConfig = {
  desktop: {
    label: "Tasks",
    color: "orange",
  },
} satisfies ChartConfig;

interface AreaChartType {
  chartData: [
    {
      month: string;
      tasks: number;
    }
  ];
}

export const Areachart = ({ chartData }: AreaChartType) => {
  console.log("area", chartData);

  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Area Chart</CardTitle> */}
        <CardDescription>Showing total active task</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={0}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="tasks"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {chartData[0].month} - {chartData[chartData.length - 1].month}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
