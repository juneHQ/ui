import { default as React } from '../../../node_modules/react';
import { BaseChartProps } from '../common/BaseChartProps';

export interface BarChartProps extends BaseChartProps {
    children?: React.ReactNode;
    data: any[];
    className?: string;
    showYAxis?: boolean;
}
export declare const BarChart: React.ForwardRefExoticComponent<BarChartProps & React.RefAttributes<HTMLDivElement>>;
