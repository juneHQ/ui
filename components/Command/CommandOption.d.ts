import { HTMLAttributes } from '../../../node_modules/react';

interface ICommandOptionProps extends HTMLAttributes<HTMLDivElement> {
    value: string | (() => void);
    disabled?: boolean;
    activeClassName?: string;
    children: React.ReactNode;
    rightIcon?: React.ReactNode;
    testId?: string;
}
export declare const CommandOption: React.FC<ICommandOptionProps>;
export {};
