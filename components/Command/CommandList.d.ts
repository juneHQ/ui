import { HTMLAttributes } from '../../../node_modules/react';

interface ICommandListProps extends Omit<HTMLAttributes<HTMLUListElement>, "onCopy"> {
    className?: string;
    children?: React.ReactNode;
    "data-testid"?: string;
}
export declare const CommandList: React.FC<ICommandListProps>;
export {};
