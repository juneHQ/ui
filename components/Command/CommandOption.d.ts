import { HTMLAttributes } from '../../../node_modules/react';

interface ICommandOptionProps extends HTMLAttributes<HTMLLIElement> {
    value: string | (() => void);
    disabled?: boolean;
    activeClassName?: string;
    children: React.ReactNode;
    rightIcon?: React.ReactNode;
    testId?: string;
}
export declare const CommandOption: React.FC<ICommandOptionProps>;
export {};
