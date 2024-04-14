/// <reference types="react" />
interface ChartTooltipProps {
    label: string;
    payload: any;
    active?: boolean;
    valueFormatter: (value: number) => string;
    tooltipSubtitleFormatter?: (payload: any) => string;
}
export declare const ChartTooltip: React.FC<ChartTooltipProps>;
export {};
