import { AreaProps } from "./index.tsx";

export const defaultAreaProps: Omit<AreaProps, "ref"> = {
  type: "monotone",
  stroke: "#6868F7",
  strokeWidth: 1.5,
  fill: "#A4A4FA",
  activeDot: { r: 5 },
  dataKey: "y",
};
