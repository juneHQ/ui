import { XAxisProps } from "recharts";

export const PERCENTAGE_TICKS = [0, 25, 50, 75, 100];

export const defaultXAxisProps: XAxisProps = {
  interval: "preserveStartEnd",
  className: "text-xs fill-gray-600",
  minTickGap: 5,
  fill: "",
  stroke: "",
};

export const scatterXAxisProps: XAxisProps = {
  axisLine: { className: "stroke-gray-300" },
  tickLine: false,
  type: "number",
  ticks: PERCENTAGE_TICKS,
};
