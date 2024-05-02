import { HTMLAttributes } from '../../../node_modules/react';

interface ICommandProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
    className?: string;
    children?: React.ReactNode;
}
export declare const Command: React.FC<ICommandProps>;
export { CommandOption } from './CommandOption';
export { CommandList } from './CommandList';
export { CommandInput } from './CommandInput';
export { Lifecycle } from './Lifecycle';
