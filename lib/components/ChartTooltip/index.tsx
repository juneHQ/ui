
interface ChartTooltipProps {
  label: string;
  payload: any;
  active?: boolean;
  valueFormatter: (value: number) => string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ label, payload, active, valueFormatter }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 px-3 py-2 rounded-md">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm text-white">{valueFormatter(payload[0].value)}</p>
      </div>      
    );
  }
  return null;
}

