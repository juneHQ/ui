import { TooltipProps as RechartsTooltipProps } from "recharts";
import { ChartTooltipValue } from "./Value";
import { ChartTooltipTitle } from "./Title";
import { ChartTooltipFooter } from "./Footer";
import { Payload as RechartsTooltipPayload } from "recharts/types/component/DefaultTooltipContent";
import { ChartTooltipContent } from "./Content.tsx";

export type TooltipFullPayload = RechartsTooltipPayload<any, any>;
type TooltipProps = RechartsTooltipProps<any, any>;
type Payload = TooltipFullPayload["payload"];

interface DefaultTooltipProps extends TooltipProps {
  label: string;
  valueFormatter: (payload: Payload) => string;
  footerFormatter?: (payload: Payload) => string;
  active?: boolean;
}

export const DefaultTooltip: React.FC<DefaultTooltipProps> = ({
  label,
  valueFormatter,
  footerFormatter,
  active,
  payload,
}) => {
  const firstPayload = payload?.[0];
  if (!active || !firstPayload) return null;

  return (
    <ChartTooltipContent>
      <ChartTooltipTitle>{label}</ChartTooltipTitle>
      {payload?.map((p, index) => (
        <div key={index}>
          <ChartTooltipValue>{valueFormatter(p.payload)}</ChartTooltipValue>
          {footerFormatter && (
            <ChartTooltipFooter subtitle={footerFormatter(p.payload)} />
          )}
        </div>
      ))}
    </ChartTooltipContent>
  );
};
