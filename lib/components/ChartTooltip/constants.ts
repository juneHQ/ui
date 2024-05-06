import { TooltipProps } from "recharts";

const cursor = { fill: "#d1d5db", opacity: "0.15" };

export const defaultTooltipProps: TooltipProps<any, any> = {
  cursor,
  position: { y: 0 },
  isAnimationActive: false,
  wrapperStyle: { outline: "none" },
};

export const scatterChartTooltipProps: TooltipProps<any, any> = {
  cursor,
  isAnimationActive: false, // todo: verify, in app this is true by default
  wrapperStyle: { outline: "none" },
};
