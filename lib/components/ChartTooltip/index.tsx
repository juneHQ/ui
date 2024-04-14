
interface ChartTooltipProps {
  label: string;
  payload: any;
  active?: boolean;
  valueFormatter: (value: number) => string;
  tooltipSubtitleFormatter?: (payload: any) => string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ label, payload, active, valueFormatter, tooltipSubtitleFormatter }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 px-3 py-2 rounded-md">
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm text-white">{valueFormatter(payload[0].value)}</p>
        {tooltipSubtitleFormatter && <p className="text-xs text-gray-400 pt-2">{tooltipSubtitleFormatter(payload[0])}</p>}
      </div>      
    );
  }
  return null;
}

