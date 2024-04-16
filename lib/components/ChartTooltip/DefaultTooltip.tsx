import { TooltipProps } from 'recharts';
import { ChartTooltipValue } from './Value';
import { ChartTooltipTitle } from './Title';
import { ChartTooltipFooter } from './Footer';

type TypeFromArray<T> = T extends Array<infer K> ? K : never;

interface DefaultTooltipProps extends TooltipProps<any, any> {
  label: string;
  valueFormatter: (payload: TypeFromArray<any[]>) => string;
  footerFormatter?: (payload: TypeFromArray<any[]>) => string;
  active?: boolean;
}

export const DefaultTooltip: React.FC<DefaultTooltipProps> = ({ label, valueFormatter, footerFormatter, active, payload }) => {
  const firstPayload = payload?.[0];
  if (!active || !firstPayload) return null;

  return (
    <div className="bg-gray-900 px-3 py-2 rounded-md">
      <ChartTooltipTitle>{label}</ChartTooltipTitle>
      {payload
        ?.map((p, index) => (
          <div key={index}>
            <ChartTooltipValue value={valueFormatter(p.payload)}/>
            {footerFormatter && <ChartTooltipFooter subtitle={footerFormatter(p.payload)} />}
          </div>
        ))}
    </div>
  );
};