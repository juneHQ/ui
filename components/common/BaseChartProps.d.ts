import { CustomTooltipProps } from './CustomTooltipProps';

interface BaseAnimationTimingProps {
    animationDuration?: number;
    showAnimation?: boolean;
}
type FixedProps = {
    eventType: "dot" | "category" | "bar";
    categoryClicked: string;
};
type BaseEventProps = FixedProps & {
    [key: string]: number | string;
};
export type EventProps = BaseEventProps | null | undefined;
export type ValueFormatter = {
    (value: number): string;
};
export type IntervalType = "preserveStartEnd" | "equidistantPreserveStart";
export interface BaseChartProps extends BaseAnimationTimingProps, React.HTMLAttributes<HTMLDivElement> {
    data: any[];
    categories: string[];
    index: string;
    colors?: string[];
    valueFormatter?: ValueFormatter;
    startEndOnly?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    yAxisWidth?: number;
    intervalType?: IntervalType;
    showTooltip?: boolean;
    showLegend?: boolean;
    showGridLines?: boolean;
    autoMinValue?: boolean;
    minValue?: number;
    maxValue?: number;
    allowDecimals?: boolean;
    noDataText?: string;
    noDataSubText?: string;
    onValueChange?: (value: EventProps) => void;
    enableLegendSlider?: boolean;
    customTooltip?: React.ComponentType<CustomTooltipProps>;
    rotateLabelX?: {
        angle: number;
        verticalShift?: number;
        xAxisHeight?: number;
    };
    tickGap?: number;
}
export {};
