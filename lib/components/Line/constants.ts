import { LineProps } from "recharts";

export const defaultLineProps: Omit<LineProps, "ref"> = {
  type: "monotone",
  stroke: "current",
  strokeWidth: 1.5,
  activeDot: { r: 5 },
  dataKey: "y",
  className: "stroke-purple-500",
};
