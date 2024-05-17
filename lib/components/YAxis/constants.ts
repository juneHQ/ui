import { type YAxisProps } from "recharts";
import { PERCENTAGE_TICKS } from "../XAxis/constants.ts";

export const defaultYAxisProps: YAxisProps = {
  axisLine: false,
  tickLine: false,
  className: "text-xs fill-gray-600",
  fill: "",
  stroke: "",
};

export const scatterYAxisProps: YAxisProps = {
  axisLine: false,
  tickLine: false,
  type: "number",
  ticks: PERCENTAGE_TICKS,
};
