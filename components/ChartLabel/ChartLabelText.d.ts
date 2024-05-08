import { default as React } from '../../../node_modules/react';
import { ViewBox } from 'recharts/types/util/types';

export type ChartLabelTextProps = {
    children: React.ReactNode;
    dy?: number;
    dx?: number;
    viewBox?: ViewBox;
    className?: string;
};
export declare function ChartLabelText({ children, dy, dx, viewBox, className, }: ChartLabelTextProps): import("react/jsx-runtime").JSX.Element | null;
