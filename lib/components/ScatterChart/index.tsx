import {
  ScatterChart as RechartsScatterChart,
  ResponsiveContainer as RechartsResponsiveContainer,
} from "recharts";

import { cx } from "../common/utils";
import React from "react";

type ScatterChartProps = React.ComponentProps<typeof RechartsScatterChart>;

export type { ScatterChartProps };

export const ScatterChart: React.FC<ScatterChartProps> = ({
  className,
  children,
  ...rest
}) => (
  <div
    data-testid="scatter-chart-wrapper"
    className={cx(className, "w-full h-80")}
  >
    <RechartsResponsiveContainer className="w-full h-full">
      <RechartsScatterChart {...rest}>{children}</RechartsScatterChart>
    </RechartsResponsiveContainer>
  </div>
);
