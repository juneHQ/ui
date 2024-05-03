import {
  AreaChart as RechartsAreaChart,
  ResponsiveContainer as RechartsResponsiveContainer,
} from "recharts";
import React from "react";
import { cx } from "../common/utils.ts";

export type AreaChartProps = React.ComponentProps<typeof RechartsAreaChart>;

export const AreaChart: React.FC<AreaChartProps> = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={cx("h-80 w-full", className)}
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
