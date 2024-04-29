import React from "react";
import {
  AreaChart as RechartsAreaChart,
  ResponsiveContainer as RechartsResponsiveContainer,
} from "recharts";

import { cx } from "../common/utils.ts";

export type AreaChartProps = React.ComponentProps<typeof RechartsAreaChart>;

export function AreaChart({ children, className, ...rest }: AreaChartProps) {
  return (
    <div
      className={cx(className, "h-80 w-full")}
      data-testid="area-chart-wrapper"
    >
      <RechartsResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart
          margin={{ top: 10, left: 10, right: 10, bottom: 10 }}
          {...rest}
        >
          {children}
        </RechartsAreaChart>
      </RechartsResponsiveContainer>
    </div>
  );
}
