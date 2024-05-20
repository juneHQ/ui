import { TooltipProps as RechartsTooltipProps } from 'recharts';
import { Payload as RechartsTooltipPayload } from 'recharts/types/component/DefaultTooltipContent';

export type TooltipFullPayload = RechartsTooltipPayload<any, any>;
type TooltipProps = RechartsTooltipProps<any, any>;
type Payload = TooltipFullPayload["payload"];
interface DefaultTooltipProps extends TooltipProps {
    label: string;
    valueFormatter: (payload: Payload) => string;
    footerFormatter?: (payload: Payload) => string;
    active?: boolean;
}
export declare const DefaultTooltip: React.FC<DefaultTooltipProps>;
export {};
