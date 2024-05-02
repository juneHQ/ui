
import { Tooltip as RechartsTooltip } from "recharts";
import { ChartTooltipValue } from "./Value";
import { ChartTooltipTitle } from "./Title";
import { ChartTooltipFooter } from "./Footer";
import { DefaultTooltip } from "./DefaultTooltip";

export interface TooltipProps {
  label?: string;
  active?: boolean;
  payload?: any[];
  valueFormatter: (payload: any) => string;
  footerFormatter?: (payload: any) => string;
}

class ChartTooltip extends RechartsTooltip<any, any> {
  static defaultProps = {
    ...RechartsTooltip.defaultProps,
    cursor: { fill: "#d1d5db", opacity: "0.15" } as any,
    position: { y: 0 },
    isAnimationActive: false,
    wrapperStyle: { outline: "none" },
  };
}


export { ChartTooltip, ChartTooltipTitle, ChartTooltipValue, ChartTooltipFooter, DefaultTooltip };