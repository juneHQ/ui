import { TooltipProps } from "recharts";
import { ChartTooltipValue } from "./Value";
import { ChartTooltipTitle } from "./Title";
import { ChartTooltipFooter } from "./Footer";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

type TypeFromArray<T> = T extends Array<infer K> ? K : never;

type PayloadEntry = TypeFromArray<any[]>;
type LabelWithFormatter = string | ((payload: PayloadEntry) => string);

interface DefaultTooltipProps extends TooltipProps<any, any> {
  label: LabelWithFormatter;
  valueFormatter: (entry: PayloadEntry, payload: Payload<any, any>) => string;
  footerFormatter?: (entry: PayloadEntry) => string;
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

function getLabelText(
  label: LabelWithFormatter,
  payload: PayloadEntry,
): string {
  if (typeof label === "string") return label;
  return label(payload);
}
