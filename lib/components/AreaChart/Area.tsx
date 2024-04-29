import React from "react";
import { Area as RechartsArea } from "recharts";

export type AreaProps = React.ComponentProps<typeof RechartsArea>;

export class Area extends RechartsArea {
  static defaultProps = {
    ...RechartsArea.defaultProps,
    type: "monotone",
    stroke: "#6868F7",
    strokeWidth: 1.5,
    fill: "#A4A4FA",
    activeDot: { r: 5 } as unknown as boolean, // fool recharts default prop type
    dataKey: "y",
  };
}
