import { AreaProps } from "./index.tsx";

export const defaultAreaProps: Omit<AreaProps, "ref"> = {
  type: "monotone",
  stroke: "inherit",
  strokeWidth: 1.5,
  fill: "inherit",
  activeDot: { r: 5 },
  dataKey: "y",
  className: "fill-purple-300 stroke-purple-500",
};
