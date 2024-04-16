import { TooltipProps } from 'recharts';

type TypeFromArray<T> = T extends Array<infer K> ? K : never;
interface DefaultTooltipProps extends TooltipProps<any, any> {
    label: string;
    valueFormatter: (payload: TypeFromArray<any[]>) => string;
    footerFormatter?: (payload: TypeFromArray<any[]>) => string;
    active?: boolean;
}
export declare const DefaultTooltip: React.FC<DefaultTooltipProps>;
export {};
