import { Payload } from 'recharts/types/component/DefaultTooltipContent';

type ScatterChartTickProps = {
    x: number;
    y: number;
    payload: Payload<number, string>;
    unit?: string;
    dx?: number;
    dy?: number;
} & React.SVGProps<SVGTextElement>;
export declare const ScatterChartTick: React.FC<ScatterChartTickProps>;
export {};
