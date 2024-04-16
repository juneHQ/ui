import { DefaultTooltip } from './DefaultTooltip';
import { ChartTooltipFooter } from './Footer';
import { ChartTooltipTitle } from './Title';
import { ChartTooltipValue } from './Value';
import { Tooltip as RechartsTooltip } from 'recharts';

export interface TooltipProps {
    label?: string;
    active?: boolean;
    payload?: any[];
    valueFormatter: (payload: any) => string;
    footerFormatter?: (payload: any) => string;
}
declare class ChartTooltip extends RechartsTooltip<any, any> {
    static defaultProps: {
        cursor: any;
        position: {
            y: number;
        };
        isAnimationActive: boolean;
        wrapperStyle: {
            outline: string;
        };
        accessibilityLayer: boolean;
        allowEscapeViewBox: {
            x: boolean;
            y: boolean;
        };
        animationDuration: number;
        animationEasing: string;
        contentStyle: {};
        coordinate: {
            x: number;
            y: number;
        };
        cursorStyle: {};
        filterNull: boolean;
        itemStyle: {};
        labelStyle: {};
        offset: number;
        reverseDirection: {
            x: boolean;
            y: boolean;
        };
        separator: string;
        trigger: string;
        useTranslate3d: boolean;
        viewBox: {
            x: number;
            y: number;
            height: number;
            width: number;
        };
    };
}
export { ChartTooltip, ChartTooltipTitle, ChartTooltipValue, ChartTooltipFooter, DefaultTooltip };
