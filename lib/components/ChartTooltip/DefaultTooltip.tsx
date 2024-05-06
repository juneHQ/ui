import { TooltipProps as RechartsTooltipProps } from "recharts";
import { ChartTooltipValue } from "./Value";
import { ChartTooltipTitle } from "./Title";
import { ChartTooltipFooter } from "./Footer";
import { Payload as RechartsTooltipPayload } from "recharts/types/component/DefaultTooltipContent";

export type TooltipFullPayload = RechartsTooltipPayload<any, any>;
type TooltipProps = RechartsTooltipProps<any, any>;
type Payload = TooltipFullPayload["payload"];

type LabelWithFormatter = string | ((payload: Payload) => string);

type DefaultTooltipProps = TooltipProps & {
  label: LabelWithFormatter;
  valueFormatter: (payload: Payload, fullPayload: TooltipFullPayload) => string;
  footerFormatter?: (payload: Payload) => string;
  active?: boolean;
};

export const DefaultTooltip: React.FC<DefaultTooltipProps> = ({
  label,
  valueFormatter,
  footerFormatter,
  active,
  payload,
}) => {
  const firstPayload = payload?.[0];
  if (!active || !firstPayload) return null;

  const labelText = getLabelText(label, firstPayload.payload);

  return (
    <div className="bg-gray-900 px-3 py-2 rounded-md">
      <ChartTooltipTitle>{labelText}</ChartTooltipTitle>
      {payload?.map((p, index) => (
        <div key={index}>
          <ChartTooltipValue value={valueFormatter(p.payload, p)} />
          {footerFormatter && (
            <ChartTooltipFooter subtitle={footerFormatter(p.payload)} />
          )}
        </div>
      ))}
    </div>
  );
};

function getLabelText(label: LabelWithFormatter, payload: Payload): string {
  if (typeof label === "string") return label;
  return label(payload);
}
