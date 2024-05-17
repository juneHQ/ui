import React from "react";
import {
  LineChart as RechartsLineChart,
  ResponsiveContainer as RechartsResponsiveContainer,
} from "recharts";

import { cx } from "../common/utils.ts";

export type LineChartProps = React.ComponentProps<typeof RechartsLineChart>;

export const LineChart: React.FC<LineChartProps> = ({
  children,
  className,
  ...rest
}) => (
  <div
    className={cx("h-80 w-full", className)}
    data-testid="line-chart-wrapper"
  >
    <RechartsResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        margin={{ top: 10, left: 0, right: 50, bottom: 10 }}
        {...rest}
      >
        {children}
      </RechartsLineChart>
    </RechartsResponsiveContainer>
  </div>
);
