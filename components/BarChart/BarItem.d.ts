import { Bar as RechartsBar, BarProps } from 'recharts';

export declare class BarItem extends RechartsBar {
    static defaultProps: {
        type: string;
        className: string;
        shape: (props: any) => import("react/jsx-runtime").JSX.Element;
        fill: string;
        isAnimationActive: boolean;
        onAnimationEnd: () => void;
        xAxisId: number;
        yAxisId: number;
        legendType: string;
        minPointSize: number;
        hide: boolean;
        data: import('recharts/types/cartesian/Bar').BarRectangleItem[];
        layout: string;
        activeBar: boolean;
        animationBegin: number;
        animationDuration: number;
        animationEasing: string;
    };
}
export type BarItemProps = BarProps;
