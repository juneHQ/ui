import { BaseChartProps } from '../common/BaseChartProps';
import { default as React } from '../../../node_modules/react';

export interface BarChartProps extends BaseChartProps {
    stack?: boolean;
    relative?: boolean;
    barCategoryGap?: string | number;
}
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
