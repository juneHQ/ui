import {
  BarChart as RechartsBarChart,
  ResponsiveContainer as RechartsResponsiveContainer,
} from "recharts";
import React from "react";
import { cx } from "../common/utils";
import { BaseChartProps } from "../common/BaseChartProps";

import type { CategoricalChartOptions } from "recharts/types/util/types";
export interface BarChartProps extends BaseChartProps {
  children?: React.ReactNode;
  data: any[];
  className?: string;
  showYAxis?: boolean;
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>((props, ref) => {
  const {
    children,
    data,
    className,
    ...otherProps
  } = props;
  const validOptionKeys = ["type", "layout", "stackOffset", "barCategoryGap", "barGap", "barSize", "maxBarSize", "reverseStackOrder", "syncId", "compact", "width", "height", "dataKey", "domain", "nameKey", "margin", "padding", "scale", "tick", "tickCount", "tickFormatter", "ticks", "unit", "xAxisId", "yAxisId", "zAxisId"];
  const categoricalProps = Object.keys(otherProps).reduce((acc: Partial<CategoricalChartOptions>, key) => {
    if (validOptionKeys.includes(key)) {
      acc[key as keyof CategoricalChartOptions] = otherProps[key as keyof typeof otherProps];
    }
    return acc;
  }, {});
  return (
    <div data-testid="bar-chart-wrapper" ref={ref} className={cx("w-full h-80", className)} {...otherProps}>
      <RechartsResponsiveContainer className='w-full h-full'>
        <RechartsBarChart 
          data={data}
          className="mt-7.5 mr-10 mb-2.5 ml-0"
          {...categoricalProps}
          >
          {children}
        </RechartsBarChart>
      </RechartsResponsiveContainer>
    </div>
  );
});